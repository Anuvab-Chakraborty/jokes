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
    if (finalJoke.type === "single") {
        jokeText = finalJoke.joke;
    } else {
        jokeText = `${finalJoke.setup} ${finalJoke.delivery}`;
    }

    q.innerHTML = `<h2 class="joke-text">${jokeText}</h2>`;
}


jokester()

let jokesArr = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I used to play piano by ear, but now I use my hands.",
    "Why did the math book look sad? Because it had too many problems.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "Why don't oysters donate to charity? Because they're shellfish!",
    "I used to be a baker, but I couldn't make enough dough.",
    "What did one plate say to the other plate? Dinner's on me!",
    "I'm friends with all electricians. We have great current connections.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why don't seagulls fly over the bay? Because then they'd be called bagels!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What do you call a fish wearing a crown? King fish!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I used to be a baker, but I couldn't make enough dough.",
    "How do you organize a space party? You planet!",
    "I used to play piano by ear, but now I use my hands.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a bear with no teeth? A gummy bear!",
    "What did one hat say to the other hat? You stay here, I'll go on ahead!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "Why can't you give a computer a virus? Because it's already got a lot of bugs!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I'm friends with all electricians. We have great current connections.",
    "I couldn't figure out how to put my seatbelt on. Then it just clicked.",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I used to play piano by ear, but now I use my hands.",
    "Why did the math book look sad? Because it had too many problems.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "Why don't oysters donate to charity? Because they're shellfish!",
    "I used to be a baker, but I couldn't make enough dough.",
    "What did one plate say to the other plate? Dinner's on me!",
    "I'm friends with all electricians. We have great current connections.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why don't seagulls fly over the bay? Because then they'd be called bagels!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What do you call a fish wearing a crown? King fish!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I used to be a baker, but I couldn't make enough dough.",
    "How do you organize a space party? You planet!",
    "I used to play piano by ear, but now I use my hands.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a bear with no teeth? A gummy bear!",
    "What did one hat say to the other hat? You stay here, I'll go on ahead!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "Why can't you give a computer a virus? Because it's already got a lot of bugs!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I'm friends with all electricians. We have great current connections.",
    "I couldn't figure out how to put my seatbelt on. Then it just clicked.",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
]

let arrLen=jokesArr.length;

let jokeFromArr=jokesArr[parseInt(Math.random()*arrLen)]
console.log(jokeFromArr);

let domJoke=document.getElementsByClassName("arrjk")[0]

domJoke.innerHTML = `<h2 class="joke-text">${jokeFromArr}</h2>`;

