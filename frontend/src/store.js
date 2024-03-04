import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      const cartItem = state.cart.find(item => item.product.id === product.id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ product, quantity: 1 });
      }
    },
    removeFromCart(state, item) {
      const index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
    },
    emptyCart(state) {
        state.cart = [];
    },
  },
  actions: {
    checkout({ commit }) {
      commit('emptyCart'); 
    },
  },
  getters: {
    totalPrice(state) {
      return state.cart.reduce((total, item) => total + item.product.money * item.quantity, 0);
    },
  },
});
