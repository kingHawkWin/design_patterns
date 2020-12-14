class Singleton {
  static Singleton _instance;

  Singleton._();

  static Singleton getInstance() {
    if (Singleton._instance == null) {
      _instance = Singleton._();
    }
    return _instance;
  }
}
