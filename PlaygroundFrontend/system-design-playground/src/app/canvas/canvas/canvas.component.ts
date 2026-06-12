import { Component, HostListener } from '@angular/core';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-canvas',
  imports: [CdkDrag],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {
  // Default nodes spaced out nicely
  nodes: { id: number; type: string; name: string; x: number; y: number }[] = [
    { id: 1, type: 'Client', name: 'Client', x: 50, y: 150 },
    { id: 2, type: 'Load Balancer', name: 'Load Balancer', x: 380, y: 150 },
    { id: 3, type: 'API Server', name: 'API Server', x: 710, y: 150 }
  ];

  // Default edges between nodes
  edges: { source: number; target: number }[] = [
    { source: 1, target: 2 },
    { source: 2, target: 3 }
  ];

  // mouse / connection state
  isConnecting = false;
  connectionPreviewNode: number | null = null;
  previewLine = { x1: 0, y1: 0, x2: 0, y2: 0 };

  // Helper to get a node by id
  getNode(id: number) {
    return this.nodes.find(node => node.id === id);
  }



  // Backup on drag end
  onDragEnd(event: CdkDragEnd, node: any) {
    const pos = event.source.getFreeDragPosition();
    node.x = pos?.x ?? 0;
    node.y = pos?.y ?? 0;
  }

  // Start connecting drawing from output port
  onOutputPortClick(event: MouseEvent, nodeId: number) {
    event.stopPropagation();
    const node = this.getNode(nodeId);
    if (!node) return;

    this.isConnecting = true;
    this.connectionPreviewNode = nodeId;
    this.previewLine.x1 = node.x + 250;
    this.previewLine.y1 = node.y + 51;
    
    const canvasEl = document.querySelector('.canvas');
    if (canvasEl) {
      const rect = canvasEl.getBoundingClientRect();
      this.previewLine.x2 = event.clientX - rect.left;
      this.previewLine.y2 = event.clientY - rect.top;
    } else {
      this.previewLine.x2 = this.previewLine.x1;
      this.previewLine.y2 = this.previewLine.y1;
    }
    console.log("Connection started from node:", nodeId);
  }

  // Complete connection on input port click
  onInputPortClick(event: MouseEvent, nodeId: number) {
    event.stopPropagation();
    if (!this.isConnecting || this.connectionPreviewNode === null) return;
    
    // Cannot connect a node to itself
    if (this.connectionPreviewNode === nodeId) return;

    // Check if edge already exists
    const exists = this.edges.some(
      edge => edge.source === this.connectionPreviewNode && edge.target === nodeId
    );
    
    if (!exists) {
      this.edges.push({
        source: this.connectionPreviewNode,
        target: nodeId
      });
      console.log(`Edge created: ${this.connectionPreviewNode} -> ${nodeId}`);
    }

    this.cancelConnection();
  }

  // Track mouse coordinates on canvas for preview drawing
  onMouseMove(event: MouseEvent) {
    if (this.isConnecting && this.connectionPreviewNode !== null) {
      const canvasEl = document.querySelector('.canvas');
      if (canvasEl) {
        const rect = canvasEl.getBoundingClientRect();
        this.previewLine.x2 = event.clientX - rect.left;
        this.previewLine.y2 = event.clientY - rect.top;
      }
    }
  }

  // Cancel connection if clicked on empty canvas area
  onCanvasClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('canvas') || target.classList.contains('grid-overlay')) {
      if (this.isConnecting) {
        this.cancelConnection();
      }
    }
  }

  // Cancel drawing if Escape key is pressed
  @HostListener('window:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    if (this.isConnecting) {
      this.cancelConnection();
    }
  }

  cancelConnection() {
    this.isConnecting = false;
    this.connectionPreviewNode = null;
    console.log("Connection drawing cancelled");
  }

  // Add node dynamically
  addNode(type: string) {
    const id = this.nodes.length > 0 ? Math.max(...this.nodes.map(n => n.id)) + 1 : 1;
    const offset = (this.nodes.length % 5) * 30;
    const newNode = {
      id,
      type,
      name: type === 'Custom' ? 'Custom Service' : type,
      x: 150 + offset,
      y: 200 + offset
    };
    this.nodes.push(newNode);
    console.log("Node added:", newNode);
  }

  // Handle renaming custom node
  onRenameNode(event: Event, node: any) {
    const input = event.target as HTMLInputElement;
    node.name = input.value;
  }

  // Delete node and clean its edges
  deleteNode(event: MouseEvent, nodeId: number) {
    event.stopPropagation();
    
    if (this.connectionPreviewNode === nodeId) {
      this.cancelConnection();
    }

    this.nodes = this.nodes.filter(node => node.id !== nodeId);
    this.edges = this.edges.filter(
      edge => edge.source !== nodeId && edge.target !== nodeId
    );
    console.log("Node deleted:", nodeId);
  }

  // Delete an edge
  deleteEdge(event: MouseEvent, targetEdge: any) {
    event.stopPropagation();
    this.edges = this.edges.filter(edge => edge !== targetEdge);
    console.log("Edge deleted:", targetEdge);
  }

  // Get type-specific CSS class
  getNodeTypeClass(type: string): string {
    return 'node-' + type.toLowerCase().replace(/\s+/g, '-');
  }

  // Get badge label
  getBadgeText(type: string): string {
    switch (type) {
      case 'Client': return 'Client';
      case 'Load Balancer': return 'LB';
      case 'API Server': return 'API';
      case 'Cache': return 'Cache';
      case 'Database': return 'DB';
      case 'Queue': return 'Queue';
      case 'Worker': return 'Worker';
      case 'WebSocket Server': return 'WS';
      case 'Custom': return 'Custom';
      default: return 'Node';
    }
  }

  // Edge helper methods
  getEdgeStartX(edge: any) {
    return (this.getNode(edge.source)?.x ?? 0) + 250;
  }

  getEdgeStartY(edge: any) {
    return (this.getNode(edge.source)?.y ?? 0) + 51;
  }

  getEdgeEndX(edge: any) {
    return (this.getNode(edge.target)?.x ?? 0);
  }

  getEdgeEndY(edge: any) {
    return (this.getNode(edge.target)?.y ?? 0) + 51;
  }
}
