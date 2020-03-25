import Vue from "vue";
import Vuex from "vuex";
import {Drawing} from "./drawing";
import {kareWatch} from "./drawing-examples";

Vue.use(Vuex);

interface State {
  drawings: Drawing[];
}

function saveToLocal(state: State) {
  localStorage.setItem("kare-pkg", JSON.stringify(state));
}

export default new Vuex.Store({
  state: {
    drawings: [new Drawing(kareWatch)],
  },

  getters: {
    exportFile: state => () => {
      const drawingExports = JSON.stringify(
        state.drawings.map(drawing => drawing.exportFormat)
      );
      return (
        "data:application/json;charset=utf-8," +
        encodeURIComponent(drawingExports)
      );
    },
  },

  mutations: {
    flip(state, {drawingIdx, pixelIdx, event}) {
      state.drawings[drawingIdx].flip(pixelIdx, event);
      saveToLocal(state);
    },

    undo(state, {drawingIdx}) {
      state.drawings[drawingIdx].undo();
      saveToLocal(state);
    },

    redo(state, {drawingIdx}) {
      state.drawings[drawingIdx].redo();
      saveToLocal(state);
    },

    clear(state, {drawingIdx}) {
      state.drawings[drawingIdx].clear();
      saveToLocal(state);
    },

    copy(state, {drawingIdx}) {
      const drawing = state.drawings[drawingIdx];
      const copy = new Drawing(
        Object.assign({}, drawing.pixelMap),
        drawing.strokes.slice(0, drawing.strokes.length),
        drawing.currStroke
      );
      state.drawings.unshift(copy);
      saveToLocal(state);
    },

    new(state) {
      state.drawings.unshift(new Drawing());
      saveToLocal(state);
    },

    remove(state, {drawingIdx}) {
      state.drawings.splice(drawingIdx, 1);
      saveToLocal(state);
    },

    load(state) {
      if (!localStorage["kare-pkg"]) return;
      const drawings = JSON.parse(localStorage["kare-pkg"]).drawings;
      state.drawings = drawings.map(
        (drawing: Drawing) =>
          new Drawing(drawing.pixelMap, drawing.strokes, drawing.currStroke)
      );
    },

    import(state, {drawings}) {
      for (let i = drawings.length - 1; i >= 0; i--) {
        try {
          const drawing = new Drawing(
            drawings[i].pixelMap,
            drawings[i].strokes,
            drawings[i].currStroke
          );
          state.drawings.unshift(drawing);
        } catch (e) {
          /* meh */
        }
      }
      saveToLocal(state);
    },

    removeAll(state) {
      state.drawings.splice(0, state.drawings.length);
      saveToLocal(state);
    },

    setDrawings(state, {drawings}) {
      state.drawings = drawings;
      saveToLocal(state);
    },
  },
});
