# SOLUTION : Single Responsibility Principle

Here we can see that we split the problem in different files. The idea is that we can split the component depending on
the responsibilities that we recognize, trying to leave each file with one responsibility

```md
|
|--> api
| |--> index.ts
|
|--> components
| |--> RocketCard
| | |--> index.tsx
| |
| |--> RocketList
| | |--> index.tsx
|
|--> styles.tsx
|
|--> types.ts
|
|--> index.tsx
```

### `api/index.ts`

In this file we will contain the fetching of the data. We are using axios, so this is an optional file, because we can
use Redux RKT, useQuery, Apollo or another fetch technology.
Later we will see some patterns where we can improve the fetching of the data

### `components/RocketCard/index.tsx`

This component has the responsibility of render the items that contains

### `components/RocketList/index.tsx`

This component has the responsibility of render a list of items that get from getRockets

### `styles.tsx`

This file contains the styled-components used in `/components`

### `types.ts`

This file contains the types

### `index.tsx`

This file contains the Header and the RocketList to render
