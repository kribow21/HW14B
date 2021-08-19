<template>
    <div>
        <UserComp/>
        <ComputerComp/>
    </div>
</template>

<script>
import UserComp from '../components/UserComp.vue'
import ComputerComp from '../components/ComputerComp.vue'
    export default {
        name : 'GamePage',
        components: {
            UserComp,
            ComputerComp
        },
    }
</script>

<style scoped>

</style>