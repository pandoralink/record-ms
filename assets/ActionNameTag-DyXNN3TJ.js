import{r as p,j as a}from"./index-BWFb_LIj.js";import{u as d}from"./index-C5Px5MMD.js";import{c as f}from"./context-dufOEGft.js";import"./with-default-props-BBr4ZePx.js";import{T as c}from"./tag-B-33zLSC.js";const M=({name:o,count:r,isFormatable:s=!0,onClick:n})=>{const{showMode:i}=d(),e=f(),m=p.useMemo(()=>{let t="";return!s||!i||!e?t=o:t=e[o]||o,r?t+=`: ${r}`:t},[r,s,e,o,i]);return a.jsx(c,{round:!0,color:"primary",style:{fontSize:18,fontWeight:"bold",minWidth:60,paddingTop:4,paddingBottom:4,textAlign:"center"},onClick:n,children:m})};export{M as A};