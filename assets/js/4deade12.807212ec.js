"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[4608],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7416:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={},c="Marketplace for Tokens",l={unversionedId:"Products/Miso/Marketplace for Tokens",id:"Products/Miso/Marketplace for Tokens",title:"Marketplace for Tokens",description:"Markets at their core are a way to distribute goods to the public and most importantly find the value people are willing to exchange for them. MISO markets focus on aiding tokens in their price discovery before release for open exchange on SushiSwap. MISO takes the pain out of the decisions and planning surrounding any auction for your token.",source:"@site/docs/Products/Miso/Marketplace for Tokens.md",sourceDirName:"Products/Miso",slug:"/Products/Miso/Marketplace for Tokens",permalink:"/docs/Products/Miso/Marketplace for Tokens",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Products/Miso/Marketplace for Tokens.md",tags:[],version:"current",lastUpdatedBy:"HHK",lastUpdatedAt:1655224693,formattedLastUpdatedAt:"6/14/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Recipes",permalink:"/docs/Products/Miso/Recipes"},next:{title:"Permission Lists",permalink:"/docs/Products/Miso/Permission Lists"}},u={},p=[{value:"Market Sale Options",id:"market-sale-options",level:2},{value:"Crowdsale",id:"crowdsale",level:3},{value:"Dutch Auction",id:"dutch-auction",level:3},{value:"Batch Auction",id:"batch-auction",level:3},{value:"Future Market Options",id:"future-market-options",level:2},{value:"Hyperbolic Auction",id:"hyperbolic-auction",level:3},{value:"Dutch Bonus Auction",id:"dutch-bonus-auction",level:3}],d={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"marketplace-for-tokens"},"Marketplace for Tokens"),(0,a.kt)("p",null,"Markets at their core are a way to distribute goods to the public and most importantly find the value people are willing to exchange for them. MISO markets focus on aiding tokens in their price discovery before release for open exchange on SushiSwap. MISO takes the pain out of the decisions and planning surrounding any auction for your token."),(0,a.kt)("p",null,"We have included two main types initially and will continue to add new types and iterations over these. Markets are at the core of what MISO offers - the rich broth that all the other ingredients are filled with, so we want to get them right. The first three are Crowdsales, Dutch Auctions and Batch Auctions. All three offer their own potential advantages and disadvantages, allowing our markets to meet the needs of a wide range of offerings while ensuring token offerings are valued respectably for the SushiSwap ecosystem."),(0,a.kt)("h2",{id:"market-sale-options"},"Market Sale Options"),(0,a.kt)("h3",{id:"crowdsale"},"Crowdsale"),(0,a.kt)("p",null,"A fixed price and a fixed set of tokens, then it's first in best dressed. Crowdsales are great when the token price is already known or has been decided on previously. They allow a token to be distributed and provide a strong base for a tokens future listing on the SushiSwap exchange. MISO crowdsales allow any project to create an auction and go on to be exchanged in the open Sushi market."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Strategy:")," Basically it is a FCFS (first come first serve) system, where an investor wants to buy as quick as possible before others scoop up all the tokens available. This also involves some risks, such as instigating a gas war or bot frontrunning."),(0,a.kt)("h3",{id:"dutch-auction"},"Dutch Auction"),(0,a.kt)("p",null,"Dutch Auctions are a centuries old system of auction, aimed at finding the true market value of a completely novel item. In the case of MISO token auctions, the price is set at a higher value per token than expected and descends over time, with the eventual price being settled on once ",(0,a.kt)("em",{parentName:"p"},"all")," tokens have been sold. Practically, this means participants individually decide at which point they're happy with a token price and commit their funds - yet the auction continues until ",(0,a.kt)("em",{parentName:"p"},"everyone")," is happy with the token price. This can be an active decision by a project, as often it leads to a lower total amount raised (and thus less liquidity and funding), however everyone buying will be getting the cheapest possible token - not a bad position to be in when MISO automatically provides liquidity to SushiSwap and price speculation begins!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Strategy:")," Investors have to carefully balance between waiting for a better price and getting in before it is all sold out. It is the the fear of missing out that prevents the price to fall too much."),(0,a.kt)("h3",{id:"batch-auction"},"Batch Auction"),(0,a.kt)("p",null,"A market method whereby a set amount of tokens are divided amongst all the contributors to the market event, weighted according to their contribution to the pool. Whatever your percentage of the total raise, that is the portion of the total tokens on offer you will receive. That's it! Batch Auctions will be useful for projects looking to ensure that everyone taking part is rewarded, no matter their net worth."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Strategy:"),' This auction style is best suited for big or so called "whale" investors, because as opposed to the previous two, there is no way to outplay someone here. Everybody gets in, and the more you invest, the more you get.'),(0,a.kt)("h2",{id:"future-market-options"},"Future Market Options"),(0,a.kt)("h3",{id:"hyperbolic-auction"},"Hyperbolic Auction"),(0,a.kt)("p",null,"Similar to a Dutch Auction, but set along a hyperbolic curve rather than a straight line. This method allows a more direct progression towards a target price, while still allowing price discovery in the areas above that price. Hyperbolic Auctions effectively start at infinity, then rapidly drop - slowing as the auction approaches zero or the auction minimum."),(0,a.kt)("h3",{id:"dutch-bonus-auction"},"Dutch Bonus Auction"),(0,a.kt)("p",null,"Dutch Bonus Auctions follow the path of a traditional Dutch Auction, with a bonus of tokens able to be set aside for early contributors. This can be used to ensure early or avid supporters get a reward for committing early to a sale, before bigger participants begin their larger Price Discovery setting transactions."))}h.isMDXComponent=!0}}]);