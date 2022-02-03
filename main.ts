let a2 = 0
let x2 = 0
let y2 = 0
input.onButtonPressed(Button.A, function () {
    while (a2 == 0) {
        x2 = 0
        y2 = 0
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, x2)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, y2)
        if (input.buttonIsPressed(Button.A)) {
            a2 = 1
        }
    }
})
