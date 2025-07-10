"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  GraduationCap, 
  MapPin, 
  Languages, 
  Trophy,
  Heart,
  Code2,
  Zap,
  Globe,
  Star,
  BookOpen,
  Target
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

const personalValues = [
  {
    icon: Code2,
    title: "Innovation",
    description: "Always seeking new ways to solve problems and improve existing solutions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Genuine enthusiasm for technology and its potential to make a positive impact",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering high-quality work and continuous improvement",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Growth",
    description: "Embracing challenges and learning opportunities to expand my skills",
    color: "from-purple-500 to-indigo-500"
  }
];

const languages = [
  { name: "English", level: "Native", proficiency: 100 },
  { name: "Spanish", level: "Conversational", proficiency: 70 },
  { name: "Farsi", level: "Conversational", proficiency: 65 }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <Avatar className="w-40 h-40 mx-auto mb-6 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
            <AvatarFallback className="text-6xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white">
              AR
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          I&apos;m a passionate full-stack developer and University of Florida student who loves 
          turning innovative ideas into reality through code. My journey combines scientific 
          thinking with creative problem-solving.
        </motion.p>
      </motion.section>

      {/* Personal Story */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
          My Journey
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My passion for technology began in high school, where I built my first electric guitar 
                    from scratch as part of my IB Personal Project. This hands-on experience taught me 
                    that with dedication and creativity, you can build anything.
                  </p>
                  <p>
                    I founded FastlyFixed, a tech repair company, where I discovered my love for 
                    problem-solving and helping others. This entrepreneurial experience showed me 
                    the real-world impact technology can have.
                  </p>
                  <p>
                    Today, I&apos;m pursuing my Bachelor&apos;s in Microbiology & Cell Science with a Computer 
                    Science minor at UF, combining my scientific background with my passion for 
                    software development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  What Drives Me
                </h3>
                <div className="space-y-6">
                  {personalValues.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${value.color} flex-shrink-0`}>
                        <value.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
          Education
        </motion.h2>

        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-background to-muted/50">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">University of Florida</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Gainesville, Florida</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Major Program
                  </h4>
                  <p className="text-muted-foreground">Bachelor of Science in Microbiology & Cell Science</p>
                  <Badge variant="secondary" className="mt-2">Current Junior</Badge>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    Minor Program
                  </h4>
                  <p className="text-muted-foreground">Computer and Information Sciences and Engineering</p>
                  <Badge variant="outline" className="mt-2">In Progress</Badge>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">Why This Combination?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  My unique academic background combines biological sciences with computer science, 
                  giving me a perspective on how technology can revolutionize scientific research 
                  and healthcare. This interdisciplinary approach helps me build solutions that 
                  bridge the gap between science and technology.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Languages Section */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
          Languages & Communication
        </motion.h2>

        <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-background to-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-6 w-6 text-primary" />
                Spoken Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="outline">{lang.level}</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Fun Facts */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
          Beyond Coding
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Problem Solver</h3>
                <p className="text-sm text-muted-foreground">
                  Built a GPU mining rig and home server from scratch, always tinkering with new tech
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Advocate</h3>
                <p className="text-sm text-muted-foreground">
                  Spoke to 1,000+ people at a school walkout, standing up for important causes
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Entrepreneur</h3>
                <p className="text-sm text-muted-foreground">
                  Founded FastlyFixed to help people with their technology problems
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 