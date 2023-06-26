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
    alert(
      ` Empate!
        Sua escolha: Pedra
        Escolha da máquina: Pedra`
    )
    drawScore++
    draw.innerHTML = drawScore
  } else if (choiceNumber != machineChoice && machineChoice === 2) {
    alert(
      ` Você perdeu!
        Sua escolha: Pedra
        Escolha da máquina: Papel`)
    machineScore++
    machine.innerHTML = machineScore
  } else if (choiceNumber != machineChoice && machineChoice === 3) {
    alert(
      ` Você ganhou! 
        Sua escolha: Pedra
        Escolha da máquina: Tesoura`
    )
    personalScore++
    myScore.innerHTML = personalScore
  }
}

const paperChoice = () => {
  choiceNumber = 2
  const machineChoice = Math.floor(Math.random() * 3) + 1

  if (choiceNumber === machineChoice) {
    alert(
      ` Empate 
        Sua escolha: Papel
        Escolha da máquina: Papel`
    )
    drawScore++
    draw.innerHTML = drawScore
  } else if (choiceNumber != machineChoice && machineChoice === 1) {
    alert(
      ` Você ganhou!
        Sua escolha: Papel
        Escolha da máquina: Pedra`
    )
    personalScore++
    myScore.innerHTML = personalScore
  } else if (choiceNumber != machineChoice && machineChoice === 3) {
    alert(
      ` Você perdeu! 
        Sua escolha: Papel
        Escolha da máquina: Tesoura`
    )
    machineScore++
    machine.innerHTML = machineScore
  }
}

const scissorsChoice = () => {
  choiceNumber = 3
  const machineChoice = Math.floor(Math.random() * 3) + 1

  if (choiceNumber === machineChoice) {
    alert(
      ` Empate 
        Sua escolha: Tesoura
        Escolha da máquina: Tesoura`
    )
    drawScore++
    draw.innerHTML = drawScore
  } else if (choiceNumber != machineChoice && machineChoice === 1) {
    alert(
      ` Você perdeu! 
        Sua escolha: Tesoura
        Escolha da máquina: Pedra`
    )
    machineScore++
    machine.innerHTML = machineScore
  } else if (choiceNumber != machineChoice && machineChoice === 2) {
    alert(
      ` Você ganhou! 
        Sua escolha: Tesoura
        Escolha da máquina: Papel`
    )
    personalScore++
    myScore.innerHTML = personalScore
  }
  console.log(choiceNumber)
}

