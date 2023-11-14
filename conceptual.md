### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router simplifies the process of handling navigation and routing in React applications

- What is a single page application?
A Single Page Application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server

- What are some differences between client side and server side routing?
Client-side routing handles navigation within the browser, updating content dynamically without full page reloads, providing faster user interactions. Server-side routing triggers full page reloads with each navigation request, leading to slower transitions and initial page loads.

- What are two ways of handling redirects with React Router? When would you use each?
Declarative redirects involve using the Redirect component provided by React Router. You define a Redirect component within your route configuration, specifying the destination URL.

Imperative redirects involve using the history object provided by React Router to programmatically navigate to a different URL. You can access the history object through the useHistory hook or the withRouter higher-order component.

- What are two different ways to handle page-not-found user experiences using React Router? 
Use the catch-all <Route> approach when you want a straightforward way to handle all unmatched routes uniformly with a single not-found component.
Use the <Redirect> approach when you want more control over the redirect behavior or need to customize the not-found page.

- How do you grab URL parameters from within a component using React Router?
In React Router, you can grab URL parameters from within a component using the useParams hook. This hook provides access to the parameters defined in the route.

- What is context in React? When would you use it?
In React, context is a feature that allows you to pass data down through the component tree without having to pass props manually at every level. It's a way to share values, such as a theme, authentication status, or any other data that needs to be accessible by multiple components.

- Describe some differences between class-based components and function components in React.
Class-based Components: Uses the class syntax, Manages state with this.state and lifecycle methods, More verbose, 

Function Components (with Hooks): Uses function syntax, Manages state with useState and side effects with useEffect, More concise and modern.

- What are some of the problems that hooks were designed to solve?
hooks were designed to simplify the development of React components, promote code reuse, and address common pain points associated with class components. They provide a more functional and declarative approach to building components, improving the overall developer experience in React.