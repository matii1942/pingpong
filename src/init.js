import Scene_Play from "./scenes/scene_play.js";
import Bootloader from "./bootloader.js";


 const config = {
    width : 640,
    height: 400,
    parent: "container",
    physics: {
        default: "arcade",
    },
    scene: [Bootloader, Scene_Play],
    
}


new Phaser.Game(config);