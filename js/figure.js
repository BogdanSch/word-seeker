export class Figure {
  constructor(gameCanvas) {
    this.gameCanvas = gameCanvas;
    this.position = [100, 300];
    this.drawFunctions = [
      // Car body
      () => {
        this.gameCanvas.context.fillStyle = "#5b8c85";
        this.gameCanvas.context.fillRect(
          this.position[0],
          this.position[1] - 40,
          160,
          40
        );
        this.gameCanvas.context.fillRect(
          this.position[0] + 50,
          this.position[1] - 80,
          80,
          40
        );
      },
      // Wheel
      () => {
        this.gameCanvas.context.fillStyle = "#000000";
        this.gameCanvas.context.beginPath();
        this.gameCanvas.context.arc(
          this.position[0] + 40,
          this.position[1],
          20,
          0,
          Math.PI * 2,
          true
        );
        this.gameCanvas.context.fill();
      },
      // Wheel
      () => {
        this.gameCanvas.context.fillStyle = "#000000";
        this.gameCanvas.context.beginPath();
        this.gameCanvas.context.arc(
          this.position[0] + 120,
          this.position[1],
          20,
          0,
          Math.PI * 2,
          true
        );
        this.gameCanvas.context.fill();
      },
      // Window
      () => {
        this.gameCanvas.context.fillStyle = "#add8e6";
        this.gameCanvas.context.fillRect(
          this.position[0] + 70,
          this.position[1] - 70,
          40,
          30
        );
      },
      // Window
      () => {
        this.gameCanvas.context.fillStyle = "#add8e6";
        this.gameCanvas.context.fillRect(
          this.position[0] + 20,
          this.position[1] - 70,
          40,
          30
        );
      },
      // Roof
      () => {
        this.gameCanvas.context.fillStyle = "#5b8c85";
        this.gameCanvas.context.beginPath();
        this.gameCanvas.context.moveTo(
          this.position[0] + 20,
          this.position[1] - 70
        );
        this.gameCanvas.context.lineTo(
          this.position[0] + 40,
          this.position[1] - 100
        );
        this.gameCanvas.context.lineTo(
          this.position[0] + 120,
          this.position[1] - 100
        );
        this.gameCanvas.context.lineTo(
          this.position[0] + 140,
          this.position[1] - 70
        );
        this.gameCanvas.context.fill();
      },
    ];

    //   () => this.gameCanvas.context.fillRect(100, 300, 200, 50),
    //   () => this.gameCanvas.context.fillRect(130, 250, 140, 50),
    //   () => {
    //     this.gameCanvas.context.beginPath();
    //     this.gameCanvas.context.arc(120, 350, 25, 0, Math.PI * 2, true);
    //     this.gameCanvas.context.closePath();
    //     this.gameCanvas.context.fill();
    //   },
    //   () => {
    //     this.gameCanvas.context.beginPath();
    //     this.gameCanvas.context.arc(280, 350, 25, 0, Math.PI * 2, true);
    //     this.gameCanvas.context.closePath();
    //     this.gameCanvas.context.fill();
    //   },
    //   () => this.gameCanvas.context.fillRect(150, 200, 100, 50),
    //   () => {
    //     this.gameCanvas.context.beginPath();
    //     this.gameCanvas.context.moveTo(160, 200);
    //     this.gameCanvas.context.lineTo(240, 200);
    //     this.gameCanvas.context.lineTo(210, 150);
    //     this.gameCanvas.context.fill();
    //   },
    //   () => {
    //     this.gameCanvas.context.fillRect(180, 200, 40, 20);
    //     this.gameCanvas.context.fillRect(150, 250, 30, 50);
    //   },
  }

  drawCar(maxAttempts, attemptsLeft) {
    this.drawFunctions
      .slice(0, maxAttempts - attemptsLeft)
      .forEach((objectFunction) => objectFunction());
  }
}
