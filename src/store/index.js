import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawings: [
      {
        pixels: {
          // strap top
          205: true, 206: true, 207: true, 208: true, 209: true, 210: true,
          237: true, 238: true, 239: true, 240: true, 241: true, 242: true,
          269: true, 270: true, 271: true, 272: true, 273: true, 274: true,
          301: true, 302: true, 303: true, 304: true, 305: true, 306: true,
          // strap bottom
          589: true, 590: true, 591: true, 592: true, 593: true, 594: true,
          621: true, 622: true, 623: true, 624: true, 625: true, 626: true,
          653: true, 654: true, 655: true, 656: true, 657: true, 658: true,
          685: true, 686: true, 687: true, 688: true, 689: true, 690: true,
          // face left
          332: true, 363: true, 395: true, 427: true, 459: true, 491: true,
          523: true, 556: true,
          // face right
          339: true, 372: true, 404: true, 436: true, 468: true, 500: true,
          532: true, 563: true,
          // crown
          437: true, 469: true,
          // hour
          462: true, 463: true, 464: true,
          // minute
          368: true, 400: true, 432: true
        },

        imgSrc: '',

        history: {
          currIdx: -1,
          actions: []
        }
      }
    ]
  },

  mutations: {
    newDrawing(state) {
      state.drawings.unshift({
        pixels: {},
        imgSrc: '',
        history: {
          currIdx: -1,
          actions: []
        }
      });

      updateLocalStorage(state);
    },

    startAction(state, {drawingIdx}) {
      newAction(state, drawingIdx);
    },

    updateDrawing(state, {drawingIdx, pixelIdx, value}) {
      setPixel(state, drawingIdx, pixelIdx, value);

      updateLocalStorage(state);
    },

    undoDrawing(state, {drawingIdx}) {
      const history = state.drawings[drawingIdx].history;
      if (history.currIdx < 0) return;

      togglePixels(state, drawingIdx);
      history.currIdx--;

      updateLocalStorage(state);
    },

    redoDrawing(state, {drawingIdx}) {
      const history = state.drawings[drawingIdx].history;
      if (history.currIdx >= history.actions.length - 1) return;

      history.currIdx++;
      togglePixels(state, drawingIdx);

      updateLocalStorage(state);
    },

    clearDrawing(state, {drawingIdx}) {
      newAction(state, drawingIdx);

      const pixels = state.drawings[drawingIdx].pixels;
      for (let pixelIdx in pixels) {
        if (pixels[pixelIdx]) {
          setPixel(state, drawingIdx, pixelIdx, false);
        }
      }

      updateLocalStorage(state);
    },

    deleteDrawing(state, {drawingIdx}) {
      this.state.drawings.splice(drawingIdx, 1);

      updateLocalStorage(state);
    },

    updateImgSrc(state, {drawingIdx, imgSrc}) {
      state.drawings[drawingIdx].imgSrc = imgSrc;
    },

    loadFromLocalStorage(state) {
      if(localStorage['kare-pkg']) {
        const localDrawings = JSON.parse(localStorage['kare-pkg']).drawings;
        Vue.set(state, 'drawings', localDrawings);
      } else {
        localStorage.setItem('kare-pkg', JSON.stringify(state));
      }
    },
  }
})

function newAction(state, drawingIdx) {
  const history = state.drawings[drawingIdx].history;
  const pruneCount = history.actions.length - (history.currIdx + 1);
  history.actions.splice(history.currIdx, pruneCount);
  history.actions.push([]);
  history.currIdx++;
}

function setPixel(state, drawingIdx, pixelIdx, value) {
  const drawing = state.drawings[drawingIdx];
  Vue.set(drawing.pixels, pixelIdx, value);

  const currAction = drawing.history.actions[drawing.history.currIdx];
  currAction.push(pixelIdx);
}

function togglePixels(state, drawingIdx) {
  const drawing = state.drawings[drawingIdx]
  const pixelsToToggle = drawing.history.actions[drawing.history.currIdx];
  const currFill = drawing.pixels[pixelsToToggle[0]];
  pixelsToToggle.forEach((pixelIdx) => {
    Vue.set(drawing.pixels, pixelIdx, !currFill);
  });
}

function updateLocalStorage(state) {
  localStorage.setItem('kare-pkg', JSON.stringify(state));
}
