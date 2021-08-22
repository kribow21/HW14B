<template>
    <div>
        <h1>Computer</h1>
        <img :src="randomImg">
    </div>
</template>

<script>
    export default {
        name : 'ComputerComp',
        props : {
        compImgSrc : String,
        },
        methods: {
            randomImg() {
                let array = ["rock", "paper", "scissors"];
                let a =array[Math.floor(Math.random()* array.length)];
                if (a == 'rock'){
                this.$store.commit('compChoice', "https://ih1.redbubble.net/image.192018885.7805/st,small,507x507-pad,600x600,f8f8f8.jpg")
                }else if (a == 'paper'){
                this.$store.commit('compChoice', "https://www.citypng.com/public/uploads/preview/mickey-mouse-gloves-cartoon-drawing-disney-11585248183vzk0xyy5ws.png")
                }else if (a == 'scissors'){
                this.$store.commit('compChoice', "https://www.nicepng.com/png/detail/816-8161961_paper-icon-mickey-mouse-hand-drawing.png")
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