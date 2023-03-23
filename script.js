/*const requestURL = 'http://127.0.0.1:5500/data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'json';
request.send();
request.onload = function() {
    const tasks = request.response;
    tasks__list=tasks;
    viewTasks("weekly");
}*/

viewTasks("weekly");

const btns_user=document.querySelectorAll('.user__btn');
btns_user.forEach((cadaBtn, i)=>{
    btns_user[i].addEventListener('click',()=>{
        btns_user.forEach((cadaBtn, o)=>{
            btns_user[o].classList.remove('active');
            btns_user[o].disabled=false;
        })
        btns_user[i].classList.add('active');
        btns_user[i].disabled=true;
    })
})

function viewTasks(event){
    let listTasks="";
    let name_event="";
    if(event=="daily"){
        name_event="Day";
    }else if(event=="weekly"){
        name_event="Week";
    }else if(event=="monthly"){
        name_event="Month";
    }
    const conteiner__tasks=document.getElementById("conteiner__tasks");
    tasks__list.forEach(element => {
        listTasks+=`
        <div class="task ${element.title.toLowerCase()}">
            <div class="task__image">
            <img class="task__img" src="images/icon-${element.image}" alt="" width="100">
            </div>
            <div class="card__task">
            <div class="card__title"><h2>${element.title}</h2><div class="ellipsis fa-solid fa-ellipsis"></div></div>
            <div class="card__hours"><p>${element.timeframes[event].current}hrs</p></div>
            <div class="card__previous"><p>Last ${name_event} - ${element.timeframes[event].previous}hrs</p></div>
            </div>
        </div>
        `;
    });
    conteiner__tasks.innerHTML=listTasks;
}
