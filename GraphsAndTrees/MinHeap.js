class MinHeap {
    constructor() {
        this.heap = [];
    }

    print() {
        console.log(this.heap);
    }

    getMin() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index + 1) / 2) - 1;
            const parentValue = this.heap[parentIndex];
            const currentValue = this.heap[index];

            if (parentValue > currentValue) {
                // Swap
                this.heap[parentIndex] = currentValue;
                this.heap[index] = parentValue;
            }

            index = parentIndex;
        }
    }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(23);
minHeap.insert(36);
minHeap.insert(18);
minHeap.print();
