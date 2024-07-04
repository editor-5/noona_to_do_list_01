//유저가 값을 입력한다
//+ 버튼을 클릭하면, 할일이 추가된다
// delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//1. check 버튼을 클릭하는순간 true false
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안끝난걸로 간주하고 그대로
//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은, 끝남 아이템만, 진행중탭은 진행중인 아이템맘
//전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div")
let taskList =[]
addButton.addEventListener("click",addTask)

for(let i=1;i<tabs.length;i++){
  tabs[i].addEventListener("click",function(event){
    filter(event);
  });
}
console.log(tabs)
function addTask(){
    let task = {
      id:randomIDGenerate(), 
      taskContent: taskInput.value,
      isComplete:false
    }
    taskList.push(task);
    console.log(taskList);
    render()
}

function render(){
    let resultHTML = "";
    for(let i=0;i<taskList.length;i++){
      if(taskList[i].isComplete == true){
        resultHTML += `<div class="task">
          <div class="task-done">${taskList[i].taskContent}</div>
          <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
          </div>
        </div>`;
      }else{
        resultHTML += `<div class="task">
          <div>${taskList[i].taskContent}</div>
          <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
          </div>
        </div>`;
      }
        
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
   for(let i=0;i<taskList.length;i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
   }
   render();
   console.log(taskList);
}

function deleteTask(id){
  for(let i=0;i<taskList.length;i++) {
    if(taskList[i].id == id){
      taskList.splice(i,1)
      break;
    }
  }
  render()  
}

function filter(event){
  console.log("filter",event.target.id);
}
function randomIDGenerate(){
  return Math.random().toString(36).substr(2, 16);
}
 