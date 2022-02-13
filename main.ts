modules.button1.onDown(function () {
    keyboard.sendString("hi!")
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
keyboard.startKeyboardService()
