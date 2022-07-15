const flashcards = document.getElementsByClassName(flashcards)[0];
const createBox = document.getElementsByClassName(flashcards)[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentAray = localStorage.getItem('items')?
JSON.parse(localStorage.getItem('items')):[]

contentAray.array.forEach(divMaker)
function divMaker(text){
    var div= document.createElement("div");
    var h2_question= document.createElement("h2");
    var h2_answer = document.createElement("h2");
    
div.className="flashcards";
h2_question.setAttribute('style',"border-top:1px solid red; padding: 15px");
h2_question.innerHTML=text.my_question;

h2_answer.setAttribute("style",'text-align:center; display:none; color:red');
h2_answer.innerHTML= text.my_answer;

div.appendChild(h2_question);
div.appendChild(h2_answer);

div.addEventListener("click",fucntion(){
    if(h2_answer.style.display == "none")
     h2_answer.style.display = "block";
    else 
    h2_answer.style.display="none";
});
        
    

flashcards.appendChild(div);

}

function addFlashcards(){
    var flashcards_info= {
        'my_question': question.value,
        'my_answer': answer.value,
    }

    contentAray.push(flashcards_info);
    localStorage.setItems('items',JSON.stringify
    (contentAray));
    divMaker(contentAray[contentAray.length - 1]);
    question.value='';
    answer.value = "";
}

function delflashcards(){
    localStorage.clear();
    flashcards.innerHTML='';
    contentAray=[];
}

function showCreatedBox(){
    createBox.style.display = "blocks";
}
function HideCreatedBox(){
    createBox.style.display = "none";
}
