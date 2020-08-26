"use strict";

var currentPage = 0;
var paginas = [
  {
    url: './Animacoes/index.html',
    rotation: "landscape-primary",
    type: 'animation'
  },
  {
    url: "./G-Kart/index.html",
    rotation: "portrait-primary"
  }
];

function randomHead() {
  var heads = [
    document.getElementById("brenda-head"),
    document.getElementById("zeca-head"),
    document.getElementById("lucia-head")
  ];
  heads.map(function (head) {
    head.style.display = "none";
  });
  var headToShowIdx = Math.floor(randomInt(0, heads.length * 2) / 2);
  heads[headToShowIdx].style.display = "flex";
}

randomHead();

function gotoCurrentPage() {
  randomHead();
  var iframe = document.querySelector("iframe");
  iframe.src = paginas[currentPage].url;
  document.getElementById("page-counter").innerHTML =
    "Página " + (currentPage + 1) + " de " + paginas.length;
  var prevButton = document.getElementById("prev-btn");
  var nextButton = document.getElementById("next-btn");
  prevButton.style.display = "none";
  nextButton.style.display = "none";

  if (currentPage > 0) {
    prevButton.style.display = "block";
  }

  if (currentPage < paginas.length - 1) {
    nextButton.style.display = "block";
  }

  checkCorrectRotation();

  iframe.onload = function () {
    prepareMovie();
  };
}

gotoCurrentPage();
var totalFrag = {
  acertos: 0,
  respostas: 0
};

function prepareMovie() {
  if (document.fullscreenElement) {
    var iframe = document.getElementById("frame");

    if (iframe.contentWindow.prepareMovie) {
      iframe.contentWindow.prepareMovie(-1);
      iframe.contentWindow.playMovie();
    }

    var nextPageBtn = iframe.contentWindow.document.getElementById("nextPage");

    if (nextPageBtn) {
      nextPageBtn.addEventListener("click", function () {
        nextPage();
      });
    }

    if (iframe.contentWindow.onFinishGame) {
      var receivedFrag = false;

      iframe.contentWindow.onFinishGame = function (frag) {
        if (!receivedFrag) {
          receivedFrag = true;
          console.log(frag);
          totalFrag.acertos += frag.acertos;
          totalFrag.respostas += frag.respostas;

          if (!nextPage()) {
            if (iframe.contentWindow.showResults) {
              iframe.contentWindow.setFrag(totalFrag);
              iframe.contentWindow.showResults();
            } else console.log("no results function to call");
          }
        }
      };
    }
  }
}

function checkCorrectRotation() {
  var rotationToApply = paginas[currentPage].rotation; // Força rotação da nova tela

  if (screen.orientation.lock) {
    screen.orientation.lock(rotationToApply);
  } else {
    screen.lockOrientationUniversal =
      screen.orientation.lock ||
      screen.lockOrientation ||
      screen.mozLockOrientation ||
      screen.msLockOrientation;
    screen.lockOrientationUniversal(rotationToApply);
  }
}

function previousPage() {
  currentPage--;
  if (currentPage < 0) currentPage = 0;
  gotoCurrentPage();
}

function nextPage() {
  currentPage++;

  if (currentPage > paginas.length - 1) {
    currentPage = paginas.length - 1;
    return false;
  }

  gotoCurrentPage();
  return true;
}

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

document.querySelector("iframe").addEventListener("mouseover", function () {
  // openFullscreen(document.querySelector('body'));
});
window.addEventListener("fullscreenchange", function (event) {
  // console.log(event);
  checkFullScreenRoutine(false);
});

function checkFullScreenRoutine() {
  var clicked =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var overlay = document.getElementById("slider-fullscreen-overlay");

  if (clicked) {
    overlay.style.display = "none";

    if (!document.fullscreenElement) {
      openFullscreen(document.querySelector("body"));
    }
  } else {
    if (!document.fullscreenElement) {
      overlay.style.display = "flex";
    }
  }

  prepareMovie();
}

document.querySelector("body").addEventListener(
  "click",
  function () {
    checkFullScreenRoutine();
    checkCorrectRotation();
  },
  false
);
checkFullScreenRoutine(false);

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
