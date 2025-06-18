<script setup>
// Data coming in from outside props.
const props = defineProps({
  color: String// disgnate th type
});
</script>

<template>
  <!-- ":style" This is a vue grammer
        "{{}}" Brace is two that are overlapped (Mustache templet)
  -->
  <div :style="{color: props.color}">{{props.color || 'BLACK'}}TIRE</div>
</template>


