<template>
  <h1>這是輪播圖</h1>
  <div class="imgs">
    <img
      src="https://im1.book.com.tw/image/getImage?i=https://addons.books.com.tw/G/ADbanner/2024/youth/b4_1227_1804x720.png&v=676cf4d2k&w=902&h=360"
    />
    <img
      src="https://im1.book.com.tw/image/getImage?i=https://addons.books.com.tw/G/ADbanner/2024/youth/b4_1213_1804x720.png&v=6757d90dk&w=902&h=360"
    />
    <img
      src="https://im1.book.com.tw/image/getImage?i=https://addons.books.com.tw/G/ADbanner/fashion/muji/2024/MUJI_1227-1228_902360.jpg&v=67624be2k&w=902&h=360"
    />
  </div>
</template>
<script setup></script>
<style scoped>
.imgs {
  height: 400px;
  width: 1000px;
}
.imgs img {
  width: 100%;
  height: 100%;
  object-fit: cover; /*讓圖片填滿父容器設置*/ 
}
</style>
