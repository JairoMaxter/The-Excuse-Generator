let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let randomWho = who[Math.floor(Math.random()*who.length)] 
let randomActions = action[Math.floor(Math.random()*action.length)]
let randomWhat = what[Math.floor(Math.random()*what.length)]
let randomWhen = when[Math.floor(Math.random()*when.length)]

let Excuse = document.querySelector("#excuse");
Excuse.innerHTML = `<h1>${randomWho} ${randomActions} ${randomWhat} ${randomWhen}</h1>`;