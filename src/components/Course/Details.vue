<template>
  <div class="wll_details">
    <!-- 详情页面 -->
    <div class="wll_destop">
      <p>
        <span class="wll_fhindex" @click="cz()"> &lt; </span>
        <span>课程详情</span>
        <img src="../../../static/course-img/share.png" alt="">
      </p>
    </div>
    <div class="wll_div">
      <div class="wll_detdiv">
        <p>
          <span>{{wll_details.info.title}}</span>
          <img src="../../../static/course-img/sc.png" alt="">
        </p>
        <p>{{wll_details.info.price}}</p>
        <p>
          <span>共{{number}}课时</span>
          <span>{{wll_details.info.sales_num}}人报名</span>
        </p>
        <p>
          <span>开课时间:</span>
          <span>{{wll_periods.start_play}}</span>
        </p>
      </div>
      <div>
        <h2>教学团队</h2>
        <ul>
          <li>
            <img class="wll_img1" :src="url_img[0].teacher_avatar" alt="" @click="pushTearch()">
            <p>{{url_img[0].teacher_name}}</p>
          </li>
        </ul>
      </div>
      <div>
        <h2>课程介绍</h2>
        <p>{{wll_details.info.course_statement}}</p>
      </div>
      <div>
        <h2>课程大纲</h2>
        <ul>
          <li>
            <div class="wll_coldiv">
              <!--              <p>-->
              <!--                <span>111111111111111111111</span>-->
              <!--                <span>111111111111111111</span>-->
              <!--              </p>-->
              <p v-for="(item,key) in Outline" :key="key">
                {{item.periods_title}}------------{{item.start_play}}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h2>课程评论</h2>
        <img src="../../../static/course-img/pic2.png" alt="">
        <p>暂无评论</p>
      </div>
    </div>
    <div class="wll_desfood">
      <h2>立即报名</h2>
    </div>
  </div>
</template>
<script>
    //引入axios请求器
    import axios from "axios";

    export default {
        name: "Details",
        data() {
            return {
                wll_details: {},
                wll_periods: {},
                number: {},
                //课程大纲
                Outline: [],
                url_img: '',
                tearch_id: "",
                collect: JSON.parse(localStorage.getItem("collect")) || []
            }
        },
        mounted() {
            //讲师id
            this.tearch_id = this.$route.query.id;
            // this.axios.get("https://test.365msmk.com/api/app/courseInfo/basis_id=" + this.tearch_id + '?&courseType=' + this.$route.query.courseType,{
            //     headers: {
            //         Authorization: "Bearer " + localStorage.getItem("remembertoken")
            //     }
            // }).then(res => {
            //     console.log(res.data.data);
            //     this.wll_details = res.data.data;
            // });
            //请求数据-----课程基本资料
            this.axios.get("https://test.365msmk.com/api/app/courseInfo/basis_id=" + this.tearch_id + '?&courseType=' + this.$route.query.courseType,{
              headers: {
                        Authorization: "Bearer " + localStorage.getItem("remembertoken")
                    }
            }).then(res => {
                console.log(res.data.data);
                this.wll_details = res.data.data;
            });
            //请求数据----课程大纲，课时等..
            this.axios.post("https://test.365msmk.com/api/app/courseChapter", {
                    id: this.$route.query.id
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("remembertoken")
                    }
                }).then(res => {
                console.log(res.data.data[0]);
                this.Outline = res.data.data;
                this.number = res.data.data.length;
                this.wll_periods = res.data.data[0];
            });
            //接受首页路由传值的讲师姓名和照片
            this.url_img = this.$route.query.urlimg;
            console.log(this.url_img[0].teacher_avatar);
        },
        methods: {
            //跳转讲师详情页
            pushTearch() {
                this.$router.push({
                    path: "/tearch", query: {
                        id: this.tearch_id
                    }
                })
            },
            cz() {
                this.$router.go(-1)
            }
        },
    }
</script>
<style lang="scss" scoped>
  body, html, .wll_details {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .wll_details {
      width: 100%;
      background: #f1f2f5;

      .wll_destop {
        width: 100%;
        height: 0.74rem;
        background: #ffffff;
        border-bottom: 1px solid #f1f2f5;

        p {
          width: 5.86rem;
          height: 0.74rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            font-size: 0.26rem;
          }

          img {
            width: 0.3rem;
            height: 0.3rem;
          }
        }
      }

      .wll_div {
        width: 100%;
        flex: 1;
        overflow: auto;

        .wll_detdiv {
          width: 100%;
          height: 2.43rem;
          background: #ffffff;

          p:nth-of-type(1) {
            width: 5.86rem;
            height: 0.54rem;
            margin: 0 auto;
            padding-top: 0.36rem;
            display: flex;
            justify-content: space-between;

            span {
              font-size: 0.26rem;
            }

            img {
              width: 0.34rem;
              height: 0.34rem;
            }
          }

          p:nth-of-type(2) {
            width: 5.86rem;
            height: 0.4rem;
            font-size: 0.26rem;
            margin: 0 auto;
            color: #ee732e;
            display: flex;
            justify-content: space-between;
          }

          p:nth-of-type(3) {
            width: 5.86rem;
            height: 0.4rem;
            font-size: 0.24rem;
            color: #8a857f;
            margin: 0 auto;

            span:nth-of-type(1) {
              display: inline-block;
              /*width: 1.5rem;*/
              height: 0.2rem;
              border-right: 2px solid #98989a;
            }
          }

          p:nth-of-type(4) {
            width: 5.86rem;
            margin: 0 auto;
            font-size: 0.24rem;
            color: #8a857f;

          }
        }

        div:nth-of-type(2) {
          width: 100%;
          height: 2.42rem;
          background: #ffffff;
          margin-top: 0.26rem;

          h2 {
            width: 5.86rem;
            display: flex;
            margin: 0 auto;
            padding-top: 0.2rem;
            font-size: 0.26rem;
          }

          ul {
            width: 5.86rem;
            height: 1.88rem;
            margin: 0 auto;
            display: flex;
            align-items: center;

            li {
              width: 1.1rem;
              height: 0.98rem;
              line-height: 0.36rem;

              img {
                width: 0.36rem;
                height: 0.36rem;
                margin: 0 auto;
                display: block;
                border-radius: 50%;
              }

              p {
                color: #b0b0b0;
                line-height: 0.36rem;
                margin-left: 20px;
                text-align: center;
              }
            }
          }
        }

        div:nth-of-type(3) {
          width: 100%;
          height: 2rem;
          margin-top: 0.26rem;
          background: #ffffff;

          h2 {
            width: 5.86rem;
            margin: 0 auto;
            padding-top: 0.26rem;
          }

          p {
            width: 5.86rem;
            margin: 0 auto;
            padding-top: 0.26rem;
          }
        }

        div:nth-of-type(4) {
          width: 6.14rem;
          height: 2rem;
          margin-top: 0.30rem;
          background: #ffffff;
          padding: 0.26rem 0 0.26rem 0.26rem;

          h2 {
            width: 5.80rem;

          }

          ul {
            width: 5.80rem;
          }
        }

        div:nth-of-type(5) {
          width: 100%;
          /*height: 3.46rem;*/
          background: #ffffff;
          margin-top: 0.30rem;

          h2 {
            width: 5.86rem;
            margin: 0 auto;
            padding-top: 0.26rem;
          }

          img {

            width: 2.56rem;
            height: 2.76rem;
            margin: 0 auto;
            display: block;
            margin-top: 0.30rem;
          }

          p {
            width: 5.86rem;
            margin: 0 auto;
            font-size: 0.24rem;
            color: #8a857f;
            text-align: center;
            margin-top: 0.3rem;
          }
        }
      }

      .wll_desfood {
        width: 100%;
        height: 86px;
        margin-top: 20px;

        h2 {
          width: 100%;
          height: 86px;
          margin-top: 20px;
          background: #ee732e;
          color: #ffffff;
          text-align: center;
          line-height: 86px;
        }
      }
    }
  }
</style>
