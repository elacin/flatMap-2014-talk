## Mechanically convert

---

###Source graph
- Scala calling Java 👍

- Java calling Scala 👎

- start converting controllers, then continue downstack
- keep all inter-module APIs «Java-friendly» while you can

---

###IntelliJ <3
<img src="images/intellij-convert.png"/>

---

###Example
```java
public class Foo<T> {
    private final T param;

    public Foo(T param) {
        this.param = param;
    }
}
```
automatically converted (doesnt compile, in this case):
```scala
    class Foo {
      def this(param: T) {
        this()
        this.param = param
      }

      private final val param: T = null
    }
```
what you probably want:
```scala
case class Foo[T](param: T)
```