## React Assignment

1. How can you implement shared functionality across a component tree?
 
   To share functionality across different parts of a component tree, there are a few methods I like to use.

- First, if several components need to use the same piece of data, I’ll move that data up to a common parent component. This way, the data is managed in one place and passed down to the components that need it.

- If many components, even ones that aren't directly connected, need to access the same data or functions, I use the Context API. With this, I can set up shared data at a higher level in the component tree, and any component below it can access that data without having to pass it down manually through every level.


2. Why is the `useState` hook appropriate for handling state in a complex component?

   The useState hook is perfect for managing state in a complex component because it makes it easy to handle and update different pieces of information separately. In a complex component, there can be a lot going on, and useState lets me create individual state variables for each part, which helps keep things organized.

- I like that useState allows me to keep my code simple and clean. Instead of having one big state object that tries to do everything, I can have multiple useState calls, each handling a specific part of the component. This makes it easier to understand and work with the code.

- Also, useState is efficient. When I update a state variable, React only re-renders the parts of the component that need to change, which helps keep the app running smoothly, even in complex scenarios.

- Overall, useState gives me the tools to manage state effectively, making it a great choice for even the most complicated components.



3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
