Test_WaterColor_Front_v1 重點
這個版本重點是 ProductCard(子組件)、ProductList(父組件)、ProductDetail(父組件) 的互動

ProductList(父組件)傳 false，讓 ProductCard(子組件) 不顯示 圖片2
ProductDetail(父組件)傳 true，讓 ProductCard(子組件) 顯示出 圖片2

v2 todo:
加入購物車按鈕，並且 觸發addToCart事件 到 Cart.vue
