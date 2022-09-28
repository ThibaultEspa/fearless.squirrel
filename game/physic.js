function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);
    console.log("x = ", player1.position.x, "y=", player1.position.y, "direction", player1.direction);
    player1.move();
    enemymove();
    controls.update();
}

function enemymove()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 3000 * delta;
    console.log("enemie direction = ",player2.direction, "x", player2.position.x);
    if (player2.position.x >= 300.0)
    {
        // console.log("innnnnn");
        player2.direction = 3;
        player2.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), 3);
    }
    if (player2.position.x <= -300.0)
    {
        player2.direction = 0;
        player2.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), -3);

    }
    player2.accelerate(moveDistance);
    player2.enemymove();
}