const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor()
  {
      this.initialRoot = null;
  }
  root() {
    return this.initialRoot;
  }

  
    add(data) {
      this.initialRoot = addWithin(this.initialRoot, data);
      function addWithin(node, data) {
        if(!node) {
          return new Node(data);
        }
  
        if (node.data === data) {
          return node;
        }
  
        if (data < node.data) {
          node.left = addWithin(node.left, data);
        } else {
          node.right = addWithin(node.right, data);
        }
        return node;
        }
      }

  has(data) {
    let node = this.initialRoot
    while(node) {
      if (node.data === data) {
        return true
      }
      else {
        return false
      }
    }
  }

  find(data) {
    let node = this.initialRoot
    while(node) {
      if (node.data === data) {
        return node
      }
      else {
        return null
      }
    }
    
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.initialRoot) {
      return
    }
    let node = this.initialRoot
    while(node.left) {
      node = node.left 
    }
    return node.data
    
}
    

  max() {
   if (!this.initialRoot) {
     return
   }
   let node = this.initialRoot
   while(node.right) {
     node = node.right

   }
   return node.data

}
}


module.exports = {
  BinarySearchTree
};