class MovableObject {
  x = 120;
  y = 280;
  img;
  height = 200;
  width = 100;
  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   *
   *  @param {Array} arr - ['img/image1.png', 'img/image2.png', ... ]
   */
  loadImages(arr) {
    /* arr ist abkürzung für array*/
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      imageCache[path] = path;
    });
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {
    console.log("Moving left");
  }
}
