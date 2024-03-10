### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a powerfull library that designed to implement dynamic routing React Apps. 
A few of the main features of React Router are:
  Manages Navigation: React Router enables seamless nav between diffrent componets of your application without requiring full page reloads. We use this to create singe page applications. Known as SPA.

  URL Synch: It keeps that UI of your react app in sync with the browswer URL. This means when the URL changes, React Router will render the correct components and views.

  Componenet-Based Routing: React Router adopts a component-based approach to routing. You define routes that map to sepecific React Componenets, making it easy to manage the structural layout and navigation logic of your app.





- What is a single page application?
An SPA is a type of web applications that delivers a much more fluid and responsive user experience.
An SPA will load a single HTML page that contains all the necessary JS and CSS files, and then dynamically loads additional HTML and CSS files as the user navigates through the application. 




- What are some differences between client side and server side routing?
    Client-Side: Provies a smoother, more app-like experience. with fast transitions between views. However, the inital load may be slower due to downloading the entire app bundle.
    Requires careful management of application state since the browser handles mnost of the logic. This can add complexitty to your application.
    Requires extra attention to ensure search engines can properly index your dynamic content (using techniques like pre-rendering or server-side rendering).


    Server-Side: Results in faster inital page loads, but navigating between pages leads to full page refreshers, which can feel less fluid.
    Simpler to set up at the start as the server handles routing logic directly.
    Content is readily available for search engine crawlers to index.





- What are two ways of handling redirects with React Router? When would you use each?
  The Navigate Component is the recommeneded approach for most redirect scenarios. We use it declartively within JSX. Upon rendering it immediately redirects the user to the new location.
  We use this for conditional redirects or when we need to replace the current history entry.

  The useNavigate hook is provides a navigate function for programmtically triggering navigation.
  We use this because it is more flexible for redirects tiggered by events or where logic dictates the redirect target. 


- What are two different ways to handle page-not-found user experiences using React Router? 
  WildCard Route Matching:
          Approach: We leverage the4 '*' wildcard character in a Route elements path prop to catch any unmatched URLS.
          Placement: We place this route as the last route in our Router.

  Leveraging useRoute:
          Approach: The useRoutes hook allows for more custom route config. We can conditionally create a catch all route if none of ther defined routes match.
          Flexiblity: Gives us more control over the 404 handling logic.



- How do you grab URL parameters from within a component using React Router?
React Router provides a useParams hook specifically for accessing URL parameters within your components.
Here is an example of how you would use it:
  Define URL Parameters: In our route config we include dynamic segments within the path, prop, indicated by a : prefix.
  Import: useParams: Import the hook from react-router-dom.
  Access Params: Inside the componet rendered by the route, call the userParams hook. This returns an object containig the URL parameters as the key-value-pairs.



- What is context in React? When would you use it?
React Context provides a way to share data across components without manually passing props down through multiple levels of your component tree.  
What it does:
Global State (Within a Subtree): Context lets you create a centralized data store accessible to a specific section of your component hierarchy.
Avoids 'Prop Drilling': This prevents passing the same data through many intermediate components that don't directly need it.

When to use it:
Moderately Frequent Updates: Use Context for data that changes reasonably often and needs to be accessed by several components.
Global Theming: Apply app-wide styles or preferences.
User Authentication: Manage user login state and data.



- Describe some differences between class-based components and function
  components in React.
  Class-based components: Defined as JavaScript classes extending React.Component. They require the implementation of a render method. Handles internal state using this.state and have access to lifecycle methods like componentDidMount for side effects and interactions with the component's lifecycle.
  Class-based components often involve more boilerplate code due to their class-based structure.



  Functional components: Simple JavaScript functions that take props as input and return JSX describing the UI. Functional components traditionally were "stateless", but with the introduction of React Hooks (such as useState and useEffect), they can now effectively manage state and side effects. Functional components are generally more concise and easier to read because of their focus on rendering UI based on data.




- What are some of the problems that hooks were designed to solve?
Hooks were designed to solve the following problems:
    Wrapper Hell: In complex class-bassed applications, componets often ended ip nested within multiple layeres of HOCs or render props to share resualbe logic.
    Giant, Complex Components: Class Components tended to grow to large handling multiple concerns. This made it difficult to reason about and test as well as reuse portions of  the logic. 
    Confusing Classes: JS classes, with concepts like this binding, were a frequent source of confusion, especially for developers less familar with object-orients patterns. 

How Hooks Help:
    Logic Encapsulation and Reuse: Hooks let you extract stateful logic and side effects into self-contained, reusable functions, independent of the component hierarchy.
    Cleaner Composition: Hooks promote a simpler, more compositional approach, making code easier to understand and reason about.
    Better Testing: Hook-based logic is easier to write unit tests for.
