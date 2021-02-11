// function press(){
//     var locate = window.location.href
//     // console.log(locate)
//     window.location.href = 'https://www.google.com/'
//     window.location.assign('https://www.google.com/')   //best practice
//     window.location.replace('https://www.google.com/')   //login ka page wapis ni dikhana 
//     window.location.reload()   // chache relaoding
//     window.location.reload(true)   //server reloading
// }




///window.ocation.pathname
///window.ocation.hostname
 





// TYPE THIS IN CONSOLE
// history.forward()
// history.backward()


// ALSO USED
//history.go(1) // 1 page forward
//history.go(-1) // 1 page backward



// TYPE IN CONSOLE
// document.referrer











// function press(){
// var content = <h1>I'm Only One Call Away</h1>    
// window.open().document.write(content)
// }










// function press(){
// var content = <h1>I'm Only One Call Away</h1>    
// window.open('https://www.youtube.com/watch?v=AR2XiMOMrnM&list=PLWX9NnKvk9DHgSU7Q8vSyDWSvUwrOPpdN&index=28')
// }









// function press(){
//     var content = <h1>I'm Only One Call Away</h1>    
//     window.open('https://www.google.com/','width=200,height = 100,left=100,top=100')
//     }
    








// function press(){
//     var win = window.open('https://www.google.com/','width=200,height = 100,left=100,top=100')
//     if(win === null){
//         alert('ap apna popup locker disable kren')
//        //win.open()
//         win.close()
//     }
// }
    






// DEPLOY ON FIREBASE DATABASE

var ul = document.getElementById('list');
function item(){
    var todo_item = document.getElementById('todo_item')
    var database = firebase.darabase().ref('todo-app')
    var key = database.push().key
    var key  = {
        value :todo_item,
        key : key
    }
    database.child(key).set(todo-app)
    var li = document.createElement('li')
    var text = document.createTextNode(todo_item.value)
   































var ul = document.getElementById('list');
function item(){
    var todo_item = document.getElementById('todo_item')
    var li = document.createElement('li')
    var text = document.createTextNode(todo_item.value)
    li.appendChild(text)
    list.appendChild(li)
    todo_item.value = ""



    //TO CREATE DELETE BUTTON
    var del = document.createElement('button')
    var delText = document.createTextNode('Delete Item')
    del.setAttribute('class','btn')
    del.setAttribute('onclick','deleteItem(this)')
    del.appendChild(delText)
    li.appendChild(del)

    ////TO CREATE EDIT BUTTON
    var ed = document.createElement('button')
    var edText = document.createTextNode('EDIT')
    ed.setAttribute('onclick','edit(this)')
    ed.appendChild(edText)
    li.appendChild(ed)




    console.log(li)
}


function deleteAll(){
    list.innerHTML = ""
}
function deleteItem(e){
    e.parentNode.remove()
}
function edit(e){
    var val = prompt("Edit your value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;

}



































function press(){
    var locate = window.location.href
    // console.log(locate)
   window.location.href = 'www.facebok.com' 
   window.location.assign = 'www.facebok.com' 
   window.location.replace = 'www.facebok.com' 
   window.location.reload(false) ////from chache reloading
   window.location.reload(true) //// from server reloading
}

//window .location.pathname  TO CHECK MAIN FILE
//window .location.assign('')  TO CHECK MAIN FILE



history.forward()  //// page se agy jany k liye
history.back()
history.go(-1) //// pechy jany k //liye

document.referrer() //// kis web se yahan p r aya






function press(){
    var content = '<h1>Dsdufushfu</h1>'
    window.open().document.write(content)
    window.open('www.google.com','win1','width = 200px,height = 100,left = 100, top = 100  ')
    






    if(win === null){
        alert('app apna popup locker ko disaable kro')
        win.close()
    }
    
}