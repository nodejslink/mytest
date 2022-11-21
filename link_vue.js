// // Vue 2.x
// const vm = new Vue({
//     data: {
//       message: 'Hello Vue!'
//     }
//   });

// Vue 3.0 with options-base style
// const vm = Vue.createApp({
//     data() {
//         return {
//             message: 'Hello Vue 3.0!'
//         }
//     }
// });

// // mount
// vm.mount('#app');

//   vm.$mount('#app');



// Vue 3.0 with Composition API Style
// const { createApp, ref } = Vue;

// const vm = createApp({
//   setup () {
//     const message = ref('Hello Vue 3.0!');
//     return {
//       message
//     }
//   }
// });

// // mount
// vm.mount('#app');

// ==============//
// const vm = Vue.createApp({
//     data() {
//         return {
//             name: '008js'
//         }
//     }
// });
// vm.mount('#app');

// document.addEventListener("DOMContentLoaded", () => {
//     // DOM Ready!
//     vm.mount('#app');
// });

// ==============//


// const dataObj = {
//   name: '008JS'
// };

// const vm1 = Vue.createApp({
//   data () {
//     return dataObj
//   },
// }).mount('#app1');;

// const vm2 = Vue.createApp({
//   data () {
//     return dataObj
//   },
// }).mount('#app2');
// document.addEventListener("DOMContentLoaded", () => {
//     // DOM Ready!
//     vm1.mount('#app1');
//     vm2.mount('#app2');
// });
// ====================test5
// const vm = Vue.createApp({
//     data() {
//         return {
//             price: 100,
//             quantity: 10
//         }
//     },
//     methods:{
//         subtotal:function(){
//             return this.price*this.quantity;
//         }
//     },
// }).mount('#app')
// ===========test6===========
const vm = Vue.createApp({
    data() {
        return {
            twd: 0.278,
            jpy: 1,
        }
    },

  
    methods: {
        twd2jpy() {
            this.jpy = Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
        },
        jpy2twd() {
            this.twd = Number.parseFloat(Number(this.jpy) * 0.278).toFixed(3);
         },
    }
}).mount('#app')