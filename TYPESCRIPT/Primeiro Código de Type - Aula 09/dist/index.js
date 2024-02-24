function sendInMission(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A espea\u00E7onave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em miss\u00E3o"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipName = prompt("Informa o nome do capitão da espaçonave");
var spaceshipCaptain = prompt("Informe o nome do capitão da nave");
var currentSpaceShip = sendInMission(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Informe a velocidade desejada"));
accelerate(speed, currentSpaceShip);
