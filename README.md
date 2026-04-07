# ITT-Training
This repository contains my daily learning of JavaScript and TypeScript.
 

---
### Week 1 Learning

### Day 1: JavaScript Fundamentals

* Learned different types of variables (`var`, `let`, `const`) and their scope differences
* Understood basic data types such as string, number, boolean, null, and undefined
* Practiced operators including arithmetic, assignment, comparison, and logical operators
* Implemented control flow statements like if-else, switch, and ternary operator
* Worked with loops such as for, while, do...while, and for...of

---

### Day 2: Functions & Data Structures

* Learned different types of functions: declaration, expression, and arrow functions
* Understood parameters and return values in functions
* Worked with arrays and methods like push, pop, map, and filter
* Explored objects including properties, methods, and nested objects
* Learned ES6 features such as destructuring, template literals, and spread/rest operators

---

### Day 3: DOM Manipulation & Events

* Learned how to select elements using `getElementById` and `querySelector`
* Modified DOM elements using `innerText`, `innerHTML`, `style`, and `classList`
* Implemented event handling such as click and input events
* Created and added elements dynamically using JavaScript
* Understood how to connect TypeScript with browser by compiling `.ts` to `.js`

---

### Day 4: Advanced JavaScript (ES6+)

* Understood scope (global, function, and block scope) and variable behavior
* Learned closures and lexical environment
* Practiced advanced array methods like reduce, find, some, and every
* Understood callback functions and their usage
* Used arrow functions for cleaner and shorter syntax
* Learned optional chaining for safe property access and nullish coalescing for default values

---

### Day 5: Asynchronous JavaScript

* Understood difference between synchronous and asynchronous execution
* Learned `setTimeout` and `setInterval` for delayed and repeated execution
* Worked with Promises using `then` and `catch`
* Used `async/await` for cleaner asynchronous code
* Learned how to fetch data using Fetch API
* Implemented error handling using try...catch

---

### Goal

To build strong fundamentals in JavaScript and TypeScript and apply them in real-world projects.

---

### Week 2 Learning

### I am learning this concepts by building a projects.

### Week 1 – React Basics (Used in Project)

### 🔹 Vite Setup

Project is created using Vite for fast development and simple setup.

### 🔹 JSX & Rendering

Used JSX to create UI like Navbar, FoodCard, Cart and Favorites pages.

### 🔹 Components

Created reusable components:

* Navbar
* FoodCard
* Pages (Home, Cart, Favorites)

### 🔹 Props

Used props to pass data and functions between components
Example: passing food data and addToCart function to FoodCard

### 🔹 Component Composition

Used components inside other components
Example: Home → FoodCard

### 🔹 useState

Used useState to manage:

* Cart items
* Favorite items
* Popup message
* Page track

### 🔹 Event Handling

Used events like:

* onClick → Add to cart / Favorite

### 🔹 Rendering List (map)

Used map() to display multiple food items dynamically.

### 🔹 Keys

Used key={food.id} for each item to help React identify elements.

### 🔹 Conditional Rendering

Used:

* && → show “Added to cart” message

---

### Week 2 – Hooks, Context & Performance (Used in Project)

### 🔹 useEffect

Used to perform side effects
Example: log message when item is added

### 🔹 useRef

Used to store click count without re-render

### 🔹 Prop Drilling

Passed data (cart, favorites) from App → Home → FoodCard using props

### 🔹 Tailwind CSS

Used Tailwind for styling:

* Navbar design
* Food cards
* Responsive layout

---

###  Week 3 – Routing

### 🔹 What I Learned

* Implemented basic routing using BrowserRouter, Routes, Route
* Used Link for navigation without page reload
* Used useNavigate for programmatic navigation (e.g., after login)

### 🔹 Nested Routing

* Learned how to create a Layout component with Navbar
* Used Outlet to render child pages (Home, Cart, Favorites)

### 🔹 Route Params & Query Strings

* Used useParams() to get dynamic values from URL (e.g., food details page)
* Used useSearchParams() to implement search functionality (`?search=pizza`)

### 🔹 Data Fetching

* Used Fetch API / Axios to get food data from API
* Handled loading and error states for better user experience

### 🔹 Cleanup

* Learned AbortController to cancel API calls when component unmounts

### 🔹 useEffect Best Practices

* Used dependency array correctly
* Avoided unnecessary re-renders

---

###  Week 4 – State Management

### 🔹 Redux Toolkit Basics

* Created slice for cart management
* Used store to manage global state
* Used dispatch to update state (add/remove items)
* Used useSelector to access state in components

 Implemented Redux in my project to manage cart and favorites globally (avoiding prop drilling)

---

### 🔹 React Toolkit Query (RTK Query)

* Used RTK Query for API calls instead of useEffect
* Learned:

  *  Caching (avoids repeated API calls)
  *  Loading & error handling
  *  Automatic data fetching

 Replaced manual fetch logic with RTK Query in Home page

---

### 🔹 Context vs Redux

* Context is good for small apps (theme, auth)
* Redux is better for large apps with complex state

 Used Redux in my project for better scalability

---

### 🔹 Render Props

* Learned pattern to share logic using functions as props

---

### 🔹 Higher-Order Components (HOCs)

* Learned how to wrap components to reuse logic

---

### 🔹 Compound Components

* Learned how multiple components work together (like parent-child UI pattern)

---

### 🔹 Controlled vs Uncontrolled Components

* Controlled → managed by React state (used in login & search input)
* Uncontrolled → managed by DOM (using refs)

---


#  Key Features

* Display food items in card layout
* Add to cart functionality
* Favorite items feature
* Popup message on add
* Popup message on favorite
* Responsive UI using Tailwind
* Icons using react-icons
* Built routing system with protected routes (login-based access)
* Implemented global state using Redux Toolkit
* Used RTK Query for efficient API handling
* Improved application performance and structure

---

# 📌 Conclusion

This project helped in understanding core React concepts like components, props, state management, hooks, and UI design in a simple and practical way.
