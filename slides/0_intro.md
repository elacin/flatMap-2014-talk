
###Early Timeline Penger.no

<table align="center">
<tr><td> **autumn 2010 **  </td><td> start of mortgage project (*in Java*)        </td></tr>
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

---

###Unhappy with technology
####Framework hell:
- limited/leaky abstractions
- want to understand whats going on
- runtime failures
- debugging

---

###Envy
- prime motivating factor

---

###Had tested the scala waters
- insurance app
- backoffice application already rewritten
- expertise within team

---

###Wanted to optimize for:
- developer happiness
- peace of mind/trust in code
- similar technology between projects

---

##Porting strategy:

<table align="center">

<tr><td> refactor Java codebase</td></tr>
<tr><td> introduce optional semantics</td></tr>
<tr><td> Java               </td><td> => Scala</td></tr>
<tr><td> Java collections   </td><td> => Scala collections</td></tr>
<tr><td> checked exceptions </td><td> => Either/Try       </td></tr>
<tr><td> Hibernate          </td><td> => Slick            </td></tr>
<tr><td> Spring             </td><td> => cake pattern     </td></tr>
<tr><td> Spring MVC         </td><td> => Unfiltered       </td></tr>
</table>

