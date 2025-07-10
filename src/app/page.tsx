"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Code2, 
  GraduationCap, 
  Zap,
  Star,
  Rocket,
  Globe,
  Heart
} from "lucide-react";
import Link from "next/link";

// Advanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

const sparkleVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description: "Building modern web applications with React, Next.js, and Python",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "UF Student",
    description: "Studying Microbiology & Cell Science with CS Engineering minor",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Hardware troubleshooting, system administration, and innovation",
    color: "from-purple-500 to-pink-500"
  }
];

const stats = [
  { label: "Years Coding", value: "5+" },
  { label: "Technologies", value: "15+" },
  { label: "Projects", value: "20+" },
  { label: "Coffee Cups", value: Number.POSITIVE_INFINITY.toString() }
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.section
          className="text-center py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar with floating animation */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8"
          >
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AvatarImage 
                  src="/Portrait.jpg" 
                  alt="Arman Rafiee" 
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white">
                  AR
                </AvatarFallback>
              </Avatar>
              {/* Floating sparkles */}
              <motion.div
                variants={sparkleVariants}
                animate="animate"
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="h-6 w-6 text-yellow-400" />
              </motion.div>
              <motion.div
                variants={sparkleVariants}
                animate="animate"
                className="absolute -bottom-2 -left-2"
                style={{ animationDelay: "1s" }}
              >
                <Star className="h-5 w-5 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main headline with typing effect */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hey, I'm{" "}
              </span>
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                Arman
              </motion.span>
            </h1>
            
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Rocket className="h-6 w-6 text-orange-500" />
              <p className="text-xl md:text-2xl text-muted-foreground">
                Full-Stack Developer & Student
              </p>
              <Heart className="h-6 w-6 text-red-500 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate developer studying at the{" "}
            <span className="text-blue-600 font-semibold">University of Florida</span>, 
            building innovative solutions with modern technologies. 
            I love turning ideas into reality through code and solving complex problems.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="group" asChild>
                <Link href="/projects">
                  <span>View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Highlights Section */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I Do Best
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I combine technical expertise with creative problem-solving to build 
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50 group-hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/20">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Let's Build Something Amazing
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I'm always excited to work on new projects and collaborate with 
                  talented people. Whether you have an idea or just want to chat 
                  about technology, I'd love to hear from you!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" asChild>
                      <Link href="/contact">Get In Touch</Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/about">Learn More About Me</Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      </div>

      {/* Custom CSS for blob animation */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
