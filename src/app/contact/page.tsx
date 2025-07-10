"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Calendar,
  Phone,
  MessageSquare,
  Download,
  ExternalLink,
  Clock,
  Users,
  Coffee,
  Briefcase,
  GraduationCap,
  Code2
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

const contactMethods = [
  {
    icon: Mail,
    title: "Email Me",
    description: "Fastest way to reach me for any inquiries",
    value: "arman.rafiee99@gmail.com",
    href: "mailto:arman.rafiee99@gmail.com",
    color: "from-red-500 to-pink-500",
    preferred: true
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with me professionally",
    value: "arman-rafiee-0601ba235",
    href: "https://linkedin.com/in/arman-rafiee-0601ba235",
    color: "from-blue-600 to-blue-700",
    preferred: true
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out my code and projects",
    value: "armand0e",
    href: "https://github.com/armand0e",
    color: "from-gray-700 to-gray-800",
    preferred: false
  }
];

const collaborationTypes = [
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description: "Full-time, part-time, or internship positions in software development",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Code2,
    title: "Project Collaboration",
    description: "Open source contributions, hackathons, or interesting side projects",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: GraduationCap,
    title: "Academic Partnerships",
    description: "Research collaborations or academic project assistance",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Meeting fellow developers, students, or industry professionals",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Coffee,
    title: "Casual Chat",
    description: "Tech discussions, career advice, or just a friendly conversation",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Technical advice, code review, or project guidance",
    color: "from-teal-500 to-cyan-500"
  }
];

const quickFacts = [
  {
    label: "Location",
    value: "Gainesville, Florida",
    icon: MapPin,
    color: "text-blue-600"
  },
  {
    label: "Status",
    value: "University Student",
    icon: GraduationCap,
    color: "text-green-600"
  },
  {
    label: "Available",
    value: "Open to Opportunities",
    icon: Clock,
    color: "text-purple-600"
  },
  {
    label: "Response Time",
    value: "Within 24 hours",
    icon: MessageSquare,
    color: "text-orange-600"
  }
];

export default function Contact() {
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
          Let's Connect
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          I'm always excited to discuss new opportunities, collaborate on projects, 
          or just have a conversation about technology and innovation.
        </motion.p>
      </motion.section>

      {/* Quick Facts */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
          Quick Information
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {quickFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="text-center bg-gradient-to-br from-background to-muted/50 group-hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <fact.icon className={`h-8 w-8 ${fact.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold mb-1">{fact.label}</h3>
                  <p className="text-sm text-muted-foreground">{fact.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <Card className="h-full relative overflow-hidden bg-gradient-to-br from-background to-muted/50 group-hover:shadow-2xl transition-all duration-300">
                {method.preferred && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Preferred
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                  <p className="font-mono text-sm bg-muted/50 px-3 py-2 rounded-lg">
                    {method.value}
                  </p>
                  <Button 
                    size="sm" 
                    className="w-full group-hover:scale-105 transition-transform" 
                    asChild
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Collaboration Types */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
          What I'm Looking For
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {collaborationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-background to-muted/50 group-hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Work Together?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Whether you have an exciting project, job opportunity, or just want to connect, 
                  I'd love to hear from you. Let's build something amazing together!
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <a href="mailto:arman.rafiee99@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-5 w-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Additional Contact Options */}
              <motion.div
                className="mt-8 pt-8 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer other platforms?
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://linkedin.com/in/arman-rafiee-0601ba235" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://github.com/armand0e" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
} 