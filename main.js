
function AddBook(){
    event.preventDefault()
    let tbody = document.getElementById(`book-list`);
    let title = document.getElementById(`title`);
    let author=document.getElementById(`author`);
    let year = document.getElementById(`year`);
    let error1=document.querySelector(`#error1`)
    let error2=document.querySelector(`#error2`)
    let error3=document.querySelector(`#error3`)
    console.log(error1)
if(title.value ==''&& author.value =='' && year.value ==''){
 title.classList.add(`bordered`)
 title.setAttribute
 author.classList.add(`bordered`)
 year.classList.add(`bordered`)
 error1.style.display='block'
 error2.style.display='block'
 error3.style.display='block'
}else{
let tr= document.createElement(`tr`);
let td1 =document.createElement(`td`);
let td2 =document.createElement(`td`);
let td3 =document.createElement(`td`)
td1.innerHTML=title.value;
td2.innerHTML=author.value;
td3.innerHTML=year.value;
tr.append(td1,td2,td3);
tbody.append(tr)
title.value=""
 author.value=""
  year .value=""
}
}