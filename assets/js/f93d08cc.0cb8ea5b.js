"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6337:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"user_proxy_agent",title:"autogen.agent.user_proxy_agent"},o=void 0,l={unversionedId:"reference/autogen/agent/user_proxy_agent",id:"reference/autogen/agent/user_proxy_agent",isDocsHomePage:!1,title:"autogen.agent.user_proxy_agent",description:"UserProxyAgent Objects",source:"@site/docs/reference/autogen/agent/user_proxy_agent.md",sourceDirName:"reference/autogen/agent",slug:"/reference/autogen/agent/user_proxy_agent",permalink:"/FLAML/docs/reference/autogen/agent/user_proxy_agent",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/autogen/agent/user_proxy_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"user_proxy_agent",title:"autogen.agent.user_proxy_agent"},sidebar:"referenceSideBar",previous:{title:"math_user_proxy_agent",permalink:"/FLAML/docs/reference/autogen/agent/math_user_proxy_agent"},next:{title:"completion",permalink:"/FLAML/docs/reference/autogen/oai/completion"}},s=[{value:"UserProxyAgent Objects",id:"userproxyagent-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"use_docker",id:"use_docker",children:[],level:4},{value:"execute_code",id:"execute_code",children:[],level:4},{value:"auto_reply",id:"auto_reply",children:[],level:4},{value:"receive",id:"receive",children:[],level:4},{value:"generate_init_prompt",id:"generate_init_prompt",children:[],level:4},{value:"initiate_chat",id:"initiate_chat",children:[],level:4},{value:"register_function",id:"register_function",children:[],level:4}],level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"userproxyagent-objects"},"UserProxyAgent Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class UserProxyAgent(Agent)\n")),(0,a.kt)("p",null,"(Experimental) A proxy agent for the user, that can execute code and provide feedback to the other agents."),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name: str, system_message: Optional[str] = "", work_dir: Optional[str] = None, human_input_mode: Optional[str] = "ALWAYS", function_map: Optional[Dict[str, Callable]] = {}, max_consecutive_auto_reply: Optional[int] = None, is_termination_msg: Optional[Callable[[Dict], bool]] = None, use_docker: Optional[Union[List[str], str, bool]] = True, timeout: Optional[int] = 600, **config, ,)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ",(0,a.kt)("em",{parentName:"li"},"str")," - name of the agent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"system_message")," ",(0,a.kt)("em",{parentName:"li"},"str")," - system message for the agent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"work_dir")," ",(0,a.kt)("em",{parentName:"li"},"Optional, str"),' - The working directory for the code execution.\nIf None, a default working directory will be used.\nThe default working directory is the "extensions" directory under\n"path_to_flaml/autogen".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"human_input_mode")," ",(0,a.kt)("em",{parentName:"li"},"str"),' - whether to ask for human inputs every time a message is received.\nPossible values are "ALWAYS", "TERMINATE", "NEVER".\n(1) When "ALWAYS", the agent prompts for human input every time a message is received.\nUnder this mode, the conversation stops when the human input is "exit",\nor when is_termination_msg is True and there is no human input.\n(2) When "TERMINATE", the agent only prompts for human input only when a termination message is received or\nthe number of auto reply reaches the max_consecutive_auto_reply.\n(3) When "NEVER", the agent will never prompt for human input. Under this mode, the conversation stops\nwhen the number of auto reply reaches the max_consecutive_auto_reply or when is_termination_msg is True.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"function_map")," ",(0,a.kt)("em",{parentName:"li"},"dict","[str, callable]")," - Mapping function names (passed to openai) to callable functions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_consecutive_auto_reply")," ",(0,a.kt)("em",{parentName:"li"},"int"),' - the maximum number of consecutive auto replies.\ndefault to None (no limit provided, class attribute MAX_CONSECUTIVE_AUTO_REPLY will be used as the limit in this case).\nThe limit only plays a role when human_input_mode is not "ALWAYS".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_termination_msg")," ",(0,a.kt)("em",{parentName:"li"},"function"),' - a function that takes a message in the form of a dictionary and returns a boolean value indicating if this received message is a termination message.\nThe dict can contain the following keys: "content", "role", "name", "function_call".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"use_docker")," ",(0,a.kt)("em",{parentName:"li"},"Optional, list, str or bool")," - The docker image to use for code execution.\nIf a list or a str of image name(s) is provided, the code will be executed in a docker container\nwith the first image successfully pulled.\nIf None, False or empty, the code will be executed in the current environment.\nDefault is True, which will be converted into a list.\nIf the code is executed in the current environment,\nthe code must be trusted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," ",(0,a.kt)("em",{parentName:"li"},"Optional, int")," - The maximum execution time in seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"**config")," ",(0,a.kt)("em",{parentName:"li"},"dict")," - other configurations.")),(0,a.kt)("h4",{id:"use_docker"},"use","_","docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef use_docker() -> Union[bool, str]\n")),(0,a.kt)("p",null,"bool value of whether to use docker to execute the code,\nor str value of the docker image name to use."),(0,a.kt)("h4",{id:"execute_code"},"execute","_","code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def execute_code(code_blocks)\n")),(0,a.kt)("p",null,"Execute the code and return the result."),(0,a.kt)("h4",{id:"auto_reply"},"auto","_","reply"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def auto_reply(message: dict, sender, default_reply="")\n')),(0,a.kt)("p",null,"Generate an auto reply."),(0,a.kt)("h4",{id:"receive"},"receive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def receive(message: Union[Dict, str], sender)\n")),(0,a.kt)("p",null,"Receive a message from the sender agent.\nOnce a message is received, this function sends a reply to the sender or simply stop.\nThe reply can be generated automatically or entered manually by a human."),(0,a.kt)("h4",{id:"generate_init_prompt"},"generate","_","init","_","prompt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def generate_init_prompt(*args, **kwargs) -> Union[str, Dict]\n")),(0,a.kt)("p",null,"Generate the initial prompt for the agent."),(0,a.kt)("p",null,"Override this function to customize the initial prompt based on user's request."),(0,a.kt)("h4",{id:"initiate_chat"},"initiate","_","chat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def initiate_chat(recipient, *args, **kwargs)\n")),(0,a.kt)("p",null,"Initiate a chat with the receiver agent."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"generate_init_prompt")," is called to generate the initial prompt for the agent."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"receiver")," - the receiver agent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*args")," - any additional arguments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"**kwargs")," - any additional keyword arguments.")),(0,a.kt)("h4",{id:"register_function"},"register","_","function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def register_function(function_map: Dict[str, Callable])\n")),(0,a.kt)("p",null,"Register functions to the agent."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"function_map")," - a dictionary mapping function names to functions.")))}c.isMDXComponent=!0}}]);