export type PixelMap = Record<PixelIdx, PixelVal>;
export type PixelIdx = string;
type PixelVal = boolean;

type Stroke = PixelIdx[];
type StrokeEvent = Event | ClearEvent;

const RESOLUTION = 32;
const PHYSICAL_PIXEL_RATIO = 20;

class ClearEvent {}

export class Drawing {
  readonly id = Math.random();
  private strokeStart?: StrokeEvent;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  public preview = "";

  constructor(
    public pixelMap: PixelMap = {},
    public strokes: Stroke[] = [],
    public currStroke = -1
  ) {
    const canvasSize = RESOLUTION * PHYSICAL_PIXEL_RATIO;
    this.canvas = document.createElement("canvas");
    this.canvas.height = canvasSize;
    this.canvas.width = canvasSize;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, canvasSize, canvasSize);
    for (const pixelIdx in pixelMap) {
      if (!pixelMap[pixelIdx]) continue;
      this.updateCanvas(pixelIdx);
    }
    this.generatePreview();
  }

  get canUndo() {
    return this.currStroke >= 0;
  }

  get canRedo() {
    return this.currStroke < this.strokes.length - 1;
  }

  flip(pixelIdx: PixelIdx, event: StrokeEvent) {
    this.updatePixelMap(pixelIdx);
    this.updateHistory(pixelIdx, event);
    this.updateCanvas(pixelIdx);
    this.generatePreview();
  }

  clear() {
    const event = new ClearEvent();
    for (const pixelIdx in this.pixelMap) {
      if (!this.pixelMap[pixelIdx]) continue;
      this.updatePixelMap(pixelIdx);
      this.updateHistory(pixelIdx, event);
      this.updateCanvas(pixelIdx);
    }
    this.generatePreview();
  }

  undo() {
    if (!this.canUndo) return;
    for (const pixelIdx of this.strokes[this.currStroke]) {
      this.updatePixelMap(pixelIdx);
      this.updateCanvas(pixelIdx);
    }
    this.currStroke--;
    this.generatePreview();
  }

  redo() {
    if (!this.canRedo) return;
    this.currStroke++;
    for (const pixelIdx of this.strokes[this.currStroke]) {
      this.updatePixelMap(pixelIdx);
      this.updateCanvas(pixelIdx);
    }
    this.generatePreview();
  }

  private updatePixelMap(pixelIdx: PixelIdx) {
    this.pixelMap[pixelIdx] = !this.pixelMap[pixelIdx];
  }

  private updateHistory(pixelIdx: PixelIdx, event: StrokeEvent) {
    if (event === this.strokeStart) {
      this.strokes[this.currStroke].push(pixelIdx);
    } else {
      this.currStroke++;
      this.strokeStart = event;
      this.strokes[this.currStroke] = [pixelIdx];
    }

    if (this.currStroke < this.strokes.length - 1) {
      this.strokes = this.strokes.slice(0, this.currStroke + 1);
    }
  }

  private updateCanvas(pixelIdx: PixelIdx) {
    const idx = parseInt(pixelIdx);
    const col = idx % RESOLUTION;
    const row = Math.floor(idx / RESOLUTION);
    this.context.fillStyle = this.pixelMap[pixelIdx] ? "black" : "white";
    this.context.fillRect(
      col * PHYSICAL_PIXEL_RATIO,
      row * PHYSICAL_PIXEL_RATIO,
      PHYSICAL_PIXEL_RATIO,
      PHYSICAL_PIXEL_RATIO
    );
  }

  private generatePreview() {
    this.preview = this.canvas.toDataURL("image/png");
  }
}
