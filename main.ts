function descreaseCounter () {
    if (isPlayer1 == 1) {
        if (player1_score > 0) {
            player1_score += -1
            basic.showNumber(player1_score)
        }
    } else {
        if (player2_score > 0) {
            player2_score += -1
            basic.showNumber(player2_score)
        }
    }
}
function checkWinner (score: number, msg: string) {
    if (score == 9) {
        isGameOver = 1
        images.iconImage(IconNames.Chessboard).scrollImage(1, 300)
        music.playMelody("G A B C5 G A B C5 ", 120)
        basic.showString(msg)
        init()
        showPlayer()
    }
}
function increaseCounter () {
    if (isPlayer1 == 1) {
        player1_score += 1
        checkWinner(player1_score, " P1 Won")
        basic.showNumber(player1_score)
    } else {
        player2_score += 1
        checkWinner(player2_score, " P2 Won")
        basic.showNumber(player2_score)
    }
}
input.onButtonPressed(Button.A, function () {
    increaseCounter()
})
function init () {
    isPlayer1 = 1
    player1_score = 0
    player2_score = 0
}
input.onButtonPressed(Button.AB, function () {
    descreaseCounter()
})
function showPlayer () {
    if (isPlayer1 == 1) {
        basic.showString(" P1")
        basic.showNumber(player1_score)
    } else {
        basic.showString(" P2")
        basic.showNumber(player2_score)
    }
}
input.onButtonPressed(Button.B, function () {
    if (isPlayer1 == 1) {
        isPlayer1 = 2
    } else {
        isPlayer1 = 1
    }
    showPlayer()
})
let isGameOver = 0
let player2_score = 0
let player1_score = 0
let isPlayer1 = 0
init()
images.iconImage(IconNames.Happy).scrollImage(1, 200)
music.setVolume(50)
music.playMelody("F D A E G B A C5 ", 120)
showPlayer()
