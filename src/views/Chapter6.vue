<script setup>
import { computed, reactive } from 'vue';

// 반응형 상태
const state = reactive({
    mvpId: 7,
    players: [
        {id: 7, name: 'John Doe'},
        {id: 9, name: 'Jane Lee'},
        {id: 12, name: 'James Park'},
    ],
});

// 메소드
const getMvpName = () => {
    if (state.mvpId) {
        const player = state.players.find(item => item.id === state.mvpId);
        if (player) {
            return player.name;
        }
    }
    return '없음';
};

// 
const getMvpNameNice = () => { 
    console.log('computedMvpNameNice 메소드 !');
    // const { mvpId, players } = state;
    // const player = players.find(({ id }) => id === mvpId);
    // return player?.name || '없음';
    return state.players.find((item) => item.id === state.mvpId)?.name || '없음';
};
// 컴퓨티드
const computedMvpName = computed(() => {
    console.log('computedMvpName 컴퓨티드 !');
    return state.players.find((item) => item.id === state.mvpId)?.name || '없음'; 
});
</script>

<template>
<h1>Chapter6</h1>
<h1>오늘의 MVP</h1>
<template v-if="state.mvpId">
    <!-- Optional Chaining -->
    {{ state.players.find((item) => item.id === state.mvpId)?.name || '없음' }}
</template>
<div>{{ getMvpName() }}</div>
<div>nice: {{ getMvpNameNice() }}</div>
<div>nice: {{ getMvpNameNice() }}</div>
<div>nice: {{ getMvpNameNice() }}</div>
<div>{{ 'Jane Lee' }}</div>
<div>computed: {{ computedMvpName }}</div>
<div>computed: {{ computedMvpName }}</div>
<div>computed: {{ computedMvpName }}</div>
<!-- 호출 마다 값이 바뀌어야 하면 메소드를 쓰는게 맞지만,
 그게 아니라면 컴퓨티드를 써야한다. -->
</template>

<style scoped>

</style>
<!-- 
1. const { mvpId, players } = state; state 객체에서 mvpId와 players 속성만 꺼내서 각각 변수로 저장합니다.
2.const player = players.find(({ id }) => id === mvpId);
players 배열에서 id가 mvpId와 같은 객체(플레이어)를 찾습니다.
3.return player?.name || '없음';
player가 존재할 경우(undefined가 아닐 경우), player.name을 반환합니다.player가 없으면 '없음'을 반환합니다.
-->
