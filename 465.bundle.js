"use strict";(self.webpackChunkevxn_github_io=self.webpackChunkevxn_github_io||[]).push([[465],{944:(n,e,t)=>{t.a(n,(async(n,r)=>{try{t.d(e,{Pd:()=>i.Pd});var o=t(994),i=t(547),c=n([o]);o=(c.then?(await c)():c)[0],(0,i.oT)(o),r()}catch(n){r(n)}}))},547:(n,e,t)=>{let r;function o(n){r=n}t.d(e,{$3:()=>D,Bj:()=>A,CN:()=>K,E$:()=>M,F:()=>L,H6:()=>Y,KM:()=>k,Nl:()=>H,Od:()=>O,Or:()=>G,PY:()=>Q,Pd:()=>v,Qz:()=>z,Sc:()=>x,TE:()=>q,Vb:()=>F,Wc:()=>C,Wl:()=>E,XP:()=>V,Zf:()=>N,a2:()=>p,c7:()=>R,cU:()=>j,eY:()=>U,ey:()=>$,fr:()=>W,gj:()=>I,h4:()=>S,iX:()=>P,m_:()=>Z,o$:()=>B,oH:()=>J,oT:()=>o,rU:()=>X,ug:()=>T}),n=t.hmd(n);const i=new Array(128).fill(void 0);function c(n){return i[n]}i.push(void 0,null,!0,!1);let _=i.length;function u(n){const e=c(n);return function(n){n<132||(i[n]=_,_=n)}(n),e}let d=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});d.decode();let f=null;function a(){return null!==f&&0!==f.byteLength||(f=new Uint8Array(r.memory.buffer)),f}function s(n,e){return n>>>=0,d.decode(a().subarray(n,n+e))}function l(n){_===i.length&&i.push(i.length+1);const e=_;return _=i[e],i[e]=n,e}let g=null;function w(){return null!==g&&0!==g.byteLength||(g=new Int32Array(r.memory.buffer)),g}let b=0,h=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const y="function"==typeof h.encodeInto?function(n,e){return h.encodeInto(n,e)}:function(n,e){const t=h.encode(n);return e.set(t),{read:n.length,written:t.length}};function m(n,e){try{return n.apply(this,e)}catch(n){r.__wbindgen_exn_store(l(n))}}class v{static __wrap(n){n>>>=0;const e=Object.create(v.prototype);return e.__wbg_ptr=n,e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,n}free(){const n=this.__destroy_into_raw();r.__wbg_universe_free(n)}static new(n,e){const t=r.universe_new(n,e);return v.__wrap(t)}randomize(){const n=this.__destroy_into_raw(),e=r.universe_randomize(n);return v.__wrap(e)}toggle_cell(n,e){r.universe_toggle_cell(this.__wbg_ptr,n,e)}tick(){r.universe_tick(this.__wbg_ptr)}render(){let n,e;try{const i=r.__wbindgen_add_to_stack_pointer(-16);r.universe_render(i,this.__wbg_ptr);var t=w()[i/4+0],o=w()[i/4+1];return n=t,e=o,s(t,o)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,e,1)}}width(){return r.universe_width(this.__wbg_ptr)>>>0}height(){return r.universe_height(this.__wbg_ptr)>>>0}cells(){return r.universe_cells(this.__wbg_ptr)}}function p(){return l(new Error)}function k(n,e){const t=function(n,e,t){if(void 0===t){const t=h.encode(n),r=e(t.length,1)>>>0;return a().subarray(r,r+t.length).set(t),b=t.length,r}let r=n.length,o=e(r,1)>>>0;const i=a();let c=0;for(;c<r;c++){const e=n.charCodeAt(c);if(e>127)break;i[o+c]=e}if(c!==r){0!==c&&(n=n.slice(c)),o=t(o,r,r=c+3*n.length,1)>>>0;const e=a().subarray(o+c,o+r);c+=y(n,e).written}return b=c,o}(c(e).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),o=b;w()[n/4+1]=o,w()[n/4+0]=t}function P(n,e){let t,o;try{t=n,o=e,console.error(s(n,e))}finally{r.__wbindgen_free(t,o,1)}}function T(n){u(n)}function x(n){return l(c(n).crypto)}function E(n){const e=c(n);return"object"==typeof e&&null!==e}function F(n){return l(c(n).process)}function j(n){return l(c(n).versions)}function A(n){return l(c(n).node)}function U(n){return"string"==typeof c(n)}function C(){return m((function(){return l(n.require)}),arguments)}function S(n,e){return l(s(n,e))}function I(n){return l(c(n).msCrypto)}function L(){return m((function(n,e){c(n).randomFillSync(u(e))}),arguments)}function q(){return m((function(n,e){c(n).getRandomValues(c(e))}),arguments)}function B(n){return"function"==typeof c(n)}function D(n,e){return l(new Function(s(n,e)))}function O(){return m((function(n,e){return l(c(n).call(c(e)))}),arguments)}function $(){return m((function(){return l(self.self)}),arguments)}function z(){return m((function(){return l(window.window)}),arguments)}function M(){return m((function(){return l(globalThis.globalThis)}),arguments)}function R(){return m((function(){return l(t.g.global)}),arguments)}function V(n){return void 0===c(n)}function H(){return m((function(n,e,t){return l(c(n).call(c(e),c(t)))}),arguments)}function N(n){return l(c(n).buffer)}function W(n,e,t){return l(new Uint8Array(c(n),e>>>0,t>>>0))}function X(n){return l(new Uint8Array(c(n)))}function Y(n,e,t){c(n).set(c(e),t>>>0)}function K(n){return l(new Uint8Array(n>>>0))}function Q(n,e,t){return l(c(n).subarray(e>>>0,t>>>0))}function Z(n){return l(c(n))}function G(n,e){throw new Error(s(n,e))}function J(){return l(r.memory)}},465:(n,e,t)=>{t.a(n,(async(n,r)=>{try{t.r(e);var o=t(994),i=t(944),c=(t(886),n([i,o]));[i,o]=c.then?(await c)():c;var _=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function c(n){try{u(r.next(n))}catch(n){i(n)}}function _(n){try{u(r.throw(n))}catch(n){i(n)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,_)}u((r=r.apply(n,e||[])).next())}))};const u=1,d="#FF003C",f="#00FFBF",a=(n,e)=>{const t=1<<n%8;return(e[Math.floor(n/8)]&t)===t},s=(n,e,t)=>{const r=e.cells(),[o,i]=[e.width(),e.height()];let c=o*i/8;const _=new Uint8Array(t.buffer,r,c);n.beginPath(),n.fillStyle=f;for(let t=0;t<i;t++)for(let r=0;r<o;r++){const o=l(t,r,e);a(o,_)&&n.fillRect(r*u,t*u,u,u)}n.fillStyle=d;for(let t=0;t<i;t++)for(let r=0;r<o;r++){const o=l(t,r,e);a(o,_)||n.fillRect(r*u,t*u,u,u)}n.stroke()},l=(n,e,t)=>n*t.width()+e,g=(n,e,t)=>_(void 0,void 0,void 0,(function*(){e.tick(),s(n,e,t),yield new Promise((r=>{requestAnimationFrame((()=>_(void 0,void 0,void 0,(function*(){return setTimeout((()=>_(void 0,void 0,void 0,(function*(){yield g(n,e,t),r(void 0)}))),64)}))))}))})),w=()=>/iPad|iPhone|iPod/.test(navigator.platform);!function(){_(this,void 0,void 0,(function*(){const n=document.getElementById("toggle-dark-mode");n.load("./assets/icons8-sun.json"),n.addEventListener("ready",(()=>{const e="toggleDarkMode.direction";let t;try{t=parseInt(localStorage.getItem(e),10),[-1,1].includes(t)||(t=null)}catch(n){}let r=null!=t?t:n.direction;n.setDirection(r),-1===r?n.seek("100%"):(n.seek("0%"),window.document.body.classList.toggle("nature"),window.document.body.classList.toggle("tv")),n.addEventListener("click",(()=>{n.setDirection(r),n.play(),window.document.body.classList.toggle("nature"),window.document.body.classList.toggle("tv"),r=-r,localStorage.setItem(e,r.toString())}))}));const e=i.Pd.new(256,128).randomize(),t=e.width(),r=e.height();try{const n=e.cells(),i=new Uint8Array(o.memory.buffer,n,t*r/8);crypto.getRandomValues(i)}catch(n){}const c=document.getElementById("game-of-life-canvas");c.height=u*r,c.width=u*t;const d=c.getContext("2d");(()=>{if(w())return e.tick(),void s(d,e,o.memory);requestAnimationFrame((()=>_(this,void 0,void 0,(function*(){return yield g(d,e,o.memory)}))))})()}))}(),r()}catch(n){r(n)}}))},994:(n,e,t)=>{var r=t(547);n.exports=t.v(e,n.id,"91918b090d2499e7f8d3",{"./wasm_game_of_life_bg.js":{__wbg_new_abda76e883ba8a5f:r.a2,__wbg_stack_658279fe44541cf6:r.KM,__wbg_error_f851667af71bcfc6:r.iX,__wbindgen_object_drop_ref:r.ug,__wbg_crypto_c48a774b022d20ac:r.Sc,__wbindgen_is_object:r.Wl,__wbg_process_298734cf255a885d:r.Vb,__wbg_versions_e2e78e134e3e5d01:r.cU,__wbg_node_1cd7a5d853dbea79:r.Bj,__wbindgen_is_string:r.eY,__wbg_require_8f08ceecec0f4fee:r.Wc,__wbindgen_string_new:r.h4,__wbg_msCrypto_bcb970640f50a1e8:r.gj,__wbg_randomFillSync_dc1e9a60c158336d:r.F,__wbg_getRandomValues_37fa2ca9e4e07fab:r.TE,__wbindgen_is_function:r.o$,__wbg_newnoargs_581967eacc0e2604:r.$3,__wbg_call_cb65541d95d71282:r.Od,__wbg_self_1ff1d729e9aae938:r.ey,__wbg_window_5f4faef6c12b79ec:r.Qz,__wbg_globalThis_1d39714405582d3c:r.E$,__wbg_global_651f05c6a0944d1c:r.c7,__wbindgen_is_undefined:r.XP,__wbg_call_01734de55d61e11d:r.Nl,__wbg_buffer_085ec1f694018c4f:r.Zf,__wbg_newwithbyteoffsetandlength_6da8e527659b86aa:r.fr,__wbg_new_8125e318e6245eed:r.rU,__wbg_set_5cf90238115182c3:r.H6,__wbg_newwithlength_e5d69174d6984cd7:r.CN,__wbg_subarray_13db269f57aa838d:r.PY,__wbindgen_object_clone_ref:r.m_,__wbindgen_throw:r.Or,__wbindgen_memory:r.oH}})}}]);