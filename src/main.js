import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import PageDashboard from './page/dashboard/PageDashboard.vue'
import PageCreateUser from './page/create-user/PageCreateUser.vue'
import PageList from './page/list/PageList.vue'
import PageProductOverview from './page/product-overview/PageProductOverview.vue'


const routes = [
    { path: '/', component: PageDashboard, meta: { title : "E-Commerce Dashboard"} },
    { path: '/profile', meta: { title: "User Management"}, children:[ { path: "create", component: PageCreateUser, meta: { title:"Create"}}] },
    { path: '/profile',  meta: { title: "User Management"}, children:[ { path: "list", component: PageList, meta: { title:"List"}}]},
    { path: '/ecommerce',  meta: { title: "E-Commerce"}, children:[ { path: "product-overview", component: PageProductOverview, meta: { title:"Product Overview"}}]},
    { path: '/ecommerce',  meta: { title: "E-Commerce"}, children:[ { path: "new-product", meta: { title:"New Product"}}]},
    { path: '/ecommerce',  meta: { title: "E-Commerce"}, children:[ { path: "product-list", meta: { title:"Product List"}}]},
    { path: '/ecommerce',  meta: { title: "E-Commerce"}, children:[ { path: "checkout-form", meta: { title:"Checkout Form"}}]},
    { path: '/ecommerce',  meta: { title: "E-Commerce"}, children:[ { path: "shopping-cart", meta: { title:"Shopping Cart"}}]},
    { path: '/ecommerce',  meta: { title: "E-Commerce"}, children:[ { path: "order-history", meta: { title:"Order History"}}]},
    { path: '/ecommerce',  meta: { title: "E-Commerce"}, children:[ { path: "order-summary", meta: { title:"Order Summary"}}]},
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  const app = createApp(App);
  app.use(router); 
  
  app.mount('#app');
