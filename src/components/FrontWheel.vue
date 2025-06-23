<script setup>
import Tire from "./Tire.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
</script>

<template>
  <div class="front-wheel">
    <span>FRONT WHEEL</span>
    <Tire color="TOMATO"/>
    <div>TIMES: {{ counterStore.count }}</div>
  </div>
</template>

<style scoped>
@font-face {
    font-family: 'SacheonUju-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2506-1@1.0/SacheonUju-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
.front-wheel {
    font-family: 'SacheonUju-Regular';
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
}
</style>
