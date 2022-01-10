function reversePath(element, root) {
    const path = [];
    let pointer = element;

    while(pointer.parent) {
        const index = pointer.parent.children.indexOf(pointer);
        path.push(index);
        pointer = pointer.parent;
    }

    pointer = root;

    while (path.length) {
        pointer = children[path.pop()];
    }
}