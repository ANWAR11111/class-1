// function disableBtn(){
//     var btn = document.getElementById("example");
//     btn.disabled = true
// }






// function getElements(){
//     console.log(p)
// }




// function getElements(){
//     console.log(document.childNodes[1])
// }






// function disableBtn(){
//     var btn = document.getElementById('example')
//     btn.disabled = true
// }






// function addtoCart(){
//     var img = document.getElementById("product");
//     var shoe = document.getElementById("shoe");
//     var paisy = document.getElementById("paisy");
//     var cartimg = document.getElementById("cart-product");
//     var cartshoe = document.getElementById("cart-shoe");
//     var cartpaisy = document.getElementById("cart-paisy");


//     cartimg.src = img.src
//     cartshoe.innerHTML = shoe.innerHTML
//     cartpaisy.innerHTML = paisy.innerHTML

// }






//     console.log(img.src)
//     console.log(shoe.innerHTML)
//     console.log(paisy.innerHTML)











// var list = document.getElementById("l1")
// console.log(list)







// var list = document.getElementsByTagName("li")
// console.log(list)








// var list = document.getElementsByTagName("li")
// console.log(list)








// var list = document.getElementsByTagName("li")
// console.log(list.length)







// // is se koi b attribut check kr skty hn
// var target = document.getElementById("p1");   
// if(target.hasAttribute('class')){
//     alert('available')
// }else{
//     alert("not available")
// }
// console.log(target.getAttribute("class"))



// /// set attribute se koi b class de skty henn ya href ya img k liyye src de skty hn
// target.setAttribute('class','blue') 









// console.log(target.attributes)






// console.log(target.attributes[1].nodeName)





// console.log(target.attributes[1].nodeValue)




// // to create HTML tags
// var p = document.createElement('p')
// console.log(p)



var p = document.getElementById('pp')
console.log(p)



// var p = document.createElement('p')
// var text = document.createTextNode('hello world')
// p.appendChild(text)
// console.log(p)




var pp = document.getElementById("p")
var text = document.createTextNode('haan bol')
pp.appendChild(text)
console.log(p)















// var p = document.createElement('p')
// var text = document.createTextNode('hello world')
// p.appendChild(text)
// var man = document.getElementById("man")
// man.appendChild(p)







// function add(){
//     var img = document.getElementById('im')
//     var brand = document.getElementById('brand')
//     var pri = document.getElementById('pri')
//     var cim = document.getElementById('c-im')
//     var cpri = document.getElementById('c-pri')
//     var cbrand = document.getElementById('c-brand')

//     img.src = cim.src
//     cpri.innerHTML = pri.innerHTML
//     cbrand.innerHTML = brand.innerHTML 

// }







// function addMessage(){
//     var val = document.getElementById('val')
//     var p = document.createElement("p")
//     var textNode = document.createTextNode(val.value)
//     p.appendChild(textNode)
//     var messages = document.getElementById("messages");
//     messages.appendChild(p)

//     val.value = ""
// }





function addMessage(){
    var val = document.getElementById('val');
    var p = document.createElement("p")
    var textNode = document.createTextNode(val.value)
    p.appendChild(textNode)
    var messages = document.getElementById('messages')
    messages.appendChild(p)
    val.value = ""
}