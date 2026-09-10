const en = {
    navbar: {
        home: "Home",
        calculator: "Calculator",
        about: "About",
    },

    home: {
        label: "MAIN HOMEPAGE",
        title: "Welcome to ",
        title2: "TKScore",
        description: "Get an estimated final score based on your entered results like TKA, TKAD (if applicable), and report card!",
        button: "Calculate your score",
        howItWorks: "How it works",
        steps: {
            enter: {
                title: "Enter your scores",
                description: "Enter the scores you received for each required subject and report card average score.",
            },
            choose: {
                title: "Select your province",
                description: "Select your province to get the most accurate score.",
            },
            calculate: {
                title: "Get your result",
                description: "See your estimated score!",
            },
        },
    },

    result: {
        title: "Estimated score",
        orTotal: "Or Total",
        tka: "TKA",
        tkad: "TKAD",
        tkaTkad: "TKA + TKAD",
        report: "Report Card",
        withoutTkad: "Without TKAD",
        calculation: "Calculation",
        weightedCalculation: "Weighted calculation",
        tkaAverage: "TKA average",
        tkadAverage: "TKAD average",
        finalScore: "Final score",
        total: "Total",
    },

    calculator: {
        label: "SCORE CALCULATOR",
        title: "Calculate Your Score.",
        description:
            "Enter your TKA, TKAD, and your average report card scores to calculate your estimated result.",

        tkaDescription:
            "Enter your TKA scores.",

        rapotTitle:
            "Report Card Average",

        rapotDescription:
            "Enter the average of your report card scores.",

        tkadToggle:
            "Include TKAD",

        tkadDescription:
            "TKAD is currently applicable only in Special Region of Yogyakarta.",

        selectProvince:
            "Select your province.",

        selectProvinceDescription:
            "Please select your province to calculate your score more accurately.",

        selectProvincePlaceholder:
            "-- Select your province --",

        tkadScoresDescription:
            "Enter your TKAD scores.",

        calculate:
            "Calculate score",

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
                title: "No Login Required",
                description: "Privacy by design. You do not need to register, create an account, or log in to use this calculator. Your data stays entirely in your browser.",
            },
            developers: {
                title: "Want to Contribute?",
                description: "Are you a developer? This project is open-source. Help optimize the grading algorithm, add new layout modules, or fix bugs via our public repository.",
                button: "View GitHub"
            },
            community: {
                title: "Our Community Network",
                description: "TKScore is a side project under our developer umbrella. Join our Discord to hang out, collaborate, or follow SkyFlix Network! a custom platform tailored for general aviation media.",
                button: "Join Discord"
            },
            support: {
                title: "Support Our Work",
                description: "This application is entirely self-funded, open-source, and clean of trackers. If this utility has helped you plan your path, consider supporting our ongoing development.",
                button: "Support Us"
            }
        },

        footer: "Developer:  ",
        specialThanks: "Special thanks to our donators",
    },

    provinces: {
        dki: "DKI Jakarta (70% Report : 30% TKA)",
        jabar: "West Java (50% Report : 50% TKA)",
        jateng: "Central Java (50% Report : 50% TKA)",
        yogyakarta: "Yogyakarta (40% Report : 60% TKA + TKAD)",
        jtt: "East Java (60% Report : 40% TKA)",
        btn: "Banten (70% Report : 30% TKA)",
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

    weights: {
        title: "Custom Weight Card",
        description: "Set the percentage of bobot score based on your province's requirements.",
        tka: "TKA Weight (%)",
        tkad: "TKAD Weight (%)",
        rapot: "Report Weight (%)",
        incltkad: "Include TKAD",
        total: "{totalWeight}%",
        valid: "Total bobot ideally should be 100%. Currently: {totalWeight}%",
    },

    
};

export default en;
