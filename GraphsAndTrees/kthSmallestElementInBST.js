class TreeNode {
    constructor(val, left, right) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}
/*
    In-Order Traversal of BST will give us ascending values.
 */

// const kthSmallestElementInBST = (root, k) => {
//     let val;
//     const inorder = (root) => {
//         if (root == null) {
//             return;
//         }
//
//         inorder(root.left);
//         k--;
//
//         if (k === 0) {
//             val = root.val;
//             return;
//         }
//
//         inorder(root.right);
//     };
//     inorder(root);
//     return val;
// };

const kthSmallestElementInBST = (root, k) => {
    let val;
    let nums = [];
    const inorder = (root) => {
        if (root == null) {
            return;
        }

        inorder(root.left);
        nums.push(root.val);
        inorder(root.right);
    };
    inorder(root);
    return nums[k - 1];
};

const node5 = new TreeNode(5);
const node3 = new TreeNode(3);
const node6 = new TreeNode(6);
const node2 = new TreeNode(2);
const node4 = new TreeNode(4);
const node1 = new TreeNode(1);
node5.left = node3;
node5.right = node6;
node3.left = node2;
node3.right = node4;
node2.left = node1;
console.log(kthSmallestElementInBST(node5, 3)); // 3
