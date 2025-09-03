class Palas extends Phaser.GameObjects.Image {
    constructor(scene, x, y, type) {
        super(scene, x, y, type);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.immovable = true;
    }
}

export default Palas;