import './style.css';
import { createInputs } from './utility/createInputs';
import { fetchFunc } from './utility/fetchFunc';
import { scrambleWord } from './utility/scrambleWord';

const mistakes = [];
const tries = 0;

const randomBtn = document.getElementById("random") as HTMLButtonElement;
const loaderLetters = document.getElementById("loader-letters") as HTMLDivElement;
const randomLetters = document.getElementById("random_letters") as HTMLHeadingElement;
const inputsFrame = document.querySelector(".input_frame") as HTMLDivElement;

let randomWord = "";

fetchFunc().then(data => {
    randomWord = data[0];
    loaderLetters.style.display = "none";
    randomLetters.style.display = "block";
    randomLetters.innerHTML = scrambleWord(randomWord);
    createInputs(randomWord.length, inputsFrame);
    console.log(randomWord);
});

randomBtn.addEventListener("click", () => {
    loaderLetters.style.display = "block";
    randomLetters.style.display = "none";
    try {
        fetchFunc().then(data => {
            randomWord = data[0];
            loaderLetters.style.display = "none";
            randomLetters.style.display = "block";
            randomLetters.innerHTML = scrambleWord(randomWord);
            createInputs(randomWord.length, inputsFrame);
            console.log(randomWord);
        });
    } catch (error) {
        console.log(error);
    }
});