import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  // data: number[];

  // constructor(data: number[]) {
  //   this.data = data;
  // }

  constructor(public data: number[]) {
    // have to be called when extending other class
    super();
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    if (this.compare(leftIndex, rightIndex)) {
      const lefthandTemp = this.data[leftIndex];
      this.data[leftIndex] = this.data[rightIndex];
      this.data[rightIndex] = lefthandTemp;
    }
  }
  get length(): number {
    return this.data.length;
  }
}
