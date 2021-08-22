<template>
    <div>
        <div>
            <h3>User Score</h3>
            <h3>Win</h3>
            <p>{{userWin}}</p>
            <h3>Loss</h3>
            <p>{{userLoss}}</p>
            <h3>Tie</h3>
            <p>{{tieMaker}}</p>
        </div>
        <div>
            <h3>Comp Score</h3>
            <h3>Win</h3>
            <p>{{compWin}}</p>
            <h3>Loss</h3>
            <p>{{compLoss}}</p>
            <h3>Tie</h3>
            <p>{{tieMaker}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'GameScoreBoard',
        computed: {
                userWin() {
                return this.$store.state.win
            },
            userLoss(){
                return this.$store.state.loss

            },
            tieMaker(){
                return this.$store.state.tie
            },
            compWin(){
                return this.$store.state.compWin
            },
            compLoss(){
                return this.$store.state.compLoss
            }
        }
    }
</script>

<style scoped>

</style>