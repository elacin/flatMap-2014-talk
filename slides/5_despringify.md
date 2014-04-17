##Despringify

---

###Replacement functionality
- spring comes with... everything
- most functionality we need exists in scala stdlib, or is easy to write yourself
- took a few dependencies, like commons-fileupload, and commons-email

---

###app wiring
 - started rewiring components early because of slick
 - two apps in one, with somewhat intertwining dependencies
 - *ugh*...

---

###Have spring do the ultimate wiring
####Share config and database connection

```scala
@Configuration
class SpringBeans {
  @Bean @Autowired
  def concreteApp(ds: javax.sql.DataSource, cfg: Config): ConcreteApp =
    ...
}
```

---

###Have spring do the ultimate wiring
####Share config and database connection

```scala
    new ConcreteApp with DataSourceDbConnectionComponent {
      lazy val datasource = ds
      lazy val conf       = cfg
    }
```

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