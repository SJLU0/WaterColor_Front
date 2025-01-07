<template>
  <div>
    <h1 class="h1-text">產品列表 ProductList</h1>
    <div class="product-list">
      <!-- 使用 v-for 渲染所有產品 
           接收 delete-product 事件 -->
      <ProductCard
        v-for="product in products"
        :key="product.productId"
        :product="product"
        :showImg2="false"
        @delete-product="handleDeleteProduct"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";

const products = ref([]);

// 模擬 API 獲取產品資料
const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:8090/api/products"); // 後端 API
    products.value = await response.json();
  } catch (error) {
    console.error("無法獲取產品資料", error);
  }
};
// 在組件加載後調用 API
onMounted(fetchProducts);

// 處理刪除商品的邏輯
const handleDeleteProduct = (productId) => {
  // 刪除商品
  products.value = products.value.filter(
    (product) => product.productId !== productId
  );
};
</script>

<style scoped>
.h1-text {
  text-align: center; /* 水平居中 */
  margin: 30px 0; /* 去掉默認的外邊距 */
}
.product-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 100px;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
