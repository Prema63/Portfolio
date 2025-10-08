import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Server,
  Smartphone,
  ChevronDown,
  Star,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: [
      { name: "React.js" },
      { name: "JavaScript " },
      { name: "HTML5 & CSS3" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
    ],
    backend: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "RESTful APIs" },
      { name: "JWT Authentication" },
      { name: "Socket.io" },
    ],
    database: [
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "MySQL" },
      { name: "Firebase" },
    ],
    tools: [
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "AWS Basics" },
      { name: "Docker" },
    ],
  };

  const experiences = [
    {
      company: "TechStart Solutions",
      position: "Junior MERN Stack Developer",
      duration: "Jan 2024 - Present",
      description:
        "Developed and maintained web applications using MERN stack. Collaborated with senior developers to implement new features and optimize existing code.",
      achievements: [
        "Built 3 full-stack web applications serving 1000+ users",
        "Reduced API response time by 30% through database optimization",
        "Implemented responsive designs increasing mobile engagement by 25%",
      ],
    },
    {
      company: "DigitalCraft Agency",
      position: "Frontend Developer Intern",
      duration: "Jun 2023 - Dec 2023",
      description:
        "Focused on creating responsive user interfaces using React.js and modern CSS frameworks. Worked closely with design team to implement pixel-perfect designs.",
      achievements: [
        "Converted 15+ Figma designs to responsive React components",
        "Improved website performance by 40% through code optimization",
        "Collaborated with 5-member development team on agile projects",
      ],
    },
    {
      company: "CodeLab Innovations",
      position: "Web Development Trainee",
      duration: "Mar 2023 - May 2023",
      description:
        "Intensive training program covering full-stack development fundamentals. Built several projects to demonstrate proficiency in MERN stack technologies.",
      achievements: [
        "Completed 8-week intensive bootcamp with 95% score",
        "Developed 5 project applications showcasing different tech stacks",
        "Mentored 3 junior trainees in JavaScript fundamentals",
      ],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe API", "JWT"],
      features: [
        "User Authentication",
        "Payment Gateway",
        "Admin Dashboard",
        "Order Tracking",
      ],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-blue-400 to-purple-600",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Real-time social media analytics dashboard with data visualization and user engagement metrics.",
      tech: ["React.js", "Express.js", "MongoDB", "Socket.io", "Chart.js"],
      features: [
        "Real-time Updates",
        "Data Visualization",
        "User Analytics",
        "Responsive Design",
      ],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-green-400 to-blue-600",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with team features, deadlines, and progress tracking.",
      tech: ["React.js", "Node.js", "MongoDB", "Redux", "JWT"],
      features: [
        "Team Collaboration",
        "Deadline Tracking",
        "Progress Reports",
        "File Uploads",
      ],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-purple-400 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors hover:text-blue-400 ${
                      activeSection === section
                        ? "text-blue-400"
                        : "text-gray-300"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-2 space-y-1">
              {["home", "about", "experience", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-colors"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible.home
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-8 ">Hii, I'm Prema Sharma</div>

            <h1 className="text-3xl sm:text-5xl lg:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building modern web applications with React, Node.js, MongoDB, and
              Express. Passionate about creating seamless user experiences and
              robust backend systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border border-gray-600 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              About <span className="text-blue-400">Me</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Hi, I'm a passionate MERN Stack Developer
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With 1 year of hands-on experience in full-stack development,
                  I specialize in building scalable web applications using
                  MongoDB, Express.js, React.js, and Node.js. I'm passionate
                  about creating efficient, user-friendly solutions that solve
                  real-world problems.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  My journey started with a curiosity about how web applications
                  work, and it has evolved into a career where I get to build
                  amazing digital experiences every day. I love learning new
                  technologies and staying up-to-date with the latest trends in
                  web development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-blue-400" />
                    <span>New York, NY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={20} className="text-blue-400" />
                    <span>developer@email.com</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <Database className="text-blue-400 mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-sm text-gray-400">
                    Node.js, Express, MongoDB
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <Code2 className="text-green-400 mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-sm text-gray-400">
                    React, JavaScript, CSS
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <Server className="text-purple-400 mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Deployment</h4>
                  <p className="text-sm text-gray-400">AWS, Heroku, Netlify</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <Smartphone className="text-orange-400 mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Mobile-First</h4>
                  <p className="text-sm text-gray-400">Responsive Design</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-center mb-12">
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-gray-900 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4 capitalize text-blue-400">
                      {category}
                    </h4>
                    <div className="space-y-3">
                      {skillList.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">{skill.name}</span>
                            {/* <span className="text-sm text-gray-400">{skill.level}%</span> */}
                          </div>
                          {/* <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: isVisible.about ? `${skill.level}%` : '0%' }}
                            ></div>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.experience
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Work <span className="text-blue-400">Experience</span>
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-300">
                        {exp.company}
                      </h4>
                    </div>
                    <span className="text-gray-400 mt-2 lg:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div>
                    <h5 className="font-medium mb-2 text-purple-400">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <Star
                            size={16}
                            className="text-yellow-400 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Featured <span className="text-blue-400">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`h-48 ${project.image} flex items-center justify-center`}
                  >
                    <Code2 size={48} className="text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-purple-400">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2 text-green-400">
                        Features:
                      </h4>
                      <ul className="text-sm space-y-1">
                        {project.features.map((feature, featIndex) => (
                          <li
                            key={featIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-sm bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-sm bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.contact
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Get In <span className="text-blue-400">Touch</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xl text-gray-300">
                  I'm always interested in new opportunities and exciting
                  projects. Let's discuss how we can work together!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="text-blue-400" size={24} />
                      <span>developer@email.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-blue-400" size={24} />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="text-blue-400" size={24} />
                      <span>New York, NY</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a
                      href="#"
                      className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>

                <div>
                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MERN Stack Developer Portfolio. Built
            with React & Tailwind CSS.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;