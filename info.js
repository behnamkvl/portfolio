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
    "Data Engineer",
  links: {
    linkedin: "https://linkedin.com/in/behnam-vakili/",
    github: "https://gitlab.com/behnam.vr",
    angellist: "",
    resume:
      "https://github.com/behnamkvl/resume/raw/main/resume-Vakili.pdf"
  },
  experience: [
    {
      name: "Datrick",
      place: "Istanbul, Turkey (remote)",
      date: "October, 2021 - Present",
      position: "Data Engineer",
      description:
        "Build, maintain, and monitor batch ETL pipelines in a hybrid Google Cloud Platform architecture (BigQuery, Google Cloud functions, etc.) and Apache Airflow. Provide day-to-day support of the DW and DL environments.",
      skills: ["ETL", "GCP", "BigQuery", "Apache Airflow"]
    },
    // {
    //   name: "eBuyNow",
    //   place: "Victoria, Canada (remote)",
    //   date: "October, 2020 - Present",
    //   position: "Data Engineer",
    //   description:
    //     "Develop and maintain ETL jobs within AWS architecture (AWS Glue, Redshift, S3, Sagemaker, Lambda, etc.). Processing jobs orchestration using Apache Airflow. Implement CI/CD pipelines. Design dashboards (Apache Superset, Zoho, Grafana)",
    //   skills: ["ETL", "AWS Redshift", "AWS Glue", "PySpark", "Apache Airflow", "CI/CD", "Docker", "Django", "Vue.js", "NGINX"]
    // },
    {
      name: "Sanjagh",
      place: "Tehran, Iran (remote)",
      date: "September, 2020 - October, 2021",
      position: "Data Scientist/Engineer",
      description:
        "Fraud detection. Create and automate marketing reports (e.g. conversion calculation).",
      skills: ["MongoDB", "SQL", "Pandas", "Python", "Neo4j"]
    },
    {
      name: "RadBonyan",
      place: "Tehran, Iran",
      date: "November, 2019 - September, 2020",
      position: "Machine Learning Engineer",
      description:
        "Defect detection in sewer closed-circuit television (CCTV) inspections using deep convolutional neural networks (data annotation, training, creating the desktop app)",
      skills: ["Keras", "OpenCV", "Pytorch", "PyQt5"]
    },
    {
      name: "Rahnema College",
      place: "Tehran, Iran",
      date: "December, 2019 - February, 2020",
      position: "Machine Learning Intern",
      description:
        "Implementing ML algorithms for some real problems.",
      skills: ["Recommender Systems", "Flask", "scikit-learn"]
    },
    {
      name: "Zarrin",
      place: "Tehran, Iran",
      date: "March, 2018 - September, 2018",
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
      date: "September, 2017 - March, 2018",
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
      title: "ETL frameworks",
      info: [
        "AWS Glue",
        "Apache Airflow",
        "Spark",
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
      info: ["AWS Redshift", "BigQuery", "MongoDB", "PostgreSQL", "Neo4j"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "Ubuntu",
        "Windows",
        "JIRA",
        "Bitbucket",
        "AWS",
        "GCP",
        "Swagger",
      ],
      icon: "fas fa-tools"
    }
  ],
  portfolio: [
    {
      name: "Epicardium Segmentation",
      pictures: [
        {
          img: require("./src/assets/portfolio/mri/4.png")
        },
        {
          img: require("./src/assets/portfolio/mri/5.png")
        },
        {
          img: require("./src/assets/portfolio/mri/3.png")
        },
        {
          img: require("./src/assets/portfolio/mri/1.png")
        }
      ],
      technologies: ["OpenCV", "Pytorch", "U-Net", "Deep Learning"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://gitlab.com/behnam.vr/unet_mri-segmentation",
      visit: "https://gitlab.com/behnam.vr/unet_mri-segmentation",
      description: "Cardiovascular magnetic resonance (CMR) imaging is a standard imaging modality for assessing cardiovascular diseases (CVDs). Here we demonstrate an automated analysis method for CMR images, which is based on a convolutional network (U-Net). The network is trained and evaluated on a large-scale dataset from the UK Biobank, consisting of 4,875 subjects with 93,500 pixel-wise annotated images.The performance of the method has been evaluated using a number of technical metrics, including the Dice metric, mean contour distance and Hausdorff distance."
    },
    {
      name: "Monte Carlo simulation",
      pictures: [
        {
          img: require("./src/assets/portfolio/monte-carlo/city.png")
        },
        {
          img: require("./src/assets/portfolio/monte-carlo/2.png")
        },
        {
          img: require("./src/assets/portfolio/monte-carlo/11.jpg")
        },
        {
          img: require("./src/assets/portfolio/monte-carlo/12.jpg")
        },
        {
          img: require("./src/assets/portfolio/monte-carlo/13.jpg")
        },
        {
          img: require("./src/assets/portfolio/monte-carlo/14.jpg")
        }
      ],
      technologies: ["scikit-learn", "python", "pandas"],
      category: "Website",
      date: "Sep, 2019 - Oct  , 2019",
      github: "https://gitlab.com/behnam.vr/monte-carlo-simulation-snapbox",
      visit: "https://gitlab.com/behnam.vr/monte-carlo-simulation-snapbox",
      description: "Assume a city with following dimensions, total population, population density ratio between central and non-central regions, locations of three stores and the price formula for each point in the city with respect to its distance to each store, find the total cost of orders in the city, and optimum location for the next store to reduce the total costs."
    },
    {
      name: "NLP Assignment",
      pictures: [
        {
          img: require("./src/assets/portfolio/nlp/1.png")
        },
        {
          img: require("./src/assets/portfolio/nlp/2.png")
        },
        {
          img: require("./src/assets/portfolio/nlp/3.png")
        },
        {
          img: require("./src/assets/portfolio/nlp/4.png")
        }
      ],
      technologies: ["NLTK", "NLP", "Pytorch"],
      category: "Algorithm",
      date: "Sept, 2019 - Oct, 2019",
      github:
        "https://gitlab.com/behnam.vr/yapaitek-assignment",
      visit: "https://gitlab.com/behnam.vr/yapaitek-assignment",
      description:
        "This project contains some data analysis and NLP methods implemented on the telegram posts of betasahm1 channel since 2019-01-01 till 2020-04-24."
    },
    {
      name: "Image Captioning",
      pictures: [
        {
          img: require("./src/assets/portfolio/image-captioning/1.png")
        },
        {
          img: require("./src/assets/portfolio/image-captioning/2.png")
        }
      ],
      technologies: ["Computer Vision", "OpenCV", "Pytorch"],
      category: "Algorithm",
      date: "Jan, 2019 - Mar, 2019",
      github:
        "https://gitlab.com/behnam.vr/image-captioning",
      visit: "https://gitlab.com/behnam.vr/image-captioning",
      description:
        "Udacity Computer Vision Nanodegree Image Captioning Project. It contains a CNN Encoder and a RNN Decoder to generate captions for input images."
    },
    {
      name: "Crack Segmentation",
      pictures: [
        {
          img: require("./src/assets/portfolio/crack/1.png")
        },
        {
          img: require("./src/assets/portfolio/crack/2.png")
        },
        {
          img: require("./src/assets/portfolio/crack/3.png")
        },
        {
          img: require("./src/assets/portfolio/crack/4.png")
        }
      ],
      technologies: ["OpenCV", "Pytorch", "U-Net", "Deep Learning"],
      category: "Algorithm",
      date: "Sep, 2019 - Dec  , 2019",
      github: "",
      visit: "",
      description: "Among all the early signs of potential damage in infrastructure systems, formation of cracks is a critical one because it is directly related to the structural capacity and could significantly affect the serviceability of the infrastructure. In this project I trained a U-Net model for crack segmentation using EdmCrack600 dataset."
    },
  ],
  portfolio_design: [
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
      date: "July, 2021 - Aug, 2021",
      visit: "",
      description:
        "Implementing data analysis dashboard including front-end, back-end, CI/CD pipeline and also customizing Apache Superset to meet the marketing team needs."
    },
    {
      name: "Sewer Defect Detection",
      title: "Sewer Defect Detection",
      pictures: [
        {
          img: require("./src/assets/portfolio/yolov/5.jpg"),
          title: "Two kinds of common defects in sewer pipes."
        },
        {
          img: require("./src/assets/portfolio/yolov/2.png"),
          title: "The user uploads the video information."
        },
        {
          img: require("./src/assets/portfolio/yolov/3.png"),
          title: "Live video analysis."
        },
        {
          img: require("./src/assets/portfolio/yolov/4.png"),
          title: "Report."
        }
      ],
      technologies: ["OpenCV", "YOLOV3", "Pytorch"],
      category: "Algorithm",
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
          title: ""
        },
        {
          img: require("./src/assets/portfolio/recommender/1.png"),
          title: "Metrics"
        },
        {
          img: require("./src/assets/portfolio/recommender/2.png"),
          title: "Endpoints"
        },
        {
          img: require("./src/assets/portfolio/recommender/4.png"),
          title: "Example"
        }
      ],
      technologies: ["scikit-learn", "Flask", "MongoDB"],
      category: "Algorithm",
      github: "",
      date: "Feb, 2020 - Mar, 2020",
      visit: "",
      description:
        "In this project we implemented a music playlist recommender system using Beeptunes (a large digital music store in Iran) dataset as the final project for Rahnema College’s internship program."
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
