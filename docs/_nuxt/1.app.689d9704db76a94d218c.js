webpackJsonp([1],{115:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo container"},[o("h1",[t._v("Hello world!")]),o("p",[t._v("Loaded from the "+t._s(t.name)+"-side")]),o("h2",[t._v("Called each time")]),o("ul",t._l(t.computedItems,function(e){return o("li",{class:{checked:e.completed},on:{click:function(o){t.toggleCheckFromComponent(e.id)}}},[t._v(t._s(e.title))])})),o("h2",[t._v("Saved in store")]),o("ul",t._l(t.todos,function(e){return o("li",{class:{checked:e.completed},on:{click:function(o){t.toggleCheckFromStore(e)}}},[t._v(t._s(e.title))])})),o("nuxt-link",{staticClass:"button",attrs:{to:"/"}},[t._v("Home")])],1)},staticRenderFns:[]}},123:function(t,e,o){var n=o(97);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(12)("0a70bfbc",n,!0)},81:function(t,e,o){o(123);var n=o(3)(o(93),o(115),"data-v-5de60b5f",null);t.exports=n.exports},93:function(t,e,o){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,o){function n(r,c){try{var s=e[r](c),i=s.value}catch(t){return void o(t)}if(!s.done)return Promise.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});t(i)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var c=o(13),s=o.n(c),i=o(25);o(5);e.default={asyncData:function(t){var e=this,o=t.req;return r(s.a.mark(function t(){var n,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://jsonplaceholder.typicode.com/todos");case 2:return n=t.sent,r=n.data,t.abrupt("return",{items:r.slice(0,10),name:o?"server":"client"});case 5:case"end":return t.stop()}},t,e)}))()},fetch:function(t){var e=this,o=t.store;return r(s.a.mark(function t(){var n,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==o.state.todos.todos.length){t.next=6;break}return t.next=3,i.a.get("https://jsonplaceholder.typicode.com/todos");case 3:n=t.sent,r=n.data,o.commit("todos/setTodos",r);case 6:case"end":return t.stop()}},t,e)}))()},data:function(){return{items:[]}},head:function(){return{title:"Todos ("+this.name+"-side)"}},computed:{computedItems:function(){return this.items},todos:function(){return[].concat(n(this.$store.state.todos.todos)).slice(0,10)}},methods:{toggleCheckFromStore:function(t){this.$store.commit("todos/checkTodo",t)},toggleCheckFromComponent:function(t){this.items[t-1].completed=!this.items[t-1].completed}}}},97:function(t,e,o){e=t.exports=o(11)(void 0),e.push([t.i,"li[data-v-5de60b5f]{cursor:pointer}.checked[data-v-5de60b5f]{text-decoration:line-through}",""])}});