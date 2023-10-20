"use strict";
simonSays();
function simonSays(){
    const memoNumbersBox = document.getElementById('memoNumbers');
    const inputDisplay = document.getElementById('inputDisplay');
    const btnContainer = document.getElementById('buttonContainer');
    const playAgainContainer = document.getElementById('playAgain');
    const superContainer = document.getElementById('superContainer');
    const resultScreen = document.getElementById('results');
    const btn = document.querySelector('#buttonContainer .btn');
    const playAgainButton = document.querySelector('#playAgain .btn')
    let randomNumbers;
    let userNumbers;
    let rigthNumbers;
   
    memoTimer();

    btn.addEventListener('click', checkUserNumbers);
    playAgainButton.addEventListener('click', memoTimer)

    function checkUserNumbers(){
        const userInput = document.getElementsByClassName('input-width');
        for(let i = 0; i < userInput.length; i++){
            let numInput = parseInt(userInput[i].value);
            if(isNaN(numInput)){
                console.log('ciaone');
                return
            } else{
                if(!userNumbers.includes(numInput)){
                    userNumbers.push(numInput);
                }
            }
        }
        superContainer.classList.add('d-none');
        console.log(userNumbers)
        for (let c = 0; c < userNumbers.length; c++){
            if(randomNumbers.includes(userNumbers[c])){
                rigthNumbers.push(userNumbers[c])
                //console.log('ehi');
            }
        }
        console.log(rigthNumbers);
        resultScreen.innerHTML = `<div class='text-center'>Hai indovinato ${rigthNumbers.length} numeri! 
        ovvero: ${rigthNumbers}</div>`;
        resultScreen.classList.remove('d-none')
        btnContainer.classList.add('d-none');
        playAgainContainer.classList.remove('d-none');
            
    }

    function memoTimer(){
        userNumbers = [];
        rigthNumbers = [];
        resultScreen.innerHTML = '';
        resultScreen.classList.add('d-none');
        superContainer.classList.remove('d-none');
        superContainer.classList.add('container-height');
        superContainer.classList.remove('container-input-dimension');
        memoNumbersBox.classList.remove('d-none');
        inputDisplay.classList.add('d-none');
        playAgainContainer.classList.add('d-none');
        randomNumbers = [];
        inputDisplay.innerHTML = '';
        memoNumbersBox.innerHTML = '';
        for(let i = 0; i < 5; i++){
            const numberBox = document.createElement('div');
            randomNumbers = generateNumbers();
            numberBox.innerText = randomNumbers[i];
            numberBox.className = 'text-light display-2 number-width mb-3'
            memoNumbersBox.append(numberBox);
        }
            setTimeout(showInput, 30000)
    
            function showInput(){
                for(let i = 0; i < 5; i++){
                    const inputBoxContainer = document.createElement('div');
                    const inputBox = document.createElement("INPUT")
                    inputBox.setAttribute("placeholder", "Inserisci un numero")
                    inputBox.classList.add('input-width');
                    inputBoxContainer.append(inputBox);
                    inputDisplay.append(inputBoxContainer);
                }
                superContainer.classList.remove('container-height');
                superContainer.classList.add('container-input-dimension')
                memoNumbersBox.classList.add('d-none');
                inputDisplay.classList.remove('d-none');
                btnContainer.classList.remove('d-none');
                console.log(randomNumbers)
            }
        //console.log('ciao')
    }
    
    

    function generateNumbers(){
        while(randomNumbers.length < 5){
            let numberGenerated = getRndInteger(1, 100);
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
