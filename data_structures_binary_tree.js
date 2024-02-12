/**Implementation of Binary Tree in Javascript
 * @author Ayush Bhople
 */

/**
 * This is the Leaf class to create a leaf with data
 */
class Leaf {
  constructor(data) {
  /**
   * Create a Leaf.
   * @param {*} data - The data to be stored in the Leaf.
   */
      this.data = data;
      this.left = null;
      this.right = null;
  }
}
/**
* Here is the BinTree class
*/

class BinTree {
  /**
   * Create a Binary Tree.
   * @constructor
   */
  constructor() {
      // root of the Binary Tree  
      this.root = null;
  }
 

  insert(data) {
  /**
   * Insert data into the Binary Tree.
   * @param {*} data - The data to be inserted.
   */
      var newLeaf = new Leaf(data);
      if (this.root === null) {
          this.root = newLeaf;
      } else {
          this.insertLeaf(this.root, newLeaf);
      }
  }
  /**Insert a Leaf into the Binary Tree.
   * @private
   * @param {Leaf} leaf - The current leaf 
   * @param {Leaf} newLeaf - The new Leaf to be inserted.
   */

  insertLeaf(leaf, newLeaf) {
      if (newLeaf.data < leaf.data) {
          if (leaf.left === null) {
              leaf.left = newLeaf;
          } else {
              this.insertLeaf(leaf.left, newLeaf);
          }
      } else {
          if (leaf.right === null) {
              leaf.right = newLeaf;
          } else {
              this.insertLeaf(leaf.right, newLeaf);
          }
      }
  }
  /**
   * Remove data from the Binary Tree.
   * @param {*} data - The data to be removed.
   */

  remove(data) {
      this.root = this.removeLeaf(this.root, data);
  }
  /**
   * Remove a Leaf from the Binary Tree.
   * @private
   * @param {Leaf} leaf - The current leaf that has been checked.
   * @param {*} key - The data of the leaf to be removed.
   * @returns {Leaf} - The updated root leaf.
   */

  removeLeaf(leaf, key) {
      if (leaf === null) {
          return null;
      } else if (key < leaf.data) {
          leaf.left = this.removeLeaf(leaf.left, key);
          return leaf;
      } else if (key > leaf.data) {
          leaf.right = this.removeLeaf(leaf.right, key);
          return leaf;
      } else {
          if (leaf.left === null && leaf.right === null) {
              leaf = null;
              return leaf;
          } else if (leaf.left === null) {
              leaf = leaf.right;
              return leaf;
          } else if (leaf.right === null) {
              leaf = leaf.left;
              return leaf;
          } else {
              var aux = this.findMinLeaf(leaf.right);
              leaf.data = aux.data;
              leaf.right = this.removeLeaf(leaf.right, aux.data);
              return leaf;
          }
      }
  }
  /**
   * Inorder traversal of the Binary Tree.
   * @param {Leaf} leaf - The current leaf that has been checked.
   */
  inorder(leaf) {
      if (leaf !== null) {
          this.inorder(leaf.left);
          console.log(leaf.data);
          this.inorder(leaf.right);
      }
  }
  /**
   * Preorder traversal of the Binary Tree.
   * @param {Leaf} leaf - The current leaf that has been checked.
   */
  preorder(leaf) {
      if (leaf !== null) {
          console.log(leaf.data);
          this.preorder(leaf.left);
          this.preorder(leaf.right);
      }
  }
  /**
   * Postorder traversal of the Binary Tree.
   * @param {Leaf} leaf - The current leaf that has been checked.
   */

  postorder(leaf) {
      if (leaf !== null) {
          this.postorder(leaf.left);
          this.postorder(leaf.right);
          console.log(leaf.data);
      }
  }
  /**
   * Find the minimum leaf in the Binary Tree.
   * @param {Leaf} leaf - The current leaf being evaluated.
   * @returns {Leaf} - The minimum leaf.
   */
  findMinLeaf(leaf) {
      if (leaf.left === null) {
          return leaf;
      } else {
          return this.findMinLeaf(leaf.left);
      }
  }
  /**
   * Get the root leaf of the BT
   * @returns {Leaf} - The root leaf.
   */

  getRootLeaf() {
      return this.root;
  }
  /**
   * Search for a leaf with a specific data value in the Binary Tree.
   * @param {Leaf} leaf - The current leaf being evaluated.
   * @param {*} data - The data value to search in BT
   * @returns {Leaf|null} - The leaf with the specified data value or null if not found.
   */

  search(leaf, data) {
      if (leaf === null) {
          return null;
      } else if (data < leaf.data) {
          return this.search(leaf.left, data);
      } else if (data > leaf.data) {
          return this.search(leaf.right, data);
      } else {
          return leaf;
      }
  }
}

var BT = new BinTree();
BT.insert(15);
BT.insert(25);
BT.insert(10);
BT.insert(7);
BT.insert(22);
BT.insert(17);
BT.insert(13);
BT.insert(5);
BT.insert(9);
BT.insert(27);

var root = BT.getRootLeaf();

console.log("Inorder traversal:");
BT.inorder(root);

BT.remove(5);
console.log("Inorder traversal after removing 5:");
BT.inorder(root);

BT.remove(7);
console.log("Inorder traversal after removing 7:");
BT.inorder(root);

BT.remove(15);
console.log("Inorder traversal after removing 15:");
BT.inorder(root);

console.log("Preorder traversal:");
BT.preorder(root);

console.log("Postorder traversal:");
BT.postorder(root);
