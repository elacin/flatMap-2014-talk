### checked exceptions => Either[A, B] or Try[T]
- much effort spent on this
- rewriting exposes inconsistencies

---

###good opportunity to introduce semantically richer «Left-types»:
```java
public Provider providerForApp(Application a,
                               List<Provider> ps)
                               throws Exception1, Exception2
```
```scala
def providerForApp(a:  Application,
                   ps: Seq[Provider]): Either[Seq[Refusal], Provider]
```

<aside class="notes">
move logging, error handling, *etc* out of business logic
</aside>
