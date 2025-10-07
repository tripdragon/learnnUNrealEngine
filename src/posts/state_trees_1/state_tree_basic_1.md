---
layout: layouts/home.njk
title: State Tree basic demo
---



<h1 class="supertitle">learn me a state tree!!</h1>

#### *v: Unreal Engine 5.6 / revision 1*

## State Trees / Machines / Finite\
These are typically a framework or routine labeled as FSM, which boils down to either 
```
actor.state = "idle"
or .changeState("walk")
and the like
```
Which can be as simple as enum values or complex as each state having an "entering" "exiting" set of routines. With each state in code being a boilerplate of functions like a programmatic interface

When such a concept is dropped into a GUI, each and every need and option has to take up space of pixels and location leading to a **Complex System**

So getting over the steps to get the system to output anything is typically the hardest task to accomplish with it being the first makes it exhausting to learn. Hang in there

---
## Good places to learn properly

**ThreeWays - Unreal Engine 5**\
[
UE5 || State Tree Blueprint Tasks Explained - Part 1](https://www.youtube.com/watch?v=yMAUQqPVoXU&t=1s)\
[
UE5 || State Tree Blueprint Tasks Explained - Part 2](https://www.youtube.com/watch?v=YMgKyqq_2gQ)

**Unreal Engine's Docs**\
[Docs of sort](https://dev.epicgames.com/documentation/en-us/unreal-engine/state-tree-in-unreal-engine)

---

This tutorial is simply the BASICS of making a thing happen in a typical setting. This example is coupeled to the Actor instead of a more proper reusable component.

Some things are skipped as you need to know how to launch the app and make a blueprint and navigate around it. 

This demo simulates an Actor in a seeking state, reaches a conditional and returns to an idle state.

The steps show the state tree print from an Actor, then produce a **task** basic walk transform in base state, then a conditional to finish the state and transition to a different **task** state.

If somethings not showing up, be sure to compile and save


## Begin
---

Create an Actor, give it a mesh or whatnot, just for something to display.

Create a StateTree. Select the StateTree Component. The others AI and AISchema are for another tutorial.


<img class="block" src="{{ '../imgs/state1.jpg' | url }}" alt="skjfd" width="400"  />
<img class="block" src="../imgs/state2.jpg" alt="skjfd" width="500"  />

In the Blueprint Class of the actor add a Component "StateTree"

<img class="block" src="../imgs/state3.jpg" alt="skjfd" width="500"  />

In the Details: AI you should be able to select the StateTree

<img class="block" src="../imgs/state4.jpg" alt="skjfd" width="500"  />
<br />
<img class="block" src="../imgs/state5.jpg" alt="skjfd" width="500"  />

Compile

<img class="block" src="../imgs/state6.jpg" alt="skjfd" width="500"  />

Within the the StateTree you have the option to change the *"Context Actor Class"* to the blueprint its self further coupled it, but we don't need to for this example, so leave it as it is.

<img class="block" src="../imgs/state7.jpg" alt="skjfd" width="500"  />

Select the *"Root"* state, then press the *"New Task"* button and select "StateTree Task Blueprint Base". Save to whereever

<img class="block" src="../imgs/state8.jpg" alt="skjfd" width="500"  />

<br />

<img class="block" src="../imgs/state9.jpg" alt="skjfd" width="500"  />

Compile
<img class="block" src="../imgs/state10.jpg" alt="skjfd" width="500"  />

Two steps: select the "Root"\
1: Find the Details: Tasks area and press the plus circle.\
2: Select the newly created task

<img class="block" src="../imgs/state11.jpg" alt="skjfd" width="500"  />

Compile 

<img class="block" src="../imgs/state12.jpg" alt="skjfd" width="500"  />

Open the task, in the *Functions* override the *tick* event

<img class="block" src="../imgs/state12b.jpg" alt="skjfd" width="500"  />

Build a simple print to test if stuff is working. Compile
<img class="block" src="../imgs/state14.jpg" alt="skjfd" width="500"  />

Compile

<img class="block" src="../imgs/state18.jpg" alt="skjfd" width="500"  />

Run game

<img class="block" src="../imgs/state15.jpg" alt="skjfd" width="500"  />

Create a variable for the Actor reference of type Object Ref

<img class="block" src="../imgs/state16.jpg" alt="skjfd" width="500"  />

Be sure to enable the visible option

<img class="block" src="../imgs/state17.jpg" alt="skjfd" width="500"  />

Compile

<img class="block" src="../imgs/state18.jpg" alt="skjfd" width="500"  />

Back in the State Tree in the Detail: Task you should see the blue pill binding icon, select the *actor* 
<img class="block" src="../imgs/state19.jpg" alt="skjfd" width="500"  />

Compile

<img class="block" src="../imgs/state18.jpg" alt="skjfd" width="500"  />

Back in the Task, add something to further test the first state, here we have the most basic of walk. Use the Actor variable from earlier for target as "self" will not work here

<img class="block" src="../imgs/state20.jpg" alt="skjfd" width="700"  />

Compile, run game

<img class="block" src="../imgs/state21.jpg" alt="skjfd" width="700"  />

<br />

---

## Part 2

Add a new state with "Add State" button

<img class="block" src="../imgs/b_state1.jpg" alt="skjfd" width="500"  />

To get the state to be outside of the Root you have to drag it around in the UI 

<img class="block" src="../imgs/b_state2.jpg" alt="skjfd" width="500"  />

Select the new state. Make a new Task like before

<img class="block" src="../imgs/b_state4.jpg" alt="skjfd" width="500"  />
 
Add a print to ready a test

<img class="block" src="../imgs/b_state3.jpg" alt="skjfd" width="500"  />

In the first states Task, note to self, **Finish Task** node allows exiting the state

<img class="block" src="../imgs/b_state5.jpg" alt="skjfd" width="600"  />

Add a condition of any sort to trigger the **Finish task** node. Here we just wait then flip the actor

<img class="block" src="../imgs/b_state6.jpg" alt="skjfd" width="800"  />

In The state tree, with the new state selected, add the task 

<img class="block" src="../imgs/b_state7.jpg" alt="skjfd" width="500"  />

Select the **Root State** then in the TransitionTo drop down select "idle" or whatever you named the other state

<img class="block" src="../imgs/b_state8.jpg" alt="skjfd" width="500"  />

Compile, run

<img class="block" src="../imgs/b_state9.jpg" alt="skjfd" width="500"  />
<img class="block" src="../imgs/b_state9b.jpg" alt="skjfd" width="500"  />


## yay

<!-- ![words](../imgs/state1.jpg){"width":"200"} -->