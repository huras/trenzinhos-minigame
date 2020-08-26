//by Huras
class Navbar {
  constructor(originalCanvas) {
    this.originalCanvas = originalCanvas;
    this.bufferCanvas = document.createElement('canvas');
    this.bx = this.bufferCanvas.getContext('2d');
    this.buttons = [
      // {
      //   imageSRC: 'arrow-left-solid.svg',
      //   imageLoaded: false,
      //   onclick: () => {
      //     window.location.replace('../Divisao2-Kart/index.html');
      //   },
      //   collider: {
      //     x: () => { return 5 + 2 },
      //     y: 5 + 2,
      //     w: 22,
      //     h: 22
      //   },
      //   fill: '#FFF',
      //   pressed: false,
      //   active: true
      // },
      {
        imageSRC: 'arrow-circle-right-solid.svg',
        imageLoaded: false,
        onclick: () => {
          window.location.replace('../Divisao2-Train/index.html');
        },
        collider: {
          x: () => { return this.originalCanvas.width - 5 - 2 - 22; },
          y: 5 + 2,
          w: 22,
          h: 22
        },
        fill: '#FFF',
        pressed: false,
        active: true
      },
      // {
      //   icon: 'arrow-circle-right-solid.svg',
      //   onclick: () => {
      //     alert('avançar');
      //   },
      //   collider: {
      //     x: 25,
      //     y: 0,
      //     w: 20,
      //     h: 20
      //   }
      // }
    ];

    // load buttons
    this.buttons.map(btn => {
      btn.image = new Image();
      btn.image.addEventListener('load', () => {
        btn.imageLoaded = true;
        this.mustUpdateBuffer = true;
      });
      btn.image.src = '../img/' + btn.imageSRC;
    })

    window.addEventListener('resize', () => {
      this.mustUpdateBuffer = true;
    })

    this.mustUpdateBuffer = true;
  }

  render(originalContext) {
    if (this.mustUpdateBuffer) {
      this.bufferCanvas.width = this.originalCanvas.width;
      this.bufferCanvas.height = this.originalCanvas.height;

      var navBarRect = {
        x: 0,
        y: 0,
        w: this.bufferCanvas.width,
        h: 36
      }

      this.bx.clearRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height);

      // Desenha barra de fundo
      this.navBarRect = navBarRect;
      this.bx.fillStyle = '#439043';
      this.bx.fillRect(navBarRect.x, navBarRect.y, navBarRect.w, navBarRect.h);

      // Desenha botões da navbar
      this.buttons.map(button => {
        if (button.imageLoaded) {
          this.bx.fillStyle = button.fill ? button.fill : '#000';
          this.bx.drawImage(button.image,
            button.collider.x(), button.collider.y,
            button.collider.w, button.collider.h);
        }
      });

      if (!this.navbar) {
        this.navbar = {
          currentState: ''
        }
      }
    }

    originalContext.drawImage(this.bufferCanvas, 0, 0);
    this.mustUpdateBuffer = false;
  }

  checkClickEvent(x, y, clickValue = true) {
    const clickPoint = { x: x, y: y };
    this.buttons.map(btn => {
      const currentCollider = {
        x: (typeof btn.collider.x === "function") ? btn.collider.x() : btn.collider.x,
        y: (typeof btn.collider.y === "function") ? btn.collider.y() : btn.collider.y,
        w: (typeof btn.collider.w === "function") ? btn.collider.w() : btn.collider.w,
        h: (typeof btn.collider.h === "function") ? btn.collider.h() : btn.collider.h,
      }
      if (Physics.pointRect(clickPoint, currentCollider)) {
        btn.onclick();
      }
    })
  }
}