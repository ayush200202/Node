function getBurgerTikki(callback){
        setTimeout(() => {
            tikki="tikki"+"🍠 "
            callback(tikki)
        },2000);
    
}

function getBuns(tikki,callback){
        setTimeout(() => {
            buns="buns"+"🍞 "+tikki+" buns"+"🍞";
            callback(buns)
        }, 2000);
    
}

function getBurger(buns,callback){
        setTimeout(() => {
            burger=buns+" : "+"Burger🍔"
            callback(burger)
        }, 2000);
    
}

getBurgerTikki((tikki)=>{
    console.log(tikki)
    getBuns(tikki,(buns)=>{
        console.log(buns)
        getBurger(buns,(burger)=>{
            console.log(burger)
        })
    })
})