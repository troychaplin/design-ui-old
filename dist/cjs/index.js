"use strict";var a=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var b=(t,e)=>{for(var l in e)a(t,l,{get:e[l],enumerable:!0})},c=(t,e,l,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of d(e))!v.call(t,r)&&r!==l&&a(t,r,{get:()=>e[r],enumerable:!(i=p(e,r))||i.enumerable});return t};var u=t=>c(a({},"__esModule",{value:!0}),t);var f={};b(f,{Button:()=>n,Header:()=>g});module.exports=u(f);var s=require("react/jsx-runtime"),n=({primary:t=!1,size:e="medium",backgroundColor:l,label:i,...r})=>{let m=t?"storybook-button--primary":"storybook-button--secondary";return(0,s.jsx)("button",{type:"button",className:["storybook-button",`storybook-button--${e}`,m].join(" "),style:{backgroundColor:l},...r,children:i})};var o=require("react/jsx-runtime"),g=({user:t,onLogin:e,onLogout:l,onCreateAccount:i})=>(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"wrapper",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,o.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,o.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,o.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,o.jsx)("h1",{children:"Acme"})]}),(0,o.jsx)("div",{children:t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,o.jsx)("b",{children:t.name}),"!"]}),(0,o.jsx)(n,{size:"small",onClick:l,label:"Log out"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{size:"small",onClick:e,label:"Log in"}),(0,o.jsx)(n,{primary:!0,size:"small",onClick:i,label:"Sign up"})]})})]})});
//# sourceMappingURL=index.js.map