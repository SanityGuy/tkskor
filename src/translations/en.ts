const en = {
    navbar: {
        home: "Home",
        calculator: "Calculator",
        about: "About",
    },

    home: {
        label: "TKA / TKAD SCORE",
        title: "Calculate your score.",
        description: "Get an estimated TKA or TKAD score based on your entered results.",
        button: "Calculate your score",
        howItWorks: "How it works",
        steps: {
            enter: {
                title: "Enter your scores",
                description: "Enter the scores you received for each required subject.",
            },
            choose: {
                title: "Choose your calculation",
                description: "Select TKA or enable TKAD when applicable.",
            },
            calculate: {
                title: "Get your result",
                description: "See your estimated score and calculation breakdown.",
            },
        },
    },

    calculator: {
        label: "SCORE CALCULATOR",

        title: "Calculate your score.",

        description:
            "Enter your TKA, TKAD, and report card scores to calculate your estimated result.",

        tkaDescription:
            "Enter your TKA scores.",

        rapotTitle:
            "Report Card Average",

        rapotDescription:
            "Enter the average of your report card scores.",

        tkadToggle:
            "Include TKAD",

        tkadDescription:
            "TKAD is currently applicable only in Yogyakarta.",

        tkadScoresDescription:
            "Enter your TKAD scores.",

        calculate:
            "Calculate score",

        result:
            "Estimated score",

        subjects: {
            indonesian:
                "Bahasa Indonesia",

            mathematics:
                "Mathematics",

            english:
                "English",

            science:
                "Science",
        },
    },

    about: {
        label: "ABOUT THE PROJECT",
        title: "Behind TKScore",
        description: "TKScore is a fast, transparent calculator built natively using React and Vite to instantly estimate your academic scores.",
        
        cards: {
            project: {
                title: "Project Info",
                description: "TKScore was created to provide a fast, ad-free, and open-source platform. Built natively with React and Vite for optimal client-side calculation speed.",
            },
            infrastructure: {
                title: "Powered by Vercel",
                description: "This project runs entirely on Vercel's global edge network, ensuring instant load times, continuous deployment, and extreme architectural reliability.",
            },
            privacy: {
                title: "No Sign-In Required",
                description: "Privacy by design. You do not need to register, create an account, or log in to use this calculator. Your data stays entirely in your browser.",
            },
            developers: {
                title: "Want to Contribute?",
                description: "Are you a developer? This project is open-source. Help optimize the grading algorithm, add new layout modules, or fix bugs via our public repository.",
                button: "View GitHub"
            },
            community: {
                title: "Our Community Network",
                description: "TKScore is a side project under our developer umbrella. Join our Discord to hang out, collaborate, or follow SkyFlix—a custom platform tailored for general aviation media.",
                button: "Join Discord"
            },
            support: {
                title: "Support Our Work",
                description: "This application is entirely self-funded, open-source, and clean of trackers. If this utility has helped you plan your path, consider supporting our ongoing development.",
                button: "Support Us"
            }
        },

        footer: "Made with 💖 by ",
    },

    warning: {
        title: "Important Notice",
        message: "This is only an estimate and does not guarantee official admission or final enrollment to any school or institution.",
    },

    score: {
        overlimit: "Score cannot be higher than 100.",
        underlimit: "Score cannot be lower than 0.",
        valid: "Please enter valid scores between 0 and 100 for every required field.",
    },
};

export default en;
