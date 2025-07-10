"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Award, 
  Code2, 
  Trophy,
  Calendar,
  MapPin,
  ExternalLink,
  Mic,
  Users,
  Wrench,
  Radio,
  Zap,
  Building,
  Star,
  Target,
  Lightbulb
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const experiences = [
  {
    title: "Audio Visual Technician",
    company: "Professional Events",
    period: "2020 - Present",
    type: "Professional Employment",
    location: "Florida",
    icon: Mic,
    color: "from-blue-600 to-blue-700",
    description: "Set up and ran conferences and conventions throughout Florida, including high-profile events for major organizations.",
    highlights: [
      "Managed AV setup for National Collegiate Athletic Association events",
      "Coordinated technical requirements for American Association for Cancer Research conferences",
      "Ensured seamless audio-visual experiences for large-scale events",
      "Collaborated with event coordinators and vendors"
    ],
    skills: ["Event Management", "Audio/Visual Equipment", "Team Coordination", "Problem Solving"]
  },
  {
    title: "Engineering Shadowing Program",
    company: "Motorola Solutions",
    period: "Summer 2019",
    type: "Internship",
    location: "Florida",
    icon: Radio,
    color: "from-purple-600 to-purple-700",
    description: "Intensive week-long program shadowing electrical engineers and participating in hands-on technical activities.",
    highlights: [
      "Shadowed experienced electrical engineers in their daily work",
      "Participated in educational activities and technical demonstrations",
      "Conducted tests on radio antennas and communication equipment",
      "Learned about cutting-edge wireless communication technologies"
    ],
    skills: ["Electrical Engineering", "Radio Technology", "Testing Procedures", "Technical Documentation"]
  }
];

const accomplishments = [
  {
    category: "Academic Excellence",
    items: [
      {
        title: "High School National Science Honor Society",
        description: "Selected for outstanding academic performance in science",
        icon: Trophy,
        color: "from-yellow-500 to-orange-500"
      },
      {
        title: "IB Diploma Program Graduate",
        description: "Completed the rigorous International Baccalaureate program",
        icon: Award,
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "FAU Math Competition - 47th Place",
        description: "Ranked 47th out of 500 elite students in mathematics",
        icon: Target,
        color: "from-blue-500 to-cyan-500"
      }
    ]
  },
  {
    category: "Technical Projects",
    items: [
      {
        title: "Custom Electric Guitar Build",
        description: "IB Personal Project: Built Gibson Explorer from two wood slabs",
        icon: Lightbulb,
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "GPU Mining Rig & Home Server",
        description: "Built custom cryptocurrency mining rig and network server",
        icon: Zap,
        color: "from-orange-500 to-red-500"
      }
    ]
  },
  {
    category: "Professional Certifications",
    items: [
      {
        title: "Certified Internet Business Associate",
        description: "CIW certification in internet business and web technologies",
        icon: Building,
        color: "from-indigo-500 to-purple-500"
      },
      {
        title: "Microsoft Office Certified",
        description: "Microsoft Word (2020) and Excel (2017) certifications",
        icon: Star,
        color: "from-teal-500 to-cyan-500"
      }
    ]
  },
  {
    category: "Entrepreneurship",
    items: [
      {
        title: "FastlyFixed Founder & Owner",
        description: "Founded company specializing in iPhone, iPod, and iPad screen repairs",
        icon: Wrench,
        color: "from-emerald-500 to-green-500"
      }
    ]
  },
  {
    category: "Leadership & Advocacy",
    items: [
      {
        title: "Public Speaking at Old School Square",
        description: "Spoke to 1,000+ people at school walkout protesting gun violence",
        icon: Users,
        color: "from-red-500 to-pink-500"
      }
    ]
  }
];

const skills = {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "C++", level: 75 },
    { name: "HTML/CSS", level: 90 }
  ],
  "Frameworks & Tools": [
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 }
  ],
  "Technical Skills": [
    { name: "Full-Stack Development", level: 85 },
    { name: "Hardware Troubleshooting", level: 95 },
    { name: "Network Administration", level: 80 },
    { name: "System Administration", level: 75 },
    { name: "Problem Solving", level: 95 }
  ]
};

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <motion.section
        className="text-center mb-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Experience & Skills
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          A journey of professional growth, technical excellence, and continuous learning 
          through diverse experiences and meaningful achievements.
        </motion.p>
      </motion.section>

      {/* Professional Experience */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Briefcase className="h-8 w-8 text-primary" />
          Professional Experience
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={fadeInUp}
              className="group"
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-background to-muted/50 group-hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <exp.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <Badge variant="secondary">{exp.type}</Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Badge variant="outline">{skill}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Accomplishments */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Award className="h-8 w-8 text-primary" />
          Accomplishments & Recognition
        </motion.h2>

        <div className="space-y-12 max-w-5xl mx-auto">
          {accomplishments.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full bg-gradient-to-br from-background to-muted/50 group-hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Code2 className="h-8 w-8 text-primary" />
          Technical Skills
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div key={category} variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-background to-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 