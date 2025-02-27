const wordTextarea= document.querySelector(".word-container .words");
const ctnbtn=document.querySelector(".word-container .btn-success");
const wordctn=document.querySelector(".word-container .no-count span");

const countWords =()=>{
    let words= wordTextarea.value;
    let wordsTrim=words.replace(/\s+/g," ").trim();
    let splitwords=wordsTrim.split(" ");
    console.log(splitwords);
    let nofwords=splitwords.length;
    
    wordctn.innerHTML=nofwords;
};

ctnbtn.addEventListener("click", countWords)