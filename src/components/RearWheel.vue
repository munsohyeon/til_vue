<script setup></script>
import Tire from "@/components/Tire.vue";

<template>
  <div class="rear-wheel">
    <span>REAR WHEEL</span>
    <Tire color="BLUE"/> 
  </div>
</template>

<style scoped>
.rear-wheel {
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>
