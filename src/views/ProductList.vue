<template>
  <div>
    <h1 class = "h1text">產品列表 ProductList</h1>
    <div class="product-list">
      <!-- 使用 v-for 渲染所有產品 -->
      <ProductCard
        v-for="product in products"
        :key="product.productId"
        :product="product"
        :showImg2="false" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue';

const products = ref([]);

// 模擬 API 獲取產品資料
const fetchProducts = async () => {
  const response = await fetch('http://localhost:8090/api/products');  // 後端 API
  products.value = await response.json(); 
};

// 在組件加載後調用 API
onMounted(fetchProducts);
</script>

<style scoped>
.h1text{
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
