export class SvgBuilder {
  private elements: string[] = [];

  constructor(
    private readonly width: number,
    private readonly height: number
  ) {}

  add(element: string): this {
    this.elements.push(element);
    return this;
  }

  background(fill: string, stroke: string, radius = 12): this {
    return this.add(`
      <rect
        width="${this.width}"
        height="${this.height}"
        rx="${radius}"
        fill="${fill}"
        stroke="${stroke}"
      />
    `);
  }

  title(
    text: string,
    x: number,
    y: number,
    color: string,
    size = 24
  ): this {
    return this.add(`
      <text
        x="${x}"
        y="${y}"
        font-size="${size}"
        font-weight="bold"
        fill="${color}">
        ${text}
      </text>
    `);
  }
  
  text(
  value: string,
  x: number,
  y: number,
  color: string,
  size = 16,
  anchor: "start" | "middle" | "end" = "start",
  weight: "normal" | "bold" = "normal"
): this {
  return this.add(`
    <text
      x="${x}"
      y="${y}"
      font-size="${size}"
      font-weight="${weight}"
      text-anchor="${anchor}"
      fill="${color}">
      ${value}
    </text>
  `);
}
circle(
  x: number,
  y: number,
  radius: number,
  color: string
): this {
  return this.add(`
    <circle
      cx="${x}"
      cy="${y}"
      r="${radius}"
      fill="${color}"
    />
  `);
}
progressBar(
  x: number,
  y: number,
  width: number,
  height: number,
  percentage: number,
  color: string,
  background: string
): this {
  const filledWidth = (width * percentage) / 100;

  return this.add(`
    <rect
      x="${x}"
      y="${y}"
      width="${width}"
      height="${height}"
      rx="${height / 2}"
      fill="${background}"
    />

    <rect
      x="${x}"
      y="${y}"
      width="${filledWidth}"
      height="${height}"
      rx="${height / 2}"
      fill="${color}"
    />
  `);
}
  build(): string {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
${this.elements.join("\n")}
</svg>
`;
  }
}