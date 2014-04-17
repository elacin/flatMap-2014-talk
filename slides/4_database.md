
## &lt;/hibernate&gt;

---

###scalaquery was somewhat immature
 - difficult to figure out DSL
 - little/bad documentation
 - encountered a few weird bugs in SQL generation
 - technical limitations leaked over to domain types
 - stuck with it because of promise and because it brought sanity.
 - considered a gamble

---


###Technical limitations leaked over to domain types
 - catch 22 made us to split up database tables
 - Option[Long] id fields in case classes for auto-increment fields

---

###sleep well at night
```java
@Transactional
public void saveThingie(final Thingie t) {
    sessionFactory.getCurrentSession().save(t);
}```

```scala
def saveThingie(t: Thingie)(implicit s: Session) =
	ThingieTable insert t
```