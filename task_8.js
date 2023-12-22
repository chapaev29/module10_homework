let myMap = new Map();
myMap.set("number 1", "point a");
myMap.set("number 2", "point b");
myMap.set("number 3", "point c");
myMap.set("number 4", "point d");
myMap.set("number 5", "point e");

for (let name of myMap.keys()){
  console.log(name + ' ' + myMap.get(name));
}