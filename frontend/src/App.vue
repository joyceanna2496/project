<template>
  <h1>Navbar</h1>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  components:{
    TheHeader,
  }
  
}
</script>

