let count = 75
let slidePOS = 0
let points = 0

let slideArray = [`<h2>Question 1</h2><h5>Normally CSS is put in a serperate file, but you also write style in what part of the HTML file?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">head</button><button type="button"class="btn btn-light wrong next">script</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">foot</button><button type="button"class="btn btn-light wrong next">form</button></div>`,
  `<h2>Question 2</h2><h5>Much like CSS, JavaScript is usually placed in its own seperate file but it can also go into the HTML file. Where in the HTML file can it go?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">In head</button><button type="button"class="btn btn-light wrong next">Top of body</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">In style</button><button type="button"class="btn btn-light correct next">Bottom of Body</button></div>`, `<h2>Question 3</h2><h5>What does 'px' mean?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">pixies</button><button type="button"class="btn btn-light correct next">pixel</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">plain xylophone</button><button type="button"class="btn btn-light wrong next">peter's ex-girlfriend</button></div>`, `<h2>Question 4</h2><h5>What does "console.log('')" do?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">Throws Logs at the Console</button><button type="button"class="btn btn-light correct next">Prints contents of ('') into the console</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">Changes Color of Text</button><button type="button"class="btn btn-light wrong next">Prints content of ('') into <p></button></div>`, `<h2>Question 5</h2><h5>What do arrays use?</h5><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">Paranthesis ()</button><button type="button"class="btn btn-light wrong next">Curly Brackets {}</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">Square Brackets []</button><button type="button"class="btn btn-light wrong next">Chevron < ></button></div>`]

let endArray = [`<h1>Nice!</h1><div><form><label for="initials">intials</label><input type="text" id="initials"><button type="button" class="btn btn-light" id="submit">Submit</button></form></div><hr><p>Your score is</p>`, `<h1>High Scores</h1>`]

document.getElementById('start').addEventListener('click', () => {
  //lines 12-15 activate timer at top right screen
  setInterval(() => {
    if (count > 0) {
      count--
      document.getElementById('countDispl').innerHTML = `Time: ${count} secs`
    }
    else {

      finalScore = points + count
      document.getElementById('myDiv').innerHTML = `<h1>Game Over!</h1><div><form><label for="initials">intials</label><input type="text" id="initials"><button type="button" class="btn btn-light" id="submit">Submit Your Score</button></form></div><hr><p>Points: ${points}</p><p>Time left: ${count}</p><p>Your final score is ${finalScore}!</p>`

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
        console.log(slidePOS)
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
      //automatically goes to endArray after last quiz slide and shows 
      if (slidePOS > (slideArray.length - 1) || count <= 0) {

        console.log(points, count)
        finalScore = points + count
        console.log(finalScore)
        document.getElementById('myDiv').innerHTML = `<h1>Game Over!</h1><div><form><label for="initials">intials</label><input type="text" id="initials"><button type="button" class="btn btn-light" id="submit">Submit Your Score</button></form></div><hr><p>Points: ${points}</p><p>Time left: ${count}</p><p>Your final score is ${finalScore}!</p>`
      }
    }

  })
})

//todolist
//*have to setItem finalScore and intials to localStorage for high Score list
//*Find a way to stop timer from continuing after end of game
//*endArray might be deleted and replaced by HTML at line 41 so I could inlcude points count 
//and final score
//*need to add submit function
//*need to be able to view highscores from starting menu
//*add content slideArray (duh!)
//*timer function lags behind a bit before its updated and subtracted from when wrong answer