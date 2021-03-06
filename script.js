//global var declarations
let count = 75
let slidePOS = 0
let points = 0
let scoreList = JSON.parse(localStorage.getItem('scoreList')) || []
let highscoreDiv = `<h1 class= "d-flex justify-content-center">Highscores</h1><hr>`

let slideArray = [`<h2 class="d-flex justify-content-center">Question 1</h2><h5>Normally CSS is put in a serperate file, but you also write style in what part of the HTML file?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">head</button><button type="button"class="btn btn-light wrong next">script</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">foot</button><button type="button"class="btn btn-light wrong next">form</button></div>`,
  `<h2 class="d-flex justify-content-center">Question 2</h2><h5>Much like CSS, JavaScript is usually placed in its own seperate file but it can also go into the HTML file. Where in the HTML file can it go?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">In head</button><button type="button"class="btn btn-light wrong next">Top of body</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">In style</button><button type="button"class="btn btn-light correct next">Bottom of Body</button></div>`, `<h2 class="d-flex justify-content-center">Question 3</h2><h5>What does 'px' mean?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">pixies</button><button type="button"class="btn btn-light correct next">pixel</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">plain xylophone</button><button type="button"class="btn btn-light wrong next">peter's ex-girlfriend</button></div>`, `<h2 class="d-flex justify-content-center">Question 4</h2><h5>What does "console.log('')" do?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">Throws Logs at the Console</button><button type="button"class="btn btn-light correct next">Prints contents of ('') into the console</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">Changes Color of Text</button><button type="button"class="btn btn-light wrong next">Prints content of ('') into body </button></div>`, `<h2 class="d-flex justify-content-center">Question 5</h2><h5>What do arrays use?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">Paranthesis ()</button><button type="button"class="btn btn-light wrong next">Curly Brackets {}</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">Square Brackets []</button><button type="button"class="btn btn-light wrong next">Chevron < ></button></div>`]



document.getElementById('start').addEventListener('click', () => {
  //lines 15-19 & 52 activate timer at top right screen
  let timer = setInterval(() => {
    if (count > 0) {
      count--
      document.getElementById('countDispl').innerHTML = `Time: ${count} secs`
    }
    //QUIZ NOT COMPLETED once timer hit zero and at least one correct choice have been made then normal closing sequence begins
    else {
      if (points >= 5) {
        clearInterval(timer)
        finalScore = points + count
        document.getElementById('myDiv').innerHTML = `<h1 >Game Over!</h1>
<div class="row g-3 align-items-center"><form><div class="col-auto"><label for="initials" class="col-form-label">Initials:</label><input type="text" id="initials" placeholder="JV"><button type="button" class="btn btn-light" id="submit">Submit!</button></div></form></div><hr><p>Points: ${points}</p><p>Time left: ${count}</p><p>Your final score is ${finalScore}!</p></div></div>`

        document.getElementById('submit').addEventListener('click', event => {
          event.preventDefault()
          let scoreEntry = {
            initials: document.getElementById('initials').value,
            finalscore: finalScore
          }

          scoreList.push(scoreEntry)
          //stored data into localStorage
          localStorage.setItem('scoreList', JSON.stringify(scoreList))



        })
      }
      //QUIZ NOT COMPLETED if no correct choices were and time runs out retry sequence begins (refreshes page)
      if (points < 5) {
        clearInterval(timer)
        document.getElementById('myDiv').innerHTML = `<h1 class="d-flex justify-content-center">Game Over! No Score</h1><h2 class="d-flex justify-content-center">Try Again?</h2><hr><div class = "d-flex justify-content-center"><button type="button" class="btn btn-light" id="retry">Retry</button></div>`
        document.getElementById('retry').addEventListener('click', () => {
          location.reload()
        })
      }

    }
  }, 1000);
  //moves into the first slide
  document.getElementById('myDiv').innerHTML = slideArray[slidePOS]
  //every button has a 'next' class so any button will move along the slideArray using the 
  //slidePOS when clicked
  document.addEventListener('click', event => {
    if (event.target.classList.contains('next')) {
      if (slidePOS < (slideArray.length)) {
        slidePOS++
        document.getElementById('myDiv').innerHTML = slideArray[slidePOS]
        //subtracts from count by 15 if wrong choice is clicked
        if (event.target.classList.contains('wrong')) {
          count = count - 15
        }
        //adds 5 to points. final score is points + count
        if (event.target.classList.contains('correct')) {
          points += 5
        }
      }
      //QUIZ COMPLETED(INTENDED WAY OF COMPLETION) start of closing sequence 
      if (slidePOS > (slideArray.length - 1) || count <= 0) {
        clearInterval(timer)
        finalScore = points + count
        document.getElementById('myDiv').innerHTML = `<h1 >Game Over!</h1>
<div class="row g-3 align-items-center"><form><div class="col-auto"><label for="initials" class="col-form-label">Initials:</label><input type="text" id="initials" placeholder="JV"><button type="button" class="btn btn-light" id="submit">Submit!</button></div></form></div><hr><p>Points: ${points}</p><p>Time left: ${count}</p><p>Your final score is ${finalScore}!</p></div></div>`
        //submit scores
        document.getElementById('submit').addEventListener('click', event => {
          event.preventDefault()
          let scoreEntry = {
            initials: document.getElementById('initials').value,
            finalScore: finalScore
          }

          scoreList.push(scoreEntry)
          //stored data into localStorage
          localStorage.setItem('scoreList', JSON.stringify(scoreList))
          document.getElementById('myDiv').innerHTML = highscoreDiv
          //my attempt of storing and displaying scores from localStorage did not work :(
          let scoreElem = document.createElement('h3')
          scoreElem.className = 'd-flex'
          scoreElem.className = 'justify-content-center'

          scoreElem.textContent = `${JSON.parse(localStorage.getItem('scoreList', scoreList[0].initials))} ${JSON.parse(localStorage.getItem('scoreList', scoreList[0].finalScore))}`
          document.getElementById('myDiv').append(scoreElem)
          document.getElementById('myDiv').innerHTML = highscoreDiv




        })
      }
    }

  })
})

document.getElementById('view').addEventListener('click', () => {

  document.getElementById('myDiv').innerHTML = highscoreDiv
})

//todolist
//*need to be able to view highscores from starting menu
//need to add highscore page