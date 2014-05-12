
## Refactor Java codebase
- limit/contain mutability
- avoid multiple returns
- short, static functions
- composition over inheritance
- value classes

<aside class="notes">
mostly java best practices now anyway
<br/>not organized, just general maintenance direction
<br/>collections: now would embrace java 8 stream api or guava, we relied on Collections.unmodifiableList
</aside>


---

### Optional semantincs
- compile-time guarantees and easy porting, not elegance
- today: would have used java.util.Optional&lt;T&gt;

```java

public class MyOption<T> implements Iterable<T> {
    private final T value;

    public static <G> MyOption<G> option(final G value) {
        return new MyOption<G>(value);
    }

    ...
}
```

