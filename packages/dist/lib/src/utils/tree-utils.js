"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function g(n){if(n.children&&n.children.length>0){let l=[];n.children.forEach(e=>{e={parent:null,...e},l.push(e),g(e)}),n.children=l}}function u(n){n.children&&n.children.length>0&&n.children.forEach(l=>{l.parent=n,u(l)})}function a(n,l,e,f){var r,t;let i=!1;if(e==="all"?(f&&(String(n.id)===String(l)||String(n.label)===String(l))||String(n.id).indexOf(l)>=0||String(n.label).indexOf(l)>=0)&&(i=!0):e==="id"?(f&&String(n.id)===String(l)||String(n.id).indexOf(l)>=0)&&(i=!0):e==="label"&&(f&&String(n.label)===String(l)||String(n.label).indexOf(l)>=0)&&(i=!0),i)return 0;if(n.children&&n.children.length>0)for(let h=0;h<n.children.length;h++){const c=a(n.children[h],l,e,f);h=h+c}return(!n.children||n.children.length<=0)&&!i?((t=(r=n.parent)==null?void 0:r.children)==null||t.splice(n.parent.children.indexOf(n),1),-1):0}const d={buildParentAndChildren:function(n,l){if(l){let e=[];for(let i=0;i<n.length;i++){const r={parent:null,children:[],...n[i]};e.push(r)}for(let i=0;i<e.length;i++){const r=e[i];String(r.id);const t=String(r.parentId);e.some(h=>{var c;if(String(h.id)===t)return h.children||(h.children=[]),(c=h.children)==null||c.push(r),r.parent=h,!0})}let f=[];for(let i=0;i<e.length;i++){const r=e[i];r.parent||f.push(r)}return f}else{let e=[];for(let f=0;f<n.length;f++){const i={parent:null,...n[f]};i.children&&i.children.length>0&&g(i),e.push(i)}for(let f=0;f<e.length;f++){const i=e[f];i.parent=null,i.children&&i.children.length>0&&u(i)}return e}},searchIdAndLabel:function(n,l,e,f=!1){let i=this.buildParentAndChildren(n,e);if(!l||l.length<=0)return i;for(let r=0;r<i.length;r++){const t=i[r];let h=!1;f?h=String(t.id)===(l??"")||String(t.label)===(l??""):h=String(t.id).indexOf(l??"")>=0||String(t.label).indexOf(l??"")>=0,h||(a(t,l,"all",f),(!t.children||t.children.length<=0)&&(i.splice(i.indexOf(t),1),r--))}return i},searchId:function(n,l,e,f=!1){let i=this.buildParentAndChildren(n,e);if(!l||l.length<=0)return i;for(let r=0;r<i.length;r++){const t=i[r];let h=!1;f?h=String(t.id)===(l??""):h=String(t.id).indexOf(l??"")>=0,h||(a(t,l,"id",f),(!t.children||t.children.length<=0)&&(i.splice(i.indexOf(t),1),r--))}return i},searchLabel:function(n,l,e,f=!1){let i=this.buildParentAndChildren(n,e);if(!l||l.length<=0)return i;for(let r=0;r<i.length;r++){const t=i[r];let h=!1;f?h=String(t.label)===(l??""):h=String(t.label).indexOf(l??"")>=0,h||(a(t,l,"label",f),(!t.children||t.children.length<=0)&&(i.splice(i.indexOf(t),1),r--))}return i}};exports.TreeUtils=d;