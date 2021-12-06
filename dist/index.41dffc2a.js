const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=["January","February","March","April","May","June","July","August","September","October","November","December"];function r(t){return`0${t}`.slice(-2)}function n(a,i){const s=a.getDay(),o=a.getDate(),c=a.getMonth(),u=a.getFullYear(),m=a.getHours(),d=a.getMinutes(),l=a.getSeconds();return i.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g,(function(i){let h;switch(i[1]){case"%":return"%";case"a":return t[s].slice(0,3);case"A":return t[s];case"b":return e[c].slice(0,3);case"B":return e[c];case"c":return a.toString();case"d":return r(o);case"e":return String(o);case"H":return r(m);case"I":return r(n(a,"%l"));case"l":return String(0===m||12===m?12:(m+12)%12);case"m":return r(c+1);case"M":return r(d);case"p":return m>11?"PM":"AM";case"P":return m>11?"pm":"am";case"S":return r(l);case"w":return String(s);case"y":return r(u%100);case"Y":return String(u);case"Z":return h=a.toString().match(/\((\w+)\)$/),h?h[1]:"";case"z":return h=a.toString().match(/\w([+-]\d\d\d\d) /),h?h[1]:""}return""}))}function a(t){let e;return function(){if(e)return e;if("Intl"in window)try{return e=new Intl.DateTimeFormat(void 0,t),e}catch(t){if(!(t instanceof RangeError))throw t}}}let i=null;const s=a({day:"numeric",month:"short"});a({day:"numeric",month:"short",year:"numeric"});const o=new WeakMap;class c extends HTMLElement{static get observedAttributes(){return["datetime","day","format","lang","hour","minute","month","second","title","weekday","year","time-zone-name"]}connectedCallback(){const t=this.getFormattedTitle();t&&!this.hasAttribute("title")&&this.setAttribute("title",t);const e=this.getFormattedDate();e&&(this.textContent=e)}attributeChangedCallback(t,e,r){const n=this.getFormattedTitle();if("datetime"===t){const t=Date.parse(r);isNaN(t)?o.delete(this):o.set(this,new Date(t))}const a=this.getFormattedTitle(),i=this.getAttribute("title");"title"===t||!a||i&&i!==n||this.setAttribute("title",a);const s=this.getFormattedDate();s&&(this.textContent=s)}get date(){return o.get(this)}getFormattedTitle(){const t=this.date;if(!t)return;const e=u();if(e)return e.format(t);try{return t.toLocaleString()}catch(e){if(e instanceof RangeError)return t.toString();throw e}}getFormattedDate(){}}const u=a({day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"}),m=new WeakMap;class d extends c{attributeChangedCallback(t,e,r){"hour"!==t&&"minute"!==t&&"second"!==t&&"time-zone-name"!==t||m.delete(this),super.attributeChangedCallback(t,e,r)}getFormattedDate(){const t=this.date;if(!t)return;const e=function(t,e){const r={weekday:{short:"%a",long:"%A"},day:{numeric:"%e","2-digit":"%d"},month:{short:"%b",long:"%B"},year:{numeric:"%Y","2-digit":"%y"}};let a=function(){if(null!==i)return i;const t=s();if(t){const e=t.format(new Date(0));return i=!!e.match(/^\d/),i}return!1}()?"weekday day month year":"weekday month day, year";for(const e in r){const n=r[e][t.getAttribute(e)||""];a=a.replace(e,n||"")}return a=a.replace(/(\s,)|(,\s$)/,""),n(e,a).replace(/\s+/," ").trim()}(this,t)||"",r=function(t,e){const r={},i=t.getAttribute("hour");"numeric"!==i&&"2-digit"!==i||(r.hour=i);const s=t.getAttribute("minute");"numeric"!==s&&"2-digit"!==s||(r.minute=s);const o=t.getAttribute("second");"numeric"!==o&&"2-digit"!==o||(r.second=o);const c=t.getAttribute("time-zone-name");"short"!==c&&"long"!==c||(r.timeZoneName=c);if(0===Object.keys(r).length)return;let u=m.get(t);u||(u=a(r),m.set(t,u));const d=u();if(d)return d.format(e);return n(e,r.second?"%H:%M:%S":"%H:%M")}(this,t)||"";return`${e} ${r}`.trim()}}window.customElements.get("local-time")||(window.LocalTimeElement=d,window.customElements.define("local-time",d));