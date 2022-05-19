"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    // data: number[];
    // constructor(data: number[]) {
    //   this.data = data;
    // }
    constructor(data) {
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
