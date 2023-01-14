# Hook Pattern

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
At the same time, it introduces a new way to write components and became one of the most famous patterns in React.

## How this pattern works?

The Hook pattern is a way to reuse stateful logic between components. It's a way to share logic between components without using the render props or the HOC pattern.
Exists a lot of hooks, but the most famous are the useState, useEffect, useContext, useReducer, useRef, useImperativeHandle, useLayoutEffect, useCallback, useMemo, useDebugValue.

## Custom Hook

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. For example, useState is a Hook that lets us add React state to function components.
In this example there are two customs hooks, useDebounce and useGetLaunchByNameQuery. Both contains a logic that can be reused in other components. The useDebounce hook is used to debounce the search input, and the useGetLaunchByNameQuery is used to fetch the data from the API.

Hooks are being call inside a component and can receive parameters. In this example, the useDebounce hook receives the value and the delay as parameters, and the useGetLaunchByNameQuery receives the name as parameter. And usually it returns the value that we want to use in the component.

## Is always a good idea to use Hooks?

Yes and No. Hooks are a new way to write components, but his main purpose is to reuse logic between components. If you don't have any logic to reuse, you don't need to use Hooks. But if other is the case, you can use Hooks to reuse code.