<template>
    <main>
        <UserComp :imgSrc="choice"></UserComp>
        <ComputerComp :compImgSrc="computerChoice"/>
        <GameScoreBoard/>
    </main>
</template>

<script>
import UserComp from './UserComp.vue'
import ComputerComp from './ComputerComp.vue'
import GameScoreBoard from './GameScoreBoard.vue'
    export default {
        name : 'GameContainer',
        components: {
            UserComp,
            ComputerComp,
            GameScoreBoard,
        },
        computed: {
            choice() {
                return this.$store.state.userChoiceImg
            },
            computerChoice() {
                return this.$store.state.compChoiceImg
            }
        },
    }
</script>

<style scoped>
main{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>