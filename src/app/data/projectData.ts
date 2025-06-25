export const projects = {
    "pill-pal": {
        title: "Pill-Pal",
        images: [
            "/images/projects/pillPal/pillPal1.png",
            "/images/projects/pillPal/pillPal2.png",
            "/images/projects/pillPal/pillPal3.png",
            "/images/projects/pillPal/pillPal4.png",
        ],
        problem:
            "Medication non-adherence is a widespread issue, especially among children and elderly individuals. We were tasked with designing a hardware solution that could securely manage medication schedules, prevent accidental overdoses, and ensure only authorized users could access the medication.",
        solution:
            "We developed Pill-Pal, an automatic pill dispenser shaped like a friendly robot. The device uses a fingerprint sensor to authenticate users, LED indicators to signal dosage times, and a rotating servo mechanism to dispense medication. It features a secure locking system to prevent unauthorized access and was built using Arduino components with a focus on safety, usability, and reliability.",
        skills: [
            "Arduino – Prototyping and peripheral control",
            "LVGL graphics library – Designed a user-friendly embedded GUI for displaying schedules and alerts",
            "Fingerprint sensor integration – Biometric authentication with secure access control",
            "Motor control – Programmed servo rotation for timed pill dispensing",
        ],
    },

    "three-trios": {
        title: "Three-Trios",
        images: [
            "/images/projects/threeTrios/threeTrios1.png",
            "/images/projects/threeTrios/threeTrios2.png",
            "/images/projects/threeTrios/threeTrios3.png",
        ],
        problem:
            "We were tasked with designing a strategic, turn-based board game that followed strict object-oriented design principles. The goal was to implement a game system that supported both human and AI players while making design decisions that prioritized scalability, modularity, and clean separation of concerns. This included designing extensible strategies, ensuring testability, and supporting future UI integration.",
        solution:
            "A partner and I built Three Trios, a turn-based board game in Java using the Model-View-Controller (MVC) architecture. The game supports both human and AI players, including multiple strategies such as maximizing flips and prioritizing board positioning. The game logic is modular and extensible, allowing additional strategies and game rules to be added easily. I implemented a graphical user interface for intuitive gameplay and created a suite of unit tests to ensure robust logic and state transitions. We later successfully adapted a classmate’s View code to work with our Model and Controller, reaffirming the modularity and decoupling of our design.",
        skills: [
            "Object-Oriented Design – Applied MVC architecture to cleanly separate logic, control flow, and presentation",
            "Adapter Pattern – Bridged classmates GUI interactions with our controller/model",
            "Data Modeling – Designed ICard, IModel, and board abstractions for scalable game state management",
            "Strategy Pattern – Implemented modular AI strategies such as FlipTheMostStrategy and CornerStrategy",
            "Interface Design – Created both mutable and read-only interfaces to enforce encapsulation and safe access",
            "Test-Driven Development – Wrote unit tests to validate move logic, score calculation, and flip propagation",
            "Recursive Algorithms – Built a directional flip calculation system that propagated effects across the board",

        ],
    },

    "catch-em-all": {
        title: "Catch 'Em All",
        images: [
            "/images/projects/catchEmAll/catchEmAll1.png",
            "/images/projects/catchEmAll/catchEmAll2.png",
            "/images/projects/catchEmAll/catchEmAll3.png",
        ],
        problem:
            "We were tasked with designing a highly portable, interactive museum exhibit for 8–11-year-old students to learn about sustainability in a hands-on and competitive way. The exhibit needed to be engaging, educational, and durable enough for transportation, while promoting collaborative learning and experimentation. We chose the theme of soil biodiversity and aimed to help users understand the impact of soil organisms on environmental and human health.",
        solution:
            "We developed Catch 'Em All, a traveling museum exhibit where students 'catch Pokémon' by building optimal soil ecosystems. Players select from a set of 3D-printed game pieces representing soil components—fungi, bacteria, nutrients, and viruses—each embedded with an RFID tag. When scanned, the piece contributes specific point values to categories like plant growth, environmental protection, and human health, visualized through LED progress bars. The system uses a custom-designed game board, RFID scanning, and Arduino-based logic to provide real-time feedback and interactive storytelling. The final product was showcased at a school and expo event, receiving overwhelmingly positive feedback.",
        skills: [
            "Arduino – Programmed RFID logic and LED output behavior",
            "RFID integration – Connected tagged game pieces to real-time score updates",
            "AutoCAD – Designed laser-cut board layout for game components",
            "3D printing – Modeled and printed custom interactive game pieces",
            "Vinyl wrapping and physical fabrication – Constructed and decorated the exhibit",
            "Collaborative design – Worked within a multi-role team using an engineering design cycle",
            "User experience design – Tailored theming, visuals, and story flow for 8–11-year-olds",
        ],
    },
    "plaitpilot": {
        title: "PlaitPilot",
        images: [
            "/images/projects/plaitPilot/plaitPilot1.jpeg",
            "/images/projects/plaitPilot/plaitPilot2.png",
            "/images/projects/plaitPilot/plaitPilot4.png",
            "/images/projects/plaitPilot/plaitPilot5.jpeg",
            "/images/projects/plaitPilot/plaitPilot6.jpeg",
        ],
        problem:
            "Braiding hair extensions is a time-consuming and error-prone process for both professionals and consumers. Many users struggle to achieve consistency in size and quantity when seperating hair, which impacts efficiency and quality.",
        solution:
            "PlaitPilot is a semi-automated hair extension dispenser built with an ESP32, dual NEMA stepper motors, clamping and advancing belts, and a tactile UI. The device allows users to adjust size and quantity via potentiometers and initiate dispensing with a button. A screen displays settings in real time. Mechanical and electrical subsystems were designed to reduce friction and ensure reliable hair advancement. We also designed a custom PCB in Altium Designer to consolidate key components including the ESP32, motor drivers, USB-to-UART bridge, GPIO expander, and peripheral connectors—optimizing layout, power delivery, and signal integrity. On the sotfware side, we designed a state machine in C to manage the different stages of the userflow, including collecting user input, driving motors, and collecting sensor data.",
        skills: [
            "Embedded C (ESP32) – Programmed microcontroller firmware for device logic",
            "LVGL graphics library – Designed and implemented touchscreen interface",
            "PCB Design (Altium Designer) – Created schematic and board layout for custom PCB",
            "I2C/SPI Communication – Enabled communication between fingerprint sensor, display, and microcontroller",
            "Component Selection – Researched and sourced compatible electrical/mechanical components",
            "Cross-Functional Collaboration – Worked with ME/EE team to co-design enclosure and board fit",
        ]
    },

    "saa": {
        title: "Study Abroad Advisor",
        images: [
            "/images/projects/saa/saa1.png",
            "/images/projects/saa/saa2.JPG",
            "/images/projects/saa/saa3.JPG",
            "/images/projects/saa/saa4.png",
        ],
        problem:
            "Students often struggle to identify which study abroad courses will transfer back as equivalent Northeastern courses. The lack of a centralized, user-friendly platform makes it difficult to search by region, university, or course equivalency, leading to confusion and missed opportunities.",
        solution:
            "We built a full-stack web application that allows Northeastern students to search, compare, and favorite study abroad courses by host university, region, or NU course code. I led the backend development, creating a robust RESTful API using Java and Javalin, and integrated it with a React frontend. The backend fetches and filters data from a MongoDB database, supports user authentication, and returns real-time JSON responses. Users can log in, save courses, and view grouped results by university with full session support.",
        skills: [
            "Java (Javalin) – Built 25+ RESTful API endpoints",
            "MongoDB – Schema design, queries, and aggregation pipelines",
            "Data Modeling – Designed User, University, and Course model classes/interfaces",
            "Error Handling – Implemented structured error responses with HTTP status codes",
            "Data Cleaning – Reformatted and standardized raw datasets into a unified schema for querying",
        ]
    }

};
