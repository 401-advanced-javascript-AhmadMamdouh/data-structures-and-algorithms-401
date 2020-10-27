'use strict';

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.adjacencyList = new Map();
    this.counter = 0;
  }
  addNode(vertex){
    this.adjacencyList.set(vertex, []);
    this.counter++;
  }
  addEdge(startVertex, endVertex, weight){
    if(!this.adjacencyList.has(startVertex)||!this.adjacencyList.has(endVertex)){
      console.log('not found');
    }else{
      const adjacencies = this.adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }
  getNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      return this.adjacencyList.get(vertex);
    }
  }
  getNodes() {
    // console.log(this.adjacencyList.entries());
    for (const [vertex, edge] of this.adjacencyList.entries()) {
      
      console.log('V>>>> ', vertex);
      console.log('E>>>>', edge);
    }
  }
  size() {
    console.log('the size:', this.counter, 'node/s');
    return this.counter;
  }
}

class Vertex{
  constructor(value){
    this.value = value;
  }
}
  
  
let graph = new Graph();
function depthFirst(startNode, visited = new Set()){
  visited.add(startNode);
  let neighborNodes = graph.getNeighbors(startNode);
  if(neighborNodes !== undefined){
    for(const neighborNode of neighborNodes){
      if(!(visited.has(neighborNode))){
        depthFirst(neighborNode.vertex, visited);
      }
    } 
  }
  return visited;
}
  
const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);
const five = new Vertex(5);
graph.addNode(two);
graph.addNode(three);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(eight);
graph.addNode(ten);
graph.addNode(five);
  
graph.addEdge(two, seven);
graph.addEdge(three, eight);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(ten, two);
graph.addEdge(ten, three);
graph.addEdge(ten, six);
graph.addEdge(eight, seven);
graph.addEdge(three, seven);
graph.addEdge(three, five);
  
  
  
console.log(depthFirst(ten));