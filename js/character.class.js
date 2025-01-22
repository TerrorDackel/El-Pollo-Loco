class Character extends MovableObject {
  height = 300;
  width = 150;
  x = 0;
  y = 110;

  IMAGES_WALKING = [                                                                 /* stripe bilder vom character pepe wie er läuft*/
    "imgs/2_character_pepe/2_walk/W-21.png",
    "imgs/2_character_pepe/2_walk/W-22.png",
    "imgs/2_character_pepe/2_walk/W-23.png",
    "imgs/2_character_pepe/2_walk/W-24.png",
    "imgs/2_character_pepe/2_walk/W-25.png",
    "imgs/2_character_pepe/2_walk/W-26.png",
  ];
                                                                        /* das 0te bild*/

  constructor() {
    super().loadImage("./imgs/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {
      setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;                     /*       let i = 0 % 6;     */
            let path = this.IMAGES_WALKING[i];                                      /* das 0te bild wird geladen */
            this.img = this.imageCache[path];
            this.currentImage++;                                                                      /* jetzt wird um eins erhöht  also zum 1ten bild usw */
  }, 200);
}

  jump() {}

}