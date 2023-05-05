console.log("asas")
const app = Vue.createApp({
    data() {
        return {
            error: "asas",
            errorStatus: false,
            phone_content_status: false,
            phone_span_content: '+86',
            agreementStatus: false,
            flag: false,
            errorData: {
                username_error: {
                    msg: '',
                    status: false,
                    input_border_color: 'lightgray',
                    isSubmit: false
                },
                password_error: {
                    msg: '',
                    status: false,
                    input_border_color: 'lightgray',
                    isSubmit: false
                },
                phone_error: {
                    msg: '',
                    status: false,
                    input_border_color: 'lightgray',
                    isSubmit: false
                }
            },

        }
    },
    methods: {
        visibleChange(event) {
            if (event.target.classList.contains('open')) {
                this.flag = true;
                this.phone_content_status = true;
            } else {
                this.phone_content_status = false;
                this.flag = false;
            }
        },
        phoneNo(event) {
            let text = event.target.innerText;
            let index = text.indexOf('+');
            let subText = text.substring(index);
            this.phone_span_content = subText;
        },
        changeAgreeStatus(event) {
            if (event.target.tagName == 'IMG') {
                const checkbox = document.querySelector('#check1');
                checkbox.checked = false;
            }
            this.agreementStatus = !this.agreementStatus;
        },
        verifyRationalData(event) {
            const obj = event.target;
            switch (obj.name) {
                case 'nickname':
                    if (obj.value == '') {
                        this.errorData.username_error.status = true;
                        this.errorData.username_error.msg = '昵称不能为空';
                        this.errorData.username_error.input_border_color = '#ff5b5b';
                        this.errorData.username_error.isSubmit = false;
                    } else {
                        axios.get("http://localhost:9090/checkNickName?nickName=" + obj.value).then(response => {
                            console.log(response.data.data);
                            if (response.data.data.status) {
                                this.errorData.username_error.status = true;
                                this.errorData.username_error.msg = '昵称已存在,请您更换';
                                this.errorData.username_error.input_border_color = '#ff5b5b';
                                this.errorData.username_error.isSubmit = false;
                            } else {
                                this.errorData.username_error.status = false;
                                this.errorData.username_error.msg = '';
                                this.errorData.username_error.input_border_color = '#15d173';
                                this.errorData.username_error.isSubmit = true;
                            }
                        })
                    }
                    break;
                case 'password':
                    if (obj.value == '') {
                        this.errorData.password_error.status = true;
                        this.errorData.password_error.msg = '密码不能为空';
                        this.errorData.password_error.input_border_color = '#ff5b5b';
                        this.errorData.phone_error.isSubmit = false;
                    } else {
                        this.errorData.password_error.status = false;
                        this.errorData.password_error.msg = '';
                        this.errorData.password_error.input_border_color = '#15d173';
                        this.errorData.password_error.isSubmit = true;
                    }
                    break;
                case 'phone':
                    if (obj.value == '') {
                        this.errorData.phone_error.status = true;
                        this.errorData.phone_error.msg = '请填写手机号';
                        this.errorData.phone_error.input_border_color = '#ff5b5b';
                        this.errorData.phone_error.isSubmit = false;
                    } else {
                        this.errorData.phone_error.status = false;
                        this.errorData.phone_error.msg = '';
                        this.errorData.phone_error.input_border_color = '#15d173';
                        this.errorData.phone_error.isSubmit = true;
                    }
                    break;
            }
        },
        verifyRationalData2(event) {
            const obj = event;
            switch (obj.name) {
                case 'nickname':
                    if (obj.value == '') {
                        this.errorData.username_error.status = true;
                        this.errorData.username_error.msg = '昵称不能为空';
                        this.errorData.username_error.input_border_color = '#ff5b5b';
                        this.errorData.username_error.isSubmit = false;
                    } else {
                        axios.get("http://localhost:9090/checkNickName?nickName=" + obj.value).then(response => {
                            console.log(response.data.data);
                            if (response.data.data.status) {
                                this.errorData.username_error.status = true;
                                this.errorData.username_error.msg = '昵称已存在,请您更换';
                                this.errorData.username_error.input_border_color = '#ff5b5b';
                                this.errorData.username_error.isSubmit = false;
                            } else {
                                this.errorData.username_error.status = false;
                                this.errorData.username_error.msg = '';
                                this.errorData.username_error.input_border_color = '#15d173';
                                this.errorData.username_error.isSubmit = true;
                            }
                        })
                    }
                    break;
                case 'password':
                    if (obj.value == '') {
                        this.errorData.password_error.status = true;
                        this.errorData.password_error.msg = '密码不能为空';
                        this.errorData.password_error.input_border_color = '#ff5b5b';
                        this.errorData.phone_error.isSubmit = false;
                    } else {
                        this.errorData.password_error.status = false;
                        this.errorData.password_error.msg = '';
                        this.errorData.password_error.input_border_color = '#15d173';
                        this.errorData.password_error.isSubmit = true;
                    }
                    break;
                case 'phone':
                    if (obj.value == '') {
                        this.errorData.phone_error.status = true;
                        this.errorData.phone_error.msg = '请填写手机号';
                        this.errorData.phone_error.input_border_color = '#ff5b5b';
                        this.errorData.phone_error.isSubmit = false;
                    } else {
                        this.errorData.phone_error.status = false;
                        this.errorData.phone_error.msg = '';
                        this.errorData.phone_error.input_border_color = '#15d173';
                        this.errorData.phone_error.isSubmit = true;
                    }
                    break;
            }
        },
        register() {
            const nickname = document.getElementsByName("nickname")[0].value;
            const password = document.getElementsByName("password")[0].value;
            const phone = document.getElementsByName("phone")[0].value;
            const checkbox = document.querySelector('#check1');
            let isCommit = this.errorData.username_error.isSubmit && this.errorData.password_error.isSubmit && this.errorData.phone_error.isSubmit;
            if (!isCommit) {
                // alert("您输入的数据不合法,请修改")
                this.verifyRationalData2(document.getElementsByName("nickname")[0]);
                this.verifyRationalData2(document.getElementsByName("password")[0]);
                this.verifyRationalData2(document.getElementsByName("phone")[0]);
            } else if (!checkbox.checked) {
                alert("请选择勾选同意服务协议")
                return;
            }
            if (isCommit) {
                const params = new URLSearchParams();
                params.append("nickname", nickname);
                params.append("password", password);
                params.append("phone", phone);
                axios.post("http://localhost:9090/register", params).then(response => {
                    const json = response.data;
                    const user = json.data.user;
                    const alert_content =
                        '您的账号为: ' + user.username + '<br/>' + '您的密码为: ' + user.password + '<br/>' + '<span style="font-weight: 700;color: #FF5765">请您妥善保管好您的信息!</span>'
                    if (json.code === "200") {
                        this.$alert(alert_content, {
                            confirmButtonText: '确定',
                            dangerouslyUseHTMLString: true,
                            callback: function () {
                                window.location.href = "/myqqzone/login.html";
                            }
                        })
                    } else {
                        this.error = json.message;
                        this.errorStatus = true;
                    }
                })
            }

        }

    },
    created() {
        document.addEventListener("click", this.visibleChange);
    },
    mounted() {

    }
})