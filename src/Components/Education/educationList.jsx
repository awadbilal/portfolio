import BAU from '../../locales/images/BAU.png';
import RECDD from '../../locales/images/RCDED.png';
import BAUCER from '../../locales/images/UNI1.jpeg';
import RECDDCER from '../../locales/images/RECODED-Certificate.png';
import FCC from '../../locales/images/FCC.jpeg';
import FCCRWD from '../../locales/images/FCCRWD.png';
import FCCJS from '../../locales/images/FCCJS.png';

const education = [
  {
    title: "Computer Engineering",
    subText: "Bachelor's Degree",
    image: BAU,
    beginDate: "09/2018",
    endDate: "07/2022",
    duration: "4 Years",
    certificate: false,
    description: "Computer engineering is the science of integrating and developing both hardware and software applications, it is a branch of engineering which integrates several fields of computer science and electrical engineering. My main purpose of double majoring with this department is to develop and earn enough knowledge in which i will expand until i become a cyber security engineer.",
    courses: [
      "Introduction to C++",
      "Object oriented programming",
      "Advanced programming",
      "Digital logic",
      "Data structures and algorithms",
      "Introduction to computer networks",
      "Computer organization",
      "Software engineering analysis and design",
      "Operating systems",
      "Analysis of Algorithms",
      "Embedded systems programming",
      "Formal languages and automata theory",
      "Netaş agile development",
      "Linear algebra and Discrete mathematics",
      "Probability and Statistics"
    ]
  },
  {
    title: "Free Code Camp",
    subText: "Certificate of Completion",
    image: FCC,
    beginDate: "01/2022",
    endDate: "01/2022",
    duration: "Flexible",
    certificate: FCCRWD,
    extra: FCCJS,
    description: "Free Code Camp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning web development accessible to anyone.",
    courses: [
      "HTML5",
      "CSS3",
      "Semantic coding",
      "Responsive web design",
      "Javascript algorithms",
      "Data structures"
    ]
  },
  {
    title: "Front-End Web Development",
    subText: "Certificate of Completion",
    image: RECDD,
    beginDate: "04/2021",
    endDate: "09/2021",
    duration: "5 Months",
    certificate: RECDDCER,
    description: "Re:Coded is one of a kind when it comes to non-profit organizations, their front-end web development extensive bootcamp has helped me reach the point where i am today, thanks to Re:Coded, i am now able to read, edit, and develop react based projects, it is a career that they provide to the public, and i was lucky enough to have joined them, experienced it, and became and Alumni. ",
    courses: [
      "Hyper text markup language - HTML5",
      "Cascading styling sheets - CSS3",
      "Javascript - JS6",
      "React",
      "React hooks",
      "React dependencies",
      "Github",
      "npm and git commands",
      "Figma UX/UI design",
      "Postman",
      "REST API",
      "Google firebase and authentication",
      "Time management",
      "Teamwork",
      "Business communication",
      "Agile management",
      "Career prep",
    ]
  },
  {
    title: "Management Engineering",
    subText: "Bachelor's Degree",
    image: BAU,
    beginDate: "09/2017",
    endDate: "06/2021",
    duration: "4 Years",
    certificate: BAUCER,
    description: "Engineering management is a unique department in the faculty of engineering, it combines business administration and industrial engineering into one by utilizing industrial engineering knowledge and skills to provide consulting services to all departments in order to develop implement, and monitor more efficient, cost-effective business processes and strategies.",
    courses: [
      "Principles of management engineering",
      "Introduction to java",
      "Marketing for engineers",
      "Digital Marketing",
      "Marketing analytics",
      "Economics for engineers",
      "Accounting for engineers",
      "Finance for engineers",
      "Human resource management - HRT",
      "Management science",
      "Production planning and control",
      "Supply chain management",
      "Technological innovation and entrepreneurship",
      "Linear algebra and Discrete mathematics",
      "Statistics in engineering",
      "Probability and Statistics"
    ]
  }
];

export default education;