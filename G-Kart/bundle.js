"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//External Methods
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
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
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

function radians_to_degrees(radians) {
  var pi = Math.PI;
  return radians * (180 / pi);
}

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
/* View in fullscreen */


function openFullscreen(elem) {
  return;

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

window.mobileAndTabletCheck = function () {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
};

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

var Vector2 = /*#__PURE__*/function () {
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "sum",
    value: function sum(targetVector) {
      this.x += targetVector.x;
      this.y += targetVector.y;
      return this;
    }
  }, {
    key: "scale",
    value: function scale(scaler) {
      this.x *= scaler;
      this.y *= scaler;
      return this;
    }
  }, {
    key: "scaled",
    value: function scaled(scaler) {
      return this.clone().scale(scaler);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector2(this.x, this.y);
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.pow(Math.pow(this.x, 2) + Math.pow(this.y, 2), 0.5);
    }
  }], [{
    key: "distance",
    value: function distance(v1, v2) {
      return Math.pow(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2), 0.5);
    }
  }, {
    key: "dotProduct",
    value: function dotProduct(v1, v2) {
      return v1.x * v2.x + v1.y + v2.y;
    }
  }, {
    key: "angleBetween",
    value: function angleBetween(v1, v2) {
      // angle in radians
      // var angleRadians = Math.atan2(v2.y - v1.y, v2.x - v1.x);
      // angle in degrees
      // var angleDeg = Math.atan2(v2.y - v1.y, v2.x - v1.x) * 180 / Math.PI;
      // angle in degrees, from example, same data
      // var angleDeg = Math.atan2(v2.y - v1.y, v2.x - v1.x) * 180 / Math.PI + Math.atan2(v1.y - v2.y, v1.x - v2.x) * 180 / Math.PI;
      // var angleDeg = Math.atan2(v2.y - v1.y, v2.x - v1.x) * 180 / Math.PI;
      return Math.atan2(v1.y - v2.y, v1.x - v2.x) * 180 / Math.PI + 180; // return angleDeg;
      // return Vector2.dotProduct(v1, v2) / (v1.magnitude * v2.magnitude);
    }
  }]);

  return Vector2;
}();

var usedSingleLog = false;

console.singleLog = function (options) {
  if (!usedSingleLog) console.log(options);
  usedSingleLog = true;
};

function FpsCtrl(fps, callback) {
  var delay = 1000 / fps,
      time = null,
      frame = -1,
      tref;

  function loop(timestamp) {
    if (time === null) time = timestamp;
    var seg = Math.floor((timestamp - time) / delay);

    if (seg > frame) {
      frame = seg;
      callback({
        time: timestamp,
        frame: frame
      });
    }

    tref = requestAnimationFrame(loop);
  }

  this.isPlaying = false;

  this.frameRate = function (newfps) {
    if (!arguments.length) return fps;
    fps = newfps;
    delay = 1000 / fps;
    frame = -1;
    time = null;
  };

  this.start = function () {
    if (!this.isPlaying) {
      this.isPlaying = true;
      tref = requestAnimationFrame(loop);
    }
  };

  this.pause = function () {
    if (this.isPlaying) {
      cancelAnimationFrame(tref);
      this.isPlaying = false;
      time = null;
      frame = -1;
    }
  };
}

Array.prototype.remove = function () {
  var what,
      a = arguments,
      L = a.length,
      ax;

  while (L && this.length) {
    what = a[--L];

    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }

  return this;
}; // === iOS Compatibility


if (!('performance' in window)) {
  var offset = Date.now();
  window.performance = {
    now: function now() {
      return Date.now() - offset;
    }
  };
}

if (!Math.sign) {
  Math.sign = function (value) {
    if (value >= 0) {
      return 1;
    } else return -1;
  };
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function () {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();
}

if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TxtReader = /*#__PURE__*/function () {
  function TxtReader() {
    _classCallCheck(this, TxtReader);
  }

  _createClass(TxtReader, null, [{
    key: "loadTextFile",
    value: function loadTextFile(fileName, callbackFunction) {
      var req = new XMLHttpRequest();

      req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status !== 200) {
          alert("loading failed ");
        }
      };

      req.onload = function () {
        var fileContent = null;
        fileContent = req.responseText;

        if (callbackFunction !== null && callbackFunction !== undefined) {
          callbackFunction(fileContent);
        }
      };

      req.open("GET", fileName, true);
      req.setRequestHeader("Content-Type", "text/xml");
      req.send();
    }
  }]);

  return TxtReader;
}();
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShipLayoutReader = /*#__PURE__*/function () {
  function ShipLayoutReader() {
    _classCallCheck(this, ShipLayoutReader);

    this.animationCounter = 0;
    this.hasLoaded = false;
  }

  _createClass(ShipLayoutReader, [{
    key: "load",
    value: function load(filepath) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      this.filepath = filepath;
      this.read(callback);
    }
  }, {
    key: "getTilesetByGID",
    value: function getTilesetByGID(gid) {
      var retorno = null;
      this.tilesets.map(function (tileset) {
        // console.log(gid, tileset.firstgid <= gid, gid <= tileset.firstgid + (tileset.tilecount - 1), tileset);      
        if (tileset.imageLoaded) {
          if (tileset.firstgid <= gid && gid <= tileset.firstgid + (tileset.tilecount - 1)) {
            retorno = tileset;
          }
        }
      });
      return retorno;
    }
  }, {
    key: "getLayerByZIndex",
    value: function getLayerByZIndex(zIndex) {
      var _this = this;

      var retorno = null;
      this.layers.map(function (layer) {
        if (_this.layers.properties['z-index'] == zIndex) retorno = layer;
      });
      return retorno;
    }
  }, {
    key: "getProperties",
    value: function getProperties(objectToAttach) {
      var properties = [];
      var propertyTags = objectToAttach.querySelector('properties');

      if (propertyTags) {
        propertyTags = propertyTags.querySelectorAll('property');
      } else {
        propertyTags = [];
      }

      var _iterator = _createForOfIteratorHelper(propertyTags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var propTag = _step.value;
          var key = propTag.getAttribute("name");
          var value = JSON.parse(propTag.getAttribute("value"));
          properties[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return properties;
    }
  }, {
    key: "getObjects",
    value: function getObjects(objectgroup) {}
  }, {
    key: "read",
    value: function read() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      // For reading .txt file code block
      var afterLoad = function afterLoad(fileString) {
        var parser, xmlDoc;
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(fileString, "text/xml"); // Read Stages

        _this2.challenges = [];
        _this2.questions = [];
        var objGs = xmlDoc.querySelectorAll("objectgroup");
        console.log(objGs);

        for (var idx = 0; idx < objGs.length; idx++) {
          var objectgroup = objGs[idx];
          var newStage = {
            name: null,
            objects: []
          };
          newStage.name = objectgroup.getAttribute('name');
          newStage.properties = _this2.getProperties(objectgroup);

          var _iterator2 = _createForOfIteratorHelper(objectgroup.querySelectorAll("object")),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var object = _step2.value;
              var tempType = object.getAttribute("type");
              var tempX = parseInt(object.getAttribute("x"));
              var tempY = parseInt(object.getAttribute("y"));
              var tempW = parseInt(object.getAttribute("width"));
              var tempH = parseInt(object.getAttribute("height"));
              var newObject = {
                gid: parseInt(object.getAttribute("gid")),
                type: tempType,
                x: tempX + tempW * 0.5,
                y: 1600 - tempY,
                w: tempW,
                h: tempH,
                name: object.getAttribute("name"),
                // collider: newPolyColider,
                properties: _this2.getProperties(object)
              };
              newStage.objects.push(newObject);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          switch (newStage.properties.type) {
            case 'challenge':
              _this2.challenges.push(newStage);

              break;

            case 'question':
              _this2.questions.push(newStage);

              break;

            default:
              break;
          }
        }

        _this2.hasLoaded = true;
        if (callback) callback(); // console.log(this.layers);
        // console.log(xmlDoc);
      };

      var stageData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<map version=\"1.0\" orientation=\"orthogonal\" renderorder=\"right-down\" width=\"15\" height=\"100\" tilewidth=\"16\" tileheight=\"16\" nextobjectid=\"874\">\n <tileset firstgid=\"1\" name=\"31363\" tilewidth=\"16\" tileheight=\"16\" tilecount=\"28\" columns=\"7\">\n  <image source=\"../../../../../../../../Trabalho/Prefeitura Carmopolis/Caixa de areia/stage-layout.png\" trans=\"ff00ff\" width=\"112\" height=\"64\"/>\n </tileset>\n <tileset firstgid=\"29\" name=\"Clouds\" tilewidth=\"48\" tileheight=\"32\" tilecount=\"4\" columns=\"2\">\n  <image source=\"../../../../../../../../Trabalho/Prefeitura Carmopolis/Caixa de areia/cloud-tileset.png\" trans=\"ff0004\" width=\"96\" height=\"64\"/>\n </tileset>\n <tileset firstgid=\"33\" name=\"31363\" tilewidth=\"16\" tileheight=\"16\" tilecount=\"28\" columns=\"7\">\n  <image source=\"../../../../../../../../Trabalho/Prefeitura Carmopolis/Caixa de areia/stage-layout.png\" trans=\"ff00ff\" width=\"112\" height=\"64\"/>\n </tileset>\n <layer name=\"Camada de Tiles 1\" width=\"15\" height=\"100\" visible=\"0\">\n  <data encoding=\"csv\">\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\n</data>\n </layer>\n <objectgroup name=\"Challenge 2\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"2\"/>\n   <property name=\"crystals\" type=\"int\" value=\"6\"/>\n   <property name=\"hardness\" type=\"float\" value=\"1\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"182\" gid=\"15\" x=\"0\" y=\"1072\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"183\" gid=\"30\" x=\"176\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"184\" gid=\"1\" x=\"192\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"185\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"186\" gid=\"1\" x=\"192\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"188\" gid=\"33\" x=\"112\" y=\"1248\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"189\" gid=\"30\" x=\"96\" y=\"1152\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"191\" gid=\"33\" x=\"112\" y=\"1296\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"192\" gid=\"33\" x=\"112\" y=\"1200\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"245\" gid=\"34\" x=\"112\" y=\"1104\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 3\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"3\"/>\n   <property name=\"crystals\" type=\"int\" value=\"9\"/>\n   <property name=\"hardness\" type=\"float\" value=\"1.5\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"193\" gid=\"15\" x=\"0\" y=\"752\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"194\" gid=\"30\" x=\"176\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"195\" gid=\"1\" x=\"192\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"196\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"197\" gid=\"1\" x=\"192\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"199\" gid=\"33\" x=\"112\" y=\"1248\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"200\" gid=\"30\" x=\"96\" y=\"1152\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"202\" gid=\"33\" x=\"112\" y=\"1296\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"203\" gid=\"33\" x=\"112\" y=\"1200\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"204\" gid=\"33\" x=\"32\" y=\"944\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"205\" gid=\"33\" x=\"32\" y=\"896\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"206\" gid=\"33\" x=\"32\" y=\"992\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"207\" gid=\"30\" x=\"16\" y=\"848\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"244\" gid=\"34\" x=\"32\" y=\"800\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 3 A\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"3\"/>\n   <property name=\"crystals\" type=\"int\" value=\"9\"/>\n   <property name=\"hardness\" type=\"float\" value=\"1.5\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"784\" gid=\"15\" x=\"0\" y=\"748\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"785\" gid=\"30\" x=\"176\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"786\" gid=\"1\" x=\"192\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"787\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"788\" gid=\"1\" x=\"192\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"789\" gid=\"33\" x=\"33\" y=\"1225\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"790\" gid=\"30\" x=\"17\" y=\"1129\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"791\" gid=\"33\" x=\"33\" y=\"1273\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"792\" gid=\"33\" x=\"33\" y=\"1177\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"793\" gid=\"33\" x=\"193\" y=\"926\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"794\" gid=\"33\" x=\"193\" y=\"878\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"795\" gid=\"33\" x=\"193\" y=\"974\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"796\" gid=\"30\" x=\"177\" y=\"830\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"797\" gid=\"34\" x=\"193\" y=\"782\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 4\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"2\"/>\n   <property name=\"crystals\" type=\"int\" value=\"7\"/>\n   <property name=\"hardness\" type=\"float\" value=\"1.5\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"214\" gid=\"15\" x=\"0\" y=\"1056\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"215\" gid=\"30\" x=\"176\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"216\" gid=\"1\" x=\"192\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"217\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"218\" gid=\"1\" x=\"192\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"220\" gid=\"33\" x=\"32\" y=\"1248\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"221\" gid=\"30\" x=\"16\" y=\"1152\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"223\" gid=\"33\" x=\"32\" y=\"1296\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"224\" gid=\"33\" x=\"32\" y=\"1200\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"243\" gid=\"34\" x=\"32\" y=\"1104\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"307\" gid=\"33\" x=\"112\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 4 A\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"2\"/>\n   <property name=\"crystals\" type=\"int\" value=\"7\"/>\n   <property name=\"hardness\" type=\"float\" value=\"4\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"851\" gid=\"15\" x=\"0\" y=\"1056\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"852\" gid=\"30\" x=\"176\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"853\" gid=\"1\" x=\"36\" y=\"1580\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"854\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"855\" gid=\"1\" x=\"116\" y=\"1532\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"856\" gid=\"1\" x=\"116\" y=\"1240\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"857\" gid=\"30\" x=\"180\" y=\"1144\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"858\" gid=\"1\" x=\"32\" y=\"1296\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"859\" gid=\"1\" x=\"196\" y=\"1184\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"860\" gid=\"2\" x=\"196\" y=\"1096\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"861\" gid=\"1\" x=\"112\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 5\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"3\"/>\n   <property name=\"crystals\" type=\"int\" value=\"7\"/>\n   <property name=\"hardness\" type=\"float\" value=\"2\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"230\" gid=\"15\" x=\"0\" y=\"1040\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"231\" gid=\"30\" x=\"176\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"232\" gid=\"1\" x=\"192\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"233\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"234\" gid=\"1\" x=\"192\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"235\" gid=\"1\" x=\"176\" y=\"1392\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"236\" gid=\"33\" x=\"64\" y=\"1232\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"237\" gid=\"30\" x=\"96\" y=\"1296\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"238\" gid=\"33\" x=\"144\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"240\" gid=\"33\" x=\"32\" y=\"1184\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"241\" gid=\"30\" x=\"16\" y=\"1136\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"242\" gid=\"2\" x=\"32\" y=\"1088\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 5 A\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"3\"/>\n   <property name=\"crystals\" type=\"int\" value=\"7\"/>\n   <property name=\"hardness\" type=\"float\" value=\"2\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"798\" gid=\"15\" x=\"0\" y=\"656\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"799\" gid=\"30\" x=\"176\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"800\" gid=\"1\" x=\"192\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"801\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"802\" gid=\"1\" x=\"192\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"803\" gid=\"1\" x=\"176\" y=\"1392\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"804\" gid=\"33\" x=\"64\" y=\"1232\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"806\" gid=\"33\" x=\"144\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"807\" gid=\"33\" x=\"32\" y=\"1184\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"808\" gid=\"30\" x=\"16\" y=\"1136\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"810\" gid=\"1\" x=\"104\" y=\"1288\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"811\" gid=\"2\" x=\"192\" y=\"752\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"812\" gid=\"30\" x=\"176\" y=\"800\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"813\" gid=\"1\" x=\"120\" y=\"936\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"814\" gid=\"1\" x=\"160\" y=\"888\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"815\" gid=\"1\" x=\"80\" y=\"988\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"816\" gid=\"1\" x=\"192\" y=\"832\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"817\" gid=\"1\" x=\"48\" y=\"1052\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 6\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"2\"/>\n   <property name=\"crystals\" type=\"int\" value=\"9\"/>\n   <property name=\"hardness\" type=\"float\" value=\"2.5\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"247\" gid=\"15\" x=\"0\" y=\"1040\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"248\" gid=\"30\" x=\"176\" y=\"1443\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"249\" gid=\"1\" x=\"192\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"250\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"251\" gid=\"1\" x=\"192\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"252\" gid=\"1\" x=\"167\" y=\"1383\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"253\" gid=\"33\" x=\"56\" y=\"1224\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"255\" gid=\"33\" x=\"139\" y=\"1345\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"256\" gid=\"33\" x=\"32\" y=\"1181\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"257\" gid=\"30\" x=\"16\" y=\"1136\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"258\" gid=\"2\" x=\"32\" y=\"1088\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"259\" gid=\"33\" x=\"85\" y=\"1264\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"260\" gid=\"33\" x=\"110\" y=\"1303\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 7\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"4\"/>\n   <property name=\"crystals\" type=\"int\" value=\"12\"/>\n   <property name=\"hardness\" type=\"float\" value=\"4\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"261\" gid=\"15\" x=\"0\" y=\"560\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"262\" gid=\"30\" x=\"176\" y=\"1443\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"263\" gid=\"1\" x=\"192\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"264\" gid=\"1\" x=\"192\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"265\" gid=\"1\" x=\"192\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"266\" gid=\"1\" x=\"167\" y=\"1383\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"267\" gid=\"33\" x=\"56\" y=\"1224\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"268\" gid=\"33\" x=\"139\" y=\"1345\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"270\" gid=\"30\" x=\"16\" y=\"1184\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"272\" gid=\"33\" x=\"85\" y=\"1264\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"273\" gid=\"33\" x=\"110\" y=\"1303\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"274\" gid=\"30\" x=\"176\" y=\"896\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"275\" gid=\"33\" x=\"192\" y=\"976\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"276\" gid=\"33\" x=\"192\" y=\"928\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"277\" gid=\"33\" x=\"192\" y=\"1024\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"278\" gid=\"34\" x=\"32\" y=\"596\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"279\" gid=\"30\" x=\"16\" y=\"644\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"280\" gid=\"33\" x=\"32\" y=\"672\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 8\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"3\"/>\n   <property name=\"crystals\" type=\"int\" value=\"12\"/>\n   <property name=\"hardness\" type=\"float\" value=\"6\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"281\" gid=\"15\" x=\"0\" y=\"480\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"283\" gid=\"1\" x=\"192\" y=\"1556\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"286\" gid=\"1\" x=\"167\" y=\"1385\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"287\" gid=\"33\" x=\"56\" y=\"1230\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"288\" gid=\"33\" x=\"139\" y=\"1333\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"289\" gid=\"30\" x=\"16\" y=\"1199\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"290\" gid=\"33\" x=\"85\" y=\"1259\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"291\" gid=\"33\" x=\"110\" y=\"1293\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"295\" gid=\"33\" x=\"192\" y=\"1033\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"296\" gid=\"34\" x=\"192\" y=\"496\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"297\" gid=\"30\" x=\"176\" y=\"544\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"298\" gid=\"33\" x=\"192\" y=\"572\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"301\" gid=\"33\" x=\"56\" y=\"833\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"302\" gid=\"30\" x=\"16\" y=\"790\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"306\" gid=\"33\" x=\"128\" y=\"920\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 8 B\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"3\"/>\n   <property name=\"crystals\" type=\"int\" value=\"8\"/>\n   <property name=\"hardness\" type=\"float\" value=\"6\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"766\" gid=\"15\" x=\"0\" y=\"800\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"767\" gid=\"1\" x=\"32\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"768\" gid=\"1\" x=\"32\" y=\"1536\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"769\" gid=\"33\" x=\"96\" y=\"1232\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"770\" gid=\"33\" x=\"32\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"771\" gid=\"30\" x=\"16\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"772\" gid=\"33\" x=\"144\" y=\"1264\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"773\" gid=\"33\" x=\"192\" y=\"1296\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"775\" gid=\"34\" x=\"192\" y=\"832\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"779\" gid=\"30\" x=\"176\" y=\"880\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"781\" gid=\"1\" x=\"52\" y=\"1208\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"782\" gid=\"1\" x=\"32\" y=\"1176\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"783\" gid=\"30\" x=\"16\" y=\"1136\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 8 A\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"3\"/>\n   <property name=\"crystals\" type=\"int\" value=\"3\"/>\n   <property name=\"hardness\" type=\"float\" value=\"7\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"735\" gid=\"15\" x=\"0\" y=\"752\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"736\" gid=\"1\" x=\"192\" y=\"1556\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"740\" gid=\"30\" x=\"176\" y=\"1093\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"742\" gid=\"33\" x=\"112\" y=\"1408\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"744\" gid=\"34\" x=\"36\" y=\"805\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"745\" gid=\"30\" x=\"20\" y=\"853\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"750\" gid=\"1\" x=\"32\" y=\"1280\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"751\" gid=\"30\" x=\"101\" y=\"971\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 1\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"1\"/>\n   <property name=\"crystals\" type=\"int\" value=\"4\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"24\" gid=\"15\" x=\"0\" y=\"1360\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"34\" gid=\"30\" x=\"96\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"36\" gid=\"1\" x=\"112\" y=\"1600\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"37\" gid=\"1\" x=\"112\" y=\"1504\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"39\" gid=\"1\" x=\"112\" y=\"1548\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"246\" gid=\"34\" x=\"112\" y=\"1392\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"466\" gid=\"1\" x=\"112\" y=\"1472\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 1 D\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"2\"/>\n   <property name=\"crystals\" type=\"int\" value=\"7\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"754\" gid=\"15\" x=\"0\" y=\"1024\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"755\" gid=\"30\" x=\"16\" y=\"1424\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"756\" gid=\"1\" x=\"32\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"757\" gid=\"1\" x=\"32\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"758\" gid=\"1\" x=\"32\" y=\"1532\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"760\" gid=\"1\" x=\"32\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"761\" gid=\"30\" x=\"96\" y=\"1168\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"762\" gid=\"2\" x=\"112\" y=\"1120\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"763\" gid=\"1\" x=\"88\" y=\"1272\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"764\" gid=\"1\" x=\"44\" y=\"1328\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"765\" gid=\"1\" x=\"112\" y=\"1208\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 1 A\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"1\"/>\n   <property name=\"crystals\" type=\"int\" value=\"4\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"710\" gid=\"15\" x=\"0\" y=\"1360\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"711\" gid=\"30\" x=\"177\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"712\" gid=\"1\" x=\"96\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"713\" gid=\"1\" x=\"161\" y=\"1519\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"714\" gid=\"1\" x=\"129\" y=\"1551\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"715\" gid=\"34\" x=\"193\" y=\"1392\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"716\" gid=\"1\" x=\"193\" y=\"1487\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 1 B\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"1\"/>\n   <property name=\"crystals\" type=\"int\" value=\"6\"/>\n   <property name=\"hardness\" type=\"float\" value=\"2\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"717\" gid=\"15\" x=\"0\" y=\"1168\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"718\" gid=\"30\" x=\"16\" y=\"1248\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"719\" gid=\"1\" x=\"68\" y=\"1584\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"720\" gid=\"1\" x=\"132\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"721\" gid=\"1\" x=\"100\" y=\"1552\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"722\" gid=\"34\" x=\"32\" y=\"1200\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"723\" gid=\"1\" x=\"164\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"724\" gid=\"1\" x=\"112\" y=\"1348\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"725\" gid=\"1\" x=\"192\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Challenge 1 C\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"1\"/>\n   <property name=\"crystals\" type=\"int\" value=\"0\"/>\n   <property name=\"hardness\" type=\"float\" value=\"2\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;challenge&quot;\"/>\n  </properties>\n  <object id=\"726\" gid=\"15\" x=\"0\" y=\"1371\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"727\" gid=\"30\" x=\"0\" y=\"1467\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;checkpoint&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"753\" gid=\"2\" x=\"16\" y=\"1423\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;pink-crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Question 1\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"0\"/>\n   <property name=\"crystals\" type=\"int\" value=\"0\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;question&quot;\"/>\n  </properties>\n  <object id=\"308\" gid=\"15\" x=\"0\" y=\"1360\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"532\" gid=\"30\" x=\"0\" y=\"1442\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"533\" gid=\"30\" x=\"100\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"534\" gid=\"30\" x=\"192\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Question 2\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"0\"/>\n   <property name=\"crystals\" type=\"int\" value=\"0\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;question&quot;\"/>\n  </properties>\n  <object id=\"539\" gid=\"15\" x=\"0\" y=\"1312\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"540\" gid=\"30\" x=\"0\" y=\"1488\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"541\" gid=\"30\" x=\"100\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"542\" gid=\"30\" x=\"191\" y=\"1488\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Question 3\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"0\"/>\n   <property name=\"crystals\" type=\"int\" value=\"0\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;question&quot;\"/>\n  </properties>\n  <object id=\"706\" gid=\"15\" x=\"0\" y=\"1312\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"707\" gid=\"30\" x=\"189\" y=\"1392\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"708\" gid=\"30\" x=\"100\" y=\"1440\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"709\" gid=\"30\" x=\"0\" y=\"1392\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Question 4\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"0\"/>\n   <property name=\"crystals\" type=\"int\" value=\"0\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;question&quot;\"/>\n  </properties>\n  <object id=\"549\" gid=\"15\" x=\"0\" y=\"1392\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"550\" gid=\"30\" x=\"32\" y=\"1584\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"551\" gid=\"30\" x=\"176\" y=\"1584\" width=\"48\" height=\"32\">\n   <properties>\n    <property name=\"type\" value=\"&quot;result-option&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Reward 0\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"0\"/>\n   <property name=\"crystals\" type=\"int\" value=\"70\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;reward&quot;\"/>\n  </properties>\n  <object id=\"314\" gid=\"15\" x=\"0\" y=\"1136\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"316\" gid=\"1\" x=\"112\" y=\"1198\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"324\" gid=\"1\" x=\"112\" y=\"1214\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"325\" gid=\"1\" x=\"112\" y=\"1182\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"328\" gid=\"1\" x=\"144\" y=\"1214\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"329\" gid=\"1\" x=\"144\" y=\"1182\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"335\" gid=\"1\" x=\"144\" y=\"1198\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"338\" gid=\"1\" x=\"176\" y=\"1214\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"339\" gid=\"1\" x=\"176\" y=\"1182\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"345\" gid=\"1\" x=\"176\" y=\"1198\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"348\" gid=\"1\" x=\"208\" y=\"1214\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"349\" gid=\"1\" x=\"208\" y=\"1182\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"355\" gid=\"1\" x=\"208\" y=\"1198\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"356\" gid=\"1\" x=\"16\" y=\"1198\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"367\" gid=\"1\" x=\"80\" y=\"1198\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"374\" gid=\"1\" x=\"48\" y=\"1182\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"379\" gid=\"1\" x=\"16\" y=\"1214\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"380\" gid=\"1\" x=\"80\" y=\"1214\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"387\" gid=\"1\" x=\"80\" y=\"1182\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"391\" gid=\"1\" x=\"48\" y=\"1214\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"392\" gid=\"1\" x=\"16\" y=\"1182\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"393\" gid=\"1\" x=\"48\" y=\"1198\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"469\" gid=\"1\" x=\"176\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"470\" gid=\"1\" x=\"16\" y=\"1328\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"471\" gid=\"1\" x=\"48\" y=\"1328\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"472\" gid=\"1\" x=\"144\" y=\"1312\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"473\" gid=\"1\" x=\"208\" y=\"1312\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"474\" gid=\"1\" x=\"112\" y=\"1312\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"475\" gid=\"1\" x=\"16\" y=\"1312\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"476\" gid=\"1\" x=\"112\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"477\" gid=\"1\" x=\"176\" y=\"1328\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"478\" gid=\"1\" x=\"48\" y=\"1312\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"479\" gid=\"1\" x=\"112\" y=\"1328\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"480\" gid=\"1\" x=\"208\" y=\"1328\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"481\" gid=\"1\" x=\"80\" y=\"1312\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"482\" gid=\"1\" x=\"80\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"483\" gid=\"1\" x=\"144\" y=\"1328\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"484\" gid=\"1\" x=\"80\" y=\"1328\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"485\" gid=\"1\" x=\"176\" y=\"1312\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"486\" gid=\"1\" x=\"208\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"487\" gid=\"1\" x=\"144\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"488\" gid=\"1\" x=\"16\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"489\" gid=\"1\" x=\"48\" y=\"1344\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"490\" gid=\"1\" x=\"144\" y=\"1503\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"491\" gid=\"1\" x=\"176\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"492\" gid=\"1\" x=\"112\" y=\"1471\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"493\" gid=\"1\" x=\"80\" y=\"1471\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"494\" gid=\"1\" x=\"16\" y=\"1503\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"495\" gid=\"1\" x=\"48\" y=\"1471\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"496\" gid=\"1\" x=\"208\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"497\" gid=\"1\" x=\"112\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"498\" gid=\"1\" x=\"208\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"499\" gid=\"1\" x=\"144\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"500\" gid=\"1\" x=\"48\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"501\" gid=\"1\" x=\"48\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"502\" gid=\"1\" x=\"80\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"503\" gid=\"1\" x=\"80\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"504\" gid=\"1\" x=\"48\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"505\" gid=\"1\" x=\"208\" y=\"1503\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"506\" gid=\"1\" x=\"80\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"507\" gid=\"1\" x=\"80\" y=\"1503\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"508\" gid=\"1\" x=\"48\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"509\" gid=\"1\" x=\"208\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"510\" gid=\"1\" x=\"112\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"511\" gid=\"1\" x=\"16\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"512\" gid=\"1\" x=\"176\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"513\" gid=\"1\" x=\"16\" y=\"1471\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"514\" gid=\"1\" x=\"144\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"515\" gid=\"1\" x=\"16\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"516\" gid=\"1\" x=\"112\" y=\"1503\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"517\" gid=\"1\" x=\"144\" y=\"1471\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"518\" gid=\"1\" x=\"208\" y=\"1471\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"519\" gid=\"1\" x=\"176\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"520\" gid=\"1\" x=\"16\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"521\" gid=\"1\" x=\"80\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"522\" gid=\"1\" x=\"16\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"523\" gid=\"1\" x=\"48\" y=\"1503\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"524\" gid=\"1\" x=\"208\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"525\" gid=\"1\" x=\"144\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"526\" gid=\"1\" x=\"112\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"527\" gid=\"1\" x=\"176\" y=\"1471\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"528\" gid=\"1\" x=\"144\" y=\"1360\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"529\" gid=\"1\" x=\"176\" y=\"1488\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"530\" gid=\"1\" x=\"112\" y=\"1456\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"531\" gid=\"1\" x=\"176\" y=\"1503\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Reward 1\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"0\"/>\n   <property name=\"crystals\" type=\"int\" value=\"70\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;reward&quot;\"/>\n  </properties>\n  <object id=\"553\" gid=\"15\" x=\"0\" y=\"1216\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"638\" gid=\"1\" x=\"64\" y=\"1568\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"639\" gid=\"1\" x=\"16\" y=\"1568\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"654\" gid=\"1\" x=\"40\" y=\"1568\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"659\" gid=\"1\" x=\"32\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"660\" gid=\"1\" x=\"56\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"661\" gid=\"1\" x=\"80\" y=\"1520\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"662\" gid=\"1\" x=\"72\" y=\"1468\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"663\" gid=\"1\" x=\"96\" y=\"1468\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"664\" gid=\"1\" x=\"120\" y=\"1468\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"665\" gid=\"1\" x=\"104\" y=\"1421\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"666\" gid=\"1\" x=\"128\" y=\"1421\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"667\" gid=\"1\" x=\"152\" y=\"1421\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"668\" gid=\"1\" x=\"144\" y=\"1391\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"669\" gid=\"1\" x=\"168\" y=\"1391\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"670\" gid=\"1\" x=\"192\" y=\"1391\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"671\" gid=\"1\" x=\"156\" y=\"1364\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"672\" gid=\"1\" x=\"180\" y=\"1364\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"673\" gid=\"1\" x=\"204\" y=\"1364\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"674\" gid=\"1\" x=\"150\" y=\"1333\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"675\" gid=\"1\" x=\"174\" y=\"1333\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"676\" gid=\"1\" x=\"198\" y=\"1333\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"677\" gid=\"3\" x=\"176\" y=\"1280\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;heart-crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n <objectgroup name=\"Reward 2\" visible=\"0\">\n  <properties>\n   <property name=\"checkpoints\" type=\"int\" value=\"0\"/>\n   <property name=\"crystals\" type=\"int\" value=\"70\"/>\n   <property name=\"hardness\" type=\"float\" value=\"0\"/>\n   <property name=\"treatlevel\" type=\"float\" value=\"0\"/>\n   <property name=\"type\" value=\"&quot;reward&quot;\"/>\n  </properties>\n  <object id=\"678\" gid=\"15\" x=\"0\" y=\"1344\" width=\"240\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;spacing&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"700\" gid=\"3\" x=\"112\" y=\"1473\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;heart-crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"701\" gid=\"1\" x=\"96\" y=\"1504\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"702\" gid=\"1\" x=\"160\" y=\"1552\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"703\" gid=\"1\" x=\"64\" y=\"1552\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n  <object id=\"704\" gid=\"1\" x=\"128\" y=\"1504\" width=\"16\" height=\"16\">\n   <properties>\n    <property name=\"type\" value=\"&quot;crystal&quot;\"/>\n   </properties>\n  </object>\n </objectgroup>\n</map>\n\n    "; // TxtReader.loadTextFile(this.filepath, );

      afterLoad(stageData);
    }
  }]);

  return ShipLayoutReader;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SheetLoader = /*#__PURE__*/function () {
  function SheetLoader() {
    var onLoadAllCallBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    _classCallCheck(this, SheetLoader);

    this.sheetsToLoad = [];
    this.sheetsLoaded = 0;
    this.loadAllCallBack = onLoadAllCallBack;
    this.queue = [];
  }

  _createClass(SheetLoader, [{
    key: "onLoadSheet",
    value: function onLoadSheet() {
      this.sheetsLoaded++;

      if (this.sheetsLoaded >= this.queue.length) {
        if (this.loadAllCallBack) {
          this.loadAllCallBack();
        }
      }
    }
  }, {
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
  }, {
    key: "loadSheetQueue",
    value: function loadSheetQueue() {
      var _this = this;

      var onLoadAllCallBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (onLoadAllCallBack) {
        this.loadAllCallBack = onLoadAllCallBack;
      }

      this.queue.map(function (item) {
        item.image.addEventListener("load", function () {
          _this.onLoadSheet();
        });
      });
    }
  }]);

  return SheetLoader;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CanvasInterface = /*#__PURE__*/function () {
  function CanvasInterface(options) {
    var _this = this;

    _classCallCheck(this, CanvasInterface);

    this.canvas = options.canvas;
    this.pixelBeauty = options.pixelBeauty ? options.pixelBeauty : true;
    window.addEventListener("resize", function () {
      _this.resizeCanvas();
    });
    this.resizeCanvas();
  }

  _createClass(CanvasInterface, [{
    key: "resizeCanvas",
    value: function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.ctx = canvas.getContext("2d");

      if (this.pixelBeauty) {
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.msImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
      }
    }
  }]);

  return CanvasInterface;
}();
"use strict";

function cmykToRgb(c, m, y, k) {
  var r, g, b;
  r = 255 - Math.min(1, c * (1 - k) + k) * 255;
  g = 255 - Math.min(1, m * (1 - k) + k) * 255;
  b = 255 - Math.min(1, y * (1 - k) + k) * 255;
  return {
    r: r,
    g: g,
    b: b
  };
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Touch screen analogic
var TouchAnalogic = /*#__PURE__*/function () {
  function TouchAnalogic(options) {
    _classCallCheck(this, TouchAnalogic);

    this.draging = false, this.deadZonePercent = 0.35;
    this.isClickStart = true;
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.margin = options.margin;
    this.radius = options.radius;
    this.personalizedImage = options.personalizedImage;
    this.circle = {
      x: canvas.width - this.margin - this.radius,
      y: canvas.height - this.margin - this.radius,
      r: this.radius
    };
    this.registerEvents();
  }

  _createClass(TouchAnalogic, [{
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      this.canvas.addEventListener('touchstart', function (event) {
        _this.filterXY(event, true);
      });
      this.canvas.addEventListener('touchmove', function (event) {
        _this.filterXY(event, !_this.isClickStart);
      });
      this.canvas.addEventListener('touchend', function (event) {
        _this.filterXY(event, false);
      });

      if (!window.mobileAndTabletCheck()) {
        this.canvas.addEventListener('mousedown', function (event) {
          _this.filterXY(event, true);
        });
        this.canvas.addEventListener('mouseup', function (event) {
          _this.filterXY(event, false);
        });
        this.canvas.addEventListener('mousemove', function (event) {
          _this.filterXY(event, !_this.isClickStart);
        });
      }
    }
  }, {
    key: "filterXY",
    value: function filterXY(event, clickValue) {
      var x = 0;

      if (event.touches) {
        if (event.touches.length > 0) x = event.touches[0].pageX;else x = event.pageX;
      } else x = event.pageX;

      var y = event.touches ? event.touches.length > 0 ? event.touches[0].pageY : event.pageY : event.pageY;
      x -= canvas.offsetLeft;
      y -= canvas.offsetTop; // Processa clique / desclique

      if (clickValue == true) {
        this.checkTouch(x, y);
        this.isClickStart = false;
      } else {
        this.checkUntouch(x, y);
        this.isClickStart = true;
      }
    }
  }, {
    key: "checkTouch",
    value: function checkTouch(x, y) {
      if (!this.draging) {
        if (this.isClickStart) {
          this.circle.x = x;
          this.circle.y = y;
        }

        this.draging = true; // const touchDist = Vector2.distance({ x: x, y: y }, { x: this.circle.x, y: this.circle.y });
        // if (touchDist > this.deadZonePercent * this.circle.r) {
        //   // console.log(touchDist, this.circle, touchDist <= this.circle);
        //   if (this.circle && Physics.pointCircle({ x: x, y: y }, this.circle)) {
        //     this.draging = true;
        //   }
        // } else {
        //   this.draging = false;
        //   this.currentDirection = undefined;
        // }
      }

      if (this.draging) {
        var dir = {
          x: 0,
          y: 0
        };
        dir.x = x - this.circle.x;
        dir.y = y - this.circle.y;
        var currDirVec = new Vector2(dir.x, dir.y);
        var currMagnitude = currDirVec.magnitude(); // console.log(currDirVec);

        if (currMagnitude > this.circle.r) {
          dir.x = dir.x / currMagnitude * this.circle.r;
          dir.y = dir.y / currMagnitude * this.circle.r;
        }

        this.currentDirection = dir;
      }
    }
  }, {
    key: "checkUntouch",
    value: function checkUntouch(x, y) {
      this.currentDirection = {
        x: 0,
        y: 0
      };
      this.draging = false;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.draging && this.currentDirection) {
        this.ctx.beginPath();
        this.ctx.arc(this.circle.x, this.circle.y, this.circle.r, 0, 2 * Math.PI);
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = "rgb(255,255,255, 0.6)";
        this.ctx.stroke();
        this.ctx.fillStyle = "rgb(0,0,0, 0.2)";
        this.ctx.fill();
        this.ctx.beginPath();

        if (this.personalizedImage && this.personalizedImage.arrow) {
          var divisions = 4;
          var degrees = 360 / divisions;
          var size = {
            w: this.circle.r * 0.2,
            h: this.circle.r * 0.2
          };
          this.ctx.save();
          this.ctx.translate(this.circle.x, this.circle.y);

          for (var i = 0; i < divisions; i++) {
            this.ctx.rotate(degrees_to_radians(i * degrees));
            this.ctx.drawImage(this.personalizedImage.arrow, -0.5 * size.w, -this.circle.r * 0.75 - 0.5 * size.h, size.w, size.h);
          }

          this.ctx.restore();
        }

        var directionTouse = this.currentDirection; // const angle = Vector2.angleBetween(new Vector2(analogicCircle.r, analogicCircle.r), new Vector2(directionTouse.x, directionTouse.y));
        // const maxX = Math.cos(angle) * analogicCircle.r;
        // const maxY = Math.sin(angle) * analogicCircle.r;
        // console.log(angle);
        // if (Math.abs(directionTouse.x) > Math.abs(maxX))
        //   directionTouse.x = maxX;
        // if (Math.abs(directionTouse.y) > Math.abs(maxY))
        //   directionTouse.y = maxY;
        // if (directionTouse.x > analogicCircle.r)
        //   directionTouse.x = analogicCircle.r
        // else if (directionTouse.x < -analogicCircle.r)
        //   directionTouse.x = -analogicCircle.r
        // if (directionTouse.y > analogicCircle.r)
        //   directionTouse.y = analogicCircle.r
        // else if (directionTouse.y < -analogicCircle.r)
        //   directionTouse.y = -analogicCircle.r

        this.ctx.beginPath();
        this.ctx.arc(this.circle.x, this.circle.y, this.circle.r * this.deadZonePercent, 0, 2 * Math.PI);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "rgb(0,0,0, 0.2)";
        this.ctx.stroke();
        this.ctx.fillStyle = "rgb(0,0,0, 0.2)";
        this.ctx.fill();

        if (this.personalizedImage && this.personalizedImage.image) {
          var fw = 2 * this.circle.r * (1 - this.deadZonePercent) * 3 / 4;
          var fh = 2 * this.circle.r * (1 - this.deadZonePercent) * 3 / 4;
          this.ctx.drawImage(this.personalizedImage.image, this.circle.x + directionTouse.x - 0.5 * fw, this.circle.y + directionTouse.y - 0.5 * fh, fw, fh);
        } else {
          this.ctx.arc(this.circle.x + directionTouse.x, this.circle.y + directionTouse.y, this.circle.r * (1 - this.deadZonePercent) * 3 / 4, 0, 2 * Math.PI);
          this.ctx.lineWidth = 1;
          this.ctx.strokeStyle = "rgb(255,255,255, 0.9)";
          this.ctx.stroke();
          this.ctx.fillStyle = "rgb(255,255,255, 0.7)";
          this.ctx.fill();
        }
      } else {// this.ctx.beginPath();
        // this.ctx.arc(this.circle.x, this.circle.y, this.circle.r * this.deadZonePercent, 0, 2 * Math.PI);
        // this.ctx.lineWidth = 1;
        // this.ctx.strokeStyle = "rgb(255,255,255, 0.4)";
        // this.ctx.stroke();
        // this.ctx.fillStyle = "rgb(255,255,255, 0.4)";
        // this.ctx.fill();
      }
    }
  }]);

  return TouchAnalogic;
}(); // Nave 2D


var Nave2D = /*#__PURE__*/function () {
  function Nave2D(options) {
    var _this2 = this;

    _classCallCheck(this, Nave2D);

    this.position = options.position;
    this.initialPosition = options.initialPosition || {
      x: function x() {
        return _this2.position.x;
      },
      y: function y() {
        return _this2.position.y;
      }
    };
    this.pivot = options.pivot;
    this.image = options.image;
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.zoom = options.zoom || 1;
    this.pivotalRotation = 0;
    this.centralRotation = 0;
    this.accel = options.accel || {
      x: 0.085,
      y: 0.0370
    };
    this.speed = options.speed || {
      x: 0,
      y: 0
    };
    this.maxSpeed = options.maxSpeed || {
      x: 5,
      y: 7.5
    };
    this.iddleFriction = options.iddleFriction || {
      x: 0.95,
      y: 0.85
    };
    this.rockets = options.rockets || [];
    this.rocketTurnedOnDelay = 30;
    this.turnedOn = false;
  }

  _createClass(Nave2D, [{
    key: "drawNave",
    value: function drawNave() {
      var _this3 = this;

      var maxWidth = 80;

      if (engine.layout == 'mobile') {
        maxWidth = canvas.width * 0.155;
      }

      var scale = this.zoom;
      var finalW = maxWidth * scale;
      var finalH = maxWidth / this.image.width * this.image.height * scale;
      var positionToUse = this.position;

      if (!this.turnedOn && !this.keepPosition) {
        positionToUse = {
          x: this.initialPosition.x(),
          y: this.initialPosition.y()
        };
        this.position = positionToUse;
      }

      this.ctx.save();
      this.ctx.translate(positionToUse.x, positionToUse.y);
      this.ctx.rotate(degrees_to_radians(this.pivotalRotation + this.speed.x / this.maxSpeed.x * 25));

      if (this.turnedOn) {
        if (this.movingLeft > 0) {
          this.rockets.right.map(function (rocket) {
            rocket.render(scale, finalW, finalH);
          });
        }

        if (this.movingRight > 0) {
          this.rockets.left.map(function (rocket) {
            rocket.render(scale, finalW, finalH);
          });
        }

        if (this.speed.y <= 0.5) {
          this.rockets.central.map(function (rocket) {
            rocket.render(scale, finalW, finalH, {
              x: 1,
              y: 1 + 2 * Math.abs(_this3.speed.y / _this3.maxSpeed.y)
            }, true);
          });
        }
      }

      var fx = -this.pivot.x * finalW;
      var fy = -this.pivot.y * finalH;
      this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, fx, fy, finalW, finalH);
      fx += positionToUse.x;
      fy += positionToUse.y;
      this.rectCollider = {
        x: fx,
        y: fy,
        w: finalW,
        h: finalH
      };
      this.ctx.restore();

      if (this.movingLeft < 0) {
        this.movingLeft = 0;
      }

      if (this.movingRight < 0) {
        this.movingRight = 0;
      }
    }
  }, {
    key: "fisica",
    value: function fisica() {
      var deltaTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var scale = this.zoom;
      var maxWidth = 100;

      if (engine.layout == 'mobile') {
        maxWidth = canvas.width * 0.15;
      } // Obedece velocidade maxima


      if (Math.abs(this.speed.x) > this.maxSpeed.x) this.speed.x = Math.sign(this.speed.x) * this.maxSpeed.x;
      if (Math.abs(this.speed.y) > this.maxSpeed.y) this.speed.y = Math.sign(this.speed.y) * this.maxSpeed.y; // Move nave

      this.position.x += this.speed.x * deltaTime * scale;
      this.position.y += this.speed.y * deltaTime * scale; // Impede passar peras paredes laterais horizontais

      var finalW = maxWidth * scale;

      if (this.position.x - finalW * 0.5 < 0) {
        this.position.x = finalW * 0.5;
        this.speed.x *= -0.35;
      } else if (this.position.x + finalW * 0.5 > this.canvas.width) {
        this.position.x = this.canvas.width - finalW * 0.5;
        this.speed.x *= -0.35;
      } // Impede passar pelas laterais verticais


      var finalH = maxWidth / this.image.width * this.image.height * scale;

      if (this.position.y - finalH < 0) {
        this.position.y = finalH;
        this.speed.y *= -0.35;
      } else if (this.position.y > this.canvas.height) {
        this.position.y = this.canvas.height;
        this.speed.y *= -0.35;
      }

      this.movingLeft--;
      this.movingRight--;
    }
  }, {
    key: "readMovimentation",
    value: function readMovimentation(inputmanager) {
      var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        up: InputManager.Keys.Up_Arrow,
        left: InputManager.Keys.Left_Arrow,
        right: InputManager.Keys.Right_Arrow,
        down: InputManager.Keys.Down_Arrow
      };
      if (!this.turnedOn) return;

      if (inputmanager.isPressed(keys.left)) {
        if (this.speed.x > 0) {
          this.speed.x *= this.iddleFriction.x;
        }

        this.speed.x -= this.accel.x;
        this.movingLeft = this.rocketTurnedOnDelay;
      } else if (inputmanager.isPressed(keys.right)) {
        if (this.speed.x < 0) {
          this.speed.x *= this.iddleFriction.x;
        }

        this.speed.x += this.accel.x;
        this.movingRight = this.rocketTurnedOnDelay;
      } else {
        if (this.speed.x > 0.5) {
          this.movingLeft = 2;
          this.movingRight = 0;
        } else if (this.speed.x < -0.5) {
          this.movingRight = 2;
          this.movingLeft = 0;
        }

        this.speed.x *= this.iddleFriction.x;
      }

      if (inputmanager.isPressed(keys.up)) {
        if (this.speed.y > 0) {
          this.speed.y *= this.iddleFriction.y;
        }

        this.speed.y -= this.accel.y;
        this.movingRight = this.rocketTurnedOnDelay * 0.5;
        this.movingLeft = this.rocketTurnedOnDelay * 0.5;
      } else if (inputmanager.isPressed(keys.down)) {
        if (this.speed.y < 0) {
          this.speed.y *= this.iddleFriction.y;
        }

        this.speed.y += this.accel.y;
      } else {
        this.speed.y *= this.iddleFriction.y;
      }
    }
  }, {
    key: "readTouchMovimentation",
    value: function readTouchMovimentation(analogic) {
      if (!this.turnedOn) return; // if (analogic.currentDirection)
      //   console.singleLog(analogic);

      if (analogic.currentDirection && analogic.currentDirection.x > analogic.deadZonePercent) {
        if (this.speed.x < 0) {
          this.speed.x *= this.iddleFriction.x;
        }

        this.speed.x += this.accel.x * analogic.currentDirection.x / analogic.radius;
        this.movingRight = this.rocketTurnedOnDelay;
      } else if (analogic.currentDirection && analogic.currentDirection.x < -analogic.deadZonePercent) {
        if (this.speed.x > 0) {
          this.speed.x *= this.iddleFriction.x;
        }

        this.speed.x += this.accel.x * analogic.currentDirection.x / analogic.radius;
        this.movingLeft = this.rocketTurnedOnDelay;
      } else {
        if (this.speed.x > 0.5) {
          this.movingLeft = 2;
          this.movingRight = 0;
        } else if (this.speed.x < -0.5) {
          this.movingRight = 2;
          this.movingLeft = 0;
        }

        this.speed.x *= this.iddleFriction.x;
      }

      if (analogic.currentDirection && analogic.currentDirection.y > analogic.deadZonePercent) {
        if (this.speed.y < 0) {
          this.speed.y *= this.iddleFriction.y;
        }

        this.speed.y += this.accel.y * analogic.currentDirection.y / analogic.radius;
      } else if (analogic.currentDirection && analogic.currentDirection.y < -analogic.deadZonePercent) {
        if (this.speed.y > 0) {
          this.speed.y *= this.iddleFriction.y;
        }

        this.speed.y += this.accel.y * analogic.currentDirection.y / analogic.radius;
        this.movingRight = this.rocketTurnedOnDelay * 0.5;
        this.movingLeft = this.rocketTurnedOnDelay * 0.5;
      } else {
        this.speed.y *= this.iddleFriction.y;
      }
    }
  }]);

  return Nave2D;
}(); //  Fundo com gradiente


var BGGradiente = /*#__PURE__*/function () {
  function BGGradiente(tween, canvas, ctx) {
    _classCallCheck(this, BGGradiente);

    this.canvas = canvas;
    this.ctx = ctx;
    this.height = 0;
    this.tween = tween;
    this.mayRise = false;
    this.reachedKeyframes = [];
  }

  _createClass(BGGradiente, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.tween && this.tween.length > 0) {
        var w = this.canvas.width;
        var h = this.canvas.height;
        var gradient = this.ctx.createLinearGradient(w * 0.5, h, w * 0.5, 0);
        var colorPositions = [];
        var colors = [];
        var currentFrame = this.getCurrentCeuKeyframe(this.height);
        var nextFrameIdx = this.tween.indexOf(currentFrame) + 1;
        var nextKeyFrame = this.tween[nextFrameIdx];

        if (this.reachedKeyframes.indexOf(currentFrame) == -1) {
          this.reachedKeyframes.push(currentFrame);
          if (currentFrame.onReach) currentFrame.onReach();
        }

        if (nextKeyFrame) {
          var lerpRatio = (this.height - currentFrame.keyframe) / (nextKeyFrame.keyframe - currentFrame.keyframe);
          if (lerpRatio == NaN || lerpRatio == Infinity) lerpRatio = 1;
          currentFrame.points.map(function (point) {
            if (point.position != undefined) {
              var nextPoint = _this4.getPointByID(nextKeyFrame.points, point.id);

              var currPoint = _this4.getPointByID(currentFrame.points, point.id);

              if (nextPoint.position != undefined) {
                var lerpedPosition = lerp(currPoint.position, nextPoint.position, lerpRatio);
                var lerpedR = lerp(currPoint.color.r, nextPoint.color.r, lerpRatio);
                var lerpedG = lerp(currPoint.color.g, nextPoint.color.g, lerpRatio);
                var lerpedB = lerp(currPoint.color.b, nextPoint.color.b, lerpRatio);
                gradient.addColorStop(lerpedPosition, 'rgb(' + lerpedR + ',' + lerpedG + ',' + lerpedB + ')');
              } else {
                gradient.addColorStop(point.position, 'rgb(' + point.color.r + ',' + point.color.g + ',' + point.color.b + ')');
              }
            }
          });
        } else {
          currentFrame.points.map(function (point) {
            if (point.position != undefined) {
              gradient.addColorStop(point.position, 'rgb(' + point.color.r + ',' + point.color.g + ',' + point.color.b + ')');
            }
          });
        }

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, w, h);
      }

      if (this.mayRise == true) this.height++; // console.log(this.height, currentFrame);
    }
  }, {
    key: "getPointByID",
    value: function getPointByID(points, target) {
      var retorno = undefined;
      points.map(function (point) {
        if (point.id == target) retorno = point;
      });
      return retorno;
    }
  }, {
    key: "getCurrentCeuKeyframe",
    value: function getCurrentCeuKeyframe(counter) {
      var retorno = undefined;
      this.tween.map(function (item) {
        if (item.firstFrame || counter >= item.keyframe) {
          retorno = item;
        }
      });
      return retorno;
    }
  }]);

  return BGGradiente;
}();

var ParticleFall = /*#__PURE__*/function () {
  function ParticleFall(options) {
    _classCallCheck(this, ParticleFall);

    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.amount = options.amount || 0;
    this.generationParams = options.generationParams || {};

    this.fallBehaviour = options.fallBehaviour || function () {
      console.log("Empty Fuction");
    };

    this.generateBehaviour = options.generateBehaviour || function () {
      console.log("Empty Fuction");
    };

    this.resetTest = options.resetTest || function () {
      console.log("Empty Fuction");
    };

    this.fallCondition = options.fallCondition || function () {
      console.log("Empty Fuction");
      return false;
    };

    this.maxWidth = options.maxWidth;
    this.particles = [];
    this.fillParticles();
  }

  _createClass(ParticleFall, [{
    key: "increaseAmount",
    value: function increaseAmount(numberOfNewParticles) {
      this.amount += numberOfNewParticles;
      this.fillParticles();
    }
  }, {
    key: "fillParticles",
    value: function fillParticles() {
      while (this.particles.length < this.amount) {
        this.particles.push(this.generateBehaviour({}, this.generationParams));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      this.fillParticles();

      if (this.fallCondition()) {
        this.particles.map(function (particle) {
          _this5.fallBehaviour(particle, _this5.canvas);
        });
      }

      this.particles.map(function (particle) {
        if (_this5.resetTest(particle, _this5.canvas)) {
          particle = _this5.generateBehaviour(particle, _this5.generationParams);
        }

        var maxWidth = _this5.maxWidth;

        if (engine.layout == 'mobile') {
          maxWidth = canvas.width * 0.15;
        }

        var scale = particle.scale;
        var finalW = particle.image.width * scale;
        var finalH = particle.image.height * scale;

        _this5.ctx.save();

        if (particle.alpha) {
          _this5.ctx.globalAlpha = particle.alpha;
        }

        _this5.ctx.translate(particle.position.x, particle.position.y);

        _this5.ctx.rotate(degrees_to_radians(particle.rotation));

        _this5.ctx.drawImage(particle.image, 0, 0, particle.image.width, particle.image.height, -particle.pivot.x * finalW, -particle.pivot.y * finalH, finalW, finalH);

        if (particle.alpha) {
          _this5.ctx.globalAlpha = 1;
        }

        _this5.ctx.restore();
      });
    }
  }]);

  return ParticleFall;
}();

var ParticleFire = /*#__PURE__*/function () {
  function ParticleFire(options) {
    _classCallCheck(this, ParticleFire);

    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.position = options.position;
    this.scale = options.scale;
    this.image = options.image;
    this.animCounter = 0;
    this.defaultDelay = 2;
    this.currentState = 0;
    this.delayCounter = 0;
    this.states = [{
      sx: 0.75,
      sy: 0.5,
      delay: this.defaultDelay
    }, {
      sx: 0.75,
      sy: 1,
      delay: this.defaultDelay
    }, {
      sx: 1.1,
      sy: 0.7,
      delay: this.defaultDelay
    }, {
      sx: 1,
      sy: 1,
      delay: this.defaultDelay
    }, {
      sx: 0.6,
      sy: 0.6,
      delay: this.defaultDelay
    }, {
      sx: 0.1,
      sy: 1.5,
      delay: this.defaultDelay
    }, {
      sx: 0.25,
      sy: 0.8,
      delay: this.defaultDelay
    }, {
      sx: 1.5,
      sy: 0.5,
      delay: this.defaultDelay
    }];
  }

  _createClass(ParticleFire, [{
    key: "render",
    value: function render(s, w, h) {
      var extraS = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        x: 1,
        y: 1
      };
      var randomNextFrame = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      this.delayCounter++;

      if (this.delayCounter > this.states[this.currentState].delay) {
        this.delayCounter = randomInt(0, 1);
        this.currentState++;

        if (this.currentState >= this.states.length) {
          if (randomNextFrame) {
            if (randomInt(0, 10) > 5) {
              this.currentState = randomInt(0, this.states.length - 1);
            } else {
              this.currentState = 0;
            }
          } else {
            this.currentState = 0;
          }
        }
      }

      var currFrame = this.states[this.currentState]; // console.log(currFrame);

      this.ctx.save();
      this.ctx.translate(this.position.x * w, this.position.y * h);
      var myScaler = 0.20;
      var finalW = this.image.width * this.scale.x * s * currFrame.sx * myScaler * extraS.x;
      var finalH = this.image.height * this.scale.y * s * currFrame.sy * myScaler * extraS.y;
      this.ctx.drawImage(this.image, -0.5 * finalW, 0, finalW, finalH);
      this.ctx.restore();
      this.animCounter++;
    }
  }]);

  return ParticleFire;
}();

var MultilayerBackground = /*#__PURE__*/function () {
  function MultilayerBackground(options) {
    _classCallCheck(this, MultilayerBackground);

    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.layers = options.layers || [];
    this.riseSpeed = options.riseSpeed || 1;
    this.currentHeight = options.currentHeight || 0;
    this.depth = options.depth || 100;
    this.backgroundSpeed = options.backgroundSpeed || 1;
    this.frontSpeed = options.frontSpeed || 1;
  }

  _createClass(MultilayerBackground, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      if (this.mayRise == true) {
        this.currentHeight += this.riseSpeed;
      }

      var depth = this.depth;
      var speedInterval = this.frontSpeed - this.backgroundSpeed;
      var currHeigth = this.currentHeight;
      this.layers.map(function (layer) {
        _this6.ctx.save();

        var fW = layer.sizes.x(layer),
            fH = layer.sizes.y(layer);

        if (layer.responsive) {
          var scaler = layer.responsive(fW, fH);
          fW *= scaler;
          fH *= scaler;
        }

        var depthRate = (depth - layer.depth) / depth;

        _this6.ctx.translate(0, depthRate * currHeigth * speedInterval);

        _this6.ctx.translate(layer.screenPivot.x * _this6.canvas.width, layer.screenPivot.y * _this6.canvas.height);

        _this6.ctx.translate(layer.offset.x * layer.scale, layer.offset.y * layer.scale);

        _this6.ctx.drawImage(layer.image, layer.pivot.x * -fW, layer.pivot.y * -fH, fW, fH);

        _this6.ctx.restore();
      });
    }
  }]);

  return MultilayerBackground;
}();

var ObjectLayoutReader = /*#__PURE__*/function () {
  function ObjectLayoutReader(options) {
    _classCallCheck(this, ObjectLayoutReader);

    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.imgScale = options.imgScale || [];
    this.coordScale = options.coordScale || 0;
    this.currLayoutIdx = options.currLayoutIdx || 0;
    this.currentOffset = options.currentOffset || {
      x: 0,
      y: 0
    };
    this.layoutSrc = options.layoutSrc || null;
    this.chooseNextChallenge = options.chooseNextChallenge || null;
    this.layoutsToUse = options.layoutsToUse || null;
    this.objectPrefabs = options.objectPrefabs || [];
    this.mayRise = false;
    this.hasLoaded = false;
    this.velocidade = options.velocidade || 3.5;
  }

  _createClass(ObjectLayoutReader, [{
    key: "readChallenges",
    value: function readChallenges() {
      this.layoutReader = new ShipLayoutReader();
      this.layoutReader.load(this.layoutSrc);
      this.transformObjectsValues();
      this.hasLoaded = this.layoutReader.hasLoaded;

      if (this.challengePool.length > 0 && this.chooseNextChallenge) {
        this.chooseNextChallenge();
      }
    }
  }, {
    key: "transformObjectsValues",
    value: function transformObjectsValues() {
      var _this7 = this;

      // Get Challenges
      // this.currLayoutIdx = this.layoutReader.challenges.length - 1;
      this.layoutReader.challenges.map(function (challenge, i, arr) {
        challenge.objects.map(function (obj, j) {
          _this7.objectPrefabs.map(function (prefab) {
            if (obj.properties.type == prefab.typename) {
              obj.image = prefab.image;
              obj.scale = prefab.scale;
              obj.pivot = prefab.pivot;
              obj.update = prefab.update || null;
              obj.oncollect = prefab.oncollect || null;
              obj.destroy = prefab.destroy || null;
              obj.ondestroy = prefab.ondestroy || null;
              obj.personalRender = prefab.personalRender || null;
              obj.transformed = true;
              obj.mustRender = true;
              obj.prefab = prefab;
              obj.originalPosition = {
                x: obj.x,
                y: obj.y
              }; // console.log(obj.properties.type, prefab.typename, obj.properties.type == prefab.typename, obj)
              // console.log(obj)
            } else if (obj.properties.type == 'spacing') {
              challenge.startingY = obj.y;
            }
          });
        });
      });
      this.challengePool = this.layoutReader.challenges; // Sort Challenges by checkpoint count

      this.challengesByCheckpoints = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: []
      };
      this.challengePool.map(function (challenge) {
        _this7.challengesByCheckpoints[challenge.properties.checkpoints].push(challenge);
      }); // Get questions

      this.layoutReader.questions.map(function (stage, i, arr) {
        stage.objects.map(function (obj, j) {
          _this7.objectPrefabs.map(function (prefab) {
            if (obj.properties.type == prefab.typename) {
              obj.image = prefab.image;
              obj.scale = prefab.scale;
              obj.pivot = prefab.pivot;
              obj.update = prefab.update || null;
              obj.oncollect = prefab.oncollect || null;
              obj.destroy = prefab.destroy || null;
              obj.ondestroy = prefab.ondestroy || null;
              obj.personalRender = prefab.personalRender || null;
              obj.transformed = true;
              obj.mustRender = true;
              obj.prefab = prefab;
              obj.originalPosition = {
                x: obj.x,
                y: obj.y
              };
            } else if (obj.properties.type == 'spacing') {
              stage.startingY = obj.y;
            }
          });
        });
      });
      this.questionPool = this.layoutReader.questions;
    }
  }, {
    key: "randomNextChallenge",
    value: function randomNextChallenge() {
      return this.randomNextStage(this.challengePool);
    }
  }, {
    key: "randomNextQuestion",
    value: function randomNextQuestion() {
      return this.randomNextStage(this.questionPool, 0);
    }
  }, {
    key: "randomNextStage",
    value: function randomNextStage(stagePool) {
      var yOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
      var oldLayout = this.currentChallenge || undefined;
      var tempLayout = undefined; // do {

      var tempIdx = randomInt(0, stagePool.length);
      if (tempIdx >= stagePool.length) tempIdx = (_readOnlyError("tempIdx"), stagePool.length - 1);
      tempLayout = stagePool[tempIdx]; // } while (tempLayout == oldLayout && this.stagePool.length > 1);
      // if (this.currLayoutIdx >= this.stagePool.length)
      //   this.currLayoutIdx = this.stagePool.length - 1;

      this.currentOffset.y = this.canvas.height * yOffset;
      this.setChallengeInMemory(tempLayout);
      return tempLayout;
    }
  }, {
    key: "randomNextChallengeByCheckpoints",
    value: function randomNextChallengeByCheckpoints(maxCheckpointsWanted) {
      var targetChallengePool = [];

      for (var i = maxCheckpointsWanted; i >= 0; i--) {
        var targetChallengeGroup = this.challengesByCheckpoints[i]; // console.log(targetChallengeGroup)

        targetChallengeGroup.map(function (challenge) {
          targetChallengePool.push(challenge);
        });
      }

      var tempNextChallenge = {};
      var oldName = this.currLayoutIdx;

      do {
        tempNextChallenge = targetChallengePool[randomInt(0, targetChallengePool.length)]; // consolelog(tempNextChallenge);
      } while (targetChallengePool.length > 1 && tempNextChallenge.name == oldName);

      this.currentOffset.y = this.canvas.height * 0.33;
      this.setChallengeInMemory(tempNextChallenge);
      return this.currentChallenge;
    }
  }, {
    key: "setChallengeInMemoryByIndex",
    value: function setChallengeInMemoryByIndex(index) {
      var challengeToCopy = this.challengePool[index];
      this.setChallengeInMemory(challengeToCopy);
    }
  }, {
    key: "setChallengeInMemory",
    value: function setChallengeInMemory(challenge) {
      var newCurrentChallenge = {
        objects: []
      }; // console.log(challenge)

      var challengeToCopy = challenge;
      challengeToCopy.objects.map(function (item) {
        newCurrentChallenge.objects.push(Object.assign({}, item)); //Copia o desafio de um jeito sacana pra permitir modificação sem avacalhar o molde
      });
      newCurrentChallenge.crystalsCollected = 0;
      newCurrentChallenge.startingY = challengeToCopy.startingY;
      this.currentChallenge = newCurrentChallenge;
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      if (this.hasLoaded) {
        var currentChallenge = this.currentChallenge;
        if (!currentChallenge) return;
        var smallerObjectY = Infinity;
        currentChallenge.objects.map(function (item) {
          if (item.transformed) {
            var currentY = -item.y * _this8.coordScale + _this8.currentOffset.y - currentChallenge.startingY;
            if (currentY < smallerObjectY) smallerObjectY = currentY;
            var fW = item.image.width * item.scale;
            var fH = item.image.height * item.scale;
            var layoutMaxWidth = _this8.canvas.width * 0.4;
            var layoutxOffset = _this8.canvas.width * 0.3;

            if (window.mobileAndTabletCheck()) {
              layoutMaxWidth = _this8.canvas.width;
              layoutxOffset = 0;
            }

            var fx = (item.x + 8) / (15 * 16) * layoutMaxWidth + layoutxOffset;
            var fy = currentY;
            var tempScale = 1; // if (fy < 0) {
            //   var z = fy * -1;
            //   tempScale = 0.09;
            //   // fx *= 0.03
            //   fy *= -0.12;
            //   fy -= this.canvas.height * 0.1;
            //   fH *= tempScale;
            //   fW *= tempScale;
            //   item.activeCollider = false;
            // } else {
            //   item.activeCollider = true;
            // }

            if (item.activeCollider == undefined) item.activeCollider = true; // console.singleLog([currentY, smallerObjectY, currentChallenge]);
            // console.log(currentY);

            fx += -item.pivot.x * fW;
            fy += -item.pivot.y * fH;
            item.rectCollider = {
              x: fx,
              y: fy,
              w: fW,
              h: fH
            };

            if (item.animateToCounter) {
              //Animação movendo e encolhendo para o contador
              if (!item.animateToCounter.orign) {
                item.animateToCounter.orign = {
                  x: fx,
                  y: fy
                };
              }

              fW *= 0.6;
              fH *= 0.6;
              var targetRect = {
                x: _this8.canvas.width / 12 * 11,
                y: _this8.canvas.height
              };
              var xDist = targetRect.x - fx;
              var yDist = targetRect.y - fy;
              var dist = Math.pow(Math.pow(xDist, 2) + Math.pow(yDist, 2), 0.5); // console.log('hehe');

              var motion = {
                x: 0,
                y: 0
              };
              if (item.animateToCounter.orign.x < targetRect.x - item.animateToCounter.speed) motion.x += item.animateToCounter.speed;else if (item.animateToCounter.orign.x > targetRect.x + item.animateToCounter.speed) motion.x -= item.animateToCounter.speed;else {
                motion.x += xDist;
              }
              if (item.animateToCounter.orign.y < targetRect.y - item.animateToCounter.speed) motion.y += item.animateToCounter.speed;else if (item.animateToCounter.orign.y > targetRect.x + item.animateToCounter.speed) motion.y -= item.animateToCounter.speed;else {
                motion.y += yDist;
              }
              var tempDirectionTouse = {
                x: xDist / dist,
                y: yDist / dist
              };
              item.animateToCounter.orign.x += motion.x * Math.abs(tempDirectionTouse.x);
              item.animateToCounter.orign.y += motion.y * Math.abs(tempDirectionTouse.y);
              fx = item.animateToCounter.orign.x;
              fy = item.animateToCounter.orign.y;
              dist = Math.pow(Math.pow(fx - targetRect.x, 2) + Math.pow(fy - targetRect.y, 2), 0.5);

              if (dist <= item.animateToCounter.speed * 5.5) {
                item.mustRender = false;
              }
            }

            if (item.mustRender == false) {} else {
              if (item.properties.forceNoRender) {
                item.activeCollider = false;
              } else {
                _this8.ctx.drawImage(item.image, fx, fy, fW, fH);

                if (item.update) {
                  item.update(item);
                }
              }
            }

            if (fy - fH >= _this8.canvas.height && !item.destroyed && item.mustRender) {
              item.destroyed = true;
              if (item.ondestroy) item.ondestroy(item);
            }
          }
        });

        if (smallerObjectY > this.canvas.height) {
          this.mayChooseNextChallenge = true;

          if (this.chooseNextChallenge) {
            this.chooseNextChallenge();
          } else {
            this.randomNextChallenge();
          }
        } else {
          this.mayChooseNextChallenge = false;
        }
      }

      if (this.mayRise == true) {
        this.currentOffset.y += this.velocidade;
      }
    }
  }, {
    key: "checkcollision",
    value: function checkcollision(rect) {
      var retorno = [];

      if (this.hasLoaded) {
        var currentChallenge = this.currentChallenge;

        if (currentChallenge) {
          currentChallenge.objects.map(function (item) {
            if (item.rectCollider && item.activeCollider) {
              if (Physics.rectRect(rect, item.rectCollider)) {
                retorno.push(item); // console.log(item);
              }
            }
          });
        }
      }

      return retorno;
    }
  }]);

  return ObjectLayoutReader;
}();

var ChallengeDynamicBuilder = /*#__PURE__*/function () {
  function ChallengeDynamicBuilder(options) {
    _classCallCheck(this, ChallengeDynamicBuilder);

    this.currentSpeed = options.currentSpeed || 1;
    this.currentCheckpointCount = options.currentCheckpointCount || 0;
    this.generateNewChallengeFromSkeleton = options.generateNewChallengeFromSkeleton || null;
    this.speedStep = options.speedStep || 0.3333; //Quantidade adicionada ou removida de acordo com o nivel de dificuldade

    this.possibleLayouts = [];
    this.chooseNextChallenge = options.chooseNextChallenge || null;
    this.buildChallenge = options.buildChallenge || null;
    this.buildQuestion = options.buildQuestion || null;
    this.param1Range = options.param1Range || [1];
    this.param2Range = options.param2Range || [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.difficultyInfo = {
      checkpoints: 1
    };
    this.currentCheckpoints = options.currentCheckpoints || {
      param1: false,
      operation: false,
      param2: false,
      readyToBeSolved: false
    };
    this.updateHUD();
  }

  _createClass(ChallengeDynamicBuilder, [{
    key: "onCollectCheckpointPiece",
    value: function onCollectCheckpointPiece(piece) {
      if (piece.properties.checkpointValue == '÷') {
        this.currentCheckpoints.operation = piece.properties.checkpointValue;
      } else if (piece.properties.checkpointValue == '=') {
        this.currentCheckpoints.readyToBeSolved = piece.properties.checkpointValue;
      } else {
        if (this.param1Range.indexOf(piece.properties.checkpointValue) != -1 && this.currentCheckpoints.param1 == false) {
          this.currentCheckpoints.param1 = piece.properties.checkpointValue;
        } else {
          this.currentCheckpoints.param2 = piece.properties.checkpointValue;
        }
      } // console.log('checkpoint coletado!', piece);


      this.updateHUD();
    }
  }, {
    key: "decideNextChallenge",
    value: function decideNextChallenge() {
      console.log('empty function');
    }
  }, {
    key: "updateHUD",
    value: function updateHUD() {
      var params = [this.currentCheckpoints.param2, this.currentCheckpoints.operation, this.currentCheckpoints.param1, this.currentCheckpoints.readyToBeSolved];
      var pieces = document.querySelectorAll('.checkpoint .piece');

      for (var i = 0; i < pieces.length; i++) {
        var piece = pieces[i];

        if (!params[i]) {
          piece.classList.add('empty');
          piece.classList.add('black');
          piece.innerHTML = '?';
        } else {
          piece.classList.remove('empty');
          piece.classList.remove('black');
          piece.innerHTML = params[i];
        }
      }

      this.updateCheckpointCounter();
    }
  }, {
    key: "resetCheckpointCounter",
    value: function resetCheckpointCounter() {
      this.currentCheckpoints.param1 = false;
      this.currentCheckpoints.param2 = false;
      this.currentCheckpoints.operation = false;
      this.currentCheckpoints.readyToBeSolved = false;
      this.updateHUD();
    }
  }, {
    key: "updateCheckpointCounter",
    value: function updateCheckpointCounter() {
      this.currentCheckpointCount = 0;
      if (this.currentCheckpoints.param1 != false) this.currentCheckpointCount++;
      if (this.currentCheckpoints.param2 != false) this.currentCheckpointCount++;
      if (this.currentCheckpoints.operation != false) this.currentCheckpointCount++;
      if (this.currentCheckpoints.readyToBeSolved != false) this.currentCheckpointCount++;
    }
  }, {
    key: "evaluatePlayerAbilityInLastChallenge",
    value: function evaluatePlayerAbilityInLastChallenge() {
      var report = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        percentageOfCrystals: 0,
        percentageOfCheckpoints: 0,
        HP: 0
      };
    }
  }]);

  return ChallengeDynamicBuilder;
}();

var HUDCounter = /*#__PURE__*/function () {
  function HUDCounter(initialAmount, elementID) {
    _classCallCheck(this, HUDCounter);

    this.counterToShow = -1;
    this.counter = initialAmount;
    this.element = document.getElementById(elementID);
    this.animationDelayCounter = 0;
    this.animationDelay = 11;
    this.updateHUD();
  }

  _createClass(HUDCounter, [{
    key: "increase",
    value: function increase(amount) {
      this.counter += amount; // this.updateHUD();
    }
  }, {
    key: "decrease",
    value: function decrease(amount) {
      this.counter -= amount; // this.updateHUD();
    }
  }, {
    key: "updateHUD",
    value: function updateHUD() {
      this.animationDelayCounter++;

      if (this.animationDelayCounter > this.animationDelay) {
        this.animationDelayCounter = 0;

        if (this.counterToShow != this.counter) {
          this.counterToShow = Math.round(lerp(this.counterToShow, this.counter, 0.5));

          if (Math.abs(this.counterToShow - this.counter) <= 2) {
            this.counterToShow = this.counter;
          }

          this.element.innerHTML = this.counterToShow;
        }
      }
    }
  }]);

  return HUDCounter;
}();

var FragManager = /*#__PURE__*/function () {
  function FragManager() {
    _classCallCheck(this, FragManager);

    this.reset();
  }

  _createClass(FragManager, [{
    key: "reset",
    value: function reset() {
      this.acertos = 0;
      this.erros = 0;
      this.rightQuestions = [];
      this.wrongQuestions = [];
    }
  }, {
    key: "incluirAcerto",
    value: function incluirAcerto(question) {
      this.acertos++;
      this.rightQuestions.push(question);
    }
  }, {
    key: "incluirErro",
    value: function incluirErro(question) {
      this.erros++;
      this.wrongQuestions.push(question);
    }
  }, {
    key: "getPercentage",
    value: function getPercentage() {
      return this.acertos / (this.erros + this.acertos) * 100;
    }
  }]);

  return FragManager;
}();

var HeartHUD = /*#__PURE__*/function () {
  function HeartHUD(heartAmount, selectors, onDie) {
    var currentAmount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, HeartHUD);

    this.maxHearts = heartAmount;
    this.hearts = currentAmount;
    this.selectors = selectors;
    this.onDie = onDie;
    this.updateHUD();
  }

  _createClass(HeartHUD, [{
    key: "applyDamage",
    value: function applyDamage(amount) {
      this.hearts -= amount;

      if (this.hearts <= 0) {
        this.hearts = 0;
        if (this.onDie) this.onDie();
      }

      if (this.hearts > this.maxHearts) this.hearts = this.maxHearts;
      this.updateHUD();
    }
  }, {
    key: "recoverDamage",
    value: function recoverDamage(amount) {
      this.hearts += amount;

      if (this.hearts >= this.maxHearts) {
        this.hearts = this.maxHearts;
      }

      this.updateHUD();
    }
  }, {
    key: "updateHUD",
    value: function updateHUD() {
      var _this9 = this;

      if (!this.heartElements) {
        this.heartElements = [];
        this.selectors.map(function (selector) {
          _this9.heartElements.push(document.querySelector(selector));
        });
        this.heartElements.sort(function (a, b) {
          var vA = parseInt(a.getAttribute('ordem'));
          var vB = parseInt(b.getAttribute('ordem'));

          if (vA > vB) {
            return 1;
          } else if (vA < vB) {
            return -1;
          }

          return 0;
        }); // console.log(this.heartElements);
      }

      var heartElements = this.heartElements;
      var currentHeart = 1;
      heartElements.map(function (heart) {
        var hastEmpty = heart.classList.contains('empty');

        if (currentHeart > _this9.hearts && !hastEmpty) {
          heart.classList.add('empty');
        } else if (currentHeart <= _this9.hearts && hastEmpty) {
          heart.classList.remove('empty');
        }

        currentHeart++;
      });
    }
  }]);

  return HeartHUD;
}();

var AcertosHUD = /*#__PURE__*/function () {
  function AcertosHUD(questionSlotSelector) {
    var currentQuestion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var onWinCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, AcertosHUD);

    this.onWinCallback = onWinCallback;
    this.selector = questionSlotSelector;
    this.slots = document.querySelectorAll(this.selector);
    this.hasWon = false;
    this.data = [];

    for (var i = 0; i < this.slots.length; i++) {
      var slot = this.slots[i];

      if (this.data.length < currentQuestion) {
        this.data.push(true);
      } else this.data.push(undefined);
    }

    this.currentQuestion = currentQuestion;
    this.updateHUD();
  }

  _createClass(AcertosHUD, [{
    key: "checkWin",
    value: function checkWin() {
      if (this.hasWon == false) {
        console.log(this.currentQuestion, this.data.length);

        if (this.currentQuestion >= this.data.length) {
          this.hasWon = true;
          if (this.onWinCallback) this.onWinCallback();
        }
      }
    }
  }, {
    key: "pushRightQuestion",
    value: function pushRightQuestion() {
      if (this.currentQuestion < this.data.length) this.data[this.currentQuestion] = true;
      this.currentQuestion++;
      this.checkWin();
    }
  }, {
    key: "pushWrongQuestion",
    value: function pushWrongQuestion() {
      if (this.currentQuestion < this.data.length) this.data[this.currentQuestion] = false;
      this.currentQuestion++;
      this.checkWin();
    }
  }, {
    key: "clearHUD",
    value: function clearHUD() {
      this.currentQuestion = 0;

      for (var i = 0; i < this.slots.length; i++) {
        this.data[i] = undefined;
        this.slots[i].classList.remove('wrong');
        this.slots[i].classList.remove('correct');
      }
    }
  }, {
    key: "updateHUD",
    value: function updateHUD() {
      for (var i = 0; i < this.slots.length; i++) {
        if (this.data[i] == true && !this.slots[i].classList.contains('correct')) {
          this.slots[i].classList.add('correct');
        } else if (this.data[i] == false && !this.slots[i].classList.contains('wrong')) {
          this.slots[i].classList.add('wrong');
        }
      }
    }
  }]);

  return AcertosHUD;
}();

var RocketCounterHUD = /*#__PURE__*/function () {
  function RocketCounterHUD(selector) {
    var secondsLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    _classCallCheck(this, RocketCounterHUD);

    this.selector = selector;
    this.lastInitialSecondsLeft = secondsLeft;
    this.secondsLeft = this.lastInitialSecondsLeft;
    this.txt = document.querySelector(this.selector);
    this.txt.innerHTML = this.secondsLeft;
    this.txt.style.display = 'flex';
    this.txt.classList.remove('started');
  }

  _createClass(RocketCounterHUD, [{
    key: "start",
    value: function start(onFinishcallback) {
      var _this10 = this;

      this.onFinishcallback = onFinishcallback;
      this.txt.classList.add('started');

      for (var i = 0; i < 10; i++) {
        this.txt.classList.remove('t' + i);
      }

      this.txt.classList.add('t' + this.secondsLeft);
      setTimeout(function () {
        _this10.countDown();
      }, 1000);
    }
  }, {
    key: "countDown",
    value: function countDown() {
      var _this11 = this;

      this.txt.classList.remove('t' + this.secondsLeft);
      this.secondsLeft -= 1;
      this.txt.classList.add('t' + this.secondsLeft);
      this.txt.innerHTML = this.secondsLeft;

      if (this.secondsLeft < 0) {
        this.secondsLeft = this.lastInitialSecondsLeft;
        this.txt.innerHTML = this.secondsLeft;
        this.txt.style.display = 'none';
        return;
      } else if (this.secondsLeft == 0) {
        this.txt.innerHTML = 'Vai!';
        this.onFinishcallback();
        setTimeout(function () {
          _this11.countDown();
        }, 2000);
        return;
      }

      setTimeout(function () {
        _this11.countDown();
      }, 1000);
    }
  }]);

  return RocketCounterHUD;
}();

var AudioLooper = /*#__PURE__*/function () {
  function AudioLooper(audios) {
    _classCallCheck(this, AudioLooper);

    this.audios = audios;
    this.tempos = audios.length;
  }

  _createClass(AudioLooper, [{
    key: "startLoop",
    value: function startLoop() {}
  }, {
    key: "stopLoop",
    value: function stopLoop() {}
  }]);

  return AudioLooper;
}();

var instrucoes = function instrucoes() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var screens = document.querySelectorAll(".instruction-screen");

  var _iterator = _createForOfIteratorHelper(screens),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var screen = _step.value;
      screen.style.display = 'none';
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (page > 0 && page <= screens.length) {
    var targetSelector = ".instruction-page" + page + "-screen";
    document.querySelector(targetSelector).style.display = 'flex';
  }
};

var FaseManager = function FaseManager(stages) {
  _classCallCheck(this, FaseManager);

  this.stages = stages;
};

var ResponsiveRect = /*#__PURE__*/function () {
  function ResponsiveRect(options) {
    _classCallCheck(this, ResponsiveRect);

    this.rect = options.rect || {
      x: function x() {
        return undefined;
      },
      y: function y() {
        return undefined;
      },
      w: function w() {
        return undefined;
      },
      h: function h() {
        return undefined;
      }
    };
  }

  _createClass(ResponsiveRect, [{
    key: "getRect",
    value: function getRect() {
      return {
        x: this.rect.x(this) || 0,
        y: this.rect.y(this) || 0,
        w: this.rect.w(this) || 0,
        h: this.rect.h(this) || 0
      };
    }
  }]);

  return ResponsiveRect;
}();

var ArcadePhysicsObject = /*#__PURE__*/function () {
  function ArcadePhysicsObject(options) {
    _classCallCheck(this, ArcadePhysicsObject);

    this.position = options.position || {
      x: 0,
      y: 0
    };
    this.scale = options.scale || {
      x: 1,
      y: 1
    };
    this.rotation = options.rotation || 0;
    this.pivot = options.pivot || {
      x: 0.5,
      y: 0.5
    };
    this.image = options.image || {
      x: 0.5,
      y: 0.5
    };
    this.canvas = options.canvas || undefined;
    this.ctx = options.ctx || undefined;
    this.responsive = options.responsive || undefined;
    this.responsiveScaling = options.responsiveScaling || undefined;
    this.scaler = 1;
  }

  _createClass(ArcadePhysicsObject, [{
    key: "render",
    value: function render() {
      this.ctx.save();
      var fW = this.scale.x * this.image.width,
          fH = this.scale.y * this.image.height;

      if (this.responsiveScaling) {
        this.scaler = this.responsiveScaling(fW, fH) || 1;
        fW *= this.scaler;
        fH *= this.scaler;
      }

      if (this.responsive) {
        this.responsive(this);
      }

      this.ctx.translate(this.position.x, this.position.y);
      this.ctx.rotate(degrees_to_radians(this.rotation)); // this.ctx.translate(layer.screenPivot.x * this.canvas.width, layer.screenPivot.y * this.canvas.height);
      // this.ctx.translate(layer.offset.x * layer.scale, layer.offset.y * layer.scale);

      this.ctx.drawImage(this.image, this.pivot.x * -fW, this.pivot.y * -fH, fW, fH);
      this.ctx.restore();
    }
  }]);

  return ArcadePhysicsObject;
}();

var DistanceSteper = /*#__PURE__*/function () {
  function DistanceSteper(startPoint, endPoint) {
    var steps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
    var initialStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, DistanceSteper);

    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.steps = steps;
    this.curentStep = initialStep;
    this.currentPosition = initialStep;
    this.easing = .02;
  }

  _createClass(DistanceSteper, [{
    key: "update",
    value: function update() {
      if (this.curentStep != this.currentPosition) {
        var step = Math.sign(this.curentStep - this.currentPosition) * this.easing;
        var dist = this.curentStep - this.currentPosition;

        if (Math.abs(step) > Math.abs(dist)) {
          step = dist;
        }

        this.currentPosition += step;
      } //console.log(this.currentPosition)

    }
  }, {
    key: "goToStep",
    value: function goToStep(valor) {
      this.curentStep = valor;
    }
  }, {
    key: "nextStep",
    value: function nextStep() {
      if (this.curentStep + 1 <= this.steps) {
        this.goToStep(this.curentStep + 1);
      }
    }
  }]);

  return DistanceSteper;
}();

var ContaHUD = /*#__PURE__*/function () {
  function ContaHUD(options) {
    _classCallCheck(this, ContaHUD);

    this.element = document.querySelector(options.selector);
  }

  _createClass(ContaHUD, [{
    key: "setOp",
    value: function setOp(conta) {
      console.log(conta, this.element);
      this.element.innerHTML = conta.q;
      this.conta = conta;
    }
  }, {
    key: "checaConta",
    value: function checaConta(valor) {
      if (this.conta.r == parseInt(valor)) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return ContaHUD;
}(); // 10:46
// R$ 4,20 / h
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputManager = /*#__PURE__*/function () {
  function InputManager() {
    var _this = this;

    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      right: InputManager.Keys.Right_Arrow,
      left: InputManager.Keys.Left_Arrow,
      up: InputManager.Keys.Up_Arrow,
      down: InputManager.Keys.Down_Arrow // run: InputManager.Keys.X,
      // jump: InputManager.Keys.C

    };

    _classCallCheck(this, InputManager);

    this.keys = keys;
    this.keyData = [];
    this.maxTimeAmount = 9999;
    document.addEventListener("keydown", function (event) {
      if (_this.keyData[event.keyCode.toString()]) {
        var keyData = _this.keyData[event.keyCode.toString()];

        if (!keyData.isPressed) {
          keyData.time = 0;
          keyData.isPressed = true;
        }
      }
    });
    document.addEventListener("keyup", function (event) {
      if (_this.keyData[event.keyCode.toString()]) {
        var keyData = _this.keyData[event.keyCode.toString()];

        if (keyData.isPressed) {
          keyData.time = 0;
          keyData.isPressed = false;
        }
      }
    });
    Object.entries(this.keys).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      _this.keyData[value.toString()] = {
        isPressed: false,
        last: 0,
        time: 0
      };
    });
    setInterval(function () {
      _this.timeCounter(10);
    }, 10);
  }

  _createClass(InputManager, [{
    key: "checkKeysUpdate",
    value: function checkKeysUpdate() {// this.keyDowns();
      // this.keyUps();
    }
  }, {
    key: "isPressed",
    value: function isPressed(key) {
      if (this.keyData[key.toString()]) return this.keyData[key.toString()].isPressed;else return undefined;
    }
  }, {
    key: "timeCounter",
    value: function timeCounter(deltaTime) {
      var _this2 = this;

      this.keyData = this.keyData.map(function (temp) {
        if (!temp.isPressed) {
          if (temp.last < _this2.maxTimeAmount) {
            temp.last += deltaTime;
          } else {
            temp.time = _this2.maxTimeAmount;
          }
        } else {
          if (temp.time < _this2.maxTimeAmount) {
            temp.time += deltaTime;
          } else {
            temp.time = _this2.maxTimeAmount;
          }
        }

        return temp;
      });
    }
  }]);

  return InputManager;
}();

InputManager.Keys = {
  Right_Arrow: 39,
  Left_Arrow: 37,
  Up_Arrow: 38,
  Down_Arrow: 40,
  X: 88,
  C: 67
};
"use strict";

var Physics = {}; // POINT/RECTANGLE

Physics.pointRect = function (point, rect) {
  // is the point inside the rectangle's bounds?
  if (point.x >= rect.x && // right of the left edge AND
  point.x <= rect.x + rect.w && // left of the right edge AND
  point.y >= rect.y && // below the top AND
  point.y <= rect.y + rect.h) {
    // above the bottom
    return true;
  }

  return false;
};

Physics.pointCircle = function (point, circle) {
  var dist = Math.pow(Math.pow(circle.x - point.x, 2) + Math.pow(circle.y - point.y, 2), 0.5);
  return dist <= circle.radius;
};

Physics.rectRect = function (rect1, rect2) {
  // are the sides of one rectangle touching the other?
  if (rect1.x + rect1.w >= rect2.x && // rect1 right edge past rect2 left
  rect1.x <= rect2.x + rect2.w && // rect1 left edge past rect2 right
  rect1.y + rect1.h >= rect2.y && // rect1 top edge past rect2 bottom
  rect1.y <= rect2.y + rect2.h) {
    // rect1 bottom edge past rect2 top
    return true;
  }

  return false;
};
