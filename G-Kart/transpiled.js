"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

if (!window.requestAnimationFrame) {
  (function () {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
  })();
} //External Methods

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === "undefined") {
    stroke = true;
  }

  if (typeof radius === "undefined") {
    radius = 5;
  }

  if (typeof radius === "number") {
    radius = {
      tl: radius,
      tr: radius,
      br: radius,
      bl: radius
    };
  } else {
    var defaultRadius = {
      tl: 0,
      tr: 0,
      br: 0,
      bl: 0
    };

    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }

  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();

  if (fill) {
    ctx.fill();
  }

  if (stroke) {
    ctx.stroke();
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);

  this.play = function () {
    this.sound.play();
  };

  this.stop = function () {
    this.sound.pause();
  };
}

var SheetLoader = /*#__PURE__*/ (function () {
  function SheetLoader() {
    var onLoadAllCallBack =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : undefined;

    _classCallCheck(this, SheetLoader);

    this.sheetsToLoad = [];
    this.sheetsLoaded = 0;
    this.loadAllCallBack = onLoadAllCallBack;
    this.queue = [];
  }

  _createClass(SheetLoader, [
    {
      key: "onLoadSheet",
      value: function onLoadSheet() {
        this.sheetsLoaded++;

        if (this.sheetsLoaded >= this.queue.length) {
          if (this.loadAllCallBack) {
            this.loadAllCallBack();
          }
        }
      }
    },
    {
      key: "queueSheet",
      value: function queueSheet(filepath) {
        var newSheet = new Image();
        this.queue.push({
          filepath: filepath,
          image: newSheet
        });
        newSheet.src = filepath;
        return newSheet;
      }
    },
    {
      key: "loadSheetQueue",
      value: function loadSheetQueue() {
        var _this = this;

        var onLoadAllCallBack =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : undefined;

        if (onLoadAllCallBack) {
          this.loadAllCallBack = onLoadAllCallBack;
        }

        this.queue.map(function (item) {
          item.image.addEventListener("load", function () {
            _this.onLoadSheet();
          });
        });
      }
    }
  ]);

  return SheetLoader;
})();
/* View in fullscreen */

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
/* Close fullscreen */

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}

var Physics = {}; // POINT/RECTANGLE

Physics.pointRect = function (point, rect) {
  // is the point inside the rectangle's bounds?
  if (
    point.x >= rect.x && // right of the left edge AND
    point.x <= rect.x + rect.w && // left of the right edge AND
    point.y >= rect.y && // below the top AND
    point.y <= rect.y + rect.h
  ) {
    // above the bottom
    return true;
  }

  return false;
};

Physics.pointCircle = function (point, circle) {
  var dist = Math.pow(
    Math.pow(circle.x - point.x, 2) + Math.pow(circle.y - point.y, 2),
    0.5
  );
  return dist <= circle.radius;
};

window.mobileAndTabletCheck = function () {
  var check = false;

  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
};

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function () {
    return (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback, element) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
} //==================================================================================================
// Get canvas

var canvas = document.getElementById("canvas");
canvas.width -= 4;
canvas.height -= 4; //load resources

var allImagesLoaded = function allImagesLoaded() {
  // var mario = new Mario(marioSheet, this.context, new Vector2(20, 32));
  // this.characters.push(mario);
};

var sheetLoader = new SheetLoader();
var skybox = sheetLoader.queueSheet("./img/skybox.png");
var nuvem1 = sheetLoader.queueSheet("./img/nuvem1.png");
var nuvem2 = sheetLoader.queueSheet("./img/nuvem2.png");
var nuvem3 = sheetLoader.queueSheet("./img/nuvem3.png");
var mountains = sheetLoader.queueSheet("./img/mountains.png");
var racer = sheetLoader.queueSheet("./img/kart-racer.png");
var roadZebra = sheetLoader.queueSheet("./img/road-zebra.png");
var roadLine = sheetLoader.queueSheet("./img/faixa.png");
var ui_certo = sheetLoader.queueSheet("./img/ui_certo.png");
var ui_errado = sheetLoader.queueSheet("./img/ui_errado.png");
var megafone = sheetLoader.queueSheet("./img/bullhorn-solid.svg"); // ===================================== Coisas desse jogo em questão

var engineStates = {
  START: "start",
  PLAYING: "load-question",
  RESULT: "wait-answer"
};
var gameStates = {
  RESETING: "reseting",
  LOAD_QUESTION: "load-question",
  WAIT_ANSWER: "wait-answer",
  WRONG_ANSWER: "wrong-answer",
  RIGHT_ANSWER: "right-answer"
};

function onFinishGame() {
  console.log("undefined function");
}

var GameEngine = /*#__PURE__*/ (function () {
  function GameEngine(inputQuestions, ctx, canvas) {
    var _this2 = this;

    _classCallCheck(this, GameEngine);

    this.racerMobileScale = 0.45;
    this.originalWidth = 1024;
    this.originalHeight = 720;
    this.ctx = ctx;
    this.questions = inputQuestions;
    this.inputQuestions = inputQuestions;
    this.mayClick = false;
    this.soundMotor = document.getElementById("roncomotor");
    this.soundEnunciado = document.getElementById("enunciado");
    this.playEnunciadoAudio(); // this.navbar = new Navbar(canvas);

    canvas.addEventListener(
      "click",
      function (event) {
        _this2.clickCanvas(event);
      },
      false
    );
  }

  _createClass(GameEngine, [
    {
      key: "start",
      value: function start() {
        this.engineState = engineStates.START;
        this.gameLoop();
      }
    },
    {
      key: "clickCanvas",
      value: function clickCanvas(event) {
        var _this3 = this;

        this.racerScale =
          this.layout == "desktop" ? 0.7 : this.racerMobileScale;
        var x = event.pageX - canvas.offsetLeft,
          y = event.pageY - canvas.offsetTop; // openFullscreen(document.querySelector('body'));
        // if (!this.navbar.checkClickEvent(x, y)) {
        // }
        // Collision detection between clicked offset and element.

        if (this.kartRacers && this.racerScale) {
          for (var i = 0; i < this.kartRacers.length; i++) {
            var element = this.kartRacers[i];
            var tempRect = {
              left: element.position.x,
              top: element.position.y,
              width: element.size.x * this.racerScale,
              height: element.size.y * this.racerScale
            };
            var collided =
              y > tempRect.top &&
              y < tempRect.top + tempRect.height &&
              x > tempRect.left &&
              x < tempRect.left + tempRect.width;

            if (collided) {
              if (
                this.gameState == gameStates.WAIT_ANSWER || // this.gameState == gameStates.RIGHT_ANSWER ||
                this.gameState == gameStates.WRONG_ANSWER
              ) {
                var respostaDoAluno = element.valorBandeira.toString();
                var repostaCorreta = this.currentQuestion.answer.toString();
                if (!this.studentResults[this.currentQuestion.question])
                  this.studentResults[this.currentQuestion.question] = [];
                this.studentResults.push({
                  question: this.currentQuestion.question,
                  studentAnswer: respostaDoAluno,
                  success: respostaDoAluno == repostaCorreta
                });

                if (respostaDoAluno == repostaCorreta) {
                  this.soundMotor.play();
                  this.soundMotor.volume = 0.2;
                  this.gameState = gameStates.RIGHT_ANSWER;
                  this.winnerKart = this.kartRacers[i];
                  setTimeout(function () {
                    _this3.respawnRacers();

                    _this3.gameState = gameStates.LOAD_QUESTION;
                  }, 5000);
                } else {
                  this.gameState = gameStates.WRONG_ANSWER;
                  setTimeout(function () {
                    if (_this3.gameState == gameStates.WRONG_ANSWER)
                      _this3.gameState = gameStates.WAIT_ANSWER;
                  }, 2000);
                }
              }

              break;
            }
          }
        }

        this.checkEnunciadoBtnClick(x, y);
      }
    },
    {
      key: "gameLoop",
      value: function gameLoop() {
        var _this4 = this;

        this.layout = !window.mobileAndTabletCheck() ? "desktop" : "mobile";
        window.requestAnimationFrame(function () {
          _this4.gameLoop();
        });

        switch (this.engineState) {
          case engineStates.START:
            {
              this.renderBG();
              this.engineState = engineStates.PLAYING;
              this.gameState = gameStates.RESETING;
              this.studentResults = [];
            }
            break;

          case engineStates.PLAYING:
            {
              switch (this.gameState) {
                case gameStates.RESETING:
                  {
                    this.winnerKart = undefined;
                    this.mayClick = false;
                    this.renderBG();
                    this.respawnRacers();
                    this.gameState = gameStates.LOAD_QUESTION;
                    this.activeQuestions = _toConsumableArray(this.questions);
                    this.pistaSpeed = 8;
                  }
                  break;

                case gameStates.LOAD_QUESTION:
                  {
                    this.mayClick = false;

                    if (this.currentQuestion) {
                      this.activeQuestions.splice(
                        this.activeQuestions.indexOf(this.currentQuestion),
                        1
                      );
                      this.currentQuestion = undefined;
                    }

                    if (this.activeQuestions.length > 0) {
                      this.currentQuestion = this.activeQuestions[
                        (Math.random() * this.activeQuestions.length) | 0
                      ];
                      shuffle(this.currentQuestion.options);
                      this.gameState = gameStates.WAIT_ANSWER;
                    } else {
                      this.engineState = engineStates.RESULT;
                    }
                  }
                  break;

                case gameStates.WAIT_ANSWER:
                  {
                    this.mayClick = true;
                    this.renderBG();
                    this.renderRacers();
                    this.renderQuestion(this.currentQuestion);
                  }
                  break;

                case gameStates.WRONG_ANSWER:
                  {
                    this.mayClick = true;
                    this.renderBG();
                    this.renderRacers();
                    this.renderQuestion(this.currentQuestion);
                    this.renderWrongAnswer();
                  }
                  break;

                case gameStates.RIGHT_ANSWER:
                  {
                    this.mayClick = false;
                    this.renderBG();
                    this.renderRacers();
                    this.renderQuestion(this.currentQuestion);
                    this.renderRightAnswer();
                  }
                  break;
              }
            }
            break;

          case engineStates.RESULT:
            {
              var frag = {
                respostas: 0,
                acertos: 0
              };

              for (var a = 0; a < this.studentResults.length; a++) {
                var question = this.studentResults[a];
                frag.respostas++;
                if (question.success) frag.acertos++;
              } // onFinishGame(frag);

              this.renderBG();
              this.renderResults();
            }
            break;
        } // console.log("frame");
        // if (document.fullscreenElement == null && this.layout == 'mobile') {
        //   this.renderJanelaFullscreen();
        // }
        // this.navbar.render(this.ctx);
      }
    },
    {
      key: "getEstradaCoordinates",
      // ============================================ Game logic
      value: function getEstradaCoordinates() {
        var y =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var estradaInicio = canvas.height / 2;
        var estradaFim = estradaInicio + canvas.height / 2;
        return estradaInicio + y * (estradaFim - estradaInicio);
      }
    },
    {
      key: "respawnRacers",
      value: function respawnRacers() {
        //Cria tipo corredor
        this.kartRacers = [];

        var kartRacer = function kartRacer() {
          var valorBandeira =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var position =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                x: Math.random() * window.innerWidth * 1.25,
                y: Math.random() * 200
              };
          var novoRacer = {};
          novoRacer.valorBandeira = valorBandeira;
          novoRacer.position = position;
          novoRacer.size = {
            x: 351,
            y: 305
          };
          return novoRacer;
        }; // Cria corredores

        this.racerScale = canvas.width > 768 ? 0.7 : this.racerMobileScale;

        if (this.layout == "mobile") {
          this.kartRacers.push(
            kartRacer(6, {
              x: -401,
              y: this.getEstradaCoordinates(0.2)
            })
          );
          this.kartRacers.push(
            kartRacer(66, {
              x: -351 + 125,
              y: this.getEstradaCoordinates(0.4)
            })
          );
          this.kartRacers.push(
            kartRacer(999, {
              x: -201,
              y: this.getEstradaCoordinates(0.68)
            })
          );
        } else {
          this.kartRacers.push(
            kartRacer(6, {
              x: -401,
              y: this.getEstradaCoordinates(0.05)
            })
          );
          this.kartRacers.push(
            kartRacer(66, {
              x: -351 + 125,
              y: this.getEstradaCoordinates(0.4)
            })
          );
          this.kartRacers.push(
            kartRacer(999, {
              x: -201,
              y: this.getEstradaCoordinates(0.68)
            })
          );
        }
      } // ============================================ Rendering
    },
    {
      key: "renderBG",
      value: function renderBG() {
        this.renderCeu();
        this.renderNuvens();
        this.renderMontanhas();
        this.renderRoad();
      }
    },
    {
      key: "renderCeu",
      value: function renderCeu() {
        this.ctx.drawImage(
          skybox,
          0,
          0,
          1024,
          720,
          0,
          0,
          canvas.width,
          canvas.height / 2
        );
      }
    },
    {
      key: "renderNuvens",
      value: function renderNuvens() {
        var _this5 = this;

        this.nuvemScale = canvas.width > 768 ? 0.8 : 0.5;

        if (!this.nuvens) {
          this.nuvens = [];
          this.maxNuvemHeight = 200 * this.nuvemScale;

          var nuvemTipoA = function nuvemTipoA() {
            var speed =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : Math.random() * 1 + 0.2;
            var position =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {
                  x: Math.random() * window.innerWidth * 1.25,
                  y: Math.random() * 200
                };
            var novaNuvem = {};
            novaNuvem.img = nuvem1;
            novaNuvem.position = position;
            novaNuvem.size = {
              x: 137,
              y: 70
            };
            novaNuvem.speed = speed;
            return novaNuvem;
          };

          var nuvemTipoB = function nuvemTipoB() {
            var speed =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : Math.random() * 1 + 0.2;
            var position =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {
                  x: Math.random() * window.innerWidth * 1.25,
                  y: Math.random() * 200
                };
            var novaNuvem = {};
            novaNuvem.img = nuvem2;
            novaNuvem.position = position;
            novaNuvem.size = {
              x: 220,
              y: 146
            };
            novaNuvem.speed = speed;
            return novaNuvem;
          };

          var nuvemTipoC = function nuvemTipoC() {
            var speed =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : Math.random() * 1 + 0.2;
            var position =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {
                  x: Math.random() * window.innerWidth * 1.25,
                  y: Math.random() * _this5.maxNuvemHeight
                };
            var novaNuvem = {};
            novaNuvem.img = nuvem3;
            novaNuvem.position = position;
            novaNuvem.size = {
              x: 229,
              y: 99
            };
            novaNuvem.speed = speed;
            return novaNuvem;
          };

          this.nuvens.push(nuvemTipoA());
          this.nuvens.push(nuvemTipoA());
          this.nuvens.push(nuvemTipoB());
          this.nuvens.push(nuvemTipoB());
          this.nuvens.push(nuvemTipoC());
          this.nuvens.push(nuvemTipoC());

          if (canvas.width > 768) {
            this.nuvens.push(nuvemTipoA());
            this.nuvens.push(nuvemTipoA());
            this.nuvens.push(nuvemTipoB());
            this.nuvens.push(nuvemTipoB());
            this.nuvens.push(nuvemTipoC());
            this.nuvens.push(nuvemTipoC());
          }
        }

        this.nuvens = this.nuvens.map(function (nuvem) {
          _this5.ctx.drawImage(
            nuvem.img,
            0,
            0,
            nuvem.size.x,
            nuvem.size.y,
            nuvem.position.x,
            nuvem.position.y,
            nuvem.size.x * _this5.nuvemScale,
            nuvem.size.y * _this5.nuvemScale
          );

          nuvem.position.x -= nuvem.speed;

          if (nuvem.position.x + nuvem.size.x < 0) {
            nuvem.position.x = window.innerWidth;
            nuvem.position.y = Math.random() * _this5.maxNuvemHeight;
            nuvem.speed = Math.random() * 1 + 0.1;
          }

          return nuvem;
        });
      }
    },
    {
      key: "renderMontanhas",
      value: function renderMontanhas() {
        this.ctx.drawImage(
          mountains,
          0,
          0,
          1024,
          215,
          0,
          canvas.height / 2 - 100,
          canvas.width,
          215
        );
      }
    },
    {
      key: "renderRoad",
      value: function renderRoad() {
        // Asfalto
        var asfaltoHeight = canvas.height / 2;

        if (!this.pistaSpeed) {
          this.pistaSpeed = 6;
        }

        this.ctx.fillStyle = "#3A3B3C";
        this.ctx.fillRect(0, canvas.height / 2, canvas.width, asfaltoHeight); // Zebra Asfalto

        if (!this.roadZebra) {
          this.roadZebra = {
            img: roadZebra,
            position: {
              x: 0,
              y: canvas.height / 2
            },
            size: {
              x: 2048,
              y: 16
            }
          };
        }

        this.roadZebra.position.x -= this.pistaSpeed;

        if (this.roadZebra.position.x < -145) {
          this.roadZebra.position.x = 0;
        }

        this.ctx.drawImage(
          roadZebra,
          0,
          0,
          this.roadZebra.size.x,
          this.roadZebra.size.y,
          this.roadZebra.position.x,
          canvas.height / 2,
          this.roadZebra.size.x,
          this.roadZebra.size.y
        ); // Faixa asfalto

        if (!this.roadLine) {
          this.roadLine = {
            img: roadLine,
            position: {
              x: 0,
              y: canvas.height / 2
            },
            size: {
              x: 1919,
              y: 7
            }
          };
        }

        this.roadLine.position.x -= this.pistaSpeed * 1.85;

        if (this.roadLine.position.x < -125) {
          this.roadLine.position.x = 0;
        }

        this.ctx.drawImage(
          roadLine,
          0,
          0,
          this.roadLine.size.x,
          this.roadLine.size.y,
          this.roadLine.position.x,
          canvas.height - (7 * canvas.height) / 24,
          this.roadLine.size.x,
          this.roadLine.size.y
        );
      }
    },
    {
      key: "renderJanelaFullscreen",
      value: function renderJanelaFullscreen() {
        return;
        var rect = {
          x: 5,
          y: 5,
          w: canvas.width - 10,
          h: canvas.height - 10
        };
        this.ctx.strokeStyle = "#7FD37C";
        this.ctx.fillStyle = "rgba(117,192,67,0.95)";
        roundRect(this.ctx, rect.x, rect.y, rect.w, rect.h, 5, true, 1); //Texto

        this.ctx.font = "24px sans-serif";
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
          "Toque aqui para",
          canvas.width / 2 + 5,
          canvas.height / 2 - 15,
          canvas.width
        );
        this.ctx.fillText(
          "ativar a tela cheia",
          canvas.width / 2 + 5,
          canvas.height / 2 + 18,
          canvas.width
        );
      }
    },
    {
      key: "renderRacers",
      value: function renderRacers() {
        var _this6 = this;

        var showHitBoxes = false; //Set racers height

        this.racerScale = canvas.width > 768 ? 0.7 : this.racerMobileScale;
        var heights = [-0.3, 0, 0.4];

        if (this.layout == "mobile") {
          heights = [-0.2, 0.1, 0.3];
        }

        if (
          this.gameState == gameStates.WAIT_ANSWER ||
          this.gameState == gameStates.WRONG_ANSWER
        ) {
          var carsInPosition = 0;
          var targetPositions = [2, 185, 2];

          if (this.layout == "desktop") {
            targetPositions = [2, 255, 2];
          } // Avança todos os carros até a posição deles

          this.kartRacers.map(function (item, i, arr) {
            arr[i].position.y = _this6.getEstradaCoordinates(heights[i]);
            var speedToMove =
              8 * (targetPositions[i] - item.position.x >= 0 ? 1 : -1);
            if (Math.abs(targetPositions[i] - item.position.x) < 8)
              speedToMove = targetPositions[i] - item.position.x;

            if (item.position.x != targetPositions[i]) {
              arr[i].position.x += speedToMove;
            } else {
              carsInPosition++;
            }
          });

          if (carsInPosition == targetPositions.length) {
            this.pistaSpeed = 6;
          }
        } else if (this.gameState == gameStates.RIGHT_ANSWER) {
          var carsInPosition = 0;
          var targetPositions = {
            loser: -400,
            winner: 400
          };
          this.racerScale = canvas.width > 768 ? 0.7 : this.racerMobileScale;
          this.kartRacers.map(function (item, i, arr) {
            var targetPosition = -400;

            if (_this6.winnerKart == item) {
              targetPosition =
                canvas.width / 2 - (item.size.x * _this6.racerScale) / 2;
              var speedToMove =
                4 * (targetPosition - item.position.x >= 0 ? 1 : -1);
              if (Math.abs(targetPosition - item.position.x) < 4)
                speedToMove = targetPosition - item.position.x;

              if (item.position.x != targetPosition) {
                arr[i].position.x += speedToMove;
              } else {
                carsInPosition++;
              }
            } else {
              if (item.position.x > targetPosition) {
                arr[i].position.x -= 7;
              } else {
                carsInPosition++;
              }
            }
          });

          if (carsInPosition == targetPositions.length) {
            this.pistaSpeed = 6;
          }
        }

        this.kartRacers.map(function (item) {
          _this6.racerScale =
            canvas.width > 768 ? 0.7 : _this6.racerMobileScale;

          _this6.ctx.drawImage(
            racer,
            0,
            0,
            item.size.x,
            item.size.y,
            item.position.x,
            item.position.y,
            item.size.x * _this6.racerScale,
            item.size.y * _this6.racerScale
          );

          if (showHitBoxes) {
            _this6.ctx.fillStyle = "rgba(255,0,0,0.36)";

            _this6.ctx.fillRect(
              item.position.x,
              item.position.y,
              item.size.x * _this6.racerScale,
              item.size.y * _this6.racerScale
            );
          }
        });
      }
    },
    {
      key: "renderRacerFlags",
      value: function renderRacerFlags(question) {
        var _this7 = this;

        var questionOptinIndex = 0;
        this.kartRacers.map(function (item, index) {
          item.valorBandeira = question.options[index].toString();
          _this7.ctx.font = "bold 24px sans-serif";
          _this7.ctx.fillStyle = "#000000";

          _this7.ctx.fillText(
            item.valorBandeira,
            item.position.x +
            165 * _this7.racerScale -
            (item.valorBandeira.toString().length - 1) * 8,
            item.position.y - (100 - item.size.y / 2) * _this7.racerScale,
            140
          );
        });
      }
    },
    {
      key: "renderMathOperation",
      value: function renderMathOperation(question) {
        var rect = {
          x: canvas.width / 2 - 80,
          y: 100,
          w: 160,
          h: 70,
          borderSize: 2
        }; // BG

        canvasContext.strokeStyle = "#9FD37C";
        canvasContext.fillStyle = "rgba(0,51,0,0.8)";
        roundRect(
          canvasContext,
          rect.x,
          rect.y,
          rect.w,
          rect.h,
          5,
          true,
          rect.borderSize
        ); // Operation

        this.ctx.font = "36px sans-serif";
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
          question.question,
          rect.x + rect.w / 2,
          rect.y + rect.h / 2 + rect.borderSize * 2,
          1000
        ); //Retorna valores ao normal

        this.ctx.textAlign = "start";
        this.ctx.textBaseline = "alphabetic";
      }
    },
    {
      key: "renderQuestionLabel2",
      value: function renderQuestionLabel2() {
        //Set sizes
        var fontSize = 17;
        var labelRect = {
          x: 5,
          y: 5,
          w: canvas.width - 16,
          h: undefined,
          padding: {
            x: 4,
            y: 4
          },
          borderSize: 4
        };
        labelRect.h =
          fontSize * 2 + labelRect.padding.y * 2 + labelRect.borderSize * 2;

        if (this.layout == "desktop") {
          labelRect.w *= 2;
        } // BG

        canvasContext.strokeStyle = "#9FD37C";
        canvasContext.fillStyle = "#FFFFFF";
        roundRect(
          canvasContext,
          labelRect.x,
          labelRect.y,
          labelRect.w,
          labelRect.h,
          5,
          true,
          labelRect.borderSize
        ); //Texto

        this.ctx.font = fontSize + "px sans-serif";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(
          "CLIQUE NO CARRO QUE APRESENTA",
          labelRect.x + labelRect.padding.x + 54,
          labelRect.y + labelRect.padding.y + fontSize,
          canvas.width - labelRect.x
        );
        this.ctx.fillText(
          "O RESULTADO DA MULTIPLICAÇÂO.",
          labelRect.x + labelRect.padding.x + 54,
          labelRect.y + labelRect.padding.y + fontSize * 2,
          canvas.width - labelRect.x
        ); //Circle with number
        // var circleRadius =
        //   (fontSize * 2 + labelRect.padding.y * 2 + labelRect.borderSize * 2) / 2;
        // this.ctx.beginPath();
        // this.ctx.arc(
        //   labelRect.x - circleRadius + 20,
        //   labelRect.y + circleRadius,
        //   circleRadius,
        //   0,
        //   2 * Math.PI,
        //   false
        // );
        // this.ctx.fillStyle = "#75C043";
        // this.ctx.fill();
        // this.ctx.lineWidth = 3;
        // this.ctx.strokeStyle = "#9FD37C";
        // this.ctx.stroke();
        // this.ctx.font = "bold 42px sans-serif";
        // this.ctx.strokeStyle = "#FFFFFF";
        // this.ctx.fillStyle = "#FFFFFF";
        // this.ctx.fillText(
        //   "?",
        //   labelRect.x - circleRadius + 20 - 12,
        //   labelRect.y + circleRadius + 14,
        //   canvas.width - labelRect.x
        // );

        this.renderEnunciadoBtn();
      }
    },
    {
      key: "renderEnunciadoBtn",
      value: function renderEnunciadoBtn() {
        if (!this.enunciadoBtn) {
          this.enunciadoBtn = {};
          this.enunciadoBtn.animCounter = 0;
        }

        this.enunciadoBtn.rect = {
          x: 32,
          y: 32,
          w: 169 * 0.14,
          h: 150 * 0.14
        };
        this.enunciadoBtn.animCounter++;
        this.ctx.beginPath();
        this.ctx.arc(
          this.enunciadoBtn.rect.x,
          this.enunciadoBtn.rect.y,
          this.enunciadoBtn.rect.w * 0.95,
          0,
          2 * Math.PI,
          false
        );
        this.enunciadoBtn.circle = {
          x: this.enunciadoBtn.rect.x,
          y: this.enunciadoBtn.rect.y,
          radius: this.enunciadoBtn.rect.w * 0.95
        };
        this.ctx.fillStyle = "#005279";
        this.ctx.fill();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "#75c043";
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.save();
        this.ctx.translate(this.enunciadoBtn.rect.x, this.enunciadoBtn.rect.y);
        this.ctx.rotate(
          degrees_to_radians(
            Math.cos(degrees_to_radians(this.enunciadoBtn.animCounter * 3)) * 9
          )
        );
        var animFactor =
          1 +
          Math.abs(
            Math.cos(degrees_to_radians(this.enunciadoBtn.animCounter))
          ) *
          0.15;
        this.ctx.drawImage(
          megafone,
          -this.enunciadoBtn.rect.w * 0.5 * animFactor,
          -this.enunciadoBtn.rect.h * 0.5 * animFactor,
          this.enunciadoBtn.rect.w * animFactor,
          this.enunciadoBtn.rect.h * animFactor
        );
        this.ctx.restore();
      }
    },
    {
      key: "checkEnunciadoBtnClick",
      value: function checkEnunciadoBtnClick(x, y) {
        if (
          Physics.pointCircle(
            {
              x: x,
              y: y
            },
            this.enunciadoBtn.circle
          )
        ) {
          this.playEnunciadoAudio(0);
        }
      }
    },
    {
      key: "playEnunciadoAudio",
      value: function playEnunciadoAudio() {
        var _this8 = this;

        var delay =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : 3000;
        if (!this.playedSoundEnunciado) this.playedSoundEnunciado = false;
        if (delay == 0) this.playedSoundEnunciado = true;
        setTimeout(function () {
          if (delay == 0 || !_this8.playedSoundEnunciado) {
            _this8.soundEnunciado.currentTime = 0;

            _this8.soundEnunciado.play();

            _this8.playedSoundEnunciado = true;
          }
        }, delay);
      }
    },
    {
      key: "renderQuestion",
      value: function renderQuestion(question) {
        this.renderQuestionLabel2();
        this.renderRacerFlags(question);
        this.renderMathOperation(question);
      }
    },
    {
      key: "renderRightAnswer",
      value: function renderRightAnswer() {
        this.ctx.drawImage(
          ui_certo,
          0,
          0,
          108,
          108,
          canvas.width / 2 - 54,
          canvas.height / 2 - 54,
          108,
          108
        );
      }
    },
    {
      key: "renderWrongAnswer",
      value: function renderWrongAnswer() {
        this.ctx.drawImage(
          ui_errado,
          0,
          0,
          106,
          106,
          canvas.width / 2 - 106 / 2,
          canvas.height / 2 - 106 / 2,
          106,
          106
        );
      }
    },
    {
      key: "renderResults",
      value: function renderResults() {
        //Set sizes
        var fontSize = 42;
        var labelRect = {
          x: 0.025 * canvas.width,
          y: 0.25 * canvas.height,
          w: 0.95 * canvas.width,
          h: 0.5 * canvas.height,
          padding: {
            x: 50,
            y: 50
          },
          borderSize: 4
        }; // BG

        canvasContext.strokeStyle = "#7D3F00";
        canvasContext.fillStyle = "rgba(0,51,51,0.95)";
        roundRect(
          canvasContext,
          labelRect.x,
          labelRect.y,
          labelRect.w,
          labelRect.h,
          5,
          true,
          labelRect.borderSize
        ); // FRAG
        //Texto

        this.ctx.font = fontSize + "px sans-serif";
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        var frag = {
          respostas: 0,
          acertos: 0
        };

        for (var a = 0; a < this.studentResults.length; a++) {
          var question = this.studentResults[a];
          frag.respostas++;
          if (question.success) frag.acertos++;
        }

        this.ctx.fillText(
          "Nota: " + ((frag.acertos / frag.respostas) * 100).toFixed(0) + "%",
          labelRect.x +
          labelRect.w / 2 +
          labelRect.borderSize * 2 -
          fontSize / 2,
          labelRect.y +
          labelRect.h / 2 +
          labelRect.borderSize * 2 -
          fontSize / 2 -
          fontSize,
          1000
        );
        fontSize = 24;
        this.ctx.font = fontSize + "px sans-serif";
        this.ctx.fillText(
          "Acertos: " + frag.acertos,
          labelRect.x +
          labelRect.w / 2 +
          labelRect.borderSize * 2 -
          fontSize / 2,
          labelRect.y +
          labelRect.h / 2 +
          labelRect.borderSize * 2 -
          fontSize / 2 +
          fontSize * 2,
          1000
        );
        this.ctx.fillText(
          "Tentativas: " + frag.respostas,
          labelRect.x +
          labelRect.w / 2 +
          labelRect.borderSize * 2 -
          fontSize / 2,
          labelRect.y +
          labelRect.h / 2 +
          labelRect.borderSize * 2 -
          fontSize / 2 +
          fontSize * 3.5,
          1000
        );
        this.ctx.fillText(
          "Total de perguntas: " + this.inputQuestions.length,
          labelRect.x +
          labelRect.w / 2 +
          labelRect.borderSize * 2 -
          fontSize / 2,
          labelRect.y +
          labelRect.h / 2 +
          labelRect.borderSize * 2 -
          fontSize / 2 +
          fontSize * 5,
          1000
        ); //Retorna valores ao normal

        this.ctx.textAlign = "start";
        this.ctx.textBaseline = "alphabetic";
      }
    }
  ]);

  return GameEngine;
})();

var ImagemObject = function ImagemObject() {
  _classCallCheck(this, ImagemObject);

  this.img = roadZebra;
  this.position = {
    x: 0,
    y: canvas.height / 2
  };
  this.size = {
    x: 2048,
    y: 16
  };
  this.speed = 3;
};

var resizeCanvas = function resizeCanvas() {
  if (engine) {
    canvas.width = window.innerWidth; // width = engine.originalWidth;

    canvas.height = window.innerHeight; // height = engine.originalHeight;
    // if (canvas.width > 1024) canvas.width = 1024;
    // if (canvas.width > 768) if (canvas.height > 720) canvas.height = 720;
  }
};

window.addEventListener("resize", function () {
  resizeCanvas();
});
var questions = [];

for (var i = 1; i <= 10; i++) {
  var newQuestion = {
    question: "1 x " + i + " =",
    answer: i * 1,
    options: i == 1 ? [1, 0, 2] : [(i - 1) * 1, i * 1, (i + 1) * 1]
  };
  newQuestion.options = shuffle(newQuestion.options);
  questions.push(newQuestion);
}

questions = shuffle(questions);
questions = questions.slice(0, 6);
var canvasContext = canvas.getContext("2d");
var engine = new GameEngine(questions, canvasContext, canvas);
sheetLoader.loadSheetQueue(function () {
  engine.start();
});
resizeCanvas(); // ===================================== FIM
