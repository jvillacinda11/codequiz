let count = 75
let slidePOS = 0
let points = 0

let slideArray = [`<h2>Question 1</h2><p>what the hecc</p><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">response</button><button type="button"class="btn btn-light wrong next">response</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">response</button><button type="button"class="btn btn-light wrong next">response</button></div>`,
  `<h2>Question 2</h2><p>what the hecc</p><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">response</button><button type="button"class="btn btn-light wrong next">response</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">response</button><button type="button"class="btn btn-light wrong next">response</button></div>`, `<h2>Question 3</h2><p>what the hecc</p><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">response</button><button type="button"class="btn btn-light wrong next">response</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">response</button><button type="button"class="btn btn-light wrong next">response</button></div>`, `<h2>Question 4</h2><p>what the hecc</p><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">response</button><button type="button"class="btn btn-light wrong next">response</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">response</button><button type="button"class="btn btn-light wrong next">response</button></div>`, `<h2>Question 5</h2><p>what the hecc</p><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light correct next">response</button><button type="button"class="btn btn-light wrong next">response</button></div><div class="d-flex justify-content-around buttonPadding"><button type="button"class="btn btn-light wrong next">response</button><button type="button"class="btn btn-light wrong next">response</button></div>`]

let endArray = [`<h1>Nice!</h1><div><form><label for="initials">intials  </label><input type="text" id="initials"><button type="button" class="btn btn-light" id="submit">Submit</button></form></div><p>Your score is</p>`, `<h1>High Scores</h1>`]

document.getElementById('start').addEventListener('click', () => {
  //lines 12-15 activate timer at top right screen
  setInterval(() => {
    if (count > 0) {
      count--
      document.getElementById('countDispl').innerHTML = `Time: ${count} secs`
    }
  }, 1000);
  //moves into the first slide
  document.getElementById('myDiv').innerHTML = slideArray[slidePOS]
  //every button has a 'next' class so any button will move along the slideArray using the 
  //slidePOS when clicked
  document.addEventListener('click', event => {
    if (event.target.classList.contains('next')) {
      if (slidePOS < (slideArray.length - 1)) {
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
      //automatically goes to endArray after last quiz slide and shows 
      else {
        console.log(points, count)
        finalScore = points + count
        console.log(finalScore)
        document.getElementById('myDiv').innerHTML = endArray[0] + finalScore + '!'
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