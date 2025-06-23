<script setup>
import { reactive } from 'vue';
const state = reactive({
    player: 'Kim'
});

const state2 = reactive({
    form: {
        id: '',
        pw: ''
    }
});

const login = () => { 
    alert(state.form.id + '님 환영합니다!');
};
</script>

<template>
<h1>chapter7.vue</h1>
<h1>{{ state.player }}</h1>
<div>
    <!-- 단방향 데이터 바인딩(일방통행) -->
    <input type="text" :value="state.player">
    <!-- 양방향 데이터 바인딩 -->
    <input type="text" v-model="state.player">
</div>
<!-- @:이벤트 -->
<form @submit.prevent="login">
    {{ state2.form.id }}
<input type="text" v-model="state2.form.id" placeholder="뷰만 보여주기만 할꼬지롱">
<input type="submit" value="login">
</form>
</template>

<style scoped>

</style>