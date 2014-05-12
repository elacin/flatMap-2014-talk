## &lt;/hibernate&gt;
<aside class="notes">
the part i was most passionate about.
<br/>also where we had the most discussions
<br/>also considered, believe it or not, spring jdbc, or writing wrapper around plain jdbc
</aside>

---

###scalaquery was somewhat immature
 - difficult to figure out DSL
 - encountered a few weird bugs in SQL generation
 - technical limitations leaked over to domain types
 - stuck with it because of promise and because it brought sanity.
 - slick 1 was a relief

<aside class="notes">
felt we might have started to use it a bit too early, did consider it a gamble
<br/>somewhat lucky, because we had relatively easy queries
<br/>only opaque/indirect part of our stack - sql queries generated
<br/>slick 2 might have fixed more, havent had time to look into it
</aside>

---

###Technical limitations leaked over to domain types
 - catch 22 made us to split up database tables
 - Option[Long] id fields in case classes for auto-increment fields

<aside class="notes">
22 not necessarily bad in itself, but hated that it felt forced
autoincrement keys in the intersection between explicit and implicit??
feels beautiful with absolute control, but a bit cumbersome
</aside>

---

###Sanity/sleep well at night
```java
@Transactional
public void saveThingie(final Thingie t) {
    sessionFactory.getCurrentSession().save(t);
}```

```scala
def saveThingie(t: Thingie)(implicit s: Session) =
	ThingieTable insert t
```

<aside class="notes">
<br/>one of my favourite things with the whole conversion
<br/>got rid of the horrible, horrible @Transactional that i never understood
<br/>granted never did really complicated things, no nested tx
</aside>