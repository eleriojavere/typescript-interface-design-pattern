"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    // data: number[];
    // constructor(data: number[]) {
    //   this.data = data;
    // }
    constructor(data) {
        // have to be called when extending other class
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        if (this.compare(leftIndex, rightIndex)) {
            const lefthandTemp = this.data[leftIndex];
            this.data[leftIndex] = this.data[rightIndex];
            this.data[rightIndex] = lefthandTemp;
        }
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
