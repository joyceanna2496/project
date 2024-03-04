<template>
  <div class="shopping-cart">
    <h2>購物車</h2>
    <ul>
      <li v-for="item in cart" :key="item.product.id" class="cart-item">
        <span class="cart-product-name">{{ item.product.id }}</span>
        <span class="cart-product-price">{{ item.product.money }} 元</span>
        <span class="cart-product-quantity">數量: {{ item.quantity }}</span>
        <button @click="removeFromCart(item)" class="remove-from-cart-btn">
          移除
        </button>
      </li>
    </ul>
    <div class="total-price">總價格: {{ totalPrice }} 元</div>
    <button @click="checkout" class="checkout-btn">結帳</button>
  </div>
</template>
  
  <script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalPrice"]),
  },
  methods: {
    ...mapActions(["checkout"]),
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
  },
};
</script>
  
  <style scoped>
.shopping-cart {
  max-width: 600px;
  margin: auto;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.cart-product-name {
  flex: 1;
}

.cart-product-price {
  margin-right: 20px;
}

.cart-product-quantity {
  margin-right: 20px;
}

.remove-from-cart-btn {
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove-from-cart-btn:hover {
  background-color: #c82333;
}

.total-price {
  font-weight: bold;
  margin-top: 10px;
}

.checkout-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.checkout-btn:hover {
  background-color: #0056b3;
}
</style>