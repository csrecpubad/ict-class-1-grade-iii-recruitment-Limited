export const specializedFields = [
  "Networking & Network Technology",
  "Software Development & Software Technology",
  "Web & Full-Stack Development",
  "Mobile Application Development",
  "Artificial Intelligence & Machine Learning",
  "Data Science, Data Analytics & Data Engineering",
  "Database Administration & Database Technology",
  "Cyber Security & Information Security",
  "Cloud Computing & Cloud Technology",
  "DevOps, CI/CD & IT Automation",
  "Systems Administration & IT Infrastructure",
  "Computer Hardware & Technical Support",
  "Graphics, Multimedia & Digital Media",
  "Enterprise Applications, ERP & Business Systems",
  "Internet of Things (IoT), Automation & Emerging Technologies",
] as const;

/* Type representing one of the 15 ICT fields */
export type SpecializedFieldName =
  (typeof specializedFields)[number];


/* --------------------------------------------------
   ICT Specialized Field Examples
-------------------------------------------------- */

export const specializedFieldExamples: Record<
  SpecializedFieldName,
  {
    academic: string;
    professional: string;
  }
> = {
  "Networking & Network Technology": {
    academic:
      "e.g., Networking, Computer Networks, Network Technology, ICT, Computer Science",
    professional:
      "e.g., Network administration, routing, switching, LAN/WAN, wireless networks, network monitoring",
  },

  "Software Development & Software Technology": {
    academic:
      "e.g., Software Development, Software Engineering, Computer Science, ICT, Information Technology",
    professional:
      "e.g., Software development, programming, application development, software testing, software maintenance",
  },

  "Web & Full-Stack Development": {
    academic:
      "e.g., Web Development, Web Technology, Computer Science, ICT, Information Technology",
    professional:
      "e.g., Frontend, backend, full-stack development, REST APIs, web application development",
  },

  "Mobile Application Development": {
    academic:
      "e.g., Mobile Computing, Mobile Application Development, Computer Science, ICT",
    professional:
      "e.g., Android, iOS, Flutter, React Native, mobile application development",
  },

  "Artificial Intelligence & Machine Learning": {
    academic:
      "e.g., Artificial Intelligence, Machine Learning, Data Science, Computer Science, ICT",
    professional:
      "e.g., AI/ML development, deep learning, computer vision, NLP, Generative AI, predictive modelling",
  },

  "Data Science, Data Analytics & Data Engineering": {
    academic:
      "e.g., Data Science, Data Analytics, Statistics, Computer Science, ICT, Mathematics",
    professional:
      "e.g., Data analysis, data science, business intelligence, data visualization, data pipelines, big data",
  },

  "Database Administration & Database Technology": {
    academic:
      "e.g., Database Management, Database Technology, Computer Science, ICT, Information Systems",
    professional:
      "e.g., Database administration, database development, SQL/NoSQL, database maintenance, performance tuning",
  },

  "Cyber Security & Information Security": {
    academic:
      "e.g., Cyber Security, Information Security, Network Security, Computer Science, ICT",
    professional:
      "e.g., Security operations, SOC, penetration testing, vulnerability assessment, incident response",
  },

  "Cloud Computing & Cloud Technology": {
    academic:
      "e.g., Cloud Computing, Cloud Technology, Computer Science, ICT, Information Technology",
    professional:
      "e.g., AWS, Microsoft Azure, Google Cloud, cloud administration, cloud deployment, cloud infrastructure",
  },

  "DevOps, CI/CD & IT Automation": {
    academic:
      "e.g., DevOps, Cloud Computing, Computer Science, ICT, Information Technology",
    professional:
      "e.g., CI/CD, Docker, Kubernetes, GitHub Actions, deployment automation, infrastructure automation",
  },

  "Systems Administration & IT Infrastructure": {
    academic:
      "e.g., Systems Administration, Information Technology, Computer Science, ICT, Systems Technology",
    professional:
      "e.g., Windows/Linux administration, server administration, Active Directory, virtualization, IT infrastructure",
  },

  "Computer Hardware & Technical Support": {
    academic:
      "e.g., Computer Hardware, Computer Engineering, ICT, Information Technology, Electronics",
    professional:
      "e.g., Hardware maintenance, computer repair, troubleshooting, technical support, system installation",
  },

  "Graphics, Multimedia & Digital Media": {
    academic:
      "e.g., Graphic Design, Multimedia, Digital Media, Animation, ICT",
    professional:
      "e.g., Graphic design, video production, animation, 3D design, UI/visual design, multimedia production",
  },

  "Enterprise Applications, ERP & Business Systems": {
    academic:
      "e.g., Enterprise Systems, ERP, Information Systems, Business Information Systems, ICT",
    professional:
      "e.g., ERP implementation, CRM, Microsoft Dynamics, Business Central, enterprise applications",
  },

  "Internet of Things (IoT), Automation & Emerging Technologies": {
    academic:
      "e.g., IoT, Robotics, Automation, Embedded Systems, ICT, Computer Science",
    professional:
      "e.g., IoT systems, robotics, RPA, embedded systems, industrial automation, smart systems",
  },
};


/* --------------------------------------------------
   Rating Values
-------------------------------------------------- */

export const fieldRatings = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
] as const;