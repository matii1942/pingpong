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
        
        //physics ball
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(centerWidth, centerHeight, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocity(-180, 0);


        //physics

        this.physics.add.collider(this.ball, this.izquierda, this.impacto,null, this);
        this.physics.add.collider(this.ball, this.derecha, this.impacto, null, this);

        //controles
        this.cursors = this.input.keyboard.createCursorKeys();

        //left_pallete
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
    update() {
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
             this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        }
        if (this.cursors.down.isDown) {
            this.derecha.body.setVelocityY(300);
        } else if (this.cursors.up.isDown) {
            this.derecha.body.setVelocityY(-300);
        }
        else {
            this.derecha.body.setVelocityY(0);
        }

        if (this.cursor_S.isDown) {
            this.izquierda.body.setVelocityY(300);
        } else if (this.cursor_W.isDown) {
            this.izquierda.body.setVelocityY(-300);
        } else {
            this.izquierda.body.setVelocityY(0);
        }
    }


    impacto() {
        this.ball.setVelocityY(Phaser.Math.Between(-100, 100));
    }

            
        
}

export default Scene_Play;

