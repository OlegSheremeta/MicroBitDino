input.onButtonPressed(Button.A, function () {
    if (gameover == false) {
        jump = true
        led.unplot(1, 3)
        led.plot(1, 2)
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        basic.pause(500)
        jump = false
        led.unplot(1, 2)
        led.plot(1, 3)
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let gameover = false
let jump = false
let score = 0
let count = 4
let ft = true
jump = false
gameover = false
led.plot(1, 3)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
loops.everyInterval(2000, function () {
    if (ft == true) {
        basic.pause(2000)
        ft = false
    }
    if (gameover == false) {
        count = 4
        for (let index = 0; index < 5; index++) {
            led.unplot(count + 1, 3)
            led.plot(count, 3)
            count += -1
            basic.pause(250)
        }
        led.unplot(0, 3)
        score += 1
    }
})
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 4)
    }
    if (count == 0 && jump == false) {
        gameover = true
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.OnceInBackground)
        basic.showString("Game over!")
        basic.showNumber(score - 1)
        basic.pause(5000)
        basic.clearScreen()
    }
})
