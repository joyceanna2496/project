<template>
    <div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>

  export default {
   
    data() {
      return {
        cart: [],
      };
    },
    methods: {
      addToCartHandler(product) {
        const cartItem = this.cart.find(item => item.product.id === product.id);
  
        if (cartItem) {
          cartItem.quantity++;
        } else {
          this.cart.push({ product, quantity: 1 });
        }
      },
  
      removeFromCartHandler(item) {
        const index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
      },
    },
  };
  </script>