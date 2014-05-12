##Despringify

---

###Replacement functionality
- spring comes with... everything
- most functionality we need exists in scala stdlib, or is easy to write yourself
- took a few other dependencies, like commons-fileupload, and commons-email

<aside class="notes">
<br/>...and almost nothing we need
</aside>

---

###app wiring
 - started rewiring components early because of slick
 - two apps in one, with somewhat intertwining dependencies
 - *ugh*...

<aside class="notes">
<br/>this gave us a few small headaches
</aside>

---

###Have spring do the ultimate wiring
####Share config and database connection

```scala
@Configuration
class SpringBeans {
  @Bean @Autowired
  def concreteApp(ds: javax.sql.DataSource, cfg: Config): ConcreteApp = {
    new ConcreteApp with DataSourceDbConnectionComponent {
      lazy val datasource = ds
      lazy val conf       = cfg
    }
  }
}
```
<aside class="notes">
<br/>some process to get there, started by wiring up scala components as spring beans
</aside>
