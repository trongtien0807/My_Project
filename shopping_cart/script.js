//-------------------addCart--------------------

const btn = document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function(button,index) {
    button.addEventListener("click",function(event){{
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h1").innerText;
        var productPrice = product.querySelector("span").innerText;
        // console.log(productImg , productName , productPrice)
        addcart(productImg , productName , productPrice);
    }});
});
function addcart(productImg , productName , productPrice) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0 ; i < cartItem.length ; i++) {
        var productT = document.querySelectorAll(".title");
        if(productT[i].innerHTML == productName) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng, vui lòng vào giỏ hàng điều chỉnh lại số lượng")
            return
        };
    };
    var trcontent =  '<tr><td><img class="photo-cart" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span>&nbsp;<sup>đ</sup></p></td><td><input class="soluong" type="number" value="1" min="1"></td><td><span class="cart-delete">Xoá</span></td></tr>'
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    // console.log(cartTable)
    cartTable.append(addtr);
   
    carttotal();
    deleteCart();
    inputChange();
};


//-------------------totalPrice--------------------

function carttotal () {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;
    // console.log(cartItem.length)
    for (var i = 0 ; i < cartItem.length ; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".price").innerHTML;
        var newsProductPrice = productPrice.split('.').join(''); // Text => Number
        // console.log(inputValue , productPrice)
        totalA = inputValue*newsProductPrice;
        // console.log(totalB)
        totalC = totalC + totalA
        // console.log(totalC)
    };
    var cartTotalA = document.querySelector(".price-total span");
    var cartPrice = document.querySelector(".cart-icon span");
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE');   // Dấu chấm chia đơn vị
    cartPrice.innerHTML = totalC.toLocaleString('de-DE');
    // console.log(cartTotalA)
};


//-------------------deleteCart--------------------

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0 ; i < cartItem.length ; i++) {
        var productP = document.querySelectorAll(".cart-delete");
        productP[i].addEventListener("click" , function(event){
            var cartDelete = event.target;
            var cartItemR = cartDelete.parentElement.parentElement;
            cartItemR.remove();
            // console.log(cartItemR)
            carttotal();
        });
    };
};


//-------------------changeQuantity--------------------

function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0 ; i < cartItem.length ; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change" , function(){
        carttotal();
        });
    };
};


//-------------------Hiệu Ứng Giỏ Hàng--------------------

const cartbtn = document.querySelector(".fa-circle-xmark");
const cartshow = document.querySelector(".fa-bag-shopping");
cartshow.addEventListener("click" , function(){
    // console.log(cartshow)
    document.querySelector(".cart").style.right = "0"
});
cartbtn.addEventListener("click" , function(){
    document.querySelector(".cart").style.right = "-100%"
});