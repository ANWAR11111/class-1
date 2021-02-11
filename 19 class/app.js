// var list = document.getElementById('list');

// function addTodo(){
//     var todo_item = document.getElementById("todo-item")
    
    
//     //create li tag with text node
//     var li = document.createElement('li')
//     var liText = document.createTextNode(todo_item.value)
//     li.appendChild(liText)



//     //create delete button
//     var delBtn = document.createElement("button")
//     var delText = document.createTextNode("DELETE")
//     delBtn.appendChild(delText)
//     delBtn.setAttribute("class","btn")
//     delBtn.setAttribute("onclick","deleteitem(this)")

//     li.appendChild(delBtn)


//     // create edit button
//     var editBtn = document.createElement("button");
//     var editText = document.createTextNode("EDIT")
//     editBtn.appendChild(editText)
//     li.appendChild(delBtn)
//     li.appendChild(editBtn)
//     editBtn.setAttribute("onclick",'editItem(this)')


//     list.appendChild(li)
//     todo_item.value = ""
// }
// function editItem(e){
//     var val =  prompt("enter edit value",e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue = val;
// }



// function deleteitem(e){
//     // console.log("han bhai chall raha h....")
//     e.parentNode.remove()
// }

// function deleteAll(){
//     list.innerHTML = ""
// }








var list = document.getElementById('list');
function Addtodo(){
    var todo_item = document.getElementById('todo-item')
    var li = document.createElement('li')
    var text = document.createTextNode(todo_item.value)
    li.appendChild(text)


    //DEELETE BUTTON
    var delBtn = document.createElement("Button")
    var delText = document.createTextNode('DeleTEE Item')
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","delete(this)")
    delBtn.appendChild(delText)



    /// create edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode('EdIT')
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editi(e)")


    // list.appendChild(li)
    li.appendChild(delBtn)
    list.appendChild(li)
    todo_item.value = ""




}


function delet(e){
   e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = ""
}
function editi(){
    var val = prompt("enter value",e.parentNode.firstChild.nodeValue)

    e.parentNode.firstChild.nodeValue = val;
}











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


































// //// ObJect
// var webCourse = {
//     t1 : "ali",
//     t2 : "basit",
//     t3 : "muza"
// }
// console.log(webCourse)
// webCourse.t4 = "nadia";
// console.log(webCourse)


// // obj me array pass ker skty hn or array me array ko b pass kr skty hn
// webCourse.class = [18,5];
// console.log(webCourse)



// // to create empty array
// var course = {};
// course.name = "web"
// console.log(course)


// //to create undefine obj 
// webCourse.t5 = undefined;
// console.log(webCourse)


// // to check property in web course
// var abc = "t4" in webCourse;
// console.log(abc)







// var myQuestions = [
//     {
//         qus : "what is your name",
//         ans : {
//             a : "ali",
//             b : "ghous",
//             c : "basit"
//         },
//         correctAns : "c" 
//     }
// ]




// /// method func ko ap us wqt kehty hn k jb wo obj me use hota h
// function Course (t1,t2,t3){
//     this.t1 = t1;
//     this.t2 = t2;
//     this.t3 = t3;
// }
// var xyz = new Course("ali","ghouse","basit");
// console.log(xyz)