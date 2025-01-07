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
    <!-- 刪除商品api deleteProduct -->
    <button @click="deleteProduct">刪除商品</button>  
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps({
  product: Object, // 接收單個產品資料
  showImg2: {
    type: Boolean,
    default: false,// 默認不顯示
  },
});

// 查看 showImg2 的值
console.log("showImg2:", props.showImg2); 

const router = useRouter();

// 點擊商品卡片跳轉到商品詳細頁
const goToProductDetail = () => {
  if (!props.showImg2) {
    // 如果是列表頁面，點擊卡片導航到詳細頁
    router.push({
      name: "ProductDetail",
      params: { productId: props.product.productId },
    });
  }
};

// 刪除商品
const emit = defineEmits(['delete-product']);

// 刪除商品後，發送 delete-product 事件
const deleteProduct = async (event) => {
  event.stopPropagation(); // 防止事件冒泡，避免觸發 goToProductDetail

  // 顯示確認框，會有true/false判斷
  const isConfirmed = window.confirm("確定刪除這個商品嗎？");
  console.log("isConfirmed變數內容： " + isConfirmed);

  if (isConfirmed) {
    try {
      // 發送刪除請求
      const response = await axios.delete(`http://localhost:8090/api/products/${props.product.productId}`);
      
      if (response.status === 204) {
        alert("商品已刪除！");
        // 發送刪除事件
        emit('delete-product', props.product.productId);
      
      } else {
        alert("刪除失敗，請稍後再試！");
      }
    } catch (error) {
      console.error("刪除商品錯誤:", error);
      alert("刪除商品時發生錯誤！");
    }
  } else {
    console.log("已取消刪除操作");
    alert("已取消刪除操作");
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
