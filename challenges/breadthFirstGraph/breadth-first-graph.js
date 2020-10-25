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
      this._adjancyList.set(vertex, []);
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
    getNeighbors(vertex) {
      if (this._adjancyList.has(vertex)) {
        return this._adjancyList.get(vertex);
      }
    }
    printAll() {
      // console.log(this._adjancyList.entries());
      for (const [vertex, edge] of this._adjancyList.entries()) {
        console.log('V>> ', vertex);
        console.log('E>>', edge);
      }
    }
    AddNode() {
      // Adds a new node to the graph
      // Takes in the value of that node
      // Returns the added node
    }
    AddEdge() {
      // Adds a new edge between two nodes in the graph
      // Include the ability to have a “weight”
      // Takes in the two nodes to be connected by the edge
      // Both nodes should already be in the Graph
    }
    GetNodes() {
      // Returns all of the nodes in the graph as a collection(set, list, or similar)
    }
    GetNeighbors() {
      // Returns a collection of edges connected to the given node
      // Takes in a given node
      // Include the weight of the connection in the returned collection
    }
    Size() {
      // Returns the total number of nodes in the graph
    }
    breadthFirst() {
      let vals = [];
      console.log( this._adjancyList);
      for (const property in this._adjancyList) {
        vals[vals.length] = this._adjancyList[property].value;
      }
  
      return vals;
      
    }
    main(){
  
    }
  }
  
  
  const graph = new Graph();
  const pandora = new Vertex('Pandora');
  const arendelle = new Vertex('Arendelle');
  const metroville = new Vertex('Metroville');
  const monstroplolis = new Vertex('Monstroplolis');
  const narnia = new Vertex('Narnia');
  const naboo = new Vertex('Naboo');
  
  graph.addVertex(pandora);
  graph.addVertex(arendelle);
  graph.addVertex(metroville);
  graph.addVertex(monstroplolis);
  graph.addVertex(narnia);
  graph.addVertex(naboo);
  
  graph.addDirectedEdge(pandora, arendelle);
  graph.addDirectedEdge(arendelle, pandora);
  
  graph.addDirectedEdge(arendelle, metroville);
  graph.addDirectedEdge(metroville, arendelle);
  
  graph.addDirectedEdge(arendelle, monstroplolis);
  graph.addDirectedEdge(monstroplolis, arendelle);
  
  graph.addDirectedEdge(metroville, monstroplolis);
  graph.addDirectedEdge(monstroplolis, metroville);
  
  graph.addDirectedEdge(metroville, naboo);
  graph.addDirectedEdge(naboo, metroville);
  
  graph.addDirectedEdge(monstroplolis, naboo);
  graph.addDirectedEdge(naboo, monstroplolis);
  
  graph.addDirectedEdge(naboo, narnia);
  graph.addDirectedEdge(narnia, naboo);
  
  graph.addDirectedEdge(narnia, metroville);
  graph.addDirectedEdge(metroville, narnia);
  
  
  
  console.log(graph.breadthFirst());
  // graph.printAll();
  