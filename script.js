class LinkedList {
    list = [];
    constructor(){
    }

    append(value){
        let newNode = createNode(value);
        if (this.size() == 0) {
            this.list.push(newNode);
        } else if (this.size() > 0) {
            //Links previous node 
            let previousNode = this.list[this.list.length - 1]
            previousNode.nextNode = newNode.returnValue();
            this.list.push(newNode)
        }
    }
    prepend(value){
        let newNode = createNode(value);
        if (this.list.length == 0) {
            this.list.push(newNode);
        } else {
            newNode.nextNode = this.list[0].returnValue();
            this.list.unshift(newNode);

        }
    }
    size(){
        return this.list.length;
    }
    head(){
        return this.list[0];
    }
    tail(){
        return this.list[this.size() - 1];
        
    }
    at(index){
        return this.list[index];
    }
    pop(){
        return this.list.pop();
    }
    contains(value){
        let i = 0;
        while (i < this.size()) {
            let nodeValue = this.list[i].returnValue();
            if (value == nodeValue) {
                return true;
            } if (this.size() == i && nodeValue != value) {
                return false
            }
            if (nodeValue == undefined) {
                return console.log('does not exist');
            }
            i++
        }
        return 'does not exist';  
    }
    find(value){

    }
    toString(listString = ''){
        while (this.list.length >= 0) {
            if (this.list.length < 1) {
                return listString;

            } else {
                listString = `${listString} ${this.at(0).value}`;
                this.list.shift();
                
            }

        }
    }

}

function createNode(value) {
    return {
        nextNode: null,
        value: value,
        returnValue() {
            return this.value;
        }
    }
}


let newLinkedList = new LinkedList();
newLinkedList.append('hex-gate');
newLinkedList.append('hex-code');
newLinkedList.prepend('sharigan-scrolls');
newLinkedList.append('hexy');
newLinkedList.append('juan');
newLinkedList.append('luis');
console.log(newLinkedList.list);
console.log("HEAD");
console.log(newLinkedList.head());
console.log("TAIL");
console.log(newLinkedList.tail());
console.log(newLinkedList.contains('bubba-gump'));
newLinkedList.pop()
newLinkedList.pop()
console.log(newLinkedList.toString())
console.log(newLinkedList.list);

