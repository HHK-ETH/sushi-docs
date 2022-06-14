"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[8284],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(t),h=i,y=p["".concat(d,".").concat(h)]||p[h]||c[h]||s;return t?r.createElement(y,a(a({ref:n},l),{},{components:t})):r.createElement(y,a({ref:n},l))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3968:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=t(7462),i=t(3366),s=(t(7294),t(3905)),a=["components"],o={},d="Queries",u={unversionedId:"Developers/Subgraphs/Exchange/Queries",id:"Developers/Subgraphs/Exchange/Queries",title:"Queries",description:"This page provides some sample query examples to help get you started with the SushiSwap Exchange subgraph.",source:"@site/docs/Developers/Subgraphs/Exchange/Queries.md",sourceDirName:"Developers/Subgraphs/Exchange",slug:"/Developers/Subgraphs/Exchange/Queries",permalink:"/docs/Developers/Subgraphs/Exchange/Queries",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Subgraphs/Exchange/Queries.md",tags:[],version:"current",lastUpdatedBy:"HHK",lastUpdatedAt:1655224693,formattedLastUpdatedAt:"6/14/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Entities",permalink:"/docs/Developers/Subgraphs/Exchange/Entities"},next:{title:"Entities",permalink:"/docs/Developers/Subgraphs/SushiBar/Entities"}},l={},c=[{value:"Factory",id:"factory",level:2},{value:"All Time Liquidity, Volume and Transactions",id:"all-time-liquidity-volume-and-transactions",level:3},{value:"Bundle",id:"bundle",level:2},{value:"Ethereum Price",id:"ethereum-price",level:3},{value:"Pair",id:"pair",level:2},{value:"Pair By ID",id:"pair-by-id",level:3},{value:"Pairs",id:"pairs",level:3},{value:"Pairs Ordered by Liquidity",id:"pairs-ordered-by-liquidity",level:3},{value:"Subset of Pairs",id:"subset-of-pairs",level:3},{value:"Pair Day Data",id:"pair-day-data",level:2},{value:"Token",id:"token",level:2},{value:"Token by ID",id:"token-by-id",level:3},{value:"Tokens",id:"tokens",level:3},{value:"Tokens Ordered by Volume",id:"tokens-ordered-by-volume",level:3},{value:"Subset of Tokens",id:"subset-of-tokens",level:3},{value:"Token Day Data",id:"token-day-data",level:2},{value:"User",id:"user",level:2},{value:"User by ID",id:"user-by-id",level:3},{value:"Users",id:"users",level:3},{value:"Subset of Users",id:"subset-of-users",level:3}],p={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"queries"},"Queries"),(0,s.kt)("p",null,"This page provides some sample query examples to help get you started with the SushiSwap Exchange subgraph."),(0,s.kt)("p",null,"You can test any of the queries, or write your own, on the ",(0,s.kt)("a",{parentName:"p",href:"https://thegraph.com/hosted-service/subgraph/sushiswap/exchange"},"SushiSwap Exchange subgraph"),"."),(0,s.kt)("h2",{id:"factory"},"Factory"),(0,s.kt)("h3",{id:"all-time-liquidity-volume-and-transactions"},"All Time Liquidity, Volume and Transactions"),(0,s.kt)("p",null,"This query gets a factory by its id (factory address), which in this case is the SushiSwap Factory contract address."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n factory(\n  id: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac"\n ) {\n  volumeUSD\n  liquidityUSD\n  txCount\n }\n}\n')),(0,s.kt)("h2",{id:"bundle"},"Bundle"),(0,s.kt)("h3",{id:"ethereum-price"},"Ethereum Price"),(0,s.kt)("p",null,'This query gets a bundle by its id, which in this case is simply "1".'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n bundle(\n  id: "1"\n ) {\n  ethPrice\n }\n}\n')),(0,s.kt)("h2",{id:"pair"},"Pair"),(0,s.kt)("h3",{id:"pair-by-id"},"Pair By ID"),(0,s.kt)("p",null,"This query gets a pair by its id (contract address), which in this case is the SUSHI/ETH pair contract address."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n pair(\n  id: "0x795065dcc9f64b5614c407a6efdc400da6221fb0"\n ) {\n  id\n  token0 {\n   id\n   symbol\n  }\n  token1 {\n   id\n   symbol\n  }\n }\n}\n')),(0,s.kt)("h3",{id:"pairs"},"Pairs"),(0,s.kt)("p",null,"This query lists the first 1,000 pairs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n pairs(\n  first: 1000\n ) {\n  id\n }\n}\n")),(0,s.kt)("h3",{id:"pairs-ordered-by-liquidity"},"Pairs Ordered by Liquidity"),(0,s.kt)("p",null,"This query lists the first 1,000 pairs, ordered by liquidity in descending order."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n pairs(\n  first: 1000,\n  orderBy: reserveUSD,\n  orderDirection: desc\n ) {\n  id\n }\n}\n")),(0,s.kt)("h3",{id:"subset-of-pairs"},"Subset of Pairs"),(0,s.kt)("p",null,"This query gets a subset of pairs where ID is in an array of ID's (pair contract addresses), which in this case is the addresses of the SUSHI/ETH and SUSHI/USDT pairs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n pairs(\n  where: {\n   id_in: [\n    "0x795065dcc9f64b5614c407a6efdc400da6221fb0",\n    "0x680a025da7b1be2c204d7745e809919bce074026"\n   ]\n  }\n ) {\n  id\n  token0 {\n   id\n   symbol\n  }\n  token1 {\n   id\n   symbol\n  }\n }\n}\n')),(0,s.kt)("h2",{id:"pair-day-data"},"Pair Day Data"),(0,s.kt)("p",null,"This query lists pair day data, where the pairAddress is the SUSHI/ETH pair contract address, ordered by date in ascending direction."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n pairDayDatas(\n  orderBy: date,\n  orderDirection: asc,\n  where: {\n   pairAddress: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",\n ) {\n  id\n  date\n  volumeUSD\n }\n}\n')),(0,s.kt)("h2",{id:"token"},"Token"),(0,s.kt)("h3",{id:"token-by-id"},"Token by ID"),(0,s.kt)("p",null,"This query gets a token by its ID (contract address), which in this case is the SUSHI token contract address."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n token(\n  id: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"\n ) {\n  name\n  symbol\n  decimals\n  derivedETH\n  volumeUSD\n  liquidity\n }\n}\n')),(0,s.kt)("h3",{id:"tokens"},"Tokens"),(0,s.kt)("p",null,"This query lists the first 1,000 tokens."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n tokens(\n  first: 1000\n ) {\n  id\n }\n}\n")),(0,s.kt)("h3",{id:"tokens-ordered-by-volume"},"Tokens Ordered by Volume"),(0,s.kt)("p",null,"This query lusts the first 1,000 tokens, order by volume in descending order."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n tokens(\n  first: 1000,\n  orderBy: tradeVolumeUSD,\n  orderDirection: desc\n ) {\n  id\n }\n}\n")),(0,s.kt)("h3",{id:"subset-of-tokens"},"Subset of Tokens"),(0,s.kt)("p",null,"This query gets a subset of tokens where ID is an array of IDs (token contract addresses), which in this case is the addresses of the Sushi and Ethereum tokens."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n tokens(\n  where: {\n   id_in: [\n    "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",\n    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"\n   ]\n  }\n ) {\n  id\n  symbol\n }\n}\n')),(0,s.kt)("h2",{id:"token-day-data"},"Token Day Data"),(0,s.kt)("p",null,"This query lists token day data, where the token is the SUSHI token cotract address, ordered by date in ascending direction."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n tokenDayDatas(\n  orderBy: date,\n  orderDirection: asc,\n  where: {\n   token: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"\n  }\n ) {\n  id\n  date\n  volumeToken\n  volumeETH\n  volumeUSD\n  txCount\n  liquidityToken\n  liquidityETH\n  liquidityUSD\n  priceUSD\n }\n}\n')),(0,s.kt)("h2",{id:"user"},"User"),(0,s.kt)("h3",{id:"user-by-id"},"User by ID"),(0,s.kt)("p",null,"This query gets a user by their ID (user address)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n user(\n  id: "..."\n ) {\n  id\n }\n}\n')),(0,s.kt)("h3",{id:"users"},"Users"),(0,s.kt)("p",null,"This query lists the first 1,000 users."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n users(\n  first: 1000\n ) {\n  id\n }\n}\n")),(0,s.kt)("h3",{id:"subset-of-users"},"Subset of Users"),(0,s.kt)("p",null,"This query gets a subset of users where ID is an array of IDs (user addresses)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n users(\n  where: { id_in: [ "one", "two", "three" ] }\n ) {\n  id\n }\n}\n')))}h.isMDXComponent=!0}}]);