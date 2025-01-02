import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";

/*
定義路徑，用陣列去裝多個路徑
path：對應瀏覽器地址欄中的路徑
name：路由的名稱，是一個唯一的識別符，可以使用路由名稱來進行導航
component：對應的 Vue 組件
*/
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/products",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/products/:productId", // 動態路由
    name: "ProductDetail",
    component: ProductDetail, // 商品詳情頁面路由
  },
];

// 建立路由實例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 模式
  routes, // 傳入路由陣列
});

// 匯出路由實例
export default router;
