<template>
  <div v-if="product" class="product-detail">
    <ProductCard :product="product" :showImg2="true" />
  </div>
  <div v-else>
    <p>正在加載...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductCard from '../components/ProductCard.vue';

const product = ref(null);
const route = useRoute();

// 查詢產品 by productId
const fetchProductDetail = async (productId) => {
  const response = await fetch(`http://localhost:8090/api/products/${productId}`); // 後端 API
  product.value = await response.json();
};

onMounted(() => {
  const productId = route.params.productId; // 從路由中獲取 productId
  fetchProductDetail(productId);
});
</script>

<style scoped>
.product-detail{
  display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center; 

}

</style>
