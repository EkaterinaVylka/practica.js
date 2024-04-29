let num;

if ((typeof(num) == 'number')&&(!isNaN(num))) {
    console.log("значение - это число");
} else if (typeof(num) == 'string') {
    console.log("значение - это строка");
} else if (typeof(num) == 'boolean') {
    console.log("значение является логическим");
} else {
    console.log("Тип x не определён");
}