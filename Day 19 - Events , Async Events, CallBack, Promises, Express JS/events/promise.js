
//Instead of this we can use Promise  promise has 3 states :
/*
Pending
Fulfilled
rejected
 */

const login =()=> new Promise(resolve=>{
    setTimeout(()=>{
        console.log("Login success");
        resolve();
    },2000)
});

const fetchProfile = ()=> new Promise(resolve=>{
    setTimeout(()=>{
        console.log("Profile fetched");
        resolve();
    },1500)
});

const fetchOrders =()=> new Promise(resolve=>{
    setTimeout(()=>{
        console.log("Orders Fetched");
        resolve();
    }, 1000)
});

//Promise Chaining
login()
  .then(() => fetchProfile())
  .then(() => fetchOrders())
  .then(() => console.log("All done"))
  .catch(err => console.log("Error:", err));
