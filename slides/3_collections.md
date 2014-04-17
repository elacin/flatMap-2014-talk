
## Port Java collections
####converting between hierarchies

explicitly (preferred)
```scala
import scala.collection.JavaConverters._

val javaMap: util.Map[String, Int] =
    immutable.Map("foo" -> 2, "bar" -> 42).asJava

```
implicitly
```scala
import scala.collection.JavaConversions._

val javaMap: util.Map[String, Int] =
    immutable.Map("foo" -> 2, "bar" -> 42)

```

---

### checked exceptions => Either[A, B] or Try[T]
rewriting exposes inconsistencies