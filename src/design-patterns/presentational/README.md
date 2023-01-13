# Presentational Pattern

This pattern is used to separate the presentational logic from the business logic. It's a good practice to separate the logic of the components in two parts, the presentational and the container. 

**Presentational Components**: Components that care about how data is shown to the user. In this example, that's the rendering the list of dog images.

**Container Components**: Components that care about what data is shown to the user. In this example, that's fetching the dog images.

## Module

In components folder we have 2 components inside, one is Card and the other one is CardContainer.
The Card is a presentational component that handles the styling, while the CardContainer is a container component that handles data fetching and passing it to the presentational component. The Card does not contain any logic, it is purely presentational.

_Notes:_
- _The `api` folder contains a file that mocks the response__

## Still being an option in 2023?

Nowadays, after React 16, with the introduction of Hooks, this patter became to lose its importance. The main reason is that with Hooks, we can have all the logic in the same component, and we don't need to separate the logic in two components.
Anyway this pattern is still being used in some projects, and it's a good practice to know it.
My recommendation is that if you are starting a new project, you can use this pattern, but if you are working in a project that already has a lot of components, you can keep using it, but you can also start using Hooks in the new components.

## Pros

The **Container/Presentational** pattern is a useful approach that offers many advantages. It separates the responsibilities of different components in the application, with presentation components focused on the UI and container components handling state and data. This makes it easy to keep different aspects of the application separate and maintain a clear structure. Additionally, by keeping presentation components as pure functions, they can be easily reused throughout the application and modified without affecting the underlying logic. These components can also be easily tested, as their behavior is predictable based on the input data.

## Cons

The **Container/Presentational** pattern allows for clear separation between the logic that governs the application and the logic that handles rendering. However, with the use of Hooks, it is now possible to achieve the same separation without having to rely on the Container/Presentational pattern or convert stateless functional components into class components. This means you can use state without having to use class components.

