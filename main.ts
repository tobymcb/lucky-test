function Get_score_animate () {
    music.play(music.stringPlayable("C E G B C5 G C5 - ", 130), music.PlaybackMode.InBackground)
    Correct_number = randint(1, 2)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Score = Score + 1
    basic.showNumber(Score)
}
input.onButtonPressed(Button.A, function () {
    if (Correct_number == 1) {
        Get_score_animate()
    } else {
        music.play(music.stringPlayable("C5 B A G F E D C ", 151), music.PlaybackMode.InBackground)
        Light(0)
        Score = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
function Light (Yes: number) {
    if (Yes == 0) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(500)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (Correct_number == 2) {
        Get_score_animate()
    } else {
        music.play(music.stringPlayable("C5 B A G F E D C ", 151), music.PlaybackMode.InBackground)
        Light(0)
        Score = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let Score = 0
let Correct_number = 0
Correct_number = randint(1, 2)
Score = 0
basic.showNumber(Score)
basic.forever(function () {
	
})
