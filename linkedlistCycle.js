// Givenhead, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following thenextpointer. Internally,posis used to denote the index of the node that the tail'snextpointer is connected to.

// Note-posis not passed as a parameter.

// Complete the function below. No need to take any input, just return if the given linked list has a cycle in it or not.Returntrueif there is a cycle in the linked list. Otherwise, returnfalse.

// Note- All the nodes are different





const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let slow = head;
    fast = head;
    
    flag = false;
    
    while(slow!==null && fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
        
        if(slow==fast){
            flag=true;
            break;
        }
    }
    if(flag){
        return true;
    }
    else{
        return false
    }
}