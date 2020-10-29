function doWhatYouLike () {
    game.splash("You Died")
}
function doNothing () {
    pause(100)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectileFromSprite(img`
        . . . . . . 7 7 
        . . . . . . 7 7 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, mySprite, -50, 0)
    // doWhatYouLike();
    pause(2000)
    doWhatYouLike()
})
let ball: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e . . 7 7 . . 
    . . . . . . e d d e . . 7 9 . . 
    . . . . . . e d d e . . 4 . . . 
    . . . . . . . d d . 4 4 . . . . 
    . . . . . . 4 5 5 4 4 . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . 9 4 4 . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 3 . 3 3 . . . . . . 
    . . . . . 3 . . . 3 3 . . . . . 
    . . . . . 3 . . . . 3 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(145, 60)
doNothing()
