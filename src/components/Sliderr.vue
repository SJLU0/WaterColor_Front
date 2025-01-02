<!-- 看情況要不要加小點點控制圖片 -->
<template>
  <div class="slider">
    <button class="left-btn" @click="toLeft">◀</button>
    <div class="imgs">
      <img
        :src="imgUrls[imgIndex]"
        :style="{ opacity: opacityValue }" 
        alt="輪播圖"
        class="slider-img"
      />
    </div>
    <button class="right-btn" @click="toRight">▶</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 用陣列裝輪播圖url
const imgUrls = [
  "https://www.eslitecorp.com/eslite_resource/leap_do/scope_pic/1556253316675/01-04-10%E8%AA%A0%E5%93%81%E8%87%AA%E7%87%9F%E5%93%81%E7%89%8C1.jpg",
  "https://www.eslitecorp.com/eslite_resource/leap_do/scope_pic/1611659709170/%E8%AA%A0%E5%93%81%E7%94%9F%E6%B4%BBbanner_1440x587.jpg",
  "https://www.eslitecorp.com/eslite_resource/leap_do/scope_pic/1611913447751/%E7%B6%93%E7%87%9F%E5%85%A7%E5%AE%B9_%E8%AA%A0%E5%93%81%E7%B7%9A%E4%B8%8Abanner(1920x1073).jpg",
];

// 用ref響應式函數指定一開始索引為0
const imgIndex = ref(0);

// opacity 狀態，初始為完全不透明
const opacityValue = ref(1); 

// click事件觸發 function toRight、toLeft，控制索引值
const toRight = () => {
  opacityValue.value = 0.3; // 先將 opacity 設為 0.3，開始過渡
  setTimeout(() => {
    imgIndex.value = (imgIndex.value + 1 ) % imgUrls.length; // 更新圖片
    opacityValue.value = 1; // 更新圖片後將 opacity 設回 1
  }, 500); // 等待過渡完成
};

const toLeft = () => {
  opacityValue.value = 0.3; // 先將 opacity 設為 0.3，開始過渡
  setTimeout(() => {
    imgIndex.value = (imgIndex.value - 1 + imgUrls.length) % imgUrls.length; // 防止負數，循環顯示上一張圖片
    opacityValue.value = 1; // 更新圖片後將 opacity 設回 1
  }, 500); // 等待過渡完成
};
</script>

<style scoped>
.slider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative; /* 讓子元素可以絕對定位 */
  width: 1000px; /* 設定寬度與圖片一致 */
  margin: auto;
}
.imgs {
  height: 400px;
  width: 1000px;
  background-color:  rgba(200, 200, 200, 0.3);

}

.slider-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 讓圖片填滿父容器設置 */
  border-radius: 3px;
  transition: opacity 0.5s ease-in-out; /* 加上淡入淡出過渡效果 */
}

button {
  height: 400px;
  width: 30px;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 3px;
  border: none;
  color: rgba(100, 100, 100, 0.7);
  z-index: 1; /* 確保按鈕在圖片上方，不受圖片的透明度過渡影響 */
}

button:hover{
  background-color: rgba(230, 230, 230, 0.5);
}
.left-btn {
  position: absolute; /* 讓按鈕絕對定位 */
  left: 0;
  
}
.right-btn {
  position: absolute; /* 讓按鈕絕對定位 */
  right: 0;
  
}
</style>
