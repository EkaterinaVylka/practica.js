let fruits = new Map();
fruits.set("apple 1", "variety A");
fruits.set("apple 2", "variety B");
fruits.set("apple 3", "variety A");
fruits.set("apple 4", "variety B");
fruits.set("apple 5", "variety A");
fruits.set("apple 6", "variety C");
fruits.set("apple 7", "variety A");

for (let name of fruits.keys()){
    console.log(name + " is " + fruits.get(name));
}