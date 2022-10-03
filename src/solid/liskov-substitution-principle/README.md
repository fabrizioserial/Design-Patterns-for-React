# Liskov Substitution Principle

This principle says that if we have a class B that extends A, we will be able to replace B where we're using A.
React is not an object-oriented framework because it’s basically JavaScript. In the context of React, 
the main idea behind this principle is “Components should abide by some kind of contract.”
At its core, this means there should be some kind of contract between components. 
So whenever a component uses another component, it shouldn’t break its functionality (or create any surprises).
