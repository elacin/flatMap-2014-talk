
## &lt;/hibernate&gt;
<aside class="notes">
the part i was most passionate about
</aside>

---

###scalaquery was somewhat immature
 - difficult to figure out DSL
 - little/bad documentation
 - encountered a few weird bugs in SQL generation
 - technical limitations leaked over to domain types
 - stuck with it because of promise and because it brought sanity.
 - considered a gamble

<aside class="notes">
felt we might have started to use it a bit too early
<br>somewhat lucky, because we had relatively easy queries
<br>only opaque/indirect part of our stack - sql queries generated
<br>slick 1 fixed a lot of the problems
<br>slick 2 might have fixed more, havent had time to look into it

</aside>

---


###Technical limitations leaked over to domain types
 - catch 22 made us to split up database tables
 - Option[Long] id fields in case classes for auto-increment fields

<aside class="notes">
22 no necessarily bad in itself, but hated to be forced
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
