//funcShowTasks() Exibe a lista de tasks na tela criando um elemento html para cada uma delas.
function funcShowTasks(){
let listTask = localStorage.getItem("listTask");
listTask = JSON.parse(listTask);
console.log(listTask)
let mural = document.getElementById("mural");
mural.innerHTML = '';
for(let i in listTask){
mural.innerHTML += "<div class='contTask'> <h2 class='titleTask'>"+i+"</h2> <p class='descTask'>"+listTask[i]+"</p> <input type='button' value='X' class='btX' onclick='funcBtRemoveItem(this)'> </div>"
 }
}
//funcLoad() Cria lista de task caso não existir ou roda funcShowTasks() caso já exista.
function funcLoad(){
let listTask = localStorage.getItem("listTask")
listTask = JSON.parse(listTask)
if(listTask == null){
let listTask = {};
listTask = JSON.stringify(listTask);
return localStorage.setItem("listTask",listTask);
}
else{
return funcShowTasks();
  }
}

//funcBtAdd() Ao clickar no botão "Adicionar" Adiciona nova task a lista de tasks e roda funcShowTasks().
function funcBtAdd(){
funcLoad()
let titleTask = document.getElementById("inputTitleTask")
let descTask = document.getElementById("inputDescTask")
let listTask = localStorage.getItem("listTask")
listTask = JSON.parse(listTask)
listTask[titleTask.value] = descTask.value;
listTask = JSON.stringify(listTask);
localStorage.setItem("listTask",listTask);
titleTask.value = ""
descTask.value = ""
return funcShowTasks()
}
        
//funcRemoveItem() Ao clickar no botão "X" ao lado de uma task, remove ela da lista de task e roda funcShowTasks().
function funcBtRemoveItem(n){
let n2 = n.parentElement
n2 = n2.children[0]
n2 = n2.textContent
let listTask = localStorage.getItem("listTask")
listTask = JSON.parse(listTask)
delete listTask[n2]
listTask = JSON.stringify(listTask);
localStorage.setItem("listTask",listTask);
return funcShowTasks()
}

//funcBtClear() Ao clicar no "limpar" remove todas as tasks da lista e roda funcShowTasks().
function funcBtClear(){
localStorage.clear()
return funcShowTasks()
}