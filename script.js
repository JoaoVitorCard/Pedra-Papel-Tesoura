const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const myScore = document.getElementById("my-score")
const machine = document.getElementById("machine-score")
const draw = document.getElementById("draw")
let choiceNumber = 0
let personalScore = 0
let machineScore = 0
let drawScore = 0

const rockChoice = () => {
  choiceNumber = 1
  const machineChoice = Math.floor(Math.random() * 3) + 1

  if (choiceNumber === machineChoice) {
    alert("Empate!")
    drawScore++
    draw.innerHTML = drawScore
  } else if (choiceNumber != machineChoice && machineChoice === 2) {
    alert("Você Perdeu!")
    machineScore++
    machine.innerHTML = machineScore
  } else if (choiceNumber != machineChoice && machineChoice === 3) {
    alert("Você ganhou!")
    personalScore++
    myScore.innerHTML = personalScore
  }
}

const paperChoice = () => {
  choiceNumber = 2
  const machineChoice = Math.floor(Math.random() * 3) + 1

  if (choiceNumber === machineChoice) {
    alert("Empate!")
    drawScore++
    draw.innerHTML = drawScore
  } else if (choiceNumber != machineChoice && machineChoice === 1) {
    alert("Você ganhou!")
    personalScore++
    myScore.innerHTML = personalScore
  } else if (choiceNumber != machineChoice && machineChoice === 3) {
    alert("Você perdeu!")
    machineScore++
    machine.innerHTML = machineScore
  }
}

const scissorsChoice = () => {
  choiceNumber = 3
  const machineChoice = Math.floor(Math.random() * 3) + 1

  if (choiceNumber === machineChoice) {
    alert("Empate")
    drawScore++
    draw.innerHTML = drawScore
  } else if (choiceNumber != machineChoice && machineChoice === 1) {
    alert("Você perdeu!")
    machineScore++
    machine.innerHTML = machineScore
  } else if (choiceNumber != machineChoice && machineChoice === 2) {
    alert("Você venceu!")
    personalScore++
    myScore.innerHTML = personalScore
  }
  console.log(choiceNumber)
}

