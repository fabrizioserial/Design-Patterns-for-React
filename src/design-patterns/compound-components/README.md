# Compound Components Pattern

Compound components are just a set of components that belong to each other and work great together.
This pattern is useful when you have a component which can be compound by different inner components. The most famous
example is a Card because you can have in a same page, various kind of cards: with image, without image, 
with action buttons, etc. 

### Pros
- The external component will not receive all the props that need to work
- Can support multiple versions of the component
- It meets some Solid principles for example OPEN-CLOSE
- If the component has some internal states with ContextApi you can create a state manager inside the component
- Prop drill disappear

### Cons
- The component file is long
- You have to create a new micro-component when try to support a new version
- If you need to share a prop with some components, you must to use ContextAPI or any state manager library



