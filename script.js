const api_url= "https://api.quotable.io/random";
let quote = document.getElementById("quote")
let author = document.getElementById("author")
const btn = document.getElementById("next-btn")
const secondbtn = document.getElementById("btn2");

async function getquote(url){
    const response= await fetch(url);
    let data = await response.json();
    // console.log(data);

    quote.innerHTML= data.content;
    author.innerHTML= data.author;
}
getquote(api_url);

function tweet(){
    window.open( href="https://twitter.com/intent/tweet?text="+ quote.innerHTML+"---- by "+ author.innerHTML)
}


btn.addEventListener("click", (e)=>{
    getquote(api_url)
})

secondbtn.addEventListener("click", ()=>{
    tweet();
})







