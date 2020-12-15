import './bin/client.dart';
import './bin/composite.dart';
import './bin/leaf.dart';

void main() {
  final simple = Leaf();
  print('Client: I\'ve got a simple component:');
  client1(simple);
  print('');

  final tree = Composite();
  final branch1 = Composite();
  branch1.add(Leaf());
  branch1.add(Leaf());
  final branch2 = Composite();
  branch2.add(Leaf());
  tree.add(branch1);
  tree.add(branch2);
  print('Client: Now I\'ve got a composite tree:');
  client1(tree);
  print('');

  print(
      'Client: I don\'t need to check the components classes even when managing the tree:');
  client2(tree, simple);
}
