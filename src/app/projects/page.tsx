"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork,
  Code2,
  Calendar,
  Eye,
  Zap,
  Globe,
  Smartphone,
  Database,
  Brain,
  Shield,
  Gamepad2,
  RefreshCw
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

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

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  private: boolean;
  fork: boolean;
}

const featuredProjects = [
  {
    title: "Portfolio Website",
    description: "A modern, multi-page portfolio built with Next.js, shadcn/ui, and Framer Motion. Features responsive design, dark mode, and smooth animations.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    github: "https://github.com/armand0e/portfolio",
    live: "https://arman-rafiee.vercel.app",
    category: "Web Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "FastlyFixed Business Platform",
    description: "Complete business management system for my tech repair company, handling customer management, inventory tracking, and service scheduling.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
    category: "Full-Stack",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Smart Home Server",
    description: "Custom-built home server with GPU mining capabilities, network-attached storage, and automated backup systems.",
    technologies: ["Linux", "Docker", "Python", "Bash", "Networking"],
    category: "System Administration",
    icon: Database,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Academic Research Tools",
    description: "Data analysis and visualization tools for microbiology research, helping streamline lab data processing and statistical analysis.",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter", "NumPy"],
    category: "Data Science",
    icon: Brain,
    color: "from-orange-500 to-red-500"
  }
];

const categories = ["All", "Web Development", "Full-Stack", "System Administration", "Data Science", "Mobile", "Game Development"];

// Skeleton component for loading state
const ProjectSkeleton = () => (
  <Card className="h-full bg-gradient-to-br from-background to-muted/50">
    <CardHeader className="pb-4">
      <div className="flex items-start gap-4">
        <Skeleton className="w-16 h-16 rounded-xl" />
        <div className="flex-1">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/3" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-20" />
      </div>
    </CardContent>
  </Card>
);

const RepoSkeleton = () => (
  <Card className="h-full bg-gradient-to-br from-background to-muted/50">
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-8 w-8" />
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="flex flex-wrap gap-1">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-10" />
      </div>
    </CardContent>
  </Card>
);

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/armand0e/repos?sort=updated&per_page=50');
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filter repositories: only show public repos with either 1+ stars OR a description
        const filteredRepos = data.filter((repo: GitHubRepo) => 
          !repo.private && 
          !repo.fork && // Exclude forked repositories
          (repo.stargazers_count > 0 || (repo.description && repo.description.trim().length > 0))
        );
        
        setRepos(filteredRepos.slice(0, 12)); // Limit to 12 repos
        setError(null);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError('Failed to load GitHub repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === selectedCategory);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-orange-500",
      "C++": "bg-purple-500",
      HTML: "bg-red-500",
      CSS: "bg-blue-400",
      Shell: "bg-gray-500",
      Go: "bg-cyan-500",
    };
    return colors[language] || "bg-gray-400";
  };

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
          My Projects
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          A showcase of my technical projects, from full-stack web applications 
          to system administration and data analysis tools.
        </motion.p>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        className="mb-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full relative overflow-hidden bg-gradient-to-br from-background to-muted/50 group-hover:shadow-2xl transition-all duration-300">
                {/* Project Icon/Header */}
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* GitHub Repositories */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Github className="h-8 w-8 text-primary" />
            GitHub Repositories
          </h2>
          <p className="text-muted-foreground">
            Featured repositories with stars or detailed descriptions
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Array.from({ length: 6 }).map((_, index) => (
              <RepoSkeleton key={`repo-skeleton-${index}`} />
            ))}
          </div>
        ) : error ? (
          <motion.div variants={fadeInUp} className="text-center">
            <Card className="max-w-md mx-auto bg-destructive/10 border-destructive/20">
              <CardContent className="p-6">
                <p className="text-destructive mb-4">{error}</p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                  className="gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Retry
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : repos.length === 0 ? (
          <motion.div variants={fadeInUp} className="text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  No featured repositories found. Repositories need either 1+ stars or a description to be featured.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-background to-muted/50 group-hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg truncate group-hover:text-primary transition-colors">
                        {repo.name}
                      </CardTitle>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {repo.description || "Featured repository"}
                    </p>

                    {/* Repository Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                            <span>{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                      <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>

                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {repo.topics.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{repo.topics.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Repositories Button */}
        <motion.div variants={fadeInUp} className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/armand0e" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
} 