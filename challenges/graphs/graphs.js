class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this._adjancyList = new Map();
  }
  addVertex(vertex) {
    console.log('diana', vertex);
    this._adjancyList.set(vertex, []);
  }
  GetNodes(){
    return this._adjancyList.entries();
  }
  Size(){
    return this._adjancyList.size;
  }
  addDirectedEdge(startVertex, endVertex, weight) {
    if (
      !this._adjancyList.has(startVertex) ||
        !this._adjancyList.has(endVertex)
    ) {
      console.log('Vertex not found');
    } else {
      const adjacencies = this._adjancyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }
  addUndirectedEdge(firstVertex, secondVertex, weight){
    // not sure about this
    if (
      !this._adjancyList.has(firstVertex) ||
        !this._adjancyList.has(secondVertex)
    ) {
      console.log('Vertex not found');
    } else {
      this._adjancyList.get(firstVertex).push(new Edge(secondVertex, weight));
      this._adjancyList.get(secondVertex).push(new Edge(firstVertex, weight));
    }
  }
  getNeighbors(vertex) {
    if (this._adjancyList.has(vertex)) {
      return this._adjancyList.get(vertex);
    }
  }
  printAll() {
    for (const [vertex, edge] of this._adjancyList.entries()) {
      console.log('V>> ', vertex);
      console.log('E>>', edge);
    }
  }
}
const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, seven);
graph.addDirectedEdge(eight, three);
// console.log(graph);
// graph.printAll();
// console.log('NEIGHBORS', graph.getNeighbors(ten));
  
console.log(graph.GetNodes());
  