import{_ as T,F as n,G as s,H as c,I as a,J as _,k as u,m as t,j as k}from"./entry.19525ecd.js";const x="https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data";fetch(x).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{const o=e.data.siteData.testTaskTemplate_30_15673;console.log(e),console.log(o.testTaskHeaderTitle),console.log(o.testTaskHeaderSubtitle),console.log(o.testTaskHeaderText)}).catch(e=>{console.error("Error fetching data:",e)});const f={},r=f,g={components:{TheNavigation:n,TheHeader:s,TheSection:c,TheAside:a,TheFooter:_,ApiData:r}};function v(e,o,H,w,$,A){const i=n,p=s,l=c,m=a,d=_,h=r;return k(),u("div",null,[t(i),t(p),t(l),t(m),t(d),t(h)])}const N=T(g,[["render",v]]);export{N as default};