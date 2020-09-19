## Stacks and Queues
Implement the linked list concept and insertion.

### Challenge
Create a Stack classes list with these features:

### Features

* A Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* A method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* A method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Should raise exception when called on empty stack
* A method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
* Should raise exception when called on empty stack
* A method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
* Create a Queue classes list with these features:

### Features

* A Queue class that has a front property. It creates an empty Queue when instantiated.
* This object should be aware of a default empty value assigned to front when the queue is created.
* A method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* A method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* Should raise exception when called on empty queue
* A method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
* Should raise exception when called on empty queue
* A method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

#### Approach & Efficiency
Created the node then a stack and queue classes with all required methods then tested if the methods work properly.

### Solution : see the attach images .