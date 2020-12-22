import 'bin/words_collection.dart';

void main() {
  final collection = WordsCollection();
  collection.addItem('First');
  collection.addItem('Second');
  collection.addItem('Third');

  final iterator = collection.getIterator();

  print('Straight traversal:');
  while (iterator.valid()) {
    print(iterator.next());
  }

  print('');

  print('Reverse traversal:');
  final reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    print(reverseIterator.next());
  }
}
