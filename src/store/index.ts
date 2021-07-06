import { createStore } from "vuex";

import { Drawing, DrawingExport } from "./drawing";
import { watch } from "./sample-drawings/watch";

interface State {
  drawings: Drawing[];
}

export default createStore({
  state: {
    drawings: [new Drawing({ data: watch })],
  },

  getters: {
    uriForDrawingsExport: (state: State) => {
      return `data:application/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(state.drawings.map((drawing) => drawing.export()))
      )}
      `;
    },
  },

  mutations: {
    flip(
      state: State,
      options: { drawing: number; pixel: number; event: Event }
    ): void {
      state.drawings[options.drawing].update(options.pixel, options.event);
    },

    undo(state: State, options: { drawing: number }): void {
      state.drawings[options.drawing].undo();
    },

    redo(state: State, options: { drawing: number }): void {
      state.drawings[options.drawing].redo();
    },

    clear(state: State, options: { drawing: number }): void {
      state.drawings[options.drawing].clear();
    },

    copyDrawing(state: State, options: { drawing: number }): void {
      const original = state.drawings[options.drawing].export();
      const copy = new Drawing({ data: original });
      state.drawings.unshift(copy);
    },

    newDrawing(state: State): void {
      state.drawings.unshift(new Drawing());
    },

    deleteDrawing(state: State, options: { drawing: number }): void {
      state.drawings.splice(options.drawing, 1);
    },

    deleteAllDrawings(state: State): void {
      state.drawings.splice(0, state.drawings.length);
    },

    saveToLocalStorage(state: State): void {
      const drawingExports = state.drawings.map((drawing) => drawing.export());
      localStorage.setItem("kare-pkg", JSON.stringify(drawingExports));
    },

    loadFromLocalStorage(state: State): void {
      if (!localStorage["kare-pkg"]) return;
      const drawingExports = JSON.parse(localStorage["kare-pkg"]);
      state.drawings = drawingExports.map(
        (drawingExport: DrawingExport) => new Drawing({ data: drawingExport })
      );
    },

    loadFromExport(state, options: { export: File }): void {
      const drawingExports = JSON.parse(options.export.toString());
      for (let i = drawingExports.length - 1; i >= 0; i--) {
        try {
          state.drawings.unshift(new Drawing({ data: drawingExports[i] }));
        } catch {
          /* no-op */
        }
      }
    },

    setDrawings(state, drawings: Drawing[]): void {
      state.drawings = drawings;
    },
  },
});
