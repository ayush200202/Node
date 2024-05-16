function getBurgerTikki(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            tikki="tikki"+"🍠 "
            resolve(tikki)
        },2000);
    })
}

function getBuns(tikki){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            buns="buns"+"🍞 "+tikki+" buns"+"🍞";
            resolve(buns)
        }, 2000);
    })
}

function getBurger(buns){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            burger=buns+" : "+"Burger🍔"
            resolve(burger)
        }, 2000);
    })
}

getBurgerTikki().then((tikki)=>{
    console.log("Got Tikki "+ "🍠 ")
    return getBuns(tikki)
}).then((buns)=>{
    console.log("Got Buns "+"🍞")
    return getBurger(buns)
}).then((burger)=>{
    console.log(burger)
})

