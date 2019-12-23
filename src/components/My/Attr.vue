<template>
    <div class="attr">
      <div class="top">
        <i class="fa fa-angle-left" aria-hidden="true" @click="cz()"></i>
        <p @click="cun()">保存</p>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item,key) in data.value" :key="key">
            <input type="checkbox"  @click="add($event,item)" v-model="item.falge">
            <p>{{item.name}}</p>
          </li>
        </ul>
        {{this.user_attr}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "Attr",
        data(){
            return{
                data:'',
                attr_id: '',
                attr_val_id: '',
                attr: "学科",
                user_attr:""
            }
        },
        mounted() {
            this.data = this.$route.params.attr;
            this.data.value.falge=false
        },
        methods:{
            add(event,item){
                // console.log(item);
                // console.log(event.target.checked);
                //学科id
                if(event.target.checked){
                    this.attr_val_id=item.id;
                    var obj = {
                        "attr_id":2,
                        "attr_val_id":item.id
                    }
                    var arr = []
                    arr.push(obj);
                    this.user_attr=JSON.stringify(arr)
                    // this.user_attr.add(arr)
                    return false;
                }else if(event.target.checked==false){
                    // for(var i in this.user_attr){
                    //     // console.log(this.user_attr[i].attr_val_id)
                    //     if(item.id == this.user_attr[i].attr_val_id){
                    //         console.log(i)
                    //     }
                    // }
                    console.log(this.attr_val_id);
                    // this.user_attr.splice(obj.);
                    return false;
                }
            },
            cun(){
                // alert(1)
               //  // console.log(event.target.checked)
               // if(this.falge){
               //     console.log(item)
               // }
                this.axios.put("https://test.365msmk.com/api/app/user",{
                    user_attr:this.user_attr
                },{
                    headers:{Authorization: "Bearer "+localStorage.getItem("remembertoken")}
                }).then((res)=>{

                })
            },
            cz(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss">
    body,html.attr{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background: #d2d2d1;
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
        ul{
          width: 100%;
          li{
            height: 0.96rem;
            display: flex;
            align-items: center;
            background: #fff;
            margin-bottom: 0.05rem;
            input{
              width: 0.42rem;
              height: 0.42rem;
              display: inline-block;
              margin-right: 0.2rem;
              margin-left: 0.2rem;
            }
            p{
              font-size: 0.28rem;
              font-weight: 600;
            }
          }
        }
      }
    }
</style>
