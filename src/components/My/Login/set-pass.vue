<template>
    <div class="set-pass">
        <div class="fy_content">
            <!-- 设置密码头部 -->
            <div class="fy_header">
                <h3>设置密码</h3>
                <!-- 点击跳转到信息填写路由 -->
                <span  @click='fy_toSetmessage()'>跳过</span>
            </div>
            <!-- 设置密码主体 -->
            <div class="fy_box">
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请设置9位登录密码" v-model='fy_zc_pass'>
                </div>
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请再次设置9密码" v-model='fy_zc_2pass'>
                </div>
                <!-- 确定按钮 -->
                <div class="fy_login">
                    <!-- 点击跳转到信息填写路由 -->
                    <van-button round type="warning" eb6100 size='large' class="fy_button" @click='fy_toSetmessage()'>确定</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "set-pass",
        data(){
            return{
                fy_zc_pass:"",
                fy_zc_2pass:"",
                fy_ac_shou:"",
                fy_ac_dx:"",
                fy_code:"",
                id:0 
            }
        },
        mounted(){
            // console.log(this.$route.query.zc_sjh)
            this.fy_ac_shou = this.$route.params.sjh
            this.fy_ac_dx=this.$route.params.dx
            this.fy_code=this.$route.params.code
            console.log(this.fy_ac_shou)
            console.log(this.fy_ac_dx)
             console.log(this.fy_code)
        },
        methods:{
            // 跳转到信息填写路由
            fy_toSetmessage(){
                var mag = /^[0-9]{9}$/
                var pass1 = mag.test(this.fy_zc_pass)
                if(this.fy_zc_pass == this.fy_zc_2pass){
                     if(pass1){
                        this.axios.post("https://test.365msmk.com/api/app/password",{
                            mobile: this.fy_ac_shou,    //手机号 
                            password:this.fy_zc_2pass,	    //输入的密码
                            sms_code: this.fy_ac_dx,        //收到的验证码
                        },{
                             headers: { Authorization: "Bearer " + this.fy_code }
                        }).then((res)=>{
                            console.log(res.data)
                            if(res.data.code == 200){
                                this.$router.push({name:"Login",params:{
                                     sjh:this.fy_zc_sjh,    //路由传值发送给初始化密码的手机号
                                     dx:this.fy_zc_dx,      //路由传值发送给初始化密码的验证码
                                     code:this.fy_code,  //路由传值发送给初始化密码的remember_token值
                                }})
                                return false
                            }else{
                                alert(res.data.msg)
                            }
                        })
                        return false
                    }else{
                        alert(222)
                        return false
                    }
                    return false
                }else{
                    alert("两次输入密码不一致");
                    return false
                }
               
                // console.log(this.$route.query.zc_sjh)
                // var arr = JSON.parse(localStorage.getItem('dl'))||[];
                // this.id+=1;
                // var obj = {'id':this.id,'zc_sjh':this.$route.query.zc_sjh,'zc_pass':this.fy_zc_pass}
                // console.log(obj)
                // arr.unshift(obj)
                // localStorage.setItem('dl',JSON.stringify(arr))
                // this.$router.push('/set-message')
            }
        }
    }
</script>

<style lang='scss' scoped>
html,body,.set-pass{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.fy_content{
    width: 100%;
    .fy_header{
        width: 100%;
        height:0.75rem ;
        display: flex;
        padding:0 0.1rem;
        justify-content: space-between;
        h3{
            width:60%;
            font-size: 0.3rem;
            line-height: 0.75rem;
            font-weight: 500;
            text-align: right;
        }
        span{
            display: block;
            font-size: 0.25rem;
            height: 100%;
            width: 0.8rem;
            line-height: 0.75rem;
        }
        
    }
    .fy_box{
        width: 100%;
       .fy_num{
            font-size: 0.3rem;
            width: 5rem;
            padding: 0 1.1rem;
            input{
                border:0;
                display: block;
                margin: 0 auto;
                box-sizing: border-box;
                padding: 0.3rem 0;
                height: 100%;
                font-size: 0.25rem;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                line-height: 0.3rem;
                float: left;
                outline: none;
           }
       
       }
       .fy_login{
        width: 6.4rem;
        height: 1.2rem;
        text-align: center;
        .fy_button{
            width: 80%;
            font-size: 0.25rem;
             margin-left: 0;
        }
    }

    }
}
</style>
