let info = {
  name: "Behnam Vakili",
  logo_name: "Behnam",
  flat_picture: require("./src/assets/pic2.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Full-Stack Developer, Machine Learning Engineer",
  links: {
    linkedin: "https://www.linkedin.com/in/hrishikeshpaul/",
    github: "https://github.com/hrishikeshpaul",
    angellist: "https://angel.co/u/hrishikesh-paul",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  experience: [
    {
      name: "eBuyNow",
      place: "Victoria, Canada (remote)",
      date: "Oct, 2020 - Present",
      position: "Full-Stack Developer",
      description:
        "Worked as a full stack developer, implementing various features for dashboards, designing event-driven system to get, analyze and store data, deploying variuos applications on the cloud.",
      skills: ["AWS", "Django", "Docker", "Python", "Vue.js", "Apache Kafka", "NGINX", "CI/CD"]
    },
    {
      name: "Sanjagh",
      place: "Tehran, Iran (remote)",
      date: "Aug, 2020 - Present",
      position: "Data Scientist",
      description:
        "Automating and analyzing marketing reports, fraud detection.",
      skills: ["MongoDB", "SQL", "Pandas", "Python", "Neo4j"]
    },
    {
      name: "Razi Bandar",
      place: "Tehran, Iran",
      date: "Sept, 2019 - Aug, 2020",
      position: "Machine Learning Engineer",
      description:
        "Automated defect detection in sewer closed-circuit television inspections.",
      skills: ["Keras", "OpenCV", "Pytorch", "PyQt5"]
    },
    {
      name: "Rahnema College",
      place: "Tehran, Iran",
      date: "Jan, 2020 - Mar, 2020",
      position: "Machine Learning Intern",
      description:
        "Implementing ML algorithms for some real problems.",
      skills: ["Recommender Systems", "Flask", "scikit-learn"]
    },
    {
      name: "Zarrin",
      place: "Tehran, Iran",
      date: "May, 2016 - July, 2016",
      position: "Software Developer Intern",
      description:
        "Collaboration in website development.",
      skills: ["JavaScript", "LINUX", "MySQL", "Java"]
    }
  ],
  education: [
    {
      name: "Iran University of Science and Technology",
      place: "Iran",
      date: "Aug, 2015 - Feb, 2018",
      degree: "Master of Science in Electrical Engineering",
    },
    {
      name: "University of Tehran",
      place: "Iran",
      date: "Sept, 2010 - Sept, 2015",
      degree: "Bachelor of Science in Electrical Engineering",
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "Scala",
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Pytorch",
        "Keras",
        "scikit-learn",
        "OpenCV",
        "NLTK",
        "Apache Kafka",
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue.js", "Django", "Flask", "Node"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "PostgreSQL", "Neo4j"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "Ubuntu",
        "Windows",
        "Scrum",
        "JIRA",
        "Bitbucket",
        "AWS",
        "Swagger",
      ],
      icon: "fas fa-tools"
    }
  ],
  portfolio: [
    {
      name: "Music Recommender",
      pictures: [
        {
          img: require("./src/assets/portfolio/recommender/1_MnedC576EFf7dfeKmPBkiQ.png")
        },
        {
          img: require("./src/assets/portfolio/recommender/1.png")
        },
        {
          img: require("./src/assets/portfolio/recommender/2.png")
        },
        {
          img: require("./src/assets/portfolio/recommender/4.png")
        }
      ],
      technologies: ["scikit-learn", "Flask", "MongoDB", "Recommender Systems"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://gitlab.com/behnam.vr/music_playlist_recommender_system",
      visit: "https://gitlab.com/behnam.vr/music_playlist_recommender_system",
      description: "In this project we implemented a music playlist recommender system using Beeptunes (a large digital music store in Iran) dataset as the final project for Rahnema College’s internship program."
    },
    {
      name: "Music Recommender",
      pictures: [
        {
          img: require("./src/assets/portfolio/recommender/1_MnedC576EFf7dfeKmPBkiQ.png")
        },
        {
          img: require("./src/assets/portfolio/recommender/1.png")
        },
        {
          img: require("./src/assets/portfolio/recommender/2.png")
        },
        {
          img: require("./src/assets/portfolio/recommender/4.png")
        }
      ],
      technologies: ["scikit-learn", "Flask", "MongoDB", "Recommender Systems"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://gitlab.com/behnam.vr/music_playlist_recommender_system",
      visit: "https://gitlab.com/behnam.vr/music_playlist_recommender_system",
      description: "In this project we implemented a music playlist recommender system using Beeptunes (a large digital music store in Iran) dataset as the final project for Rahnema College’s internship program."
    },
    {
      name: "Sewer Defect Detection",
      pictures: [
        {
          img: require("./src/assets/portfolio/yolov/sewerpipe.jpg")
        },
        {
          img: require("./src/assets/portfolio/yolov/5.jpg")
        },
        {
          img: require("./src/assets/portfolio/yolov/2.png")
        },
        {
          img: require("./src/assets/portfolio/yolov/3.png")
        },
        {
          img: require("./src/assets/portfolio/yolov/4.png")
        }
      ],
      technologies: ["Computer Vision", "OpenCV", "YOLOV3", "Pytorch", "PyQt5"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://gitlab.com/behnam.vr/add_YOLOV3",
      visit: "https://gitlab.com/behnam.vr/add_YOLOV3",
      description:
        "Sewer Defect Detection detects two kinds of defects in closed-circuit television videos. This tool gets the video file and required information to prepare the report, from the user, then using YOLOV3 algorithm it finds the type of defects and their location. "
    }
  ],
  portfolio_design: [
    {
      name: "Sewer Defect Detection",
      title: "Sewer Defect Detection",
      pictures: [
        {
          img: require("./src/assets/portfolio/yolov/5.jpg"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/portfolio/yolov/2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/portfolio/yolov/3.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/portfolio/yolov/4.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["OpenCV", "YOLOV3", "Pytorch"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Sewer Defect Detection detects two kinds of defects in closed-circuit television videos. This tool gets the video file and required information to prepare the report, from the user, then using YOLOV3 algorithm it finds the type of defects and their location."
    },
    {
      name: "Music Recommender System",
      title: "Music Recommender System",
      pictures: [
        {
          img: require("./src/assets/portfolio/recommender/1_MnedC576EFf7dfeKmPBkiQ.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/portfolio/recommender/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/portfolio/recommender/2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/portfolio/recommender/4.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["scikit-learn", "Flask", "MongoDB"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "In this project we implemented a music playlist recommender system using Beeptunes (a large digital music store in Iran) dataset as the final project for Rahnema College’s internship program."
    },
    {
      name: "Dashboard Design",
      title: "Dashboard Design",
      pictures: [
        {
          img: require("./src/assets/portfolio/aws/superset.png"),
          title: "Apache Superset"
        },
        {
          img: require("./src/assets/portfolio/aws/ci.png"),
          title: "CI/CD Pipeline"
        },
        {
          img: require("./src/assets/portfolio/aws/3.png"),
          title: "Dashboard-1"
        },
        {
          img: require("./src/assets/portfolio/aws/2.png"),
          title: "Dashboard-2"
        },
        {
          img: require("./src/assets/portfolio/aws/5.png"),
          title: "Back-end API"
        }
      ],
      technologies: ["Django", "Vue.js", "Swagger"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Implementing data analysis dashboard including front-end, back-end, CI/CD pipeline and also customizing Apache Superset to meet the marketing team needs."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
