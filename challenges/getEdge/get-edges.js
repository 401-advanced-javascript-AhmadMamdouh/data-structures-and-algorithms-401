'use strict';

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
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      console.log('Connot create edge with missing vertex');
    } else {
      const edgeStartVertex = this._adjacencyList.get(startVertex);
      edgeStartVertex.push(new Edge(endVertex, weight));
    }
  }

  getNodes() {
    return this._adjacencyList;
  }

  getNeighbors(vertex) {
    if (this._adjacencyList.has(vertex)) {
      return this._adjacencyList.get(vertex);
    }else{
      console.log('Vertex not found');
    }
  }

  size() {
    return this._adjacencyList.size;
  }

  breadthFirst(vertex){
    const queue = []; // Behaviour of the queue: first in first out
    const vistedNodes = new Set(); // track the nodes that we visited
    queue.push(vertex);
    vistedNodes.add(vertex);
    while (queue.length) {
      const currentNode = queue.shift();
      // console.log("currentNode",currentNode);
      const neighbors = this.getNeighbors(currentNode);
      // console.log("neighbors",neighbors);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        // console.log('neighborNode',neighbor.vertex)
        if(vistedNodes.has(neighborNode)) {
          continue;
        } else {
          vistedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    console.log({vistedNodes});
    return vistedNodes;
  }

}

const graph = new Graph();

const pandora = new Vertex('pandora');
const metroville = new Vertex('metroville');
const arendelle = new Vertex('arendelle');
const monstropolis = new Vertex('monstropolis');
const naboo = new Vertex('naboo');
const narnia = new Vertex('narnia');

graph.addVertex(pandora);
graph.addVertex(metroville);
graph.addVertex(arendelle);
graph.addVertex(monstropolis);
graph.addVertex(naboo);
graph.addVertex(narnia);

graph.addDirectedEdge(pandora, arendelle, 150);
graph.addDirectedEdge(pandora, metroville, 82);
graph.addDirectedEdge(arendelle, metroville, 99);
graph.addDirectedEdge(arendelle, pandora, 150);
graph.addDirectedEdge(arendelle, monstropolis, 42);
graph.addDirectedEdge(metroville, arendelle, 99);
graph.addDirectedEdge(metroville, pandora, 82);
graph.addDirectedEdge(metroville, monstropolis, 105);
graph.addDirectedEdge(metroville, naboo, 26);
graph.addDirectedEdge(metroville, narnia, 37);
graph.addDirectedEdge(monstropolis, arendelle, 42);
graph.addDirectedEdge(monstropolis, naboo, 73);
graph.addDirectedEdge(naboo, monstropolis, 73);
graph.addDirectedEdge(naboo, metroville, 26);
graph.addDirectedEdge(naboo, narnia, 250);
graph.addDirectedEdge(narnia, naboo, 250);
graph.addDirectedEdge(narnia, metroville, 37);

function  tripItinerary(graph, citysArray){
  let isPossible = false;
  let cost = 0;
  while(citysArray.length > 1){
    const currentCity = citysArray.shift();
    const relatedCities = graph.getNeighbors(currentCity);

    for(let i = 0; i < relatedCities.length; i++){
      if(citysArray[0].value === relatedCities[i].vertex.value){
        cost = cost + relatedCities[i].weight;
        isPossible = true;
        break;
      }
    
    }
    if(!isPossible){
      break;
    }
  }
  console.log({isPossible, cost});
  return {isPossible, cost};
}

tripItinerary(graph, [metroville, pandora]);
tripItinerary(graph, [arendelle, monstropolis, naboo]);
tripItinerary(graph, [naboo, pandora]);
tripItinerary(graph, [narnia, arendelle, naboo]);