<template>
  <div class="name">
    <div class="top">
      <i class="fa fa-angle-left" aria-hidden="true" @click="cz()"></i>
      <p @click="cun()">保存</p>
    </div>
    <div class="content">
      <p>
        <input type="text" v-model="title">
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "set-name",
        data(){
            return{
                title:''
            }
        },
        created() {
            this.title = this.$route.query.data
        },
        methods:{
           cun(){
            this.axios.put("https://test.365msmk.com/api/app/user",{
                 nickname: this.title
            },{
               headers:{Authorization: "Bearer "+localStorage.getItem("remembertoken")}
            }).then((res)=>{
               if(res.data.code == 200){
                 this.$router.push("/Information")
               }
            })
           },
           cz(){
             this.$router.go(-1)
           }
        }
    }
</script>

<style lang="scss" scoped>
  body,html.name{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f0f2f5;
    .top{
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eeeeee;
      background: #fff;
      i{
        display: block;
        font-size: 0.4rem;
        margin-left: 0.2rem;
      }
      p{
        font-size: 0.24rem;
        margin-right: 0.2rem;
      }
    }
    .content{
      width: 100%;
      flex: 1;
      overflow: hidden;
      p{
        width: 100%;
        background: rgb(233, 231, 231);
          input{
          outline: none;
          border: none;
          width: 6rem;
          height: 0.82rem;
          display: inline-block;
          margin-left: 0.2rem;
          font-size: 0.3rem;
          background: rgb(233, 231, 231);
        }
      }
    }
  }
</style>
