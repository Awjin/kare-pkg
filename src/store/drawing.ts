type UserAction = Event | null;

export interface DrawingExport {
  pixels: number[];
  history?: HistoryExport;
}

interface HistoryExport {
  strokes: number[][];
  currStroke: number;
}

export class Drawing {
  readonly id: number = Math.random();

  private readonly size: number;

  private readonly pixels: Set<number>;

  private readonly canvas: Canvas;

  private readonly history: History;

  private _preview = "";

  constructor(options?: { size?: number; data?: DrawingExport }) {
    this.size = options?.size ?? 32;

    this.pixels = options?.data ? new Set(options.data.pixels) : new Set();

    this.canvas = new Canvas(this.size);
    for (const pixel of this.pixels) {
      this.canvas.add(pixel);
    }

    this.history = options?.data?.history
      ? new History({
          data: {
            strokes: options.data.history.strokes,
            currStroke: options.data.history.currStroke,
          },
        })
      : new History();

    this.updatePreview();
  }

  get preview(): string {
    return this._preview;
  }

  get canUndo(): boolean {
    return this.history.canUndo;
  }

  get canRedo(): boolean {
    return this.history.canRedo;
  }

  get canClear(): boolean {
    return this.pixels.size > 0;
  }

  isFilled(pixel: number): boolean {
    return this.pixels.has(pixel);
  }

  update(pixel: number, action: UserAction): void {
    if (pixel < 0 || pixel >= this.size * this.size) return;
    this.flip(pixel);
    this.history.record(pixel, action);
    this.updatePreview();
  }

  clear(): void {
    for (const pixel of this.pixels) {
      this.flip(pixel);
      this.history.record(pixel, null);
    }
    this.updatePreview();
  }

  undo(): void {
    this.history.undo((pixel) => this.flip(pixel));
    this.updatePreview();
  }

  redo(): void {
    this.history.redo((pixel) => this.flip(pixel));
    this.updatePreview();
  }

  export(): DrawingExport {
    return {
      pixels: Array.from(this.pixels),
      history: this.history.export(),
    };
  }

  private flip(pixel: number): void {
    if (this.pixels.delete(pixel)) {
      this.canvas.remove(pixel);
    } else {
      this.pixels.add(pixel);
      this.canvas.add(pixel);
    }
  }

  private updatePreview() {
    this._preview = this.canvas.img;
  }
}

class Canvas {
  private readonly domCanvas: HTMLCanvasElement =
    document.createElement("canvas");

  private readonly domContext: CanvasRenderingContext2D =
    this.domCanvas.getContext("2d") as CanvasRenderingContext2D;

  constructor(
    private readonly widthInPixels: number,
    private readonly pxPerPixel = 20
  ) {
    const canvasSize = this.widthInPixels * this.pxPerPixel;
    this.domCanvas.height = canvasSize;
    this.domCanvas.width = canvasSize;
    this.domContext.fillStyle = "#fff";
    this.domContext.fillRect(0, 0, canvasSize, canvasSize);
  }

  get img() {
    return this.domCanvas.toDataURL("image/png");
  }

  add(pixel: number): void {
    this.paint(pixel, "#000");
  }

  remove(pixel: number): void {
    this.paint(pixel, "#fff");
  }

  private paint(pixel: number, color: "#000" | "#fff"): void {
    const col = pixel % this.widthInPixels;
    const row = Math.floor(pixel / this.widthInPixels);
    this.domContext.fillStyle = color;
    this.domContext.fillRect(
      col * this.pxPerPixel,
      row * this.pxPerPixel,
      this.pxPerPixel,
      this.pxPerPixel
    );
  }
}

class History {
  private strokes: number[][];

  private currStroke: number;

  private currUserAction?: UserAction = undefined;

  constructor(options?: { data?: HistoryExport }) {
    this.strokes = options?.data?.strokes ?? [];
    this.currStroke = options?.data?.currStroke ?? -1;
  }

  get canUndo(): boolean {
    return this.currStroke >= 0;
  }

  get canRedo(): boolean {
    return this.currStroke < this.strokes.length - 1;
  }

  undo(callback: (pixel: number) => void): void {
    if (!this.canUndo) return;
    for (const pixel of this.strokes[this.currStroke]) {
      callback(pixel);
    }
    this.currStroke--;
  }

  redo(callback: (pixel: number) => void): void {
    if (!this.canRedo) return;
    this.currStroke++;
    for (const pixel of this.strokes[this.currStroke]) {
      callback(pixel);
    }
  }

  record(pixel: number, action: UserAction): void {
    if (action === this.currUserAction) {
      this.strokes[this.currStroke].push(pixel);
    } else {
      this.currUserAction = action;
      this.currStroke++;
      this.strokes[this.currStroke] = [pixel];
    }

    if (this.strokes.length > this.currStroke + 1) {
      this.strokes = this.strokes.slice(0, this.currStroke + 1);
    }
  }

  export(): HistoryExport {
    return {
      strokes: this.strokes,
      currStroke: this.currStroke,
    };
  }
}
