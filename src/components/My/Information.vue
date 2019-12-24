<template>
	<div class="information">
		<!--头部导航-->
		<div class="dh">
			<img @click="fhxin" class="fan" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="" />
			<span>个人信息</span>
		</div>
		<!--修改信息-->
		<ul class="in-xinx">
			<!--头像-->
			<li class="in-tx" @click="showPopup">
				<span>头像</span>
				<span><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="" /><van-icon class="van-jt" name="arrow" /></span>
			</li>
			<van-popup v-model="show" position="bottom" :style="{ height: '30%'}" >内容</van-popup>

			<!--昵称-->
			<li class="in-tx" @click="name(data.data.nickname)">
				<span>昵称</span>
				<span>{{data.data.nickname}}<van-icon name="arrow" class="van-jt"/></span>
			</li>

			<!--手机号-->
			<li class="in-tx">
				<span>手机号</span>
				<span style="margin-right: 0.46rem;">{{data.data.mobile}}</span>
			</li>


	    	<!--性别-->
			<li class="in-tx" @click="sex">
				<span>性别</span>
				<span>{{data.data.sex==0?"男":"女"}}<van-icon class="van-jt" name="arrow" /></span>
			</li>



			<!--出生日期-->
			<li class="in-tx" @click="showshijian = true">
				<span>出生日期</span>
				<span>{{data.data.birthday}}<van-icon class="van-jt" name="arrow"/></span>
			</li>
			<van-popup v-model="showshijian" position="bottom" :style="{ height: '30%'}" >
			<van-datetime-picker v-model="currentDate" type="date"  :min-date="minDate" @cancel="showshijian  = false"  @confirm="handleend"/>
			</van-popup>



			<!--所在城市-->
			<li class="in-tx" @click="showdiqu = true">
				<span>所在城市</span>
				<span>{{data.data.province_name+','+data.data.city_name+','+data.data.district_name}} <van-icon class="van-jt" name="arrow" /></span>
			</li>
			<van-popup v-model="showdiqu" position="bottom" :style="{ height: '30%'}" >
				<van-area :area-list="areaList" :columns-num="3" @cancel="showdiqu  = false"  @confirm="queren" />
			</van-popup>



			<!--学科-->
			<li class="in-tx"  @click="attr()" >
				<span>学科</span>
				<span>
                <span v-if="item.attr=='学科'" v-for="(item,key) in this.sub" :key="key">{{item.attr_value}}</span>
          <van-icon class="van-jt" name="arrow" /></span>
			</li>



			<!--年级-->
			<li class="in-tx"  @click="showpicker()">
				<span>年级</span>
				<span>
			    <span v-if="item.attr=='年级'" v-for="(item,key) in this.sub" :key="key">{{item.attr_value}}</span>
					<van-icon class="van-jt" name="arrow" /></span>
			</li>
			<van-popup v-model="showPicker" position="bottom" :style="{ height: '30%' }">
				<van-picker  show-toolbar :columns="columns" @cancel="showPicker=false"  @confirm="onConfirm" />
			</van-popup>
		</ul>
	</div>
</template>

<script>
	 export default {
		name: "information",
		created(){
			// 请求基本资料
			this.axios.get("https://test.365msmk.com/api/app/userInfo?",{
               headers:{Authorization: "Bearer "+localStorage.getItem("remembertoken")}
			}).then((res)=>{
			//    基本信息
			   this.data = res.data;
			//    学科 年级
			   this.sub = res.data.data.attr
            //   localStorage.setItem("attr",JSON.stringify(res.data.data.attr))
			})
			// 请求学科  年级
			this.axios.get("https://test.365msmk.com/api/app/module/attribute/1?",{
               headers:{Authorization: "Bearer "+localStorage.getItem("remembertoken")}
			}).then((res)=>{
		     //选择的年级
			  this.grade = res.data.data[0].value
			   console.log(this.grade)
			 //选择的学科
			   this.subject = res.data.data[1]
			})
		},
       mounted(){
        //    localStorage.setItem("attr",JSON.stringify(res.data.data.attr))
       },
        data(){
        	return{
				// 读取本地存储学科
        	    sub:JSON.parse(localStorage.getItem("attr")),
                user:"",
                arr:"",
                // 基本信息
                data:"",
                //年级
                grade:"",
                //学科
                subject:"",
        		show:false,
        		qy:"",
        		ke:'',
        		xianshi:'',
        		titletime:'',
        		showPicker: false,
        		showshijian:false,
        		showxueke:false,
        		showdiqu:false,
        		areaList:{
 					province_list: {
   							110000: '北京市',
   							120000: '天津市'
  									},
  					city_list: {
  							110100: '北京市',
   							110200: '县',
    						120100: '天津市',
    						120200: '县'
  									},
  					county_list: {
   							110101: '东城区',
   							110102: '西城区',
    						110105: '朝阳区',
    						110106: '丰台区',
    						120101: '和平区',
    						120102: '河东区',
    						120103: '河西区',
    						120104: '南开区',
    						120105: '河北区'
  							}
  					},
				columns:[],
        		minDate: new Date(1999, 1, 1),
        		currentDate: new Date()

        	}
        },
        methods:{
        	fhxin (){
        		this.$router.push("/my")
        	},
        	showPopup(){
				this.show=true
        	},
//      	年级列表
        	onConfirm(value) {
				// 定义一个对象，用来保存学级
              var obj = {
                  attr_id: 1,
                  attr_val_id: value.id,
			  }
			//   读取本地的学科记录，用来将用户的学级和学级
			  var arr =JSON.parse(localStorage.getItem("attr"))||[]
			//   循环遍历，将里面重复的学级截取
			  for(var i in arr){
				  console.log(arr[i].attr_id)
				  if(arr[i].attr_id==1){
					  arr.splice(i,1)
				  }
			  }
			  console.log(arr)
              arr.push(obj);
			  localStorage.setItem("attr", JSON.stringify(arr));
              this.arr = JSON.stringify(arr);
     		 this.axios.put("https://test.365msmk.com/api/app/user",{
            		 user_attr: this.arr
         },{
             headers:{Authorization: "Bearer "+localStorage.getItem("remembertoken")}
         }).then((res)=>{
             console.log(res.data);
             if(res.data.code == 200){
                 this.axios.get("https://test.365msmk.com/api/app/userInfo?",{
                     headers:{Authorization: "Bearer "+localStorage.getItem("remembertoken")}
                 }).then((res)=>{
                     console.log(res)
                     this.data = res.data;
                     this.sub = res.data.data.attr
					//  localStorage.setItem("attr",JSON.stringify(res.data.data.attr))
					 this.$router.push("/Information");
                 })
                
             }
         })
     		 this.showPicker = false;

   			 },
// 			 学科列表
        	onConkemu(ke){
        		this.showxueke = false;
     		    this.ke = ke;
			},
			// 年级
			showpicker(){
				this.showPicker=true
				for(var i in this.grade){
					console.log(this.grade[i].name)
					console.log(this.grade[i].id)
                    var obj = {text:this.grade[i].name,disabled:false,id:this.grade[i].id,}
					this.columns.push(obj)
				}
			},
//      	时间列表
        	handleend(){
        		this.showshijian = false;
				// this.titletime=
				// console.log(this.titletime)
				this.axios.put("https://test.365msmk.com/api/app/user",{
                    birthday: this.timeFormat(this.currentDate)
				},{
					headers:{Authorization: "Bearer "+localStorage.getItem("remembertoken")}
				}).then((res)=>{
					console.log(res.data)
					if(res.data.code == 200){
						this.$router.go(0);
						return false;
					}else if(res.data.code == 201){
						this.$toast(res.data.msg)
						return false
					}
				})
        	},
        	 timeFormat(time) { // 时间格式化 2019-09-08
       			 let year = time.getFullYear();
        		let month = time.getMonth() + 1;
        		let day = time.getDate();
        		return year + '-' + month + '-' + day
    },
        	 //地区列表
        	 queren(qy){
        	 	this.showdiqu = false;

        	 	console.log(qy)
        	 	this.xianshi =qy[0].name+ ","+qy[1].name+","+qy[2].name
        	 },
            //============================================================================================================
        //    选择学科
            attr(){
        	    this.$router.push({name:"Attr",params:{
        	       attr: this.subject
                  }})
            },
        //    修改姓名
            name(name){
        	    this.$router.push({path:"/set-name",query:{
        	       data:name
        	    }})
			},
			// 修改性别
			sex(){
               this.$router.push("/set-sex")
			}
			// 生日
        }
    }
</script>

<style scoped>
	.information{
		background: #f0f2f5;
		min-height: 100%;
	}
.dh{
	width: 100%;
	height: 1rem;
	background: #fff;
	line-height: 1rem;
	display: flex;
	/*text-align: center;*/
	align-items: center;
	position: relative;
}
.dh .fan{
	width: 0.2rem;
	height: 0.35rem;
	display: block;
	margin-left: 0.3rem;
}
.dh span{
	display: block;
	font-size: 0.3rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}
/*修改信息样式*/
.in-xinx{
	margin: 0.2rem 0;
	padding: 0.13rem 0.1rem;
	background: #fff;
}
.in-xinx .in-tx{
	height: 1rem;
	line-height: 1rem;
	display: flex;
    justify-content: space-between;
    position: relative;
}
.in-xinx .in-tx span{
	font-size: 0.25rem;
    color: #595959;
}
.in-xinx .in-tx img{
	border-radius: 50%;
    vertical-align: middle;
    width: 0.7rem;
    height: 0.7rem;
}
.in-xinx .van-jt{
	margin-left: 0.2rem;
}
</style>
