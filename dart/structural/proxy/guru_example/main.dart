import 'bin/client.dart';
import 'bin/proxy.dart';
import 'bin/real_subject.dart';

void main() {
  print('Client: Executing the client code with a real subject:');
  final realSubject = RealSubject();
  client(realSubject);

  print('Client: Executing the same client code with a proxy:');
  final proxy = Proxy(realSubject);
  client(proxy);
}
