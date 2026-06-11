import { Component } from '@angular/core';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-canvas',
  imports: [CdkDrag],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {
  // Default nodes
  nodes = [
    { id: 1, type: 'Client', x: 24, y: 90 },
    { id: 2, type: 'Load Balancer', x: 24 + 200, y: 90 },
    { id: 3, type: "API Server", x: 24 + 400, y: 90 },
    { id: 4, type: "DB", x: 24 + 600, y: 90 }
  ];
  edges = [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 }
  ]

  // helper getNode
  getNode(id: number) {
    return this.nodes.find(node => node.id == id);
  }
  // on drag stop
  onDragEnd(event: CdkDragEnd, node: any) {
    const pos = event.source.getFreeDragPosition();
    node.x = pos?.x ?? 0;
    node.y = pos?.y ?? 0;
    console.log(pos);
  }

}
