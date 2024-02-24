function sendInMission(name: string, captain: string){
    const spaceship ={
        name,
        captain, 
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A espeaçonave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em missão`)

    return spaceship
}

function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if(spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else if(spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else{
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt("Informa o nome do capitão da espaçonave") 
const spaceshipCaptain = prompt("Informe o nome do capitão da nave")

const currentSpaceShip = sendInMission(spaceshipName, spaceshipCaptain)

const speed = Number(prompt("Informe a velocidade desejada"))

accelerate(speed, currentSpaceShip)