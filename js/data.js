
// Index Html

//Skills Section
const skillCategories = [
  { title: "Programming Languages", 
    skills: ["C", "C++", "C#", "Java", "Python", "SQL"]},

  { title: "Software Development", 
    skills: ["Data Structures", "Object-Oriented Programming", "Design Patterns"]},

  { title: "Frontend Development", 
    skills: ["HTML", "CSS", "JavaScript", "UI/UX", "WordPress", "Wix"]},

  { title: "Game Development", 
    skills: ["Unity", "C#", "C++", "2D Platformer", "2D Top Down", "Level Design", "Game Design", "Unity Animation", "UI/UX Design", "Heads-Up Display (HUD)"]},

  { title: "AI", 
    skills: ["ChatGPT", "Claude AI", "Prompt Engineering", "Copilot", "AI Agent", "In-Context Learning", "GitHub Copilot", "Google Gemini", "AI-assisted debugging tools"]},

  { title: "Software & Tools", 
    skills: ["Github", "GitKraken", "Visual Studio Code", "Kate Text Editor", "Replit", "Slack", "Word", "PowerPoint", "Excel", "Access", "Outlook"]},

  { title: "Additional Skills", 
    skills: ["Organization", "Time Management", "Data Entry", "Team Collaboration", "Customer Service", "Pallet Jack Operation", "Material Handling"]},
];


//Project
const projects = [

  // Cycle of the Dead
  {
    name: "Cycle of the Dead",
    image: "assets/images/projects/cycle_of_the_dead.png",
    type: "Team Project (3 members)",
    contributors: "Contributors: Jia Xing Luo, Trent Smelich, and one other teammate.",
    links: [
      { label: "GitHub:", url: "https://github.com/trentsmelich/CS-Senior-Project" },
      { label: "YouTube - My Part:", url: "https://www.youtube.com/watch?v=gK8ZnU1qHz0" },
      { label: "YouTube - Full Game:", url: "https://www.youtube.com/watch?v=LF0Ry_1E624" },
    ],

    tags: ["Unity", "C#", "2D Top-Down", "UI/UX Design", "State Machine", "Level Design", "Game Design", "Game Development", "Game Programming", "Heads-Up Display (HUD)", "Visual Studio Code", "GitKraken"],

    description: "Cycle of the Dead (COTD) is a 2D top-down defensive survival game with roguelike elements. Players collect coins to buy defenses and other items from the shop, growing stronger and surviving longer as they defeat waves of enemies. Through this project, I learned the process of developing a top-down game in Unity, including how UI, state machines, Heads-Up Displays (HUDs), keybinding, and visuals are built in game development.",
    
    listTitle: "What I Did",
    list: [
      "Developed the game using the Unity engine, with Visual Studio Code for C# programming and GitKraken for Git version control",
      "Built the main menu and its state machine, along with the level select menu, dynamic background changes, and all menu UI",
      "Implemented a character selection system with unlock requirements, plus a codex, an about section, and audio settings in the main menu",
      "Designed the maps and visual environments for all levels, including Levels 1, 2, 3, and the Boss level",
      "Created the in-game Heads-Up Display (HUD) and its pixel art assets, displaying the health bar, XP bar, coin count, enemy count, and elapsed time across all levels",
      "Integrated all music and sound effects throughout the game",
      "Implemented a pause menu with customizable keybinds, along with a Game Over mechanic",
      "Developed the tutorial, story mode, and in-game shop, including their visuals",
      "Implemented a persistent record system tracking the player's longest survival time and highest kill count, with dedicated UI to display both",
      "Programmed enemy behavior and AI for the Wolf and Merman enemies",
    ],
  },

  // Blade of the Beyond
  {
    name: "Blade of the Beyond",
    image: "assets/images/projects/blade_of_the_beyond.png",
    theme: "blue",
    type: "Team Project (3 members)",
    contributors: "Contributors: Jia Xing Luo, Trent Smelich, and one other teammate.",
    links: [
      { label: "YouTube - Full Gameplay:", url: "https://www.youtube.com/watch?v=gxDss0R4Ke4" },
    ],

    tags: ["Unity", "C#", "2D Platformer", "UI/UX Design", "Level Design", "Game Design", "Game Development", "Game Programming", "Heads-Up Display (HUD)", "Visual Studio Code", "GitKraken"],

    description: "Blade of the Beyond is a 2D platformer game in which the player must jump across precise platforms and avoid hazards. As the swordsman, the player defeats enemies encountered in the dungeon and the bosses that appear along the way. Through this project, I learned the process of developing a platformer game in Unity and how UI is built in game development.",
    
    listTitle: "What I Did",
    list: [
      "Developed the game using the Unity engine, with Visual Studio Code for C# programming and GitKraken for Git version control",
      "Programmed the player mechanics, ensuring smooth, responsive, and accurate character movement",
      "Designed and implemented the main menu, pause menu, and audio sliders to provide intuitive interaction with game inputs",
      "Implemented the Heads-Up Display (HUD), including the health bar and ghost recharge indicator",
      "Created the Game Over screen that is triggered when the player loses",
      "Built all user interface elements in the game and programmed the audio system for music and sound effects",
      "Designed all maps, levels, and object animations, with a focus on consistent and polished visuals",
    ],
  },

  // Personal Portfolio
  {
    name: "Personal Portfolio",
    image: "assets/images/projects/portfolio.png",
    theme: "green",
    type: "Individual Project",
    contributors: "Contributor: Jia Xing Luo",
    links: [
      { label: "GitHub:", url: "https://github.com/" },
      { label: "Portfolio URL:" },
    ],

    tags: ["HTML", "CSS", "JavaScript", "Front-end Development", "UI Design", "Visual Studio Code"],

    description: "A personal portfolio website that showcases my bio, skills, best projects, and other background information, built with HTML, CSS, and JavaScript. I designed responsive layouts and interactive user interfaces that look great on desktops, tablets, and phones. I also focused on clean organization, consistent styling, and smooth navigation so visitors can quickly find what they're looking for. Through this project, I learned the fundamentals of front-end web development, including HTML structure, CSS styling, JavaScript interactivity, and UI design principles. It also taught me how to organize a project with a clean file structure, use GitHub to host my project, and deploy a live website.",

    listTitle: "What I Did",
    list: [
      "Developed the portfolio in Visual Studio Code using front-end technologies: HTML, CSS, and JavaScript",
      "Designed a home page with a welcoming hero section to attract visitors, plus intuitive navigation for reaching key sections",
      "Built an About Me section to introduce myself, a Skills section to show what I know, and a Job Experience section to highlight my work history",
      "Created a Projects section that showcases the projects I developed or contributed to, along with all the related details",
      "Designed an Art page to display my collection of artworks, featuring a pop-up window that shows each piece up close along with a description below.",
      "Implemented responsive layouts that adjust the interface automatically as the screen size changes",
      "Added a Contact Me section with a send-message feature that delivers messages directly to my email",
    ],
  },

  // Graphic Reality
  {
    name: "Graphic Reality",
    image: "assets/images/projects/graphic_reality.png",
    theme: "lime",
    type: "Individual Project",
    contributors: "Contributor: Jia Xing Luo",
    links: [
      { label: "YouTube - Full Showcase:", url: "https://www.youtube.com/watch?v=enOmIW_uU7w" },
    ],

    tags: ["HTML", "CSS", "JavaScript", "Front-end Development", "UI Design", "Kate Text Editor"],

    description: "Graphic Reality is a responsive front-end e-commerce prototype featuring product listings, a shopping cart UI, admin portal mockups, and traffic tracking functionality, built with HTML, CSS, and JavaScript. I designed responsive layouts and interactive user interfaces for both customer and admin pages. Through this project, I learned the fundamentals of front-end web development, including HTML, CSS, JavaScript, and UI design.",
    
    listTitle: "What I Did",
    list: [
      "Developed the prototype using Kate Text Editor, building the system with front-end technologies: HTML, CSS, and JavaScript",
      "Designed a landing page with a splash section to attract new users, intuitive navigation controls for accessing key features, and a footer containing copyright and general application information",
      "Built the storefront pages, including a product list page showing all products in the selected category, a product details page with the information needed to make a purchase, and a shopping cart page displaying all added items",
      "Developed admin content management pages, including a bulk upload page for adding all of a product's content to the site and a product edit page for modifying every product feature, including the image",
      "Implemented a unified admin navigation system that allows admins to log out, go to the bulk upload page, or go to the product edit page from anywhere in the admin area (frontend-only, no backend)",
      "Added a customer reviews section to the product details page, allowing visitors to view feedback on each product",
      "Implemented traffic logging with JavaScript on each client page, using XMLHttpRequest and readyState handling to record visits, and built an admin traffic page that displays a log of all visits to each client page",
    ],
  },

  // YouTube Data Analyzer
  {
    name: "YouTube Data Analyzer",
    image: "assets/images/projects/youtube_data_analyzer.png",
    theme: "orange",
    type: "Team Project (3 members)",
    contributors: "Contributors: Jia Xing Luo, Trent Smelich, and one other teammate.",
    links: [
      { label: "YouTube - My Part:", url: "https://www.youtube.com/watch?v=9j16kXQmCoY" },
    ],

    tags: ["Big Data", "Apache Spark", "PySpark", "Python", "YouTube Dataset", "Sorting", "Data Analysis", "Data Transformation", "Trend Analysis", "Visual Studio Code"],

    description: "YouTube Data Analyzer is a data analysis application built with Apache Spark, PySpark, and Python in Visual Studio Code to process and analyze a large-scale YouTube dataset. It uses top-k queries to identify the categories with the highest video upload volume, the highest-rated and most popular videos, as well as other features such as Range Queries and User Identification. Through this project, I learned about Python, data analysis, and Apache Spark.",
    
    listTitle: "What I Did",
    list: [
      "Developed the application in Python using Visual Studio Code, structuring the code in a modular, readable way so queries can be reused or extended for new analyses",
      "Built a data analysis application with Apache Spark and PySpark to process and analyze a large-scale YouTube dataset, leveraging Spark's distributed computing to handle data volumes that would be inefficient for traditional single-machine tools",
      "Implemented top-k queries to identify the video categories with the highest upload volume, revealing which content categories dominate the platform and how video production is distributed across them",
      "Developed queries to discover the highest-rated videos in the dataset, highlighting content with the strongest audience approval independent of raw view counts",
      "Created top-k queries to rank the most popular videos, providing insight into which content attracts the largest audiences and engagement",
      "Designed a data transformation pipeline in PySpark to load, clean, and structure raw YouTube data, then applied aggregation, sorting, and filtering operations to produce accurate and meaningful analytical results",
    ],
  },
  
];


//Art Html

// Artwork Gallery lists
const pixelArtworks = [
  {src: "../assets/images/aseprite/art1.png", title: "Level 1 Button", description: "Made for Cycle of the Dead level select menu."},
  {src: "../assets/images/aseprite/art2.png", title: "Level 2 Button", description: "Made for Cycle of the Dead level select menu."},
  {src: "../assets/images/aseprite/art3.png", title: "Level 3 Button", description: "Made for Cycle of the Dead level select menu."},
  {src: "../assets/images/aseprite/art4.png", title: "Level Boss Button", description: "Made for Cycle of the Dead level select menu."},
  {src: "../assets/images/aseprite/art5.png", title: "Tutorial Button", description: "Made for Cycle of the Dead tutorial."},
  {src: "../assets/images/aseprite/art6.png", title: "Volume Symbol", description: "Made for Cycle of the Dead audio settings."},
  {src: "../assets/images/aseprite/art7.png", title: "Music Note Symbol", description: "Made for Cycle of the Dead audio settings."},
  {src: "../assets/images/aseprite/art8.png", title: "Left Arrow Button", description: "Made for Cycle of the Dead player select."},
  {src: "../assets/images/aseprite/art9.png", title: "Right Arrow Button", description: "Made for Cycle of the Dead player select."},
  {src: "../assets/images/aseprite/art10.png", title: "Close Button", description: "Made for Cycle of the Dead UI."},

  {src: "../assets/images/aseprite/art11.png", title: "Unfilled Health Bar", description: "Made for Cycle of the Dead HUD."},
  {src: "../assets/images/aseprite/art12.png", title: "Unfilled XP Bar", description: "Made for Cycle of the Dead HUD."},
  
  {src: "../assets/images/aseprite/art13.png", title: "Big Panel", description: "Made for Cycle of the Dead UI."},
  {src: "../assets/images/aseprite/art14.png", title: "Big Panel 2", description: "Made for Cycle of the Dead UI."},
  {src: "../assets/images/aseprite/art15.png", title: "Square Panel", description: "Made for Cycle of the Dead UI."},
  {src: "../assets/images/aseprite/art16.png", title: "Square Panel 2", description: "Made for Cycle of the Dead UI."},
  {src: "../assets/images/aseprite/art17.png", title: "Long Vertical Panel", description: "Made for Cycle of the Dead UI."},
  {src: "../assets/images/aseprite/art18.png", title: "Medium Horizontal Panel", description: "Made for Cycle of the Dead UI."},
  {src: "../assets/images/aseprite/art19.png", title: "Story Panel", description: "Made for Cycle of the Dead UI."},
  {src: "../assets/images/aseprite/art20.png", title: "Vertical Panel", description: "Made for Cycle of the Dead UI."},
  {src: "../assets/images/aseprite/art21.png", title: "Vertical Panel 2", description: "Made for Cycle of the Dead UI."},

  {src: "../assets/images/aseprite/art22.png", title: "Cursor", description: "Made for Cycle of the Dead Cursor."},
  {src: "../assets/images/aseprite/art23.png", title: "Red Cursor", description: "Made for Cycle of the Dead Cursor."},
  {src: "../assets/images/aseprite/art24.png", title: "Health Bar", description: "Made for Blade of the Beyond player HUD."},
  {src: "../assets/images/aseprite/art25.png", title: "Slidebar Handle", description: "Made for Cycle of the Dead Slider UI"},
  {src: "../assets/images/aseprite/art26.png", title: "Slidebar Filltrack Filled", description: "Made for Cycle of the Dead Slider UI"},
  {src: "../assets/images/aseprite/art27.png", title: "Slidebar Filltrack Unfilled", description: "Made for Cycle of the Dead Slider UI"},
  {src: "../assets/images/aseprite/art28.png", title: "Cycle of the Dead Game Title", description: "Made for Cycle of the Dead Main Menu"},

];

const digitalArtworks = [
];

const modelArtworks = [
  {src: "../assets/images/blender/Donuts.png", title: "Donuts and Coffee", description: "My first 3D model, made in Blender. It includes donuts, a white plate, and a coffee mug."},
];

const traditionalArtworks = [
  {src: "../assets/images/traditional/art1.jpg", title: "Drawing #01", description: "Practice sketch of an original character, drawn entirely from imagination with a 0.7mm mechanical pencil."},
  {src: "../assets/images/traditional/art2.jpg", title: "Drawing #02", description: "Practice sketch of an original character, drawn entirely from imagination with a 0.7mm mechanical pencil."},
  {src: "../assets/images/traditional/art3.jpg", title: "Drawing #03", description: "Practice sketch of an original character, drawn entirely from imagination with a 0.7mm mechanical pencil."},
  {src: "../assets/images/traditional/art4.jpg", title: "Drawing #04", description: "Practice sketch of an original character, drawn entirely from imagination with a 0.7mm mechanical pencil."},
  {src: "../assets/images/traditional/art5.jpg", title: "Drawing #05", description: "Practice sketch of an original character, drawn entirely from imagination with a 0.7mm mechanical pencil."},

  {src: "../assets/images/traditional/art6.jpg", title: "Drawing #06", description: "Practice sketch of an original character, drawn entirely from imagination with a 0.7mm mechanical pencil."},
  {src: "../assets/images/traditional/art7.jpg", title: "Drawing #07", description: "Practice sketch of an original character, drawn entirely from imagination with a 0.7mm mechanical pencil."},
  {src: "../assets/images/traditional/art8.jpg", title: "Drawing #08", description: "Practice sketch of an original character, drawn entirely from imagination with a 0.7mm mechanical pencil."},
];