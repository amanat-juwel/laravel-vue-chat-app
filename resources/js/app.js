
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');



/**
 * Global Event Handler
 */
window.Event = new Vue();



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Define some routes and route components( without .default() will give an error )


  Vue.component('chat-messages', require('./components/chat/ChatMessages.vue').default);
  Vue.component('chat-form', require('./components/chat/ChatForm.vue').default);


//Create the router instance and pass the `routes` option
const router = new VueRouter({
   // mode: 'history',
    routes // short for `routes: routes`
  })
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// add router in app instance
const app = new Vue({
    router,
    data:{
        messages: []
    },
    created() {
      this.fetchMessages();

      Echo.private('chat')
          .listen('MessageSent', (e) => {
              this.messages.push({
                  message: e.message.message,
                  user: e.user
              });
          });
   },
    methods:{
        
        fetchMessages() {
          axios.get('./messages').then(response => {
              this.messages = response.data;
          });
        },
        addMessage(message) {
            this.messages.push(message);

            axios.post('./messages', message).then(response => {});
        }
    }
  }).$mount('#app')