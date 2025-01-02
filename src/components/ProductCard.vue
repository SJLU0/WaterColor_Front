<template>
  <div class="product-card" @click="goToProductDetail">
    <h4 class="color-category">{{ product.colorCategory }}</h4>
    <img :src="product.image1Url" alt="預設 圖片1" />
      <!-- showImg2 = true 和 image2Url 有值，在 ProductDetail 會顯示圖片2 -->
      <div v-if="showImg2 && product.image2Url">
        <img :src="product.image2Url" alt="預設 圖片2" />
      </div>
    <h3>{{ product.zhName }}</h3>
    <h4>{{ product.enName }}</h4>
    <h4 class ="price">NT$ {{ product.price }}</h4>
      
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object, // 接收單個產品資料
  showImg2: {
    // 可選擇是否顯示第二張圖片
    type: Boolean,
    default: false,// 默認不顯示
  },
});

// 查看 showImg2 的值
console.log("showImg2:", props.showImg2); 

const router = useRouter();

const goToProductDetail = () => {
  if (!props.showImg2) {
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
  border: 3px solid #EEEEEE;
  box-shadow: 3px 3px 3px rgba(200, 200, 200, 0.5); /* 3px 陰影 */
  border-radius: 5px;
  padding: 20px;
  width: 200px;
  text-align: center;

}
.product-card img {
  width: 170px;
  height: auto;
  margin-bottom: 10px;  /* 設定圖片之間的間距 */
}

.color-category{
  color:lightgrey; 
}

.price{
  color:orangered; 
  
}

</style>
