<script setup>
// Data coming in from outside props.
const props = defineProps({
  color: String// disgnate th type
});
</script>

<template>
<!-- 
    color라는 속성으로 데이터를 받을 수 있다.
    {{ }} TEMPLATE(HTML) 안에서 상수 혹은 변수에 담겨있는 값(Value)를 표시할 때 
      -->
  <div :style="{color: props.color}">{{props.color || 'BLACK!!'}}TIRE</div>
</template>


