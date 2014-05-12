### checked exceptions => Either[A, B] or Try[T]
- rewriting exposes inconsistencies
- often far reaching changes

<aside class="notes">
confession. i *preferred* checked exceptions, was initially upset with scala
<br/>much effort spent on this
<br/>inconsistencies within a function, where parts of it would effectively have type (T or Exception)
<br/>need to homogenize parts
<br/>often far reaching consequences, Eithers will typically show up in far more places than does throws exception
<br/>also easy to continue, because you want to put things in for comprehensions
</aside>

---

###good opportunity to introduce semantically richer error types:
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
dawned on me that we didnt need exceptions, could provide better info
<br/>move logging, error handling, *etc* out of business logic
</aside>
