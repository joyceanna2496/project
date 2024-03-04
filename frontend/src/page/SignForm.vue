<template>
  <div>
    <template v-if="loggedIn">
      <p>你已登入！</p>
      <button @click="signOut">登出</button>
    </template>
    <template v-else>
      <form @submit.prevent="login" class="login-form">
        <input type="text" v-model="username" placeholder="帳號" required>
        <input type="password" v-model="password" placeholder="密碼" required>
        <button type="submit">登入</button>
      </form>
    </template>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },

    computed: {
    loggedIn() {
      return this.$store.state.user.loggedIn;
    }
  },

    methods: {
      login() {
        this.$store.dispatch('login', { username: this.username, password: this.password })
      },

      signOut() {
      this.$store.dispatch('signOut');
      },
    }
  };
  </script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
  