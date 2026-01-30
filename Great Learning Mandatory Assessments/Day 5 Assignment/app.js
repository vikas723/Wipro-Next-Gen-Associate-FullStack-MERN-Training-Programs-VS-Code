/**
 * AppModule
 * ----------
 * This module handles:
 * 1. Fetching blog posts from an API
 * 2. Fetching todo items from an API
 * 3. Displaying the data on the web page
 * 4. Handling errors gracefully
 * 
 * Design Pattern Used: Module Pattern
 * Reason: Avoids global variables and improves code organization
 */
const AppModule = (function () {

    /* =========================================================
       API ENDPOINTS (Task 1 & Task 2)
       ========================================================= */

    // URL to fetch blog posts
    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

    // URL to fetch todo items
    const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";


    /* =========================================================
       DOM ELEMENT REFERENCES
       ========================================================= */

    // Container where blog posts will be displayed
    const postsContainer = document.getElementById("posts");

    // Container where todo items will be displayed
    const todosContainer = document.getElementById("todos");

    // Element to display post-related errors
    const postsError = document.getElementById("postsError");

    // Element to display todo-related errors
    const todosError = document.getElementById("todosError");


    /* =========================================================
       TASK 1: FETCH AND DISPLAY POSTS
       ========================================================= */

    /**
     * fetchPosts
     * ----------
     * Fetches blog posts from the Posts API
     * Handles API errors and network failures
     */
    async function fetchPosts() {
        try {
            // Send request to posts API
            const response = await fetch(POSTS_URL);

            // Check if HTTP response is successful
            if (!response.ok) {
                throw new Error("Unable to load blog posts");
            }

            // Convert JSON response to JavaScript object
            const posts = await response.json();

            // Display only first 5 posts for better UI
            displayPosts(posts.slice(0, 5));

        } catch (error) {
            // Display error message to the user
            postsError.textContent = error.message;
        }
    }


    /* =========================================================
       TASK 2: FETCH AND DISPLAY TODOS
       ========================================================= */

    /**
     * fetchTodos
     * ----------
     * Fetches todo items from the Todos API
     * Handles API errors and network failures
     */
    async function fetchTodos() {
        try {
            // Send request to todos API
            const response = await fetch(TODOS_URL);

            // Check if HTTP response is successful
            if (!response.ok) {
                throw new Error("Unable to load todo list");
            }

            // Convert JSON response to JavaScript object
            const todos = await response.json();

            // Display only first 5 todos
            displayTodos(todos.slice(0, 5));

        } catch (error) {
            // Display error message to the user
            todosError.textContent = error.message;
        }
    }


    /* =========================================================
       DISPLAY POSTS (DOM MANIPULATION)
       ========================================================= */

    /**
     * displayPosts
     * ------------
     * Dynamically creates HTML elements to display blog posts
     * @param {Array} posts - Array of post objects
     */
    function displayPosts(posts) {
        // Clear existing content to avoid duplicates
        postsContainer.innerHTML = "";

        // Loop through each post
        posts.forEach(post => {
            // Create a container for each post
            const div = document.createElement("div");
            div.className = "post";

            // Insert post title and body
            div.innerHTML = `
                <strong>${post.title}</strong>
                <p>${post.body}</p>
            `;

            // Append post to the posts container
            postsContainer.appendChild(div);
        });
    }


    /* =========================================================
       DISPLAY TODOS (DOM MANIPULATION)
       ========================================================= */

    /**
     * displayTodos
     * ------------
     * Dynamically creates HTML elements to display todo items
     * @param {Array} todos - Array of todo objects
     */
    function displayTodos(todos) {
        // Clear existing content to avoid duplicates
        todosContainer.innerHTML = "";

        // Loop through each todo item
        todos.forEach(todo => {
            // Create a container for each todo
            const div = document.createElement("div");

            // Add 'completed' class if todo is finished
            div.className = `todo ${todo.completed ? "completed" : ""}`;

            // Display todo title
            div.textContent = todo.title;

            // Append todo to the todos container
            todosContainer.appendChild(div);
        });
    }


    /* =========================================================
       TASK 5: INTEGRATION & INITIALIZATION
       ========================================================= */

    /**
     * init
     * ----
     * Entry point of the application
     * Calls all required functions when the app starts
     */
    function init() {
        fetchPosts();
        fetchTodos();
    }


    /* =========================================================
       PUBLIC METHODS (MODULE PATTERN)
       ========================================================= */

    // Expose only init() to the outside world
    return {
        init
    };

})();

/* =========================================================
   APPLICATION START
   ========================================================= */

// Initialize the application
AppModule.init();
