 let isTimerStart=false;
let hour=0;
let min=59;
let secound=0;

let h=document.querySelector(".hour");

let m=document.querySelector(".min");

let s=document.querySelector(".sec");

function update()
{
    h.innerText=hour;
m.innerText=min;
s.innerText=secound;
}


let st=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");


// Start
st.addEventListener("click",function(){
   if(!isTimerStart)
   {
    isTimerStart=true;
    start();
 
   }
  
    

});
// Stop

stop.addEventListener("click",function(){
    isTimerStart=false;
});

// Reset
reset.addEventListener("click",function()
{
    hour=0;
    min=0;
    secound=0;
    isTimerStart=false;
    
});

async function start() {
    while(isTimerStart)
    {
     await updateSec();
     if(secound==60)
     {
        secound=0;
        min++;
     }
     if(min==60)
        {
           min=0;
           hour++;
        }
    }
    
}

 function updateSec()
{
return new Promise((reslove,reject)=>{
    setTimeout(function(){
        
        update();
        secound++;
        reslove();
    },1000);
});

}










