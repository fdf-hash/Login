<template>
    <div class='sms-login'>
        <div class="fy-content">
            <div class="fy_content">
                <!-- 注册/验证码登录 logo -->
                <div class="fy_top">
                    <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
                </div>
                <!-- 注册/验证码登录 主体 -->
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请输入手机号" v-model='fy_zc_sjh'>
                </div>
                <div class="fy_num">
                    <input type="text" placeholder="请输入短信验证码" v-model="fy_zc_dx">
                    <span class="fy_sms" @click="fy_huo">获取验证码</span>
                </div>
                <div class="fy_others">
                    <span>*未注册的手机号将自动注册</span>
                    <!-- 点击跳转到登录页面 -->
                    <span @click='fy_toLogin()'>使用密码登录</span>
                </div>
            </div>
            <!-- 登录按钮 -->
            <div class="fy_login">
                <!-- 点击跳转到设置密码路由 -->
                <van-button round type="warning" eb6100 size='large' class="fy_button" @click='fy_toSetpass()'>登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sms-login",
        data(){
            return{
                fy_zc_sjh:"",
                fy_zc_dx:"",
                // token码设置
                fy_to_ken:""
            }
        },
        methods:{
            // 跳转到登录页面
            fy_toLogin(){
                this.$router.push("/login")
            },
            // 跳转到设置密码页面
            fy_toSetpass(){
                // var arr = JSON.parse(localStorage.getItem('dl'))||[];
                // if(this.fy_zc_sjh==''){
                //     alert("手机号不能为空")
                //     return false
                // }
              
                // this.$router.push({path:'/set-pass',query:{zc_sjh:this.fy_zc_sjh}})
                var mage = /^[0-9]{6}$/
                var boler = mage.test(this.fy_zc_dx);
                 if(this.fy_zc_sjh==''){
                     this.$toast("手机号不能为空")
                     return false
                 }else if(boler){
                   this.axios.post("https://test.365msmk.com/api/app/login",{
                       mobile:this.fy_zc_sjh,      //输入的手机号
                       sms_code:this.fy_zc_dx,     //收到的验证码
                       code:this.fy_to_ken,        //收到的remember_token值
                       type:2                      //固定值2代表注册
                   }).then((res)=>{
                       console.log(res.data.code)
                       this.fy_to_ken = res.data.data.remember_token
                       sessionStorage.setItem("code",this.fy_zc_dx,);
                       if(res.data.code==200){
                        //    如果注册过，那么直接跳转到首页home
                           if(res.data.data.is_new==2){
                                this.$router.push("/home")
                                return false;
                                // 如果没有注册过，那么跳转到设置密码页
                            }else if(res.data.data.is_new==1){
                               this.$router.push({name:'set-pass',params:{
                                    sjh:this.fy_zc_sjh,    //路由传值发送给初始化密码的手机号
                                    dx:this.fy_zc_dx,      //路由传值发送给初始化密码的验证码
                                    code:this. fy_to_ken,  //路由传值发送给初始化密码的remember_token值
                                }});
                            return false;
                            }
                           return false;
                       }else{
                           this.$toast("验证码错误")
                           return false;
                       }
                   })
                   return false;
                }else{
                   this.$toast("请输入六位验证码")
                    return false;
                }
            },
            // 获取短信验证码
            fy_huo(){
                var msage = /^[1][3,4,5,6,7,8][0-9]{9}$/;
                var bool = msage.test(this.fy_zc_sjh)
                console.log(bool)
                if(!bool){
                    alert("请输入正确的手机号");
                    return false;
                }else{
                   this.axios.post("https://test.365msmk.com/api/app/smsCode",{
                       mobile: this.fy_zc_sjh,   //（手机号）
                       sms_type: "login"	  //（固定值login）
                   }).then((res)=>{
                       console.log(res)
                   })
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
html,body,.sms-login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    .fy-content{
        width: 100%;
        overflow:auto;
        flex:1;
         .fy_content{
       width: 100%;
       .fy_top{
           width: 100%;
           img{
               width: 60%;
                margin: 1rem auto;
                display: block;
           }
       }
       .fy_num{
           font-size: 0.3rem;
           width: 5rem;
           margin: 0 auto;
           position: relative;
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
           .fy_sms{
               position: absolute;
               right: 0;
               top: 0.3rem;
               color: orange;
               font-size: 0.2rem;
           }
       }
       .fy_others{
           width: 5rem;
           display: flex;
           justify-content: space-between;
           margin: 0 auto;
    
           span{
                font-size: 0.2rem;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #999;
           }
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
