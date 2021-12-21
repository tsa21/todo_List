function getItems(){
  db.collection("todo-items").onSnapshot((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
        items.push({
            id: doc.id, 
            ...doc.data()
        })
    })
    generateItems(items);
})
}
var btn = document.querySelector('.add');
var remove = document.querySelector('.draggable');

function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});



function addNewItem() {
  var nwitem=document.querySelector('.input')
  var newItem = nwitem.value;
  //console.log(newItem);
  if (newItem != '') {
    // document.querySelector('.input').value = '';
    var li = document.createElement('li');
    var attr = document.createAttribute('draggable');
    var ul = document.querySelector('ul');
    // for (var i = 0; i < list.length; i++) {
    //   nwitem[i].setAttribute("id", i);
    //  }
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    addEventsDragAndDrop(li);
  }
  addItem(event)
}

btn.addEventListener('click', addNewItem);

function addItem(event){
  event.preventDefault();
   let text = document.querySelector('.input');
  // console.log(text.value);
  let newItem1 = db.collection("todo-items").doc(text.value).set({
   
      text: text.value,
      status: "active"
  })
  text.value = "";

  
}

function generateItems(items){
 let itemsHTML="";
 items.forEach((item)=>{
   itemsHTML+=`<ul>
   <li class="draggable" draggable="true">${item.text}</li>
   
 </ul>`
 })
 document.querySelector("#tolist").innerHTML=itemsHTML
  
}

// getItems()
