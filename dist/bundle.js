(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b():'function'==typeof define&&define.amd?define(b):a.SvelteGreeter=b()})(this,function(){'use strict';function a(){}function b(a){for(var b,c,d=1,e=arguments.length;d<e;d++)for(b in c=arguments[d],c)a[b]=c[b];return a}function c(a,b){b.appendChild(a)}function d(a,b,c){b.insertBefore(a,c)}function e(a){a.parentNode.removeChild(a)}function f(a){return document.createElement(a)}function g(a){return document.createTextNode(a)}function h(a,b,c){a.addEventListener(b,c,!1)}function i(a,b,c){a.removeEventListener(b,c,!1)}function j(b){this.destroy=a,this.fire('destroy'),this.set=this.get=a,!1!==b&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=this._state=null}function k(c,d){return c!==d||c&&'object'==typeof c||'function'==typeof c}function l(a,b,c,d,e){for(var f in b)if(c[f]){var g=d[f],h=e[f],j=b[f];if(j)for(var k,l=0;l<j.length;l+=1)k=j[l],k.__calling||(k.__calling=!0,k.call(a,g,h),k.__calling=!1)}}function m(a){for(;a&&a.length;)a.pop()()}function n(a,b){function j(){q=!0,b.set({name:m.value}),q=!1}function k(){b.onClick()}var l,m,n,o,p,q=!1;return{create:function(){l=f('div'),m=f('input'),n=g('\n\t'),o=f('button'),p=g('greet'),this.hydrate()},hydrate:function(){l.className='svelte-greeter',m.className='greeter-input',m.type='text',m.placeholder='Enter your name',m.name='name',h(m,'input',j),h(o,'click',k)},mount:function(e,f){d(l,e,f),b.refs.root=l,c(m,l),m.value=a.name,c(n,l),c(o,l),c(p,o)},update:function(a,b){q||(m.value=b.name)},unmount:function(){e(l)},destroy:function(){b.refs.root===l&&(b.refs.root=null),i(m,'input',j),i(o,'click',k)}}}var o=function(){return{data(){return{greeting:'',name:''}},methods:{onClick:function(){console.log('svelte-greeter:onClick: ',event),console.log('Publishing message event up the DOM tree!');const a=new CustomEvent('message',{detail:this.get('greeting')+' '+this.get('name')+'!',bubbles:!0,cancelable:!0,composed:!0});this.refs.root.dispatchEvent(a)}}}}();class p extends HTMLElement{constructor(a={}){super(),this.options=a,this.refs={},this._state=b(o.data(),a.data),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=a._root||this,this._yield=a._yield,this._bind=a._bind,this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=`<style>.svelte-greeter>*{font-family:Courier New, Courier, monospace;font-weight:bold;font-size:16px}.svelte-greeter input{margin:10px;color:rgba(0,0,0,.5)}.svelte-greeter button{border-style:none;background-color:#FFF3E0;color:rgba(0,0,0,.5);cursor:pointer;padding:0.3em}</style>`,this._fragment=n(this._state,this),this._fragment.create(),this._fragment.mount(this.shadowRoot,null),a.target&&this._mount(a.target,a.anchor||null)}static get observedAttributes(){return['greeting']}get greeting(){return this.get('greeting')}set greeting(a){this.set({greeting:a})}attributeChangedCallback(a,b,c){this.set({[a]:c})}}return customElements.define('svelte-greeter',p),b(p.prototype,o.methods,{destroy:j,get:function(a){return a?this._state[a]:this._state},fire:function(a,b){var c=a in this._handlers&&this._handlers[a].slice();if(c)for(var d=0;d<c.length;d+=1)c[d].call(this,b)},observe:function(a,b,c){var d=c&&c.defer?this._observers.post:this._observers.pre;return(d[a]||(d[a]=[])).push(b),c&&!1===c.init||(b.__calling=!0,b.call(this,this._state[a]),b.__calling=!1),{cancel:function(){var c=d[a].indexOf(b);~c&&d[a].splice(c,1)}}},on:function(a,b){if('teardown'===a)return this.on('destroy',b);var c=this._handlers[a]||(this._handlers[a]=[]);return c.push(b),{cancel:function(){var a=c.indexOf(b);~a&&c.splice(a,1)}}},set:function(a){this._set(b({},a)),this._root._lock||(this._root._lock=!0,m(this._root._beforecreate),m(this._root._oncreate),m(this._root._aftercreate),this._root._lock=!1)},teardown:j,_recompute:a,_set:function(a){var c=this._state,d={},e=!1;for(var f in a)k(a[f],c[f])&&(d[f]=e=!0);e&&(this._state=b({},c,a),this._recompute(d,this._state,c,!1),this._bind&&this._bind(d,this._state),l(this,this._observers.pre,d,this._state,c),this._fragment.update(d,this._state),l(this,this._observers.post,d,this._state,c))},_mount:function(a,b){this._fragment.mount(a,b)},_unmount:function(){this._fragment.unmount()}},{_mount(a,b){a.insertBefore(this,b)},_unmount(){this.parentNode.removeChild(this)}}),p});
//# sourceMappingURL=bundle.js.map
