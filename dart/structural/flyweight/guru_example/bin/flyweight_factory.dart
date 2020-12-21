import 'flyweight.dart';

class FlyweightFactory {
  final Map<String, Flyweight> _flyweights = {};

  FlyweightFactory(List<List<String>> initialFlyweights) {
    for (var state in initialFlyweights) {
      _flyweights[_getKey(state)] = Flyweight(state);
    }
  }

  String _getKey(List<String> state) {
    return state.join('_');
  }

  Flyweight getFlyweight(List<String> sharedState) {
    final key = _getKey(sharedState);

    if (!_flyweights.containsKey(key)) {
      print('FlyweightFactory: $key is not exist.');
      _flyweights[key] = Flyweight(sharedState);
    } else {
      print('FlyweightFactory: $key is already exist.');
    }

    return _flyweights[key];
  }

  void listFlyweights() {
    final count = _flyweights.keys.length;
    print('FlyweightFactory: now have $count flyweights.');
    for (var key in _flyweights.keys) {
      print(key);
    }
  }
}
