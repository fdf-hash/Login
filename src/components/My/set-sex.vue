<template>
  <div class="sex">
    <div class="top">
      <i class="fa fa-angle-left" aria-hidden="true" @click="cz()"></i>
      <p @click="cun()">保存</p>
    </div>
    <div class="content">
      <p>
        <input type="radio" name="sex" v-model="gril" value="0" class="inp" @click="xuan($event)" />男
      </p>
      <p>
        <input type="radio" name="sex" v-model="gril" value="1" class="inp" @click="xuan($event)" />女
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "set-sex",
  data() {
    return {
      gril: 0,
      num:0
    };
  },
  methods: {
    cun() {
      this.axios.put("https://test.365msmk.com/api/app/user",
          {
              sex:this.num
           },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("remembertoken")
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if(res.data.code==200){
              this.$router.push("/Information")
          }
        });
    },
    cz() {
      this.$router.go(-1);
    },
    xuan(event) {
      console.log(event.target.value);
       this.num = event.target.value
       console.log(this.num)
    }
  }
};
</script>

<style lang="scss" scoped>
body,
html.sex {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f0f2f5;
  .top {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    background: #fff;
    i {
      display: block;
      font-size: 0.4rem;
      margin-left: 0.2rem;
    }
    p {
      font-size: 0.24rem;
      margin-right: 0.2rem;
    }
  }
  .content {
    width: 100%;
    flex: 1;
    overflow: hidden;
    p {
      width: 100%;
      background: rgb(233, 231, 231);
      height: 0.8rem;
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      input {
        outline: none;
        border: none;
        width: 0.26rem;
        height: 0.26rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>