(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),d=r(a("j8BX")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(z,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,I=e.loading,R=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,D=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:O?1:0,transition:D?"opacity "+b+"ms":"none"},o),T="boolean"==typeof h?"lightgray":h,A={transitionDelay:b+"ms"},V=(0,d.default)({opacity:this.state.imgLoaded?0:1},D&&A,{},o,{},f),N={title:t,alt:this.state.isVisible?"":a,style:V,className:p,itemProp:v};if(g){var k=g,B=k[0];return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),T&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},D&&A)}),B.base64&&l.default.createElement(x,{src:B.base64,spreadProps:N,imageVariants:k,generateSources:E}),B.tracedSVG&&l.default.createElement(x,{src:B.tracedSVG,spreadProps:N,imageVariants:k,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(k),l.default.createElement(z,{alt:a,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:I},B,{imageVariants:k}))}}))}if(m){var W=m,j=W[0],q=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete q.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},T&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:T,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},D&&A)}),j.base64&&l.default.createElement(x,{src:j.base64,spreadProps:N,imageVariants:W,generateSources:E}),j.tracedSVG&&l.default.createElement(x,{src:j.tracedSVG,spreadProps:N,imageVariants:W,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(W),l.default.createElement(z,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:I},j,{imageVariants:W}))}}))}return null},t}(l.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var D=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:D,sizes:C,fixed:c.default.oneOfType([D,c.default.arrayOf(D)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=O;t.default=T},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},QeBL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("/MKj"),o=a("9Dj+"),d=a("ezAz"),l=a("9eSz"),c=a.n(l),u=function(){var e=d.data;return i.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},f=a("H8eV"),p={margin:"4vw",padding:"4vw",borderRadius:"5px",backgroundColor:"rebeccapurple",color:"white"},g=function(e){var t=e.todo;return i.a.createElement("div",{style:p},i.a.createElement("h1",null,t.title),i.a.createElement("p",null,t.description))},m={color:"black",margin:"4vw",padding:"1vw",borderRadius:"5px",backgroundColor:"papayawhip"},h=function(e){var t=e.todos;return i.a.createElement("div",{style:m},t&&t.map((function(e,t){return i.a.createElement(g,{todo:e,key:"key"+t})})))},b=(a("91GP"),a("kD0k")),y=a.n(b),S=(a("ls82"),a("Igtp")),v={margin:"1vw",padding:"1vw",borderRadius:"5px",backgroundColor:"white",color:"rebeccapurple",outline:"0",cursor:"pointer",border:"1px solid #a9a9a9 ",boxShadow:"0px 5px 10px rgba(0, 0, 0, 0.3)"},w={backgroundColor:"white",color:"rebeccapurple"},E={backgroundColor:"#DCDCDC",color:"rebeccapurple"},I=function(e){var t=e.currentlyLoggedIn,a=Object(s.useDispatch)();return i.a.createElement("button",{style:Object.assign({},v,{},t?E:w),onClick:function(e){t?a(Object(S.d)()):y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a(Object(S.b)());case 1:case"end":return e.stop()}}))}},t?"Logout":"Login")},R={margin:"4vw",padding:"4vw",borderRadius:"5px",backgroundColor:"rebeccapurple",color:"white"},L=function(e){var t=e.userId;return i.a.createElement("div",{id:"login-section",style:R},i.a.createElement("h2",{id:"userId-section"},"User Id: ",0!==t&&t),i.a.createElement(I,{currentlyLoggedIn:!!t}))},x={maxWidth:"300px",marginBottom:"1.45rem"},z={fontSize:"calc(5px + 3vw)",lineHeight:"calc(12px + 3vw)",margin:"2px"};t.default=Object(s.connect)((function(e){return{todos:e.todosReducer.todos,userId:e.loginReducer.userId}}))((function(e){var t=e.todos,a=void 0===t?[]:t,r=e.userId,s=void 0===r?0:r;return i.a.createElement(o.a,null,i.a.createElement(f.a,{title:"Home"}),i.a.createElement("div",{style:x},i.a.createElement(u,null)),i.a.createElement("div",{style:z},i.a.createElement("p",null,"Welcome to your new Gatsby site..."),i.a.createElement("p",null,"Now go build something great!")),i.a.createElement(L,{userId:s}),i.a.createElement(h,{todos:a}),i.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2"))}))},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/Gatsby-Starter-TypeScript-Redux-TDD-BDD/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/Gatsby-Starter-TypeScript-Redux-TDD-BDD/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/Gatsby-Starter-TypeScript-Redux-TDD-BDD/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/Gatsby-Starter-TypeScript-Redux-TDD-BDD/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/Gatsby-Starter-TypeScript-Redux-TDD-BDD/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/Gatsby-Starter-TypeScript-Redux-TDD-BDD/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/Gatsby-Starter-TypeScript-Redux-TDD-BDD/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1a2f8c921530f0fa910b.js.map