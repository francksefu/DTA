class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
  }

  builtTree () {
    const set_remove_duplication = new Set(this.arr);
    // List all Elements
    let remove_duplication = [];
    set_remove_duplication.forEach (function(value) {
      remove_duplication.push(value);
    })
    let remove_duplication_sort = remove_duplication.sort(function(a, b){return a - b});
    this.root = this.sortedArrayToBST(remove_duplication_sort, 0, remove_duplication_sort.length - 1);
    console.log(remove_duplication_sort);
  }

  prettyPrint (node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right != null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left != null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  sortedArrayToBST (arr, start, end) {
    if (start >= end) {
      return null;
    }
    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.sortedArrayToBST(arr, start, mid - 1);

    node.rigth = this.sortedArrayToBST(arr, mid + 1, end);

    return node;
  }

  insert(node) {
    let current_node = this.root;
    let prev = null;
    let side = "";
    while (current_node != null) {
      if (node.data > current_node.data) {
        prev = current_node;
        current_node = current_node.right;
        side = "right";
      }

      if (node.data < current_node.data) {
        prev = current_node;
        current_node = current_node.left;
        side = "left";
      }
      
    }

    if (side == "right") {
      prev.right = node;
    } else {
      prev.left = node;
    }
  }

  delete(data) {
    let current_node = this.root;
    let prev = null;
    let side = "";
    while(current_node.data != data && current_node != null) {
      if(data > current_node.data) {
        prev = current_node;
        current_node = current_node.right;
        side = "right";
      }

      if (data < current_node.data) {
        prev = current_node;
        current_node = current_node.left;
        side = "left";
      }

      if (data == current_node.data) {
        break;
      }
    }

    switch (current_node.data) {
      case null:
        return null;
      case data :
        if (current_node.left == null && current_node.right == null) {
          if(side == "rigth") {
            prev.right = null;
          } else {
            prev.left = null;
          }
          break;
        }
        if(current_node.left == null || current_node.right == null) {
          if(side == "rigth") {
            prev.right = current_node.right;
          } else {
            prev.left = current_node.left;
          }
          break;
        }

        if(current_node.left != null && current_node.right != null) {
          let current = current_node.right;
          let tab = [];
          function take(node) {
            if (node == null) {
              return tab;
            }
            tab.push(node.right.data);
            tab.push(node.left.data);
            take(node.right);
            take(node.left);
          }

          take(current);
        }
    }
  }

  find(data) {
    let current_node = this.root;
    let prev = null;
    let side = "";
    let value = null;
    while(current_node.data != data && current_node != null) {
      if(data > current_node.data) {
        prev = current_node;
        current_node = current_node.right;
        side = "right";
      }

      if (data < current_node.data) {
        prev = current_node;
        current_node = current_node.left;
        side = "left";
      }

      if (data == current_node.data) {
        value = true;
      }
    }
    if (value != true) value = false;
    return value;
  }

  levelOrder() {
    const act_like_queu = [];
    act_like_queu.push(this.root);
    const array_response = [];
    let current = this.root;
    while (current != null) {
      if(current.left){act_like_queu.push(current.left);}
      if(current.right){act_like_queu.push(current.right);} 
      array_response.push(act_like_queu[0]);
      act_like_queu.shift();
      current = act_like_queu[0];
    }
    return array_response;
  }

  preOrder(node) {
    if (node === null) {
      return ''
    }
  
    let result = `${node.data} `
    result += preOrder(node.left)
    result += preOrder(node.right)
    return result
  }

  postOrder(node) {
    if (node === null) {
      return ''
    }
 
    let result = '';
    result += preOrder(node.left)
    result += preOrder(node.right)
    result += ` ${node.data}`
    return result
  }

  // heigher function

  isBalanced() {
    this.builtTree();
    console.log(this.root)
    console.log(this.levelOrder())
    
  }
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.isBalanced();

