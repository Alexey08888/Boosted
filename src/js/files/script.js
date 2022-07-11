// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



// function fff() {
// 	console.log('VOLYA')
// 	let wrapp = document.querySelector('body');
// 	wrapp.classList.add('lod')
// }


function an() {
	//document.querySelector('.anima').classList.add("_act");
	let h = document.getElementsByClassName("anima");
	for(let value of h) value.classList.add("_act");
}

setTimeout(an, 5)



// function add() {

// 		console.log('loh')
// 		let h = document.getElementsByClassName("anim");
// 		for(let value of h) value.classList.add("loaded");
// 	;
// }





