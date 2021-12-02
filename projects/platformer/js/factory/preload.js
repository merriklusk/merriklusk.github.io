(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('projectile', './asset/projectile.png');
        game.load.image('platform', './asset/platform.png');
        game.load.image('db', './asset/collectable/database.png');
        game.load.image('steve', './asset/collectable/steve-head.png');
        game.load.image('grace', './asset/collectable/grace-head.png');
        game.load.image('kennedi', './asset/collectable/kennedi-head.png');
        game.load.image('max', './asset/collectable/max-head.png');
        game.load.image('star', './asset/collectable/Star.png');
        game.load.image('mushroom', './asset/collectable/mario 1.png');
        game.load.image('mushroom2', './asset/collectable/mushroom 2.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
