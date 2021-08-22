<template>
    <div>
        <h1>User</h1>
        <img :src="imgSrc">
        <button @click="userChoice('rock')">Rock</button>
        <button @click="userChoice('paper')">Paper</button>
        <button @click="userChoice('scissors')">Scissors</button>
    </div>
</template>

<script>
    export default {
        name : 'UserComp',
        props : {
            imgSrc : String
        },

        methods: {
            userChoice(option) {
                this.$root.$emit('notifyCompTurn')
                if (option == 'rock'){
                this.$store.commit('userChoice', "https://ih1.redbubble.net/image.192018885.7805/st,small,507x507-pad,600x600,f8f8f8.jpg")
                }else if (option == 'paper'){
                this.$store.commit('userChoice', "https://www.citypng.com/public/uploads/preview/mickey-mouse-gloves-cartoon-drawing-disney-11585248183vzk0xyy5ws.png")
                }else if (option == 'scissors'){
                this.$store.commit('userChoice', "https://www.nicepng.com/png/detail/816-8161961_paper-icon-mickey-mouse-hand-drawing.png")
                }
            }
        },
    }
</script>

<style scoped>
img{
    width: 200px;
}
</style>