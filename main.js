
function AddBook(){
    event.preventDefault()
    let tbody = document.getElementById(`book-list`);
    let title = document.getElementById(`title`).value;
    let author=document.getElementById(`author`).value;
    let year = document.getElementById(`year`).value;
let tr= document.createElement(`tr`);
let td1 =document.createElement(`td`);
let td2 =document.createElement(`td`);
let td3 =document.createElement(`td`)
td1.innerHTML=title;
td2.innerHTML=author;
td3.innerHTML=year;
tr.append(td1,td2,td3);
tbody.append(tr)
title = document.getElementById(`title`).value=""
 author=document.getElementById(`author`).value=""
  year = document.getElementById(`year`).value=""
}
