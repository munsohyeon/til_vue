<script setup>

</script>

<template>
<router-link to="/component">컴포넌트</router-link>
<router-link to="/mustache">mustache template</router-link>
<router-link to="/chapter3">chapter3</router-link>
<router-link to="/chapter4">chapter4</router-link>
<router-link to="/chapter5">반응형 상태</router-link>
<router-link to="/chapter6">컴퓨티드</router-link>
<router-link to="/chapter7">데이터 바인딩</router-link>
<router-link to="/chapter8">훅 Hook</router-link>
<router-view></router-view>
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
