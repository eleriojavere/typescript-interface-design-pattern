export class NumbersCollection {
  // data: number[];

  // constructor(data: number[]) {
  //   this.data = data;
  // }

  constructor(public data: number[]) {}
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
