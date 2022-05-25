"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection_1.CharacterCollection('jeehXaA');
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(20);
linkedList.add(-30);
linkedList.add(2340);
linkedList.add(2);
linkedList.sort();
linkedList.sort();
linkedList.print();
