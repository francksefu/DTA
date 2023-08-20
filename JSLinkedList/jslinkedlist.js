class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    see() {
        return this.head.value;
    }
    append(value) {
        if (this.head == null) this.head = new Node(value, null);
        else {
            let cur = this.head;
            let prev = null;
            let add = new Node(value, null);
            while (cur != null) {
                prev = cur;
                cur = cur.nextNode
            }
            prev.nextNode = add;
        }
    }

    prepend(value) {
        if (this.head == null) this.head = new Node(value, null);
        else {
            this.head = new Node(value, this.head);
        }
    }

    size() {
        let i = 0;
        if (this.head == null) return i;
        else {
            let tmp = this.head;
            while (tmp != null) {
                i += 1;
                tmp = tmp.nextNode;
            }
            return i;
        }
    }

    tail() {
        if (this.head == null) return this.head;
        else {
            let tmp = this.head;
            let prev = null;
            while (tmp !== null) {
                prev = tmp;
                tmp = tmp.nextNode
            }
            return prev;
        }
    }

    at(index) {
        let i = 0;
        if (index == 0) return this.head;
        let tmp = this.head;
        let rang = null;
        while (tmp !== null) {
            if (index == i) {
                rang = tmp;
            }
            tmp = tmp.nextNode;
            i += 1;
        }
        return rang; 
    }

    pop() {
        let length = this.size();
        this.at(length - 2).nextNode = null;
    }

    contains(value) {
        let tmp = this.head;
        while (tmp !== null) {
            if(tmp.value == value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let i = 0;
        let tmp = this.head;
        while (tmp !== null) {
            if(tmp.value == value) return i;
            i += 1;
            tmp = tmp.nextNode;
        }
        return null;
    }

    toString() {
        let tmp = this.head;
        let inside = "";
        while (tmp !== null) {
            inside += "( "+tmp.value+" ) ->";
            tmp = tmp.nextNode;
        }
        return inside;
    }
}

let link = new LinkedList(new Node("first"));
link.append("second");
link.append("third");
console.log(link.size());
console.log(link.toString());
link.prepend("zero");
console.log(link.toString());
console.log(link.tail());
console.log(link.at(2));
link.pop();
console.log(link.toString());
console.log(link.contains('first'));
console.log(link.find('first'))