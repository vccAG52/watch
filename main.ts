input.onButtonPressed(Button.A, function () {
    Start_Time = input.runningTime()
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber((input.runningTime() - Start_Time) / 1000)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Step_Count)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Step_Count += 1
})
let Start_Time = 0
let Step_Count = 0
Step_Count = 0
