<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.image" alt="Product Image" class="product-image">
        <span class="product-name">{{ product.id }}</span>
        <span class="product-price">{{ product.money }} 元</span>
        <button @click="addToCart(product)" class="add-to-cart-btn">加入購物車</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 

  data() {
    return {
      products: [
        { id: '中央大學吉祥物', money: 20, image:'https://ncusec.ncu.edu.tw/ncu100/wp-content/uploads/ELF-Guo-guo.png'},
        { id: '碗', money: 30, image:'https://www.pekoe.com.tw/UploadFile/GoodPic/91/big/16232172062091.jpg' },
        { id: '杯子', money:50,image:'https://s.yimg.com/zp/MerchandiseImages/2C43ED9B27-SP-9502711.jpg'},
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product); // 使用 Vuex store 中的 addToCart mutation
    },
  },
};
</script>

<style scoped>
.product-list {
  max-width: 600px;
  margin: auto;
}

.product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.product-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.product-name {
  flex: 1;
}

.product-price {
  margin-right: 20px;
}

.add-to-cart-btn {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}
</style>
