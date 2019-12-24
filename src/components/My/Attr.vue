<template>
  <div class="attr">
    <div class="top">
      <i class="fa fa-angle-left" aria-hidden="true" @click="cz()"></i>
      <p @click="cun()">保存</p>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item,key) in data" :key="key">
          <input type="checkbox" @click="add(key)" v-model="item.falge" />
          <p>{{item.name}}</p>
        </li>
      </ul>
      {{this.arr}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Attr",
  data() {
    return {
      data: [],
      arr: JSON.parse(localStorage.getItem("attr"))||[],
      attr_id: "",
      attr_val_id: "",
      attr: "学科",
      user_attr: "",
      user: ""
    };
  },
  mounted() {
    var arr = [];
    arr = this.$route.params.attr;
    for (var i in arr.value) {
      console.log(arr.value[i]);
      var obj = {
        id: arr.value[i].id,
        name: arr.value[i].name,
        falge: false
      };
      this.data.push(obj);
    }
  },
  methods: {
    add(id) {
      this.data[id].falge = !this.data[id].falge;
      // console.log(id)
      console.log(this.data[id].falge)
    },
    cun() {
       localStorage.removeItem('attr');
       this.arr=[]
      for (var i in this.data) {
        if (this.data[i].falge == true) {
          console.log(this.data[i].id)
          var obj = {
            attr_id: 2,
            attr_val_id: this.data[i].id
          };
          this.arr.push(obj);
         console.log(this.arr)
          localStorage.setItem("attr", JSON.stringify(this.arr));
        }
      }
          this.axios
            .put(
              "https://test.365msmk.com/api/app/user",
              {
                user_attr: JSON.stringify(this.arr)
              },
              {
                headers: {
                  Authorization:
                    "Bearer " + localStorage.getItem("remembertoken")
                }
              }
            )
            .then(res => {
              if (res.data.code == 200) {
                this.$router.push({
                  name: "Information",
                  params: {
                    subject: this.user
                  }
                });
              }
            });
    },
    cz() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
body,
html.attr {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #d2d2d1;
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
    ul {
      width: 100%;
      li {
        height: 0.96rem;
        display: flex;
        align-items: center;
        background: #fff;
        margin-bottom: 0.05rem;
        input {
          width: 0.42rem;
          height: 0.42rem;
          display: inline-block;
          margin-right: 0.2rem;
          margin-left: 0.2rem;
        }
        p {
          font-size: 0.28rem;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
