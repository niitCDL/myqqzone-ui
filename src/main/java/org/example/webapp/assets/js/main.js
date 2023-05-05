const app = Vue.createApp({
    data() {
        return {
            error: "",
            errorStatus: false
        }
    },
    methods: {
        verifyRationalData(event) {
            const obj = event.target;
            switch (event.target.name) {
                case 'username':
                    if (obj.value == '') {
                        this.error = '账号不能为空'
                        this.errorStatus = true;
                    } else {
                        this.error = ''
                        this.errorStatus = false;
                    }
                    break;
                case 'password':
                    if (obj.value == '') {
                        this.error = '密码不能为空'
                        this.errorStatus = true;
                    } else {
                        this.error = ''
                        this.errorStatus = false;
                    }
                    break;
            }
        },
        login() {
            let username = document.getElementsByName("username")[0].value;
            let password = document.getElementsByName("password")[0].value;
            if (username == '' && password == '') {
                this.error = '账号与密码不能为空'
                this.errorStatus = true;
                return;
            }
            const params = new URLSearchParams();
            params.append("username", username);
            params.append("password", password);
            axios.post("http://localhost:9090/login", params).then(response => {
                const json = response.data;
                console.log(json)
                if (json.code === "200") {
                    localStorage.uid = json.data.user.userId;
                    localStorage.nickname = json.data.user.nickname;
                    window.location.href = "/myqqzone/success.html";
                }else {
                    this.error = json.message;
                    this.errorStatus = true;
                }
            })

        }
    }
})