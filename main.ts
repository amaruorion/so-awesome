namespace SpriteKind {
    export const DONOTTOUCH = SpriteKind.create()
    export const EnemyTurret = SpriteKind.create()
    export const enemyProjectile = SpriteKind.create()
    export const EnemyTurretPower = SpriteKind.create()
    export const Portal = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump_count <= 1) {
        mySprite.vy = -137
        jump_count += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)) {
        ChargeShot = sprites.createProjectileFromSprite(ChargeShotLeftImage, mySprite, -50, 0)
    }
    if (mySprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)) {
        ChargeShot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 . . . . . . . . . . . . . . . 
            5 5 5 5 . . . . . . . . . . . . 
            5 5 5 5 5 5 5 . . . . . . . . . 
            4 4 4 4 4 4 5 5 . . . . . . . . 
            2 2 2 2 2 2 4 4 5 5 . . . . . . 
            2 2 2 2 2 2 2 2 4 4 5 5 . . . . 
            8 8 8 8 8 8 8 2 2 4 4 4 5 5 . . 
            1 1 1 1 1 1 8 8 2 2 4 4 4 4 5 5 
            1 1 1 1 1 8 8 8 2 2 2 2 2 4 4 5 
            8 8 8 8 8 8 2 2 2 2 2 2 2 4 4 5 
            2 2 2 2 2 2 2 4 4 4 4 4 4 5 5 5 
            2 2 2 2 2 4 4 4 5 5 5 5 5 . . . 
            4 4 4 4 4 4 5 5 5 . . . . . . . 
            5 5 5 5 5 5 5 . . . . . . . . . 
            `, mySprite, 50, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyProjectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 4 4 5 . . . . . . 
            . . . . . 5 4 2 2 4 5 . . . . . 
            . . . . . . 5 4 4 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
    }
    if (mySprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 4 4 5 . . . . . . 
            . . . . . 5 4 2 2 4 5 . . . . . 
            . . . . . . 5 4 4 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -50, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    currentLevel += 1
    startLevel()
})
function startGame () {
    jump_count = 2
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999997799999979999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999997e79999979999999999997999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999977e77999977999999999977799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999977ee77799977999999999977799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999979ee7799977e99999999977ee79999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999997eee799977e79999999977ee77999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999977eee779997e99999999997ee79999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999997eee977997e79999999777ee79999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999977eee799977e99999999977ee77999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999779eee779977e7999999977ee797799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999997eee777777e7999999777ee779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999977eee77777777777777997ee777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999997999999999977777777777777777777799ee777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999997999999999999999999
        99999999999977799999999999777777777777777777777ee999999999999999999999999999999999999999999999999999999999999999999999999999999999999997999977999999999999999999
        9999999999997799999999997777777777777777777777777799999999999999999999999999999999997999999999999999999999999999999999999999999999999997799977999999999999999999
        9999999999977799999999977777777777777777777777777779999999999999999999999999999999997799999999999999999999999999999999999999999999999997799777999999999999999999
        999999999977ee799999977777777777777777dd77777777777799999999999999999999999999999999779999999999999999999999999999999999999999999979997e7797e7779999999999999999
        999999999997ee9999977777777777777777ddddd7777777777779999999999999999999999999999997777999999999999999999999999999999999999999999777997e7799e7999999999999999999
        999999999999ee79997777777777777777dddddddd777777777777999999999999999999999999999997777999979999999999999999999999999999999999999777999e7997e7777999999999999999
        999999999977ee9977777777777777777ddddddddddd77777777777999999999999999999999779999997799999799999999999999999999999999999999999977ee977e77777e999999999799999999
        999999999997ee77777777777777777dddddddddddddd7777777777799999999999999999997779999777777999779999999999999999999999999999999999999ee797e77999e799999999799999999
        999999999999ee7777777777777777ddddddddddddddddd7777777777999999999999999997777999997ee799997e7799999999999999999999999999999999997ee997e77799e999999997e77999999
        9999999999997777777777777777dddddddddddddddddddd7777777777999999999999999999ee799997ee779977e9999999999999799999999999999999999777ee777e77779e999999999e99999999
        99999999999777777777777777dddddddddddddddddddddddd77777777999999999999999977ee779777ee777977e7999999999997799999999999999999999977ee777e77777e777999977e79999999
        9999999999777777777777777dddddddddddddddddddddddddd7777777799999999999999777ee797777ee777797e9999999999997779999999999999799999777ee997e77777e777779997e79999999
        99999999777777777777777dddddddddddddddddddddddddddddd77777779999999999999997ee777997ee799997e7999999999977777999999999999799997777ee7777777777777777997e77799999
        9999999777777777777777dddddddddddddddddddddddddddddddd7777777999999999999977eee79977ee779977e999999999977eee7799999999999779999977ee7777777777777777777e77999999
        99999977777777777777ddddddddddddddddddddddddddddddddddd777777799999999999777eee77777ee777777e777999999979eee7999999999999779999777777777777777777777777e79999999
        999997777777777777ddddddddddddddddddddddddddddddddddddddd7777779999999999999eee77777777777777777777999997eee7999999999997e79999777777777777777777777777e79999999
        99977777777777777ddddddddddddddddddddddddddddddddddddddddd777777999999999997eee77777777777777777777779977eee7799999999999e99997777777777777777777777777777999999
        997777777777777ddddddddddddddddddddddddddddddddddddddddddddd777779999999977777777777777777777777777777797eee9799999999997e77997777777777777d77777777777777779999
        97777777777777ddddddddddddddddddddddddddddddddddddddddddddddd77777799999777777777777777777777777777777777eee7999999999999e799777777777777dddd7777777777777777799
        777777777777dddddddddddddddddddddddddddddeddddddddddddddddddddd77777999777777777777777dddd777777777777777eee7799999999977e7777777777777ddddddd777777777777777777
        7777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777dddddddddd7777777777777777799999999997e777777777777dddddddddd7777777777777777
        777777777ddddddddddddddddddeddddddddddddddddddddddddddddddddddddd77777777777777ddddddddddddddddd7777777777777779999999999e7777777777ddddddddddddd777777777777777
        7777777dddddddddddddddddddddddddddbdddddddedddddddddddddddddddddddd777777777ddddddddddddddddddddddd7777777777777999999977777777777dddddddddddddddd77777777777777
        777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777dddddddddddddddddddddbddddddd77777777777799997777777777ddddddddddddddddddd7777777777777
        7777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7ddddddddddddddddddddddddbdddddddd77777777777777777777777dddddddddddddddddddddd77777777777
        77dddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddd777777777777777777ddddddddddddddddddddddddd7777777777
        7dddddddddddddddddddddddddbdddbbbddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddd7777777777dddddddddddddddddddddddddddd777777777
        dddddddddddddeddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777dddddddddddddddddddddddddddddd77777777
        ddddddddddddddddddddddddddddddbbbbbbddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777
        ddddddddddddddddddeddddddddddddbbbbbbdddddddddddddddddddddddddddddddddedddddddddddddddddddddedddddddddddddddddddbbddddddddddddddddddddddddbdddbdddddddddddd77777
        ddddddddddddddddddddddddddddddddbbbbbbbbbddddeeeedddddddedddddddddddddddedddbdddddddddddddddddeeddddddddedeedddbddddddddddddddddddddddddddddddddddddddddddddd777
        dddddddddddddddedddddddddddddddddddddbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddedddddddbddddddddddddddddddddddddd77
        dddddddddddddddedddddeddedddddddddddddbbddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddeddddddddddeedddddddddddddd7
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeddeddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddeddddddddedddddddddddddddddbddddddddddedddbddbdddd
        ddddddddddddddddedddddddddddddddddddddddddddddddddddeddbdddddddddddddddddbddddddddddddddddddddddddddbbdddddddddeddddddddddddddddbdddddddebbbdddddddddedddddddddd
        dddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdddddddddddbbdddddddddddddddddddddddddddddddddddbbbddddddddbdbddddedddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddbbbddddddddddddddddddddddddddddddddddbebbddddddddddbddddddbdd
        ddddddddddddddebdddbddddddddddddddddddddddddddddddddddddddddddddbddddddddeedddddddddddbbbdddddddddddddddddddddddddedddddddddddddddddddddbbbbddddddddddddddddeddd
        ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeedddddddddddddbbbddddddddddddddddddddddddddeeddedbdddddddddddddddbbddddddddddddddddddddd
        dddddddddddddddddddddeddddddddbdddddddddddddddddddddddddddddddddddddbbbbddddddddddddddbbbddddddddddddddddddddddddddddeeddddddddddddddddddddddddddddddeeddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddbddddddddddddddddddddddddddddddddddddddeeeeddddddddddddeeedddddddddddddddd
        dddddbdddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddeddddddbedddddddddddddddddddddddddddddddddddddddddddeeddeddddddbdddddddddddddddddddddddddddddbddddd
        ddddddddddbddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddeddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddeedddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddbdddddddddddddd
        dddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddbdddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddd
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddbdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbffffffbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbffffbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbffbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbffffbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbfffbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbffbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbffbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    scene.setBackgroundColor(9)
    ChargeShotLeftImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 5 5 5 . . . . . . . . . 
        4 4 4 4 4 4 5 5 . . . . . . . . 
        2 2 2 2 2 2 4 4 5 5 . . . . . . 
        2 2 2 2 2 2 2 2 4 4 5 5 . . . . 
        8 8 8 8 8 8 8 2 2 4 4 4 5 5 . . 
        1 1 1 1 1 1 8 8 2 2 4 4 4 4 5 5 
        1 1 1 1 1 8 8 8 2 2 2 2 2 4 4 5 
        8 8 8 8 8 8 2 2 2 2 2 2 2 4 4 5 
        2 2 2 2 2 2 2 4 4 4 4 4 4 5 5 5 
        2 2 2 2 2 4 4 4 5 5 5 5 5 . . . 
        4 4 4 4 4 4 5 5 5 . . . . . . . 
        5 5 5 5 5 5 5 . . . . . . . . . 
        `
    enemyNum = 2
    ChargeShotLeftImage.flipX()
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
    mySprite.ay = 350
    startLevel()
}
function isLeftOrRight () {
    if (lastButtonPressed == "left") {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `)
    }
    if (lastButtonPressed == "right") {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `)
    }
}
function destroyEverything () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Projectile)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Portal)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.DONOTTOUCH)) {
        value4.destroy()
    }
    for (let value5 of sprites.allOfKind(SpriteKind.EnemyTurret)) {
        value5.destroy()
    }
    for (let value6 of sprites.allOfKind(SpriteKind.EnemyTurretPower)) {
        value6.destroy()
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        if (controller.down.isPressed()) {
            isLeftOrRight()
            downProjectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                8 8 8 8 8 . . . . . . 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                . 6 6 6 6 6 8 8 8 8 6 6 6 6 6 . 
                . . . 9 9 9 6 6 6 6 9 9 9 . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 50)
            mySprite.vy = -90
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.EnemyTurretPower, function (sprite, otherSprite) {
    for (let value7 of sprites.allOfKind(SpriteKind.EnemyTurret)) {
        value7.destroy()
    }
})
function startLevel () {
    destroyEverything()
    if (currentLevel == 1) {
        tiles.setTilemap(tilemap`level_2`)
    } else if (currentLevel == 2) {
        tiles.setTilemap(tilemap`level_3`)
    } else if (currentLevel == 3) {
        tiles.setTilemap(tilemap`level_4`)
    }
    for (let value8 of tiles.getTilesByType(myTiles.tile1)) {
        tiles.placeOnTile(mySprite, value8)
        tiles.setTileAt(value8, myTiles.transparency16)
    }
    for (let value9 of tiles.getTilesByType(myTiles.tile5)) {
        Spike = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f f f f f f f f f . . . 
            `, SpriteKind.DONOTTOUCH)
        tiles.placeOnTile(Spike, value9)
        tiles.setTileAt(value9, myTiles.transparency16)
    }
    for (let value10 of tiles.getTilesByType(myTiles.tile7)) {
        Spike = sprites.create(img`
            . . . f f f f f f f f f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.DONOTTOUCH)
        tiles.placeOnTile(Spike, value10)
        tiles.setTileAt(value10, myTiles.transparency16)
    }
    for (let value11 of tiles.getTilesByType(myTiles.tile3)) {
        Turret = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c c c c c c c c c c c c c c c c 
            c c b b b b b b b b b b b b c c 
            c c b b b b b b b b b b b b c c 
            c c b b b b b b b b b b b b c c 
            c c c c c c b b b b c c c c c c 
            . . . . . c b b b b c . . . . . 
            . . . . . c b b b b c . . . . . 
            . . . . . c b b b b c . . . . . 
            . . . . . c b b b b c . . . . . 
            . . . . . c b b b b c . . . . . 
            . . . . . c b b b b c . . . . . 
            . . . . . c b b b b c . . . . . 
            . . . . . c b b b b c . . . . . 
            `, SpriteKind.EnemyTurret)
        tiles.placeOnTile(Turret, value11)
        tiles.setTileAt(value11, myTiles.transparency16)
    }
    for (let value12 of tiles.getTilesByType(myTiles.tile6)) {
        TurretPower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 f f f f f f 1 f f f f f 1 . 
            . 1 f f f f f f 1 f f f f f 1 . 
            . 1 f f f f f f 1 f f f f f 1 . 
            . 1 f f f f f f f f f f f f 1 . 
            . 1 f f f f f f f f f f f f 1 . 
            . 1 1 1 1 1 f f f f f 1 1 1 1 . 
            . 1 f f f f f f f f f f f f 1 . 
            . 1 f f f f f f f f f f f f 1 . 
            . 1 f f f f f 1 f f f f f f 1 . 
            . 1 f f f f f 1 f f f f f f 1 . 
            . 1 f f f f f 1 f f f f f f 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.EnemyTurretPower)
        tiles.placeOnTile(TurretPower, value12)
        tiles.setTileAt(value12, myTiles.transparency16)
    }
    for (let value13 of tiles.getTilesByType(myTiles.tile2)) {
        enemySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f . . . . f f f f f . 
            . f f f f f . . . . f f f f f . 
            . f f f f f . . . . f f f f f . 
            . f f f f f . . . . f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f . . . . f f f f f . 
            . f f f f f . . . . f f f f f . 
            . f f f f f . . . . f f f f f . 
            . f f f f f . . . . f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        enemyNum += 1
        tiles.placeOnTile(enemySprite, value13)
        tiles.setTileAt(value13, myTiles.transparency16)
    }
    enemySprite.destroy()
    for (let value14 of tiles.getTilesByType(myTiles.tile4)) {
        portalSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a a a . . . . . 
            . . . . . . a a 8 8 8 a . . . . 
            . . . . . a a 8 8 8 8 a . . . . 
            . . . . a 8 8 a a a a a . . . . 
            . . . a 8 8 a 8 8 8 8 a a . . . 
            . . a 8 8 a a 8 a a a 8 a a . . 
            . a a 8 a a a a a 8 8 a 8 a . . 
            . a 8 8 a 8 a 8 8 8 8 a a a . . 
            . a 8 8 a 8 a 8 a a 8 a a . . . 
            . a 8 8 a 8 8 a a a 8 a a . . . 
            . a 8 8 8 8 8 8 8 8 8 a a . . . 
            . a a 8 8 a a a a a a a . . . . 
            . . . a a a a 8 8 8 8 a . . . . 
            . . . . . . a a a a a a . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Portal)
        tiles.placeOnTile(portalSprite, value14)
        tiles.setTileAt(value14, myTiles.transparency16)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.DONOTTOUCH, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    startGame()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    startGame()
})
let isLeft = false
let enemyTurretProjectile: Sprite = null
let portalSprite: Sprite = null
let enemySprite: Sprite = null
let TurretPower: Sprite = null
let Turret: Sprite = null
let Spike: Sprite = null
let downProjectile: Sprite = null
let lastButtonPressed = ""
let enemyNum = 0
let projectile: Sprite = null
let ChargeShotLeftImage: Image = null
let ChargeShot: Sprite = null
let jump_count = 0
let currentLevel = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
currentLevel = 1
info.setLife(6)
startGame()
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        isLeftOrRight()
    }
})
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump_count = 0
    }
})
game.onUpdate(function () {
    if (currentLevel == 4) {
        game.over(true)
    }
})
game.onUpdate(function () {
    if (mySprite.vx == 0 && mySprite.vy == 0 && !(mySprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f . . f f . . . . . 
        `))) {
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `)
    }
    if (controller.right.isPressed()) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `)
    }
    if (controller.down.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f . . f f . . . . . 
                `)
        }
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        lastButtonPressed = "left"
    }
    if (controller.right.isPressed()) {
        lastButtonPressed = "right"
    }
})
game.onUpdateInterval(1500, function () {
    for (let value15 of sprites.allOfKind(SpriteKind.EnemyTurret)) {
        enemyTurretProjectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value15, 50, 7)
        enemyTurretProjectile.setKind(SpriteKind.enemyProjectile)
    }
})
game.onUpdateInterval(1500, function () {
    for (let value16 of sprites.allOfKind(SpriteKind.EnemyTurret)) {
        enemyTurretProjectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value16, -50, 7)
        enemyTurretProjectile.setKind(SpriteKind.enemyProjectile)
    }
})
forever(function () {
    for (let value17 of sprites.allOfKind(SpriteKind.Enemy)) {
        for (let value22 of sprites.allOfKind(SpriteKind.DONOTTOUCH)) {
            if (value17.isHittingTile(CollisionDirection.Right) || value17.overlapsWith(value22)) {
                isLeft = true
            }
            if (value17.isHittingTile(CollisionDirection.Left) || value17.overlapsWith(value22)) {
                isLeft = false
            }
        }
        if (!(isLeft)) {
            value17.setVelocity(50, 0)
        }
        if (isLeft) {
            value17.setVelocity(-50, 0)
        }
    }
})
