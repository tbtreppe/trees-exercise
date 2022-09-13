/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelp(node) {
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0) {
          sumHelp(child);
        }
      }
    }
    sumHelp(this.root);
    return total;

    // const add = [this];
    // while (add.length) {
    //   const total = add.pop();
    //   if (add.length === 0) {
    //     return total;
    //   }
    //   for (let child of total.children) {
    //     add.push(child + total);
    //   }
    // }
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function evenCounter(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) count++;

        if (child.children.length > 0) {
          evenCounter(child);
        }
      }
    }
    evenCounter(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let total = this.root.val > lowerBound ? 1 : 0;

    function check(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) total++;

        if (child.children.length > 0) {
          check(child);
        }
      }
    }
    check(this.root);
    return total;
  }
}

module.exports = { Tree, TreeNode };
