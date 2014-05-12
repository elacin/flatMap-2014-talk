###Penger.no - Early Timeline
<br/>
<table align="center">
<tr><td> **autumn 2010 **  </td><td> start of mortgage
project (*in Java*)        </td></tr>
<tr><td> **autumn 2011 **  </td><td> start of insurance project (*in Scala*)      </td></tr>
</table>

<aside class="notes">
Penger.no is a site for helping users take control of their private finances, primarily through comparing offers from banks and insurance companies. think moneysupermarket.com
<br/>For the norwegians here, penger.no is owned by finn.no
<br/>history lesson, will keep as short as possible, will try to keep a timeline here, summarized at the end
</aside>

---

###Java project, Situation early 2012...
- code base growing quickly
- unhappy with technology

<aside class="notes">
<br/>will give a short overview, technical reasons why we wanted to do something
<br/>two main observations
<br/>unhappy: wont complain too much, should be well known.
</aside>

---

###codebase size and complexity growing quickly
initial 18 months of project (jan 2011-june 2012)
<img src="images/graph_early.png"/>

<aside class="notes">
<br/>two main things: small project, and size increasing
<br/>obviously not a perfect metric, but says something
<br/>projected LOC now ~60k+
<br/>never take functionality away
<br/>scala code here are two internal apps
</aside>

---

###Unhappy with technology

- limited/leaky abstractions
- want to understand whats going on
- runtime failures
- debugging

<aside class="notes">
<br/>some things java culture some things technical, Framework hell
<br/>abstractions -> hibernate has spent 300k lines abstracting away sql, still need to know sql
<br/>often need to dig deep to find correct method to override
<br/>story: twisted mind - execution flow by exceptions (spring mvc)
<br/>
<br/>understand -> i want to understand my dependencies! death by layers. (spring, threadlocals) evade lexical scoping, cglib rewrites bytecode deploy-time
<br/>
<br/>runtime failures -> reflection, annotations
<br/>might not be a perfect developer, so this happens
<br/>story: spring wired session scope to app scope
<br/>
<br/>these are good reasons for adopting scala...
</aside>

---

###Situation
- scala expertise within team
- insurance app originally scala
- backoffice app already rewritten
- mortgage app very important for us
<aside class="notes">
i come in december 2012, hired partly for scala
<br/>first task was rewriting backoffice app
<br/>of course there was also...this other project
<br/>other team had all the fun
<br/>unbearable lunch
<br/>that leads me to the main reason for the rewrite...
</aside>

---

###Envy

<aside class="notes">
primary motivating factor
</aside>

---

###Wanted to optimize for:
- peace of mind/trust in code
- similar technology between projects
- developer happiness

---

##Porting strategy:

<table align="center">

<tr><td>1</td><td>refactor Java codebase</td></tr>
<tr><td>2</td><td>introduce optional semantics</td></tr>
<tr><td>3</td><td>mechanically convert Java to Scala</td></tr>
<tr><td>4</td><td>Java collections   </td><td> => Scala collections</td></tr>
<tr><td> </td><td>checked exceptions </td><td> => Either/Try       </td></tr>
<tr><td>5</td><td>Hibernate          </td><td> => Slick            </td></tr>
<tr><td></td><td> Spring             </td><td> => cake pattern     </td></tr>
<tr><td>6</td><td>Spring MVC/JSP     </td><td> => Unfiltered ++    </td></tr>
</table>

<aside class="notes">
in this order
<br/>of course, some of them happened simultaneously
<br/>on a touch a file-basis
</aside>
