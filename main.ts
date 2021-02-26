function checkWinner (score: number) {
    if (score == 9) {
        player1_score = 0
        player2_score = 0
        images.iconImage(IconNames.Chessboard).scrollImage(1, 300)
        music.playMelody("G A B C5 G A B C5 ", 120)
        basic.showString(" P1 Won")
        showPlayer()
    }
}
function increaseCounter () {
    if (isPlayer1 == 1) {
        player1_score += 1
        checkWinner(player1_score)
        basic.showNumber(player1_score)
    } else {
        player2_score += 1
        checkWinner(player2_score)
        basic.showNumber(player2_score)
    }
}
input.onButtonPressed(Button.A, function () {
    increaseCounter()
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
let player2_score = 0
let player1_score = 0
let isPlayer1 = 0
isPlayer1 = 1
images.iconImage(IconNames.Happy).scrollImage(1, 200)
music.playMelody("F D A E G B A C5 ", 120)
showPlayer()
