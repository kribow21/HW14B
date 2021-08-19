<template>
    <div>
        <form id="Form" action="javascript:void(0)">
            <label for="email">Email</label>
            <input type="text" id="email">
            <label for="password">Password</label>
            <input type="text" name="password" id="password">
            <input @click="makeLoginRequest" type="submit" id="login">
            <h3 id="mes"></h3>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import cookies from 'vue-cookies'
    export default {
        name : 'PlayerLogin',
        methods: {
            makeLoginRequest : function(){
                let emailInput = document.getElementById('email').value;
                let passInput = document.getElementById('password').value;
            axios.request({
                url : "https://reqres.in/api/login",
            method : "POST",
            headers : {
            'Content-Type' : 'application/json'
            },
            data : {
            "email" : emailInput,
            "password" : passInput
            }
            }).then((response) => {
                console.log(response);
                cookies.set('loginToken', response.data.token);
                this.$router.push('GamePage.vue');

            }).catch((error) => {
                console.error("There was an error" +error);
                document.getElementById('mes').innerText="You've failed to log in";

            })
        }
    },
    }
</script>

<style scoped>

</style>