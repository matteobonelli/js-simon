"use strict";
simonSays();
function simonSays(){
    const memoNumbersBox = document.getElementById('memoNumbers');
    const inputDisplay = document.getElementById('inputDisplay');
    const btnContainer = document.getElementById('buttonContainer');
    const numberOfBoxes = 5;
    const numbersToGenerateMin = 1;
    const numbersToGenerateMax = 5;
    let randomNumbers = [];


    for(let i = 0; i < numberOfBoxes; i++){
        const numberBox = document.createElement('div');
        randomNumbers = generateNumbers(numberOfBoxes);
        numberBox.innerText = randomNumbers[i];
        numberBox.className = 'text-light display-2'
        memoNumbersBox.append(numberBox);
        setTimeout(showInput, 3000)

        function showInput(){
            memoNumbersBox.classList.add('d-none');
            inputDisplay.classList.remove('d-none');
            btnContainer.className = 'd-flex justify-content-center align-items-center';
            btnContainer.classList.remove('d-none');
            
        }
    }
    console.log('ciao')
    

    function generateNumbers(numberOfBoxes){
        while(randomNumbers.length < numberOfBoxes){
            let numberGenerated = getRndInteger(numbersToGenerateMin, numbersToGenerateMax);
            if(!randomNumbers.includes(numberGenerated)){
                randomNumbers.push(numberGenerated);
            }
        }
        return randomNumbers

    }

    function getRndInteger(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
