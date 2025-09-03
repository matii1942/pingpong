import Palas from "../gameObjects/palas.js";
class Scene_Play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_Play" });
    }

    preload() {
        //no hace falta usarlo aca por que ya precargue en bootloader
    }

    create() {

        let centerWidth = this.sys.game.config.width/2
        let centerHeight = this.sys.game.config.height/2
        
        this.add.image( centerWidth, centerHeight,"separator");

        //this.izquierda = this.add.image(30, centerHeight, "right_pallete");
        this.izquierda = new Palas(this, 30, centerHeight, "left_pallete");
        //this.derecha = this.add.image(this.sys.game.config.width - 30, centerHeight, "left_pallete");
        this.derecha = new Palas(this, this.sys.game.config.width - 30, centerHeight, "right_pallete");   
        

        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(centerWidth, centerHeight, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocity(-180, 0);


        //physics

        this.physics.add.collider(this.ball, this.izquierda, this.impacto,);
        this.physics.add.collider(this.ball, this.derecha, this.impacto);
    }

    impacto() {
        this
    }

       

    update() {
        // Update game objects here
    }
}

export default Scene_Play;

