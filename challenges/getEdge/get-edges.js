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
    console.log('ahmad', vertex);
    this._adjancyList.set(vertex, []);
  }
  GetNodes() {
    return this._adjancyList.entries();
  }
  Size() {
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
  addUndirectedEdge(firstVertex, secondVertex, weight) {
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
  getEdge(arr) {
    let cost = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (this._adjancyList.has(arr[i])) {
        let neighbor = this._adjancyList.get(arr[i]);
        if (!neighbor.includes(arr[i - 1])) {
          return 'False, 0$';
        }
      }
      cost = cost + this.weight;
    }
    return `True, ${cost}$`;

  }
}
