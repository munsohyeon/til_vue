<script setup>

</script>

<template>
  <router-link to ="/component">컴포넌트</router-link>
    <router-link to="/mustache">mustache template</router-link>
    <router-view/>
</template>

<style scoped>
@font-face {
    font-family: 'SacheonUju-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2506-1@1.0/SacheonUju-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
* {
  font-family: 'SacheonUju-Regular';
  font-size: 30px;
}
h1 {
  font-size: 50px;
}
</style>
