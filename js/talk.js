new TypeIt("#sjcyj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("SJ && CYJ")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第一个跨年夜...")
    .pause(3000)
    .go();

new TypeIt('#talkToCYJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();