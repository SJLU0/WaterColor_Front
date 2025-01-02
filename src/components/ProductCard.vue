<template>
  <div class="product-card" @click="goToProductDetail">
    <img :src="product.image1Url" alt="預設 圖片1" />
    <h3>{{ product.zhName }}</h3>
    <p>{{ product.enName }}</p>
    <p>NT$ {{ product.price }}</p>

    <!-- 在 ProductDetail.vue 會顯示分類 -->
    <div v-if="showCategory">
      <p>{{ product.colorCategory }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object, // 接收單個產品資料
  showCategory: {
    // 可選擇是否顯示分類
    type: Boolean,
    default: false,// 默認不顯示
  },
});

// 查看 showCategory 的值
console.log("showCategory的值:", props.showCategory); 

const router = useRouter();

const goToProductDetail = () => {
  if (!props.showCategory) {
    // 如果是列表頁面，點擊卡片導航到詳細頁
    router.push({
      name: "ProductDetail",
      params: { productId: props.product.productId },
    });
  }
};
</script>

<style scoped>
.product-card {
  cursor: pointer;
  border: none;
  box-shadow: 3px 3px 6px rgba(200, 200, 200, 0.5); /* 3px 陰影 */
  border-radius: 5px;
  padding: 20px;
  width: 200px;
  text-align: center;
}
.product-card img {
  width: 100%;
  height: auto;
}
</style>
