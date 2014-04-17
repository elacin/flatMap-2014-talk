### checked exceptions => Either[A, B] or Try[T]
rewriting exposes inconsistencies

---

###good opportunity to introduce semantically richer «Left-types»:
nudges you in the direction of moving for example logging upstack,
out of the business logic
```java
public Provider providerForApp(Application a,
                               List<Provider> ps)
                               throws Exception1, Exception2
```
```scala
def providerForApp(a: Application,
                   ps: Seq[Provider]
                   ): Either[Seq[Refusal], Provider]
```