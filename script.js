const topics = {
  "HTML Basics": [
    { q: "What is HTML?", a: "HTML (HyperText Markup Language) structures web page content." },
    { q: "What are HTML tags and elements?", a: "Tags (like <p>) define elements (opening, content, closing)." },
    { q: "Describe the basic structure of an HTML document.", a: "<!DOCTYPE html><html><head><title>...</title></head><body>...</body></html>" },
    { q: "Block-level vs inline elements?", a: "Block-level (e.g., <div>) start on new lines; inline (e.g., <span>) do not." },
    { q: "How do you add a hyperlink?", a: '<a href="https://example.com">Link</a>' },
    { q: "Purpose of alt in <img>?", a: "Provides text if image fails or for screen-readers." },
    { q: "How to create a form?", a: '<form action="/submit" method="post"><input>…<button>Submit</button></form>' },
    { q: "How to add a comment?", a: "<!-- This is a comment -->" },
    { q: "What are semantic HTML elements?", a: "Tags with meaning, e.g., <header>, <article>, <footer>." },
    { q: "What’s new in HTML5 vs HTML4?", a: "Introduced semantic tags, audio/video, canvas, and new input types." }
  ],
  "CSS Fundamentals": [
    { q: "What is CSS?", a: "Cascading Style Sheets, used to style HTML content." },
    { q: "Why use CSS?", a: "Separates style from content, improves maintainability." },
    { q: "What is the Box Model?", a: "Content + padding + border + margin." },
    { q: "Ways to include CSS?", a: "Inline, internal (<style>), external (.css file)." },
    { q: "class vs id selectors?", a: ". targets groups; # targets a unique element." },
    { q: "What are pseudo-classes?", a: "Special states, e.g., :hover, :first-child." },
    { q: "Position values: relative, absolute, fixed, sticky?", a: "Relative = shifted in flow; absolute = removed; fixed = viewport-bound; sticky = toggles." },
    { q: "Difference between Flexbox and Grid?", a: "Flexbox = 1D layouts; Grid = 2D layouts." },
    { q: "Explain z-index.", a: "Sets stacking order of positioned elements." },
    { q: "What are media queries?", a: "Apply CSS rules based on screen size or features." }
  ],
  "JavaScript Essentials": [
    { q: "What is JavaScript?", a: "Client-side scripting language for interactivity." },
    { q: "Primitive data types?", a: "Number, String, Boolean, null, undefined, Symbol, BigInt." },
    { q: "Difference: var vs let vs const?", a: "var = function-scoped; let/const = block-scoped; const cannot change." },
    { q: "Explain a callback function.", a: "A function passed to another to run later." },
    { q: "== vs ===?", a: "== does type conversion; === checks value and type." },
    { q: "What is a closure?", a: "Inner function with access to outer scope’s variables." },
    { q: "setTimeout vs setInterval?", a: "Timeout = one-time delay; interval = repeated." },
    { q: "What is event delegation?", a: "Single listener on parent handles children’s events." },
    { q: "Explain hoisting.", a: "Variables/functions moved to top of scope before execution." },
    { q: "What is the this keyword?", a: "Context of the current invocation (varies by call type)." }
  ],
  "Data Structures": [
    { q: "Array vs Linked List?", a: "Arrays = contiguous storage; linked lists = nodes + pointers." },
    { q: "What is a stack?", a: "LIFO — Last In First Out, like plates." },
    { q: "What is a queue?", a: "FIFO — First In First Out, like line at ticket counter." },
    { q: "Operations: push, pop, enqueue, dequeue?", a: "Push/pop = stack; enqueue/dequeue = queue." },
    { q: "Time complexity of search?", a: "Linear = O(n); binary = O(log n)." },
    { q: "What is a hash table?", a: "Maps keys to values via a hash function." },
    { q: "What is a tree?", a: "Hierarchical structure: nodes with child links." },
    { q: "What is a binary tree?", a: "Each node has up to two children." },
    { q: "Difference: stack vs queue?", a: "Stack = LIFO; queue = FIFO." },
    { q: "What is a graph?", a: "Nodes (vertices) connected by edges, used for networks." }
  ],
  "Algorithms": [
    { q: "Bubble Sort?", a: "Repeatedly swap adjacent out-of-order elements." },
    { q: "Insertion Sort?", a: "Build sorted section one element at a time." },
    { q: "Time complexity of sorts?", a: "Bubble/Insertion = O(n²); Merge/Quick = O(n log n)." },
    { q: "Linear vs Binary Search?", a: "Linear = O(n); binary (sorted data) = O(log n)." },
    { q: "What is recursion?", a: "A function that calls itself with smaller input." },
    { q: "Example: factorial function?", a: "f(n) = n * f(n - 1), base case at n=1." },
    { q: "What is a greedy algorithm?", a: "Makes locally optimal choices." },
    { q: "What is dynamic programming?", a: "Breaks problems into overlapping subproblems." },
    { q: "Reverse a string algorithm?", a: "Swap characters symmetrically or use built-in methods." },
    { q: "Detect palindrome?", a: "Compare string to its reverse." }
  ],
  "Object-Oriented Programming": [
    { q: "What is a class?", a: "Blueprint for creating objects." },
    { q: "What is an object?", a: "Instance of a class with specific data." },
    { q: "Four OOP pillars?", a: "Encapsulation, Inheritance, Polymorphism, Abstraction." },
    { q: "What is inheritance?", a: "Child class inherits properties from parent." },
    { q: "What is polymorphism?", a: "One interface, multiple implementations." },
    { q: "What is encapsulation?", a: "Bundle data and methods, restrict direct access." },
    { q: "What is abstraction?", a: "Hide implementation details and show functionalities." },
    { q: "What is method overloading?", a: "Same method name, different parameters." },
    { q: "What is method overriding?", a: "Child class redefines parent class method." },
    { q: "What are access modifiers?", a: "public, private, and protected, to control visibility." }
  ],
  "Database Basics (SQL)": [
    { q: "What is SQL?", a: "Language to manage relational databases." },
    { q: "SELECT vs SELECT DISTINCT?", a: "DISTINCT removes duplicate rows." },
    { q: "What is a primary key?", a: "Unique identifier in a table." },
    { q: "What is a foreign key?", a: "Refers to primary key in another table." },
    { q: "JOIN types?", a: "INNER, LEFT, RIGHT, FULL joins tables on columns." },
    { q: "Difference: WHERE vs HAVING?", a: "WHERE filters rows; HAVING filters after grouping." },
    { q: "What is normalization?", a: "Organize data to reduce redundancy." },
    { q: "What is an index?", a: "Speeds up queries at cost of extra storage." },
    { q: "What is GROUP BY?", a: "Aggregates rows with same values in specified columns." },
    { q: "What is ORDER BY?", a: "Sorts query results by specified columns." }
  ],
  "Operating System Basics": [
    { q: "What is an OS?", a: "Software that manages hardware and software resources." },
    { q: "Process vs Thread?", a: "Processes are independent; threads share memory." },
    { q: "What is scheduling?", a: "Deciding which process runs next." },
    { q: "Common scheduling algorithms?", a: "FCFS, SJF, Round Robin, Priority." },
    { q: "What is deadlock?", a: "Processes waiting indefinitely for each other." },
    { q: "What is virtual memory?", a: "Using disk to extend RAM." },
    { q: "What is paging?", a: "Divides memory into blocks for efficient use." },
    { q: "What is segmentation?", a: "Divides memory into logical segments." },
    { q: "What is context switching?", a: "Saving/restoring process states during switches." },
    { q: "What are system calls?", a: "Interface for applications to request OS services." }
  ],
  "Computer Networks (Basics)": [
    { q: "What is IP address?", a: "Unique identifier for network devices." },
    { q: "HTTP vs HTTPS?", a: "HTTPS is secure (encrypted)." },
    { q: "What is DNS?", a: "Translates domain names into IPs." },
    { q: "OSI model layers?", a: "7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application." },
    { q: "TCP vs UDP?", a: "TCP = reliable; UDP = fast, no guarantee." },
    { q: "What is a router?", a: "Routes packets between networks." },
    { q: "What is LAN vs WAN?", a: "LAN is local; WAN spans larger areas." },
    { q: "What is a MAC address?", a: "Hardware identifier for network interfaces." },
    { q: "What is subnetting?", a: "Dividing networks into smaller subnets." },
    { q: "What is a VPN?", a: "Secure remote connection over public networks." }
  ],
  "Aptitude & Logic Building": [
    { q: "Train at 60 km/h covers 90 km in?", a: "1.5 hours." },
    { q: "Next in 2,4,8,16…?", a: "32." },
    { q: "2 eggs, 100 floors—find critical floor?", a: "Use optimized testing (e.g., binary strategy)." },
    { q: "3 pens cost ₹45. Price of 7?", a: "₹105." },
    { q: "Man faces north, R,R,L turns — ends facing?", a: "East." },
    { q: "If x+2=5, x=?", a: "3." },
    { q: "5,7,9,11,... next?", a: "13." },
    { q: "Sum of 1-10?", a: "55." },
    { q: "What is 15% of 200?", a: "30." },
    { q: "Is 101 prime?", a: "Yes." }
  ]
};

function loadTopic(topic) {
  const flashcardsSection = document.getElementById("flashcards-section");
  const topicSection = document.getElementById("topic-section");
  const container = document.getElementById("flashcards-container");

  container.innerHTML = "";
  topics[topic].forEach(({ q, a }) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const question = document.createElement("p");
    question.innerText = q;

    const answer = document.createElement("div");
    answer.className = "answer";
    answer.innerText = a;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "show-btn";
    toggleBtn.innerText = "Show Answer";
    toggleBtn.onclick = () => {
      answer.style.display = answer.style.display === "block" ? "none" : "block";
      toggleBtn.innerText = answer.style.display === "block" ? "Hide Answer" : "Show Answer";
    };

    card.appendChild(question);
    card.appendChild(answer);
    card.appendChild(toggleBtn);

    container.appendChild(card);
  });

  topicSection.style.display = "none";
  flashcardsSection.style.display = "block";
}

function goBack() {
  document.getElementById("flashcards-section").style.display = "none";
  document.getElementById("topic-section").style.display = "grid";
}

document.getElementById("modeSwitch").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});
