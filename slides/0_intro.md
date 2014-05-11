
###Early Timeline Penger.no

<table align="center">
<tr><td> **autumn 2010 **  </td><td> start of mortgage
project (*in Java*)        </td></tr>
<tr><td> **autumn 2011 **  </td><td> start of insurance project (*in Scala*)      </td></tr>
</table>

---

###Situation early 2012...
- code base growing quickly
- unhappy with technology

---

###codebase size and complexity growing quickly
initial 18 months of project (jan 2011-june 2012)
<img src="images/graph_early.png"/>

<aside class="notes">
projected LOC now ~60k+
<br/>never take functionality away
</aside>

---

###Unhappy with technology
####Framework hell:
- limited/leaky abstractions
- want to understand whats going on
- runtime failures
- debugging

<aside class="notes">
wont complain too much, should be well known
<br/abstractions -> hibernate
<br/>understand   -> opaque, black box, no lexical scope, cglib rewrites code, annotations, generics
<br/>story: spring wired session scope to app scope
<br/>story: diabolical mind - execution flow by exceptions (spring security)
<br/>might not be perfect developers, so this happens
</aside>

---

###Had tested the scala waters
- insurance app
- backoffice application already rewritten
- expertise within team
<aside class="notes">
first task was rewriting backoffice app
<br/>of course there was also...this other project
<br/>other team had all the fun
<br/>unbearable lunch
</aside>

---

###Envy
- prime motivating factor

---

###Wanted to optimize for:
- developer happiness
- peace of mind/trust in code
- similar technology between projects

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
<tr><td>6</td><td>Spring MVC         </td><td> => Unfiltered ++    </td></tr>
</table>

<aside class="notes">
in this order
<br/>of course, some of them happened simultaneously
</aside>
