## Mechanically convert

---

###Source graph
- Scala calling Java 👍

- Java calling Scala 👎

- start converting controllers, then continue downstack
- keep all inter-module APIs «Java-friendly» while you can

<aside class="notes">
got this one from others' experience
java friendly is mostly easy, frameworks you use might mandate java collections
sbt supports compile order flag CompileOrder.JavaThenScala
</aside>


---

###IntelliJ <3
<img src="images/intellij-convert.png"/>

<aside class="notes">
we loved this
<br/>an enabler for actually doing the conversion
<br/>enable converting heaps of code in one go
<br/>enable «prototyping» to check what should be refactored
</aside>


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

<aside class="notes">
<br/>one pass after to clean up
<br/>doesnt understand everything
<br/>problems with: generics, multiple constructors, finality etc
<br/>doesnt matter! :)
</aside>