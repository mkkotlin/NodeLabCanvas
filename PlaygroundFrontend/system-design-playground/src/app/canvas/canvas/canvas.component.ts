import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-canvas',
  imports: [CdkDrag, NgFor],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {
  pos_y = 90;
  pos_x = 24;

  // Default nodes
  nodes = [
    { id: 1, type: 'Client', x: this.pos_x, y: this.pos_y },
    { id: 2, type: 'Load Balancer', x: this.pos_x + 200, y: this.pos_y },
    { id: 3, type: "API Server", x: this.pos_x + 400, y: this.pos_y }
  ];

}
