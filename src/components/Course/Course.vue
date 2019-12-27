
<template>

        <div class="wll_Course">
            <div class="wll_top">
                <div class="wll_tsk">
                    <h2>特色课</h2>
                    <img src="../../../static/course-img/wll_ glass.jpg" alt="" @click="add()">
                </div>
                <div class="wll_kj">
                    <van-dropdown-menu>
                        <van-dropdown-item title="分类" v-model="wll_value1" :options="wll_option1" />
                        <van-dropdown-item title="排序" v-model="wll_value2" :options="wll_option2" />
                        <van-dropdown-item title="筛选" v-model="wll_value3" :options="wll_option3" />
                    </van-dropdown-menu>
                </div>
            </div>
            <div class="wll_conter">
               <ul class="wll_ul">
                   <li v-for="(item,key) in wll_course" :key="key" class="wll_li" @click="pushDetails(item)">
                       <div class="wll_div">
                            <div>
                                <h2>{{item.title}}</h2>
                            </div>
                            <div>
                                <span>{{item.id}} |</span>
                                <span>共{{item.total_periods}}课时</span>
                            </div>
                            <div>
                                <ul>
                                    <li v-for="(item,key) in item.teachers_list" :key="key">
                                        <img class="wll_img1" :src="item.teacher_avatar" alt="">
                                        <span>{{item.teacher_name}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>{{item.sales_num}}人报名</p>
                                <p :style="item.price=='免费'?'':'color: #ee1f1f;'">￥{{item.total_periods}}.00</p>
                            </div>
                     </div>
                   </li>
               </ul>
            </div>
        </div>
</template>

<script>
    //引入axios请求器
    import axios  from "axios";
    export default {
        name: "Course",
        data() {
            return {
                wll_value1: 0,
                wll_value2: 'a',
                wll_value3: 'I',
                wll_option1: [
                    { text: '年级', value: 0 },
                    { text: '学科', value: 1 },
                ],
                wll_option2: [
                    { text: '综合排序', value: 'a' },
                    { text: '最新', value: 'b' },
                    { text: '最热', value: 'c' },
                    { text: '价格从低到高', value: 'd' },
                    { text: '价格从高到低', value: 'e' },
                ],
                wll_option3: [
                    { text: '默认排序', value: 'I' },
                    { text: '好评排序', value: 'II' },
                    { text: '销量排序', value: 'IIi' },
                ],
                collect:JSON.parse(localStorage.getItem("collect")) || [],
                wll_course:[]
            }
        },
        mounted() {
            // axios.get("../../../static/date.json").then((msg)=>{
            //     // console.log(msg);
            //     this.wll_course=msg.data.data;
            // })
            this.axios.get("https://test.365msmk.com/api/app/courseBasis?page=1&limit=10&",{
                header:{Authorization: "Bearer " + localStorage.getItem("remembertoken")}
            }).then((res)=>{
                console.log(res.data.data)
                 this.wll_course=res.data.data.list;
            })
        },
        methods:{
            add(){
                this.$router.go(-1)
            },
            pushDetails(item) {
                this.$router.push({
                    path: "/details", query: {
                        //传递课程id
                        id: item.id,
                        //传递课程类型
                        courseType: item.course_type,
                        urlimg: item.teachers_list
                    }
                })
            },
        }
    }
</script>

<style lang="scss">
    body,html,.wll_Course{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction:column;
        .wll_top{
            width: 100%;
            height: 1.44rem;
            .wll_tsk{
                width: 100%;
                height: 0.74rem;
                display: flex;
                align-items: center;
                h2{
                    margin-left: 2.72rem;
                    color: #4d4d4d;
                    font-size: 0.26rem;
                    font-weight: normal;
                }
                img{
                    width: 0.36rem;
                    height: 0.36rem;
                    margin-left: 2.22rem;
                }
            }
            .wll_kj{
                width: 100%;
                height: 0.72rem;
                .van-dropdown-menu{
                    width: 100%;
                    height: 0.72rem;

                }
                .van-ellipsis{
                    height: 0.72rem;
                    line-height: 0.72rem;
                    font-size: 0.22rem;
                }
            }
        }
        .wll_conter{
            width: 100%;
            flex: 1;
            overflow: auto;
            background: #f1f2f5;
            ul{
                width: 5.86rem;
                margin: 0 auto;
                .wll_li{
                    width: 5.86rem;
                    height: 2.88rem;
                    margin: 0 auto;
                    margin-top: 28px;
                    background: #ffffff;
                    border-radius: 10px;
                    .wll_div{
                        width: 5.86rem;
                        height: 2.88rem;
                        div{
                            width: 5.45rem;
                            margin: 0 auto;
                        }
                        div:nth-of-type(1){
                            height: 0.52rem;
                            h2{
                                font-weight: 500;
                                font-size: 0.28rem;
                                padding-top: 0.26rem;
                                color: #000000;
                            }

                        }
                        div:nth-of-type(2){
                            padding-top: 0.16rem;
                            span{
                                font-size: 0.24rem;
                                color: #666666;
                            }
                        }
                        div:nth-of-type(3){
                            width: 5.45rem;
                            height: 1.22rem;
                            border-bottom: 1px solid #f5f5f5;
                            ul{
                                width: 5.45rem;
                                height: 1.22rem;
                                display: flex;
                                align-items: center;
                                li{
                                    // width: 33.33%;
                                    height: 0.36rem;
                                    line-height: 0.36rem;
                                    line-height: 56px;
                                    display: flex;
                                    align-items: center;
                                    img{
                                        width: 0.36rem;
                                        height: 0.36rem;
                                        border-radius: 50%;
                                    }
                                    span{
                                        color: #b0b0b0;
                                        line-height: 0.36rem;
                                        margin-left: 20px;
                                        font-size: 0.2rem;
                                    }
                                }
                            }
                        }
                        div:nth-of-type(4){
                            height: 0.74rem;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            p{
                                height: 94px;
                                line-height: 94px;
                                color: #8c8c8c;
                                 font-size: 0.24rem;
                            }
                            p:nth-of-type(2){
                                font-size: 0.24rem;
                            }
                        }
                    }
                }
            }
        }
    }
    .van-dropdown-item__option--active, .van-dropdown-item__option--active .van-dropdown-item__icon {
        color: red;
    }
    .van-dropdown-menu__title--active {
        color: red;
    }
</style>
