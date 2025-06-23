import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

// 자바스크립트는 key값을 생략가능하다! value명이랑 key명이 같으면 생략!
  return { count, doubleCount, increment }
})
