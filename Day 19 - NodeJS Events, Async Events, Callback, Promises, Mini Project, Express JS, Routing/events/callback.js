function processPayment(amount, callback){
    setTimeout(()=>{
        callback("Payment Successful");
    }, 3000);
}
console.log("example");
processPayment(5500, (msg) =>{
    console.log(msg);
})
