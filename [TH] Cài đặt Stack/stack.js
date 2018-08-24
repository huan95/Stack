function Stack() {

    this.dataStore = [];
    this.top = 0;

    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = lenght;

}

function push(element) {

    this.dataStore[this.top++] = element;

}

function pop(element) {

    this.dataStore[--this.top] = element;

}

function peek() {

    return this.dataStore[this.top - 1];

}

function lenght() {

    return this.top;

}

function clear() {

    this.top = 0;

}

var fruit = new Stack();

fruit.push("banana");
fruit.push("apple");
fruit.push("orange");
fruit.push("grapes");

document.write("length :" + fruit.length()+ "<br>");

document.write(fruit.peek() + "<br>");

fruit.push("mango");
document.write(fruit.peek() + "<br>");

document.write("length :" + fruit.length()+ "<br>");

fruit.pop("manngo");
document.write(fruit.peek() + "<br>");
document.write("length :" + fruit.length() + "<br>");


