const addItems = document.querySelector('.add-items');
let itemsList = document.querySelector('.orders');
let items ;

let orders =  window.localStorage.getItem("orders", items);
if (orders != null) {
    let arr = orders.split(",");
    for(let i=0; i<arr.length; i++) {
        itemsList.innerHTML += "<li>" + arr[i] + "</li>"; 
    }
}

addItems.addEventListener("submit" , (e) => {

    e.preventDefault();
    
    let x = document.forms["myForm"]["item"] ;

    orders = window.localStorage.getItem("orders");

    if (orders == null) window.localStorage.setItem("orders", items);

    let arr = orders.split(",");

    arr = arr.filter((value) => value != "undefined");

    arr.push(x.value);

    window.localStorage.setItem("orders", arr);

    console.log(arr);

    itemsList.innerHTML = "";

    for(let i=0; i<arr.length; i++) {
        itemsList.innerHTML += "<li>" + arr[i] + "</li>"; 
    }

    x.value = "";
})