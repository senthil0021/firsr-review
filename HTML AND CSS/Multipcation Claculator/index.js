const ques_El=document.getElementById("test");
const form_El=document.getElementById("form");
const input_El=document.getElementById("input");
const score_El=document.getElementById("score");
const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
ques_El.innerText=`Multipcation of ${num1} and ${num2} is`;
const answer=num1*num2;
let score=JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score=0;
}
score_El.innerText=`score:${score}`;
form_El.addEventListener("submit",()=>
{
    const user_answer =+input_El.value;
     if(user_answer===answer)
     {
     score++;
     updateLocalStorage();
     }
     else
     {
    score--;
    updateLocalStorage();
     }
});
function updateLocalStorage()
{
    localStorage.setItem("score",JSON.stringify(score));
}
