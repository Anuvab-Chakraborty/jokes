const url="https://v2.jokeapi.dev/joke/"
let categories=["Programming", "Misc", "Pun", "Spooky", "Christmas"]
let chosenCat=categories[parseInt(Math.random()*5)];
//console.log(categories[chosenCat]);

async function jokester(){
    const joke= await fetch(`${url}${chosenCat}`)
    const finalJoke=await joke.json()
    //console.log(finalJoke);
    let q=document.body.getElementsByClassName("apijk")[0]
    console.log(q);
    if (finalJoke.type==="single"){
        console.log(finalJoke.joke);
        q.innerHTML=`${finalJoke.joke}`
    }
    else{
        console.log(finalJoke.setup);
        console.log(finalJoke.delivery);
        q.innerHTML=`${finalJoke.setup} ${finalJoke.delivery}`
    }
}
jokester()