console.log("asasasas");
console.log("asasasas");
const app = Vue.createApp({
    data() {
        return {
            nickname:''
        }
    },
    mounted(){
        this.nickname = localStorage.getItem("nickname");
        console.log(this.nickname);
    }
})