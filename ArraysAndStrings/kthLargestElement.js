class MinHeap {
    constructor(capacity) {
        this.capacity = capacity;
        this.value = [];
    }

    add(val) {
        this.value.push(val);
        this.bubbleUp(this.value.length - 1);
        if (this.value.length > this.capacity) {
            this.remove();
        }
    }

    remove() {
        this.swap(0, this.value.length - 1);
        const min = this.value.pop();
        this.trickleDown(0);
        return min;
    }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2);
        let max = index;

        if (parent >= 0 && this.value[parent] > this.value[max]) {
            max = parent;
        }

        if (max !== index) {
            this.swap(max, index);
            this.bubbleUp(max);
        }
    }

    trickleDown(idx) {
        const leftChild = 2 * idx + 1;
        const rightChild = 2 * idx + 2;
        let min = idx;

        if (
            leftChild < this.value.length &&
            this.value[leftChild] < this.value[min]
        )
            min = leftChild;
        if (
            rightChild < this.value.length &&
            this.value[rightChild] < this.value[min]
        )
            min = rightChild;

        if (min !== idx) {
            this.swap(min, idx);
            this.trickleDown(min);
        }
    }

    swap(i, j) {
        [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
    }
}

const findKthLargest = (nums, k) => {
    const minHeap = new MinHeap(k);

    for (let n of nums) minHeap.add(n);

    return minHeap.remove();
};

/*
    Time: O(n + k * log(n)) = buildMaxHeap() + k * heapify()
    Space: O(1)
 */

console.log(findKthLargest([9, 8, 5, 3, 2, 1], 2)); // 8
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
