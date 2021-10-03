const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.orders');
const reset = document.getElementById("reset");

// displaying previously added orders
let orders =  window.localStorage.getItem("orders");
if (orders != null) {
    let arr = orders.split(",");
    for(let i=0; i<arr.length; i++) {
        itemsList.innerHTML += (`
            <li>
            <input type="checkbox" id="itemId${i}">
            <label for="itemId${i}">${arr[i]}</label><br>  
            </li>
        `); 
    }
}

addItems.addEventListener("submit" , (e) => {
    e.preventDefault();

    let newItem = document.forms["myForm"]["item"] ;

    let orders = window.localStorage.getItem("orders");

    if (orders == null) {
        window.localStorage.setItem("orders","");
        orders = window.localStorage.getItem("orders");
    }

    let arr = orders.split(",");

    arr = arr.filter((value) => value != "");

    arr.push(newItem.value);

    window.localStorage.setItem("orders", arr);

    console.log(arr);

    itemsList.innerHTML = "";

    for(let i=0; i<arr.length; i++) {
        itemsList.innerHTML += (
            `<li>
                <input type="checkbox" >
                <label for="itemId${i}">${arr[i]}</label><br>  
            </li>`
        ); 
    }

    newItem.value = "";
})

reset.addEventListener("click", () => {
    localStorage.removeItem("orders")
    itemsList.innerHTML = "";
})