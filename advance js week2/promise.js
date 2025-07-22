// const promise =new Promise((resolve,reject)=>{
//     reject("Failed");
// })

// promise.then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error)
// })




function getDataFromApi(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        res(num)
    },1000)
    })
}
function getDataFromApi2(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        res(num)
    },1000)
    })
}



getDataFromApi(5)
.then((res)=>{
    return getDataFromApi2(res+5)
}).then((res)=>{
    console.log(res)
})