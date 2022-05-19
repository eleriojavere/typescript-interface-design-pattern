import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharacterCollection('jeehXaA');
const linkedList = new LinkedList();
linkedList.add(20);
linkedList.add(-30);
linkedList.add(2340);
linkedList.add(2);

const sorter = new Sorter(linkedList);
sorter.sort();
console.log(linkedList.print());
