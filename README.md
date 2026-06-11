# NodeLabCanvas

> Design. Simulate. Learn.

An interactive system design playground built with Angular and Django that allows users to visually design architectures, connect services, simulate traffic, and observe how distributed systems behave under different conditions.

---

## 🚀 Overview

NodeLabCanvas is an educational and engineering-focused platform where users can build system architectures on a visual canvas and run simulations to understand concepts such as:

- Load Balancing
- Caching
- Databases
- Message Queues
- Background Workers
- API Gateways
- WebSockets
- Fault Tolerance
- Horizontal Scaling

Instead of reading diagrams in blogs, users can create and interact with their own architectures.

---

## ✨ Features

### Visual Architecture Designer
- Drag and drop nodes
- Connect services visually
- Move components freely
- Save and load architectures

### System Simulation
- Simulate incoming traffic
- Visualize request flow
- Observe latency changes
- Detect bottlenecks

### Real-Time Updates
- Live simulation metrics
- WebSocket-powered updates
- Dynamic node status changes

### Learning Environment
- Experiment safely
- Understand distributed system concepts
- Explore architecture trade-offs

---

## 🏗️ Supported Components

| Component | Purpose |
|------------|------------|
| Client | Traffic source |
| Load Balancer | Request distribution |
| API Server | Business logic |
| Cache | Fast data retrieval |
| Database | Persistent storage |
| Queue | Asynchronous processing |
| Worker | Background jobs |
| WebSocket Server | Real-time communication |

---

## 🛠️ Tech Stack

### Frontend
- Angular 19
- TypeScript
- RxJS
- Angular CDK
- Tailwind CSS

### Backend
- Django
- Django REST Framework
- Django Channels

### Database
- SQLite (Development)
- PostgreSQL (Planned)

### Real-Time
- WebSockets
- Redis (Planned)

---

## 📂 Project Structure

```text
NodeLabCanvas
│
├── frontend/
│   ├── canvas/
│   ├── nodes/
│   ├── simulation/
│   ├── websocket/
│   └── shared/
│
├── backend/
│   ├── architecture/
│   ├── simulation/
│   ├── websocket/
│   └── api/
│
└── docs/
```

---

## 🎯 MVP Goals

### Phase 1
- [ ] Drag and drop nodes
- [ ] Connect nodes
- [ ] Save architecture
- [ ] Load architecture

### Phase 2
- [ ] Traffic simulation
- [ ] Node metrics
- [ ] Latency calculation
- [ ] Failure states

### Phase 3
- [ ] WebSocket updates
- [ ] Live dashboard
- [ ] Simulation controls

### Phase 4
- [ ] Redis integration
- [ ] Queue simulation
- [ ] Worker processing
- [ ] Advanced metrics

---

## 📈 Example Architecture

```text
Client
   │
   ▼
Load Balancer
   │
   ▼
API Servers
   │
   ├────► Cache
   │
   ▼
Database
```

---

## 🔬 Future Enhancements

- Autoscaling simulation
- Rate limiting
- Circuit breakers
- API Gateway simulation
- Kubernetes concepts
- Architecture templates
- User authentication
- Architecture sharing

---

## 💡 Why This Project?

Most portfolio projects focus on CRUD operations.

NodeLabCanvas focuses on:

- System Design
- Scalability Concepts
- Distributed Systems
- Real-Time Communication
- Backend Engineering

The goal is to bridge the gap between learning system design theory and seeing it in action.

---

## 📚 Learning Objectives

Through this project, I aim to gain hands-on experience with:

- Angular Application Architecture
- Django REST APIs
- WebSocket Communication
- Event-Driven Design
- Distributed System Fundamentals
- State Management
- Simulation Logic

---

## 📌 Status

🚧 Currently in Active Development

Building the foundation for a visual system design and simulation platform.

---

## 🤝 Contributions

Suggestions, feedback, and ideas are always welcome.

---

## ⭐ If you find this project interesting, consider giving it a star.