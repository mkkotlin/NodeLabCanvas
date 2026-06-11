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
  // Default nodes
  nodes = [
    { id: 1, type: 'Client', x: 24, y: 90 },
    { id: 2, type: 'Load Balancer', x: 24 + 200, y: 90 },
    { id: 3, type: "API Server", x: 24 + 400, y: 90 }
  ];
  edges = [
    { source: 1, target: 2 },
    { source: 2, target: 3 }
  ]

  // helper getNode
  getNode(id: number) {
    return this.nodes.find(node => node.id == id);
  }

}
