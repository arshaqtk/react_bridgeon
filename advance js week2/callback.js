function getDataFromApi(cb){
    setTimeout(()=>{
        cb(5)
    },1000)
}

function getDataFromApi2(cb){
    setTimeout(()=>{
        cb(5)
    },1000)
}


function getDataFromApi3(cb){
    setTimeout(()=>{
        cb(5)
    },1000)
}

getDataFromApi((value)=>{
    getDataFromApi2((api2value)=>{
        getDataFromApi3((api3value)=>{
            console.log(value+api2value+api3value)
        })
    })
})