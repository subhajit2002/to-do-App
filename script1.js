let inp = document.querySelector("#subh");
let count = 1;
let arr=[];
inp.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        addTask();
    }
    addLocalstorage();
})
function addTask(){
    let taskObject={};
    taskObject.title=inp.value;
    taskObject.id=count;
    count++;
    taskObject.status="pending";
    arr.push(taskObject)
    AddUItask(taskObject);
   // getlocalstorage();
}
function AddUItask(obj){
    let inp = document.querySelector("#subh");
    let div = document.querySelector("#subh1");
    let div1 = document.createElement("div");
    let chkbx = document.createElement("input");
    let button = document.createElement("button");
    // let span1 = document.createElement()
    let span = document.createElement("span");
    span.setAttribute("id","sp");
    button.innerHTML="x";
    button.setAttribute("id","btn1");
    chkbx.setAttribute("type","checkbox");
    chkbx.setAttribute("id","chk1");
    // span.innerHTML="X";
    span.innerHTML=obj.title;
    div1.append(span);
    div1.append(chkbx);
    div1.append(button);
    div.append(div1);
    arr = arr.map((item)=>{
        if(obj.id==item.id){
            if(item.status=="pending")
            item.status="Completed";
            else
            item.status="pending";
        }
        return item;
    })
    //function deleteDiv(button,div){
        button.addEventListener("click",function(){
            div1.remove();
            
        })
    //}
    button.addEventListener('click',function(){
        arr = arr.filter((item)=>{
            if( item.id!= obj.id){
                return true;
            }
        });
        console.log(arr);
        addLocalstorage();
    })
    // deleteDiv(button,div);
    chkbx.addEventListener("click",()=>{
        if(chkbx.checked==true)
        span.style.textDecoration="line-through";
        else
        span.style.textDecoration="none";
    })
    document.querySelector("#subh").value="";
}


function addLocalstorage(){
    localStorage.setItem('data',JSON.stringify(arr));
}    
        function getlocalstorage(){
            if(localStorage.getItem("data")){
            arr = JSON.parse(localStorage.getItem('data'));
            arr.forEach(element => {
                AddUItask(element);
            });
            
    
        }
        }
      getlocalstorage();  
        
    