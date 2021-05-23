import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


//importamos los componenetes
import nuevoProducto from './components/NuevoProducto.vue'
import login from './components/Login.vue';
import edit from './components/Edit.vue'
import Usuario from './components/Usuario.vue'
import editarCategoria from './components/EditarCategoria.vue';

Vue.config.productionTip = false

// 1- usamos esta libreria como tal
Vue.use(VueRouter);

// 2 - creamos un array de rutas

const routes = [
  { path: '/', component: login },
  { path: '/nuevoProducto', component: nuevoProducto },
  { path: '/editar', component: edit },
  { path: '/usuario', component: Usuario },
  { path: '/editarCategoria', component: editarCategoria }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
