(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Toast.stories.tsx":"./src/stories/Toast.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/assets/info.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/info.62329302.svg"},"./src/assets/search.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/search.a82fe60c.svg"},"./src/assets/success.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/success.41ba70d8.svg"},"./src/assets/warning.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/warning.3bc0e1a6.svg"},"./src/stories/Toast.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToastShape",(function(){return Toast_stories_ToastShape}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var ToastWrapper=styled_components_browser_esm.a.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  \n animation: ","\n      0.7s;\n\n      @keyframes from-right {\n    from {\n      transform: translateX(100%);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n\n  @keyframes from-top {\n    from {\n      transform: translateY(-100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes from-bottom {\n    from {\n      transform: translateY(100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes from-left {\n    from {\n      transform: translateX(-100%);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n"])),(function(props){return props.animation?props.animation:"from-right"})),ToastMain=styled_components_browser_esm.a.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    background: #fff;\n    transition: 0.3s ease;\n    position: relative;\n    pointer-events: auto;\n    margin: 0 0 6px;\n    padding: 30px;\n    margin-bottom: 15px;\n     height: 50px;\n    width: 365px;\n    border-radius: 3px 3px 3px 3px;\n    box-shadow: 4px 4px 8px #00000029;\n    border-radius: 24px;\n    color: #fff;\n    opacity: 1;\n    \n"]))),Button=styled_components_browser_esm.a.button(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    position: relative;\n    left: 265px;\n    bottom: 70px;\n    font-weight: 700;\n    color: ",";\n    border: none;\n    text-shadow: 0 1px 0 #fff;\n    opacity: 0.8;\n    line-height: 1;\n    font-size: 20px;\n    padding: 0;\n    cursor: pointer;\n    background: 0 0;\n"])),(function(props){return props.textColor?props.textColor:"#fff"})),ImgBox=styled_components_browser_esm.a.div(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    float: left;\n    margin: -7px 15px 0;\n"]))),Container=styled_components_browser_esm.a.div(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n    background-color: ","\n    box-sizing: border-box;\n    position: fixed;\n    z-index: 100;\n\n    &.top-right {\n    top: 20px;\n    right: 20px;\n    transition: transform 0.6s ease-in-out;\n    animation: ","\n      0.7s;\n    \n  }\n\n  &.bottom-right {\n    bottom: 20px;\n    right: 20px;\n    transition: transform 0.6s ease-in-out;\n    animation: ","\n      0.7s;\n  }\n\n  &.top-left {\n    top: 20px;\n    left: 20px;\n    transition: transform 0.6s ease-in;\n    animation: ","\n      0.7s;\n  }\n\n  &.bottom-left {\n    bottom: 20px;\n    left: 20px;\n    transition: transform 0.6s ease-in;\n    animation: ","\n      0.7s;\n  }\n"])),(function(props){return props.bgColor}),(function(props){return props.animation?props.animation:"from-right"}),(function(props){return props.animation?props.animation:"from-right"}),(function(props){return props.animation?props.animation:"from-left"}),(function(props){return props.animation?props.animation:"from-left"})),TextWrapper=styled_components_browser_esm.a.div(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    width: 300px;\n"]))),Title=styled_components_browser_esm.a.p(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n    display: block;\n    font-family: Helvetica;\n    font-size: 32px;\n    text-align: left;\n    margin-top: 0;\n    margin-bottom: 6px;\n    height: 35px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n"]))),Description=styled_components_browser_esm.a.p(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n    font-family: Helvetica;\n    font-size: 16px;\n    text-align: left;\n    height: 18px;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: ",";\n"])),(function(props){return props.textColor})),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var ErrorBoundary_ErrorBoundary=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ErrorBoundary,_Component);var _super=_createSuper(ErrorBoundary);function ErrorBoundary(){var _this;_classCallCheck(this,ErrorBoundary);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).state={isError:!1},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ErrorBoundary,[{key:"render",value:function render(){return this.state.isError?Object(jsx_runtime.jsx)("h1",{children:"Sorry.. there was an error"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(error){return{isError:!0}}}]),ErrorBoundary}(react.Component),components_ErrorBoundary=ErrorBoundary_ErrorBoundary;function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Toast_Toast=function Toast(_ref){var props=_extends({},_ref),toastList=props.toastList,position=props.position,title=props.title,description=props.description,autoDelete=props.autoDelete,deleteDelay=props.deleteDelay,textColor=props.textColor,animation=props.animation,bgColor=props.bgColor,_useState2=_slicedToArray(Object(react.useState)([toastList]),2),list=_useState2[0],setList=_useState2[1];Object(react.useLayoutEffect)((function(){setList(_toConsumableArray(toastList))}),[toastList]),Object(react.useEffect)((function(){var interval=setInterval((function(){autoDelete&&toastList.length&&list.length&&handleDeleteToast(toastList[0].id)}),deleteDelay);return function(){clearInterval(interval)}}),[toastList,autoDelete,deleteDelay,list]);var handleDeleteToast=function handleDeleteToast(id){var listItemIndex=list.findIndex((function(e){return console.log(e),e.id===id})),toastItem=toastList.findIndex((function(e){return e.id===id}));list.splice(listItemIndex,1),toastList.splice(toastItem,1),setList(_toConsumableArray(list))};return Object(jsx_runtime.jsx)(components_ErrorBoundary,{children:Object(jsx_runtime.jsx)(ToastWrapper,{animation:animation,bgColor:bgColor,children:Object(jsx_runtime.jsx)(Container,{className:position,children:list.map((function(toast){return Object(jsx_runtime.jsxs)(ToastMain,{style:{backgroundColor:""===bgColor?toast.bgColor:bgColor},onDrag:function onDrag(){return handleDeleteToast(toast.id)},draggable:!0,children:[Object(jsx_runtime.jsx)(ImgBox,{style:{color:""===textColor?toast.textColor:textColor},children:Object(jsx_runtime.jsx)("img",{src:toast.icon})}),Object(jsx_runtime.jsxs)(TextWrapper,{children:[Object(jsx_runtime.jsx)(Title,{children:""!==title?title:toast.title}),Object(jsx_runtime.jsx)(Description,{style:{color:""===textColor?toast.textColor:textColor},children:""!==description?description:toast.description}),Object(jsx_runtime.jsx)(Button,{onClick:function onClick(){return handleDeleteToast(toast.id)},style:{color:""===textColor?toast.textColor:textColor},children:"X"})]})]},toast.id+"1")}))})})})};Toast_Toast.displayName="Toast";var components_Toast=Toast_Toast,react_dom=__webpack_require__("./node_modules/react-dom/index.js"),react_dom_default=__webpack_require__.n(react_dom),uuid=(__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),function uuid(){var dt=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(c){var r=(dt+16*Math.random())%16|0;return dt=Math.floor(dt/16),("x"===c?r:3&r|8).toString(16)}))});function useToastPortal_slicedToArray(arr,i){return function useToastPortal_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useToastPortal_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useToastPortal_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useToastPortal_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useToastPortal_arrayLikeToArray(o,minLen)}(arr,i)||function useToastPortal_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useToastPortal_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var components_ToastPortal_ToastPortal=function ToastPortal(_ref){var children=_ref.children,_useToastPortal=function useToastPortal(){var _useState2=useToastPortal_slicedToArray(Object(react.useState)(!1),2),loaded=_useState2[0],setLoaded=_useState2[1],portalId=useToastPortal_slicedToArray(Object(react.useState)("toast-portal-"+uuid()),1)[0];return Object(react.useEffect)((function(){var div=document.createElement("div");return div.id=portalId,document.getElementsByTagName("body")[0].prepend(div),setLoaded(!0),function(){document.getElementsByTagName("body")[0].removeChild(div)}}),[portalId]),{loaded:loaded,portalId:portalId}}(),loaded=_useToastPortal.loaded,portalId=_useToastPortal.portalId;return loaded?react_dom_default.a.createPortal(children,document.getElementById(portalId)):Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{})},ToastContainer_ToastContainer=function ToastContainer(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)(components_ToastPortal_ToastPortal,{children:children})};ToastContainer_ToastContainer.displayName="ToastContainer";var COLORS_purple="#9A40D3",COLORS_yellow="#F4E048",COLORS_red="#E25837",COLORS_green="#37E29A",COLORS_black="#000000",COLORS_white="#FFFFFF",TOAST_TYPES_success="success",TOAST_TYPES_error="error",TOAST_TYPES_info="info",TOAST_TYPES_warning="warning",TOAST_TEXT_info="Info",TOAST_TEXT_success="Success",TOAST_TEXT_error="Error",TOAST_TEXT_warning="Warning",success=__webpack_require__("./src/assets/success.svg"),success_default=__webpack_require__.n(success),search=__webpack_require__("./src/assets/search.svg"),search_default=__webpack_require__.n(search),warning=__webpack_require__("./src/assets/warning.svg"),warning_default=__webpack_require__.n(warning),info=__webpack_require__("./src/assets/info.svg"),info_default=__webpack_require__.n(info);function ToastService_toConsumableArray(arr){return function ToastService_arrayWithoutHoles(arr){if(Array.isArray(arr))return ToastService_arrayLikeToArray(arr)}(arr)||function ToastService_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function ToastService_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ToastService_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastService_arrayLikeToArray(o,minLen)}(arr)||function ToastService_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ToastService_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ToastService_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var ToastService_toastList=[],ToastService_ToastClass=function(){function ToastClass(toastList){if(function ToastService_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ToastClass),this.toastList=void 0,ToastClass.singleton)throw new Error("Something went wrong ...");ToastClass.singleton=this,this.toastList=toastList}return function ToastService_createClass(Constructor,protoProps,staticProps){return protoProps&&ToastService_defineProperties(Constructor.prototype,protoProps),staticProps&&ToastService_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ToastClass,[{key:"getId",value:function getId(){return"toast-"+uuid()}},{key:"getTitle",value:function getTitle(properties){switch(properties.type){case TOAST_TYPES_success:return TOAST_TEXT_success;case TOAST_TYPES_error:return TOAST_TEXT_error;case TOAST_TYPES_info:return TOAST_TEXT_info;case TOAST_TYPES_warning:return TOAST_TEXT_warning;default:return TOAST_TYPES_info}}},{key:"getTextColor",value:function getTextColor(properties){switch(properties.type){case TOAST_TYPES_success:case TOAST_TYPES_error:case TOAST_TYPES_info:return COLORS_white;case TOAST_TYPES_warning:return COLORS_black;default:return COLORS_white}}},{key:"getBackgroundColor",value:function getBackgroundColor(properties){switch(properties.type){case TOAST_TYPES_success:return COLORS_green;case TOAST_TYPES_error:return COLORS_red;case TOAST_TYPES_info:return COLORS_purple;case TOAST_TYPES_warning:return COLORS_yellow;default:return COLORS_green}}},{key:"getIcon",value:function getIcon(properties){switch(properties.type){case TOAST_TYPES_success:return success_default.a;case TOAST_TYPES_error:return search_default.a;case TOAST_TYPES_info:return info_default.a;case TOAST_TYPES_warning:return warning_default.a;default:return info_default.a}}},{key:"getProperty",value:function getProperty(description,properties){return Object.assign({},properties,{id:this.getId(),description:description,title:this.getTitle(properties),textColor:this.getTextColor(properties),bgColor:this.getBackgroundColor(properties),icon:this.getIcon(properties)})}},{key:"getToast",value:function getToast(description,properties){return ToastService_toastList.length<3&&(ToastService_toastList=[].concat(ToastService_toConsumableArray(ToastService_toastList),[this.getProperty(description,properties)])),Object(jsx_runtime.jsx)(ToastContainer_ToastContainer,{children:Object(jsx_runtime.jsx)(components_Toast,{toastList:ToastService_toastList,position:properties.position,autoDelete:properties.autoDelete,deleteDelay:properties.delay,animation:properties.animation,title:properties.title,type:"info",description:description,delay:1e3,bgColor:properties.bgColor,textColor:properties.textColor})})}}]),ToastClass}();ToastService_ToastClass.singleton=void 0;var toastToShow=new ToastService_ToastClass(ToastService_toastList),Toast_stories_ToastShape=(__webpack_exports__.default={title:"Toast-library",component:components_Toast,argTypes:{type:{control:{type:"inline-radio",options:["info","warning","success","error"]}},autoDelete:{control:{type:"boolean"}},position:{control:{type:"inline-radio",options:["top-left","top-right","bottom-left","bottom-right"]}},backgroundColor:{control:"color"},textColor:{control:"color"},animation:{control:{type:"inline-radio",options:["from-top","from-bottom","from-right","from-left"]}},title:{control:{type:"text"}},description:{control:{type:"text"}}}},function ToastShape(args){return toastToShow.getToast(args.description,{type:args.type,position:args.position,title:args.title,autoDelete:args.autoDelete,delay:args.deleteDelay,animation:args.animation,bgColor:args.backgroundColor,textColor:args.textColor})});Toast_stories_ToastShape.args={type:"info",title:"",position:"top-left",autoDelete:!1,deleteDelay:2e3,animation:"",description:"toast description",backgroundColor:"",textColor:""},Toast_stories_ToastShape.parameters=Object.assign({storySource:{source:"(args: ToastShapeProps) =>\n  toastToShow.getToast(args.description, {\n    type: args.type,\n    position: args.position,\n    title: args.title,\n    autoDelete: args.autoDelete,\n    delay: args.deleteDelay,\n    animation: args.animation,\n    bgColor: args.backgroundColor,\n    textColor: args.textColor\n  })"}},Toast_stories_ToastShape.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);