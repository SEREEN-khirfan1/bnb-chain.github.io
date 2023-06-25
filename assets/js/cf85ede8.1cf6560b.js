"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||r;return t?o.createElement(h,i(i({ref:n},p),{},{components:t})):o.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},14002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(83117),a=(t(67294),t(3905));const r={},i="Install Binaries",l={unversionedId:"beaconchain/develop/node/install",id:"beaconchain/develop/node/install",title:"Install Binaries",description:"This guide will explain how to install the binaries: bnbchaind  and bnbcli, onto your server. With these installed on a server, you can participate in the mainnet or testnet as a Full Node. Full Nodes of Beacon Chain  also help the network by accepting transactions from other nodes and then relaying them to the core BNB Chain network.",source:"@site/docs/beaconchain/develop/node/install.md",sourceDirName:"beaconchain/develop/node",slug:"/beaconchain/develop/node/install",permalink:"/docs/beaconchain/develop/node/install",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/node/install.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"RPC",permalink:"/docs/beaconchain/develop/rpc"},next:{title:"Join Mainnet",permalink:"/docs/beaconchain/develop/node/join-mainnet"}},s={},c=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Option One: Download the pre-build binaries",id:"option-one-download-the-pre-build-binaries",level:3},{value:"Option Two: Build binaries on your machine",id:"option-two-build-binaries-on-your-machine",level:3},{value:"Next",id:"next",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-binaries"},"Install Binaries"),(0,a.kt)("p",null,"This guide will explain how to install the binaries: ",(0,a.kt)("inlineCode",{parentName:"p"},"bnbchaind"),"  and ",(0,a.kt)("inlineCode",{parentName:"p"},"bnbcli"),", onto your server. With these installed on a server, you can participate in the mainnet or testnet as a Full Node. Full Nodes of Beacon Chain  also help the network by accepting transactions from other nodes and then relaying them to the core BNB Chain network."),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("p",null,"We support running a full node on ",(0,a.kt)("inlineCode",{parentName:"p"},"Mac OS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Windows")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Linux"),"."),(0,a.kt)("p",null,"Please go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node/releases"},"changelog")," to get the information about the latest release of full node version."),(0,a.kt)("h3",{id:"option-one-download-the-pre-build-binaries"},"Option One: Download the pre-build binaries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download from the\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/node/releases/latest"},"release page"),"\xa0or follow below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/node/releases/latest |grep browser_ |grep linux_binary |cut -d\\" -f4)\nunzip linux_binary.zip\n\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/node/releases/latest |grep browser_ |grep macos_binary |cut -d\\" -f4)\nunzip macos_binary.zip\n\n# Windows\nwget   $(curl -s https://api.github.com/repos/bnb-chain/node/releases/latest |grep browser_ |grep windows_binary |cut -d\\" -f4)\nunzip windows_binary.zip\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Copy the executables (i.e.bnbchaind or bnbcli) to /usr/local/bin"),(0,a.kt)("li",{parentName:"ol"},"Verify that everything is OK:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ bnbchaind version\n$ bnbcli version\n")),(0,a.kt)("h3",{id:"option-two-build-binaries-on-your-machine"},"Option Two: Build binaries on your machine"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Execute below commands.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/bnb-chain/node.git\ncd node && make build\n")),(0,a.kt)("p",null,"Then you will get binaries in ./build/ folder."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Copy the executables (i.e.bnbchaind or bnbcli) to /usr/local/bin"),(0,a.kt)("li",{parentName:"ol"},"Verify that everything is OK:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ bnbchaind version\n$ bnbcli version\n")),(0,a.kt)("h2",{id:"next"},"Next"),(0,a.kt)("p",null,"Now you can join the ",(0,a.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/node/join-mainnet"},"mainnet"),", the public testnet or create you own testnet"))}d.isMDXComponent=!0}}]);