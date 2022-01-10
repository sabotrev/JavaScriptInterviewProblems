class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const isSameTree = (p, q) => {
    if (p === null || q === null) {
        return null;
    } else if (p === null && q === null) {
        return true;
    }

    let qP = [];
    let qQ = [];
    qP.unshift(p);
    qQ.unshift(q);
    while (qP.length > 0 && qQ.length > 0) {
        let nP = qP.pop();
        let nQ = qQ.pop();
        if (nP.val !== nQ.val) {
            return false;
        }
        if (nP.left !== null && nQ.left !== null) {
            qP.unshift(nP.left);
            qQ.unshift(nQ.left);
        } else if (nP.left !== null || nQ.left !== null) {
            return false;
        }
        if (nP.right !== null && nQ.right !== null) {
            qP.unshift(nP.right);
            qQ.unshift(nQ.right);
        } else if (nP.right !== null || nQ.right !== null) {
            return false;
        }
    }

    return true;
};

/*
    Time: O(n)
    Space: O(n)
 */

const tree1Node1 = new TreeNode(1);
const tree1node2 = new TreeNode(2);
const tree1node3 = new TreeNode(3);
tree1Node1.left = tree1node2;
tree1Node1.right = tree1node3;

const tree2Node1 = new TreeNode(1);
const tree2node2 = new TreeNode(2);
const tree2node3 = new TreeNode(3);
tree2Node1.left = tree2node2;
tree2Node1.right = tree2node3;

// const tree1Node1 = new TreeNode(1);
// const tree1node2 = new TreeNode(2);
// tree1Node1.left = tree1node2;
//
// const tree2Node1 = new TreeNode(1);
// const tree2node2 = new TreeNode(2);
// tree2Node1.right = tree2node2;

console.log(isSameTree(tree1Node1, tree2Node1));
