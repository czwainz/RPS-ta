let choices = {
  rock: {
    image: "https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    beats: 'scissors'
  },
  paper: {
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
    beats: 'rock'
  },
  scissors: {
    image: "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    beats: 'paper'
  }
}

//dynamically render RPS
function drawRPS() {
  let template = ''
  for (let key in choices) {
    let item = choices[key]
    template += `
      <div class="col-4 justify-content-center">
        <img src="${item.image}" class="rounded shadow mt-2" height="200px" width="200px">
        <button onclick="play('${key}')" class="btn btn-info my-2">${key}</button>
      </div>
        `
    document.getElementById('imageButtons').innerHTML = template
  }
}
drawRPS()

function getNum(max) {
  return Math.floor(Math.random() * max);
}

let computerChoice = ''

function getCompChoice() {
  computerChoice = 'rock'
  return
}

function play(playerChoice) {
  let result = ''
  for (let key in choices) {
    let choice = choices[key]
    if (playerChoice == computerChoice) {
      result = 'tie'
    } else if (playerChoice == choices[key].beats) {
      result = 'banana'
    } else {
      result = 'apple'
    }
  }
  debugger
  document.querySelector('h2').innerHTML = result
}
