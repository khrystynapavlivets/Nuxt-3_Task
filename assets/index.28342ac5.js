import{_ as T,I as n,J as s,K as c,L as a,M as _,q as u,v as t,m as x}from"./entry.2a9db31b.js";const f="https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data";fetch(f).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{const o=e.data.siteData.testTaskTemplate_30_15673;console.log(e),console.log(o.testTaskHeaderTitle),console.log(o.testTaskHeaderSubtitle),console.log(o.testTaskHeaderText)}).catch(e=>{console.error("Error fetching data:",e)});const k={},r=k,g={components:{TheNavigation:n,TheHeader:s,TheSection:c,TheAside:a,TheFooter:_,ApiData:r}};function v(e,o,w,H,$,A){const i=n,p=s,l=c,m=a,d=_,h=r;return x(),u("div",null,[t(i),t(p),t(l),t(m),t(d),t(h)])}const N=T(g,[["render",v]]);export{N as default};
