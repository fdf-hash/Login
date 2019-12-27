<template>
  <div class="zjb_xiang">
    <!-- 详情页面布局开始 -->
    <div class="zjb_xiang_con">
      <div class="zjb_xiang_header">
        <!-- 头部布局开始 -->
        <span> <img @click="zjb_goHome"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
                    alt=""></span>
        <p>讲师详情</p>
        <!-- 头部布局结束 -->
      </div>
      <div class="zjb_xiang_head_bottom">
        <!-- 标签布局开始 -->
        <ul>
          <li>
            <img :src="Tearch.teacher.avatar" alt="教师图片">
            <div class="zjb_xiang_right">
              <div>
                <p>{{Tearch.teacher.teacher_name}} <span>{{Tearch.teacher.level_name}}</span></p>
                <p>{{Tearch.teacher.sex==1?'男':'女'}}<span>{{Tearch.teacher.teach_age}}年教龄</span></p>
              </div>
              <p @click="zjb_guan" v-show="!flg">关注</p>
              <p @click="zjb_guan" v-show="flg">已关注</p>
            </div>
          </li>
        </ul>
        <!-- 标签布局结束 -->
      </div>
      <div class="zjb_xiang_con_tab">
        <!-- 选项卡布局开始 -->
        <van-tabs @click="Speaker">
          <van-tab title="讲师介绍" class="zjb_xiang_jie">
            <ul>
              <li>
                <p>教学年龄<span>{{Trarch_details.attr[2].attr_value[0].attr_value_name}}</span></p>
                <p>授课价格<span>{{Trarch_details.attr[3].attr_value[0].attr_value_name}}</span></p>
                <div><p>老师简洁</p><span class="zjb_xiang_jie_span">{{Trarch_details.intro}}</span></div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="主讲课程">
            <div id="zjb_xiang_jie_con_two">
              <ul>
                <li>
                  <h1>dszjfkjgjkgsdgz</h1>
                  <h2>
                    <p>
                      10月23日13:00〜10月23日14:45&nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>
                    <p>
                      共2课时
                    </p>
                  </h2>
                  <h3>
                    <img src="" alt="">
                    <span>hang</span>
                  </h3>
                  <h4>
                    <p>
                      2人报名
                    </p>
                    <p>
<!--                      :style="item.price=='免费'?'':'color: #ee1f1f;'"-->
                      sdzs
                    </p>
                  </h4>
                </li>
              </ul>
            </div>
          </van-tab>
          <van-tab title="学员评价" class="zjb_xiang_jie_con_three">
            <div class="comment-top">
              <div>
<!--                默认显示评论-->
                <ul>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                </ul>
                <i class="fa fa-chevron-circle-down" @click="flage=!flage"></i>
              </div>
<!--              默认隐藏评论-->
              <div v-show="flage">
                <ol>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                  <li>深入浅出 <span>(1)</span> </li>
                </ol>
              </div>
            </div>
<!--              具体评论用户即星级-->
              <div class="comment-user" v-for="(item,key) in Tearch_comment" :key="key">
              <div>
                <!--                用户头像-->
                <img :src="item.avatar" alt="">
                <!--                星级-->
                <div id="comment-star">
                  <ul>
                    <li>深入浅出 </li>
                    <li>深入浅出 </li>
                    <li>深入浅出 </li>
                    <li>深入浅出 </li>
                    <li>深入浅出 </li>
                    <li>深入浅出 </li>
                    <li>深入浅出 </li>
                    <li>深入浅出 </li>
                    <li>深入浅出 </li>
                  </ul>
                </div>
              </div>
                <p>{{item.content}}</p>
              </div>
          </van-tab>
        </van-tabs>
        <!-- 选项卡布局结束 -->
      </div>
    </div>


    <div class="zjb_xiang_footer">
      <!-- 尾部布局开始 -->
      <p @click="zjb_tiao">立即报名</p>
      <!-- 尾部布局结束 -->
    </div>
    <!-- 详情页面布局结束 -->
  </div>
</template>

<script>
    export default {
        name: "xiang",
        data() {
            return {
                id: '',
                flg: false,
                title: "关注 ",
                //讲师信息
                Tearch: '',
                //讲师介绍
                Trarch_details: '',
                //    评价
                Tearch_comment: [],
            //    评价显示隐藏
                flage:false,
            //    五星好评
                value:5,

            }
        },
        mounted() {//--->接受首页点击，传递过来的id
            this.id = this.$route.query.id;
            //讲师个人信息
            this.axios.get("https://test.365msmk.com/api/app/teacher/" + this.id + '?', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("remembertoken")
                }
            }).then(res => {
                console.log(res.data.data);
                this.Tearch = res.data.data
            });
            //讲师介绍
            this.axios.get("https://test.365msmk.com/api/app/teacher/info/" + this.id + '?', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("remembertoken")
                }
            }).then(res => {
                console.log(res.data.data);
                this.Trarch_details = res.data.data
            });
        },
        methods: {
            //点击切换评论显示隐藏
            // xi(){
            //     alert(1);
            //     this.flage=!this.flage
            // },
            zjb_goHome() {//--->点击箭头，返回首页
                this.$router.go(-1);
            },
            zjb_guan() {//--->点击关注
                this.flg = !this.flg;//--->取反
                if (this.flg) {
                    this.$toast.success('已关注');
                } else {
                    this.$toast.success('已取消');
                }
            },
            zjb_tiao() {//--->点击立即报名，跳转页面
                this.$router.push({name: 'bao', query: {id: this.id}})
            },
            //点击切换
            Speaker() {
                // 主讲课程
                this.axios.post("https://www.365msmk.com/api/app/teacher/mainCourse", {
                    page: 2,
                    limit: 10,
                    teacher_id: Number(this.id)
                }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("remembertoken")
                    }
                }).then(res => {
                    console.log(res.data);
                    this.Tearch = res
                });
                // //学员评价
                this.axios.post("https://test.365msmk.com/api/app/teacher/comment", {
                    page: 2,
                    limit: 10,
                    teacher_id: Number(this.id)
                }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("remembertoken")
                    }
                }).then(res => {
                    console.log(res.data);
                    this.Tearch_comment = res.data.data.comment.list
                });
            }
        }
    }
</script>

<style scoped lang="scss">
  .zjb_xiang {
    height: 100%;
    font-size: .16rem;
    line-height: .2rem;
    width: 6.4rem;
    background: rgb(240, 242, 245);;
    display: flex;
    flex-direction: column;
  }

  .zjb_xiang_con {
    flex: 1;
    overflow: auto;
    position: relative;
  }

  .zjb_xiang_header {
    height: 1.7rem;
    background: linear-gradient(180deg, #63b7fe, #4e7de3);
    display: flex;

    & > span {
      display: inline-block;
      width: .6rem;
      height: .75rem;
      //    border: 1px solid #000;
      text-align: center;
      line-height: .9rem;

      & > img {
        height: .27rem;
        width: .15rem;
        // border: 1px solid #000;
        font-size: .4rem;

      }
    }

    & > P {
      height: .75rem;
      width: 5.37rem;
      //    border: 1px solid #000;
      font-size: .3rem;
      text-align: center;
      line-height: .75rem;
      color: #fff;
    }

  }

  .zjb_xiang_head_bottom {
    position: absolute;
    top: .7rem;
    left: .16rem;
    width: 6.06rem;
    height: 1.55rem;
    // border: 1px solid #000;
    // margin: 0 auto;
    background: #fff;
    border-radius: .08rem;

    ul {
      width: 5.55rem;
      height: 1.3rem;
      //  border: 1px solid #000;
      margin: 0 auto;

      li {
        height: 100%;
        display: flex;
        align-items: center;

        & > img {
          width: .68rem;
          height: .68rem;
          margin-right: .2rem;
        }

        & > .zjb_xiang_right {
          display: flex;

          & > div {
            width: 3.6rem;
            height: .56rem;
            //   border: 1px solid #000;
            padding: .1rem 0;

            & > p:nth-child(1) {
              font-size: .25rem;
              color: #595959;

              & > span {
                font-size: .18rem;
                color: #EA7A2F;
                margin-left: .1rem;
              }
            }

            & > p:nth-child(2) {
              font-size: .2rem;
              color: #b7b7b7;
              margin-top: .2rem;

              & > span {
                font-size: .18rem;
                color: #b7b7b7;
                margin-left: .08rem;
              }
            }
          }

          & > p:nth-child(2) {
            font-size: .25rem;
            margin-top: .14rem;
            width: 1.05rem;
            height: .48rem;
            //  border: 1px solid #000;
            text-align: center;
            line-height: .48rem;
            background: #ebeefe;
            font-size: .22rem;
            color: red;
            border-radius: .4rem;
          }

          & > p:nth-child(3) {
            margin-top: .24rem;
            font-size: .25rem;
            margin-left: .16rem;
            color: #b7b7b7;
          }
        }
      }
    }
  }

  .zjb_xiang_con_tab {
    margin-top: 1rem;
  }

  >>> .van-tab--active {
    color: #EA7A2F;
    font-size: .25rem;
  }

  >>> .van-tab {
    font-size: .25rem;
  }

  >>> .van-ellipsis {
    height: .76rem;
    line-height: .76rem;
  }

  >>> .van-tabs .van-tabs--line {
    height: .76rem;
    line-height: .76rem;
  }

  >>> .van-tabs--line .van-tabs__wrap {
    height: .76rem;
    line-height: .76rem;
  }

  >>> .van-tabs__line {
    width: .43rem !important;
  }

  >>> .van-tabs__content {
    background: #fff;
  }

  .zjb_xiang_footer {
    width: 100%;
    height: 1rem;
    background: #eb6100;
    color: #fff;
    font-size: 0.3rem;
    font-weight: 400;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    bottom: 0;
  }

  .zjb_xiang_jie {
    width: 100%;
    height: auto;

    ul {
      padding-top: .2rem;

      li {
        width: 5.8rem;
        height: 4rem;
        // border: 1px solid #000;
        margin: 0 auto;

        & > p {
          margin-bottom: .4rem;
          font-size: .22rem;
          color: #b7b7b7;

          & > span {
            margin-left: .4rem;

          }


        }

        & > div {
          display: flex;

          & > P {
            font-size: .22rem;
            color: #b7b7b7;
          }

          & > .zjb_xiang_jie_span {
            display: block;
            width: 4rem;
            height: auto;
            //    border: 1px solid #000;
            margin-left: .4rem;
            font-size: .22rem;
            color: #b7b7b7;
            line-height: .4rem;
          }
        }
      }
    }
  }

    #zjb_xiang_jie_con_two{
      width: 6rem;
      margin: 0 auto;
      & > p {
        font-size: .27rem;
        border-left: 4px solid red;
        padding-left: .2rem;
        color: #595959;
        height: .34rem;
        line-height: .34rem;
      }

      ul {
        width: 6rem;
        margin: 0.07rem auto 0;

        li {
          height: 3rem;
          background: #fff;
          border-radius: 0.2rem;
          padding: 0 0.24rem;
          margin-bottom: 0.17rem;

          h1 {
            font-weight: normal;
            font-size: 0.26rem;
            padding-top: 0.24rem;
          }

          h2 {
            font-weight: normal;
            height: 0.5rem;
            display: flex;
            align-items: center;

            p {
              font-size: 0.2rem;
              line-height: 0.5rem;
            }
          }

          h3 {
            height: 1.1rem;
            display: flex;
            align-items: center;

            img {
              width: 0.68rem;
              height: 0.68rem;
              border-radius: 50%;
            }

            span {
              display: inline-block;
              font-size: 0.2rem;
              color: rgba(0, 0, 0, .45);
              margin-left: 0.1rem;
            }
          }

          h4 {
            height: 0.75rem;
            border-top: 1px solid #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: normal;

            p:nth-child(1) {
              font-size: 0.28rem;
              color: rgba(0, 0, 0, .45)
            }

            p:nth-child(2) {
              font-size: 0.28rem;
              color: #44a426;
            }
          }
        }
      }
  }

  .zjb_xiang_jie_con_three {
    width: 100%;
    padding: 0 0.3rem;
    .comment-top {
      padding-top: 0.3rem;
      width: 5.8rem;
      div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        ul {
          width: 5.1rem;
          display: flex;
          justify-content: space-around;
          li {
            width: 1.5rem;
            font-size: 0.2rem;
            text-align: center;
            height: 0.46rem;
            line-height: 0.46rem;
            border: 2px solid #e55d04;
            color: #e55d04;
            border-radius: 0.1rem;
            margin-bottom: 0.15rem;
          }
        }
        i {
          display: block;
          font-size: 0.3rem;
          color: #dddddd;
          line-height: 0.46rem;
        }
      }

      div:nth-child(2) {
        width: 5.1rem;
        display: flex;
        justify-content: space-between;
        ol {
          width: 5.1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          li {
            width: 1.5rem;
            font-size: 0.2rem;
            text-align: center;
            height: 0.46rem;
            line-height: 0.46rem;
            border: 2px solid #e55d04;
            color: #e55d04;
            border-radius: 0.1rem;
            margin-bottom: 0.15rem;
          }
        }
      }
    }
    /*  用户星级和评论具体内容样式*/
      .comment-user{
        margin-top: 0.3rem;
        border-bottom: 0.01rem solid  rgba(0, 0, 0, .45);
        div{
          display: flex;
          justify-content: space-between;
          img{
            width: 0.46rem;
            height: 0.46rem;
            border-radius: 50%;
          }
          #comment-star{
            margin-right: 0.28rem;
            ul{
              width: 4.8rem;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              margin-top: 0.3rem;
              li{
                background: #f5f5f5;
                border: none;
                font-size: 0.2rem;
                width: 1.5rem;
                height: 0.38rem;
                text-align: center;
                line-height: 0.38rem;
                border-radius: 0.1rem;
                color: #909090;
                margin-bottom: 0.08rem;
              }
            }
          }
        }
        p{
          font-size: 0.2rem;
          color: #909090;
          line-height: 0.48rem;
          margin-left:0.8rem;
        }
      }
  }
</style>
