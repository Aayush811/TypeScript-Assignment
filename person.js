var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var person = /** @class */ (function () {
    function person(name, age, salary, sex) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.sex = sex;
    }
    person.swap = function (newArr, i, j) {
        var a = newArr[i];
        var b = newArr[j];
        newArr[i] = b;
        newArr[j] = a;
    };
    person.partition = function (newArr, pivot, lo, hi, field, order) {
        var i = lo;
        var j = lo;
        if (order === "asc") {
            while (i <= hi) {
                if (newArr[i][field] > pivot)
                    i++;
                else {
                    person.swap(newArr, i, j);
                    i++;
                    j++;
                }
            }
        }
        else {
            while (i <= hi) {
                if (newArr[i][field] < pivot)
                    i++;
                else {
                    person.swap(newArr, i, j);
                    i++;
                    j++;
                }
            }
        }
        return j - 1;
    };
    person.quickSortHelper = function (newArr, lo, hi, field, order) {
        if (lo > hi)
            return;
        var pivot = newArr[hi][field];
        var pIdx = person.partition(newArr, pivot, lo, hi, field, order);
        person.quickSortHelper(newArr, lo, pIdx - 1, field, order);
        person.quickSortHelper(newArr, pIdx + 1, hi, field, order);
    };
    person.quickSort = function (arr, field, order) {
        var newArr = __spreadArray([], arr, true);
        // console.log(newArr);
        this.quickSortHelper(newArr, 0, newArr.length - 1, field, order);
        return newArr;
    };
    return person;
}());
var obj1 = new person("aayush", 22, 2500000, "male");
var obj2 = new person("harsh", 20, 3000000, "male");
var obj3 = new person("has", 24, 2600000, "male");
var obj4 = new person("tanu", 21, 100000, "Female");
var obj5 = new person("luv", 26, 654522, "male");
var obj6 = new person("rashmi", 22, 543515, "Female");
var obj7 = new person("priti", 32, 6443548, "Female");
var obj8 = new person("hrx", 42, 564448, "male");
var arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8];
console.log(person.quickSort(arr, "age", "desc"));
