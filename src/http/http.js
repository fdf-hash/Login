import axios from 'axios';

export default function(methodes,url,data,token){
    // 使用promise，s为成功回调数据，e为失败回调数据
   return new Promise(function(s,e){
        if(token){
            //当一个属性的属性名是变量的时候  访问用成: obj[变量名]   ----- axios[methodes]
            axios[methodes](url,data,{header:{Authorization: "Bearer " + token }}).then(res=>{
                //请求成功的回掉函数
                s(res)
               }).then(res=>{
                //请求失败的回掉函数  
                e(res)
               })
        }else{
              //当一个属性的属性名是变量的时候  访问用成: obj[变量名] ----- axios[methodes]
            axios[methodes](url,data).then(res=>{
                //请求成功的回掉函数
                s(res)
               }).then(res=>{
                //请求失败的回掉函数  
                e(res)
               })
        }
        // if(methodes=="put"){
        //     if(token){
        //         //当一个属性的属性名是变量的时候  访问用成: obj[变量名]   ----- axios[methodes]
        //         axios[methodes](url,{header:{Authorization: "Bearer " + token }},data).then(res=>{
        //             //请求成功的回掉函数
        //             s(res)
        //            }).then(res=>{
        //             //请求失败的回掉函数  
        //             e(res)
        //            })
        //     }else{
        //           //当一个属性的属性名是变量的时候  访问用成: obj[变量名] ----- axios[methodes]
        //         axios[methodes](url,data).then(res=>{
        //             //请求成功的回掉函数
        //             s(res)
        //            }).then(res=>{
        //             //请求失败的回掉函数  
        //             e(res)
        //            })
        //     }
        // }
      
    })
}