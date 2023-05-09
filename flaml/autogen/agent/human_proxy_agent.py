from .agent import Agent
from flaml.autogen.code_utils import extract_code, execute_code


class HumanProxyAgent(Agent):
    """(Experimental) A proxy agent for human, that can execute code and provide feedback to the other agents."""

    DEFAULT_SYSTEM_MESSAGE = """You are human agent. You can execute_code or give feedback to the sender.
    """
    MAX_TURN_NUM = 100  # maximum number of turns in one conversation session (subject to future change)

    def __init__(
        self,
        name,
        system_message="",
        work_dir=None,
        human_input_mode="ALWAYS",
        max_turn_num=None,
        is_termination_msg=None,
        **config,
    ):
        """
        Args:
            name (str): name of the agent
            system_message (str): system message to be sent to the agent
            work_dir (str): working directory for the agent to execute code
            human_input_mode (bool): whether to ask for human inputs every time a message is received.
                Possible values are "ALWAYS", "TERMINATE", "NEVER".
                When "ALWAYS", the agent will ask for human input every time a message is received.
                When "TERMINATE", the agent will ask for human input only when a termination message is received.
                When "NEVER", the agent will never ask for human input.
            max_turn_num (int): the maximum number of turns in one conversation session.
                default: None (no limit provided, class attribute MAX_TURN_NUM will be used as the limit).
                The limit only plays a role when human_input_mode is not "ALWAYS".
            is_termination_msg (function): a function that takes a message and returns a boolean value.
                This function is used to determine if a received message is a termination message.
            config (dict): other configurations.

            The conversation stops when a termination message is received or the number of turns larger than
        the provided max_turn_num or the human input is "exit".
        """
        super().__init__(name, system_message)
        self._work_dir = work_dir
        self._human_input_mode = human_input_mode
        self._is_termination_msg = (
            is_termination_msg if is_termination_msg is not None else (lambda x: x == "TERMINATE")
        )
        self._config = config
        self._max_turn_num = max_turn_num if max_turn_num is not None else self.MAX_TURN_NUM
        self._conversation_turn_counter = {}

    def receive(self, message, sender):
        """Receive a message from the sender agent.
        Every time a message is received, the human agent will give feedback.
        The conversation stops when a termination message is received or the number of turns larger than
        the provided max_turn_num or the human input is "exit".
        """
        super().receive(message, sender)
        # to determine if the message is a termination message using a function
        terminate = self._is_termination_msg(message)
        feedback = (
            input("Please give feedback to the sender (press enter to skip, type exit to stop the conversation): ")
            if self._human_input_mode == "ALWAYS" or terminate and self._human_input_mode == "TERMINATE"
            else ""
        )
        if feedback and feedback != "exit":
            self._send(feedback, sender)
        elif (
            terminate
            or feedback == "exit"
            or (
                self._human_input_mode != "ALWAYS"
                and (len(self._conversations[sender.name]) + 1) / 2 >= self._max_turn_num
            )
        ):
            # note that len(self._conversations[sender.name])+1)/2 is the number of turns in the conversation
            return
        # try to execute the code
        code, lang = extract_code(message)
        if lang == "unknown":
            # no code block is found, lang should be "unknown"
            self._send(feedback, sender)
        else:
            if lang == "bash":
                assert code.startswith("python "), code
                file_name = code[len("python ") :]
                exitcode, logs = execute_code(filename=file_name, work_dir=self._work_dir)
            elif lang == "python":
                exitcode, logs = execute_code(code, work_dir=self._work_dir)
            else:
                # TODO: could this happen?
                exitcode = 1
                raise NotImplementedError
            exitcode2str = "execution succeeded" if exitcode == 0 else "execution failed"
            self._send(f"exitcode: {exitcode} ({exitcode2str})\nCode output: {logs.decode('utf-8')}", sender)
