const promiseobj= new Promise((resolve,reject)=>{
    setTimeout(() => {
        user="Ayush"
        pass="1234"
        u=prompt("Enter username :")
        p=prompt("Enter Password :")
        if(user===u && pass===p){
            resolve("Promise is completed and valid")
        }
        else{
            reject("Promise Failed and invalid")
        }

    }, 2000);
})

promiseobj.then((msg)=>{
    console.log(msg)
}).catch((errmsg)=>{
    console.log(errmsg)
})