
## Porting collections
<aside class="notes">
<br/>easier than expected
<br/>had no problems with introducing the odd Any when neccessary
</aside>

---

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

<aside class="notes">
<br/>on purpose didnt look into performance, assumed the worst, not neccessary
<br/>kept prefixes for coexisting
</aside>
