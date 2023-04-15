class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  insert(node) {
    if (!this.root) {
      this.root = node;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (node.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  preOrder(node = this.root) {
    if (node === null) {
      return ''
    }
  
    let result = `${node.data} `
    result += this.preOrder(node.left)
    result += this.preOrder(node.right)
    return result
  }
}


function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(new Node(e)))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
