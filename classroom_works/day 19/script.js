const words = ["symptom",
    "sea",
    "rung",
    "unit",
    "vegetable",
    "record",
    "head",
    "effective",
    "makeup",
    "central",
    "attitude",
    "scenario",
    "wage",
    "hell",
    "concentrate",
    "sword",
    "outlet",
    "relax",
    "practical",
    "park",
    "superior",
    "chance",
    "housewife",
    "case",
    "hurl",
    "voter",
    "hope",
    "prisoner",
    "counter",
    "lung"];
const blackground = document.getElementsByClassName("game-background")[0];
const input = document.querySelector('input')
function draw(){
    for (let i = 0; i < words.length; i++) {
        const p = document.createElement('p');
        p.add
        p.innerHTML = words[i];
        p.style.color = "green";
        blackground.appendChild(p);
    }
}
draw();
input.addEventListener('input', (e) =>{
    const input = e.target;
    const indexFound = words.indexOf(input.value);
    if(indexFound!==-1){
        words.splice(indexFound,1);
        draw();
        input.value = "";
    }
})
// const gameBackGr = document.querySelector('#gameBackground');
// let pWords=[];

