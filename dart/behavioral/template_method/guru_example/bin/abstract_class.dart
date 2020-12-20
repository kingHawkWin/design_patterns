abstract class AbstractClass {
  void templateMethod() {
    baseOperation1();
    requiredOperation1();
    baseOperation2();
    hook1();
    requiredOperation2();
    baseOperation3();
    hook2();
  }

  void baseOperation1() {
    print('AbstractClass: baseOperation1.');
  }

  void baseOperation2() {
    print('AbstractClass: baseOperation2.');
  }

  void baseOperation3() {
    print('AbstractClass: baseOperation3.');
  }

  void requiredOperation1();
  void requiredOperation2();

  void hook1() {}
  void hook2() {}
}
