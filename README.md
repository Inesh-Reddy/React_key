## React Key

Let's learn this by doing:

Let's create a simple todo that renders 3 todos

- create a todo component that accepts title, component as input.
- Initialise a state array that has 3 todos.
- Iterate over the array to render all todos.
- A button in the  top level app component to add todo.


    - Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
    - The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys.
    - When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort.
