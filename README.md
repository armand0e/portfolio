# 🚀 Arman Rafiee - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## ✨ Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Beautiful UI**: shadcn/ui components with custom animations
- **Dark/Light Theme**: System-aware theme switching
- **Responsive Design**: Mobile-first responsive layout
- **GitHub Integration**: Live repository data from GitHub API
- **Performance Optimized**: Skeleton loading states and optimized images
- **Smooth Animations**: Framer Motion powered interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/armand0e/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Deployment

### Option 1: Docker Build & Run

1. **Build the Docker image**
   ```bash
   docker build -t arman-portfolio .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 arman-portfolio
   ```

### Option 2: Docker Compose (Recommended)

1. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Stop the container**
   ```bash
   docker-compose down
   ```

### Production Deployment

For production deployment, you can:

1. **Deploy to any cloud provider** (AWS, Google Cloud, Azure)
2. **Use container services** (AWS ECS, Google Cloud Run, Azure Container Instances)
3. **Deploy to Kubernetes** using the provided Docker image
4. **Use Docker on VPS** with reverse proxy (nginx)

## 🌐 Live Demo

Visit the live portfolio: [https://www.armanrafiee.com](https://www.armanrafiee.com)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── experience/     # Experience page
│   │   ├── projects/       # Projects page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── components/         # Reusable components
│       ├── ui/            # shadcn/ui components
│       ├── navigation.tsx  # Navigation component
│       └── theme-provider.tsx
├── public/                 # Static assets
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

To customize this portfolio for your own use:

1. **Update personal information** in `resume.md`
2. **Replace portrait image** in `public/Portrait.jpg`
3. **Update GitHub username** in `src/app/projects/page.tsx`
4. **Modify contact information** throughout the components
5. **Customize colors and styling** in `tailwind.config.js`

## 🚢 Deployment Options

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload `out` folder to Netlify
```

### Docker on any platform
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About

Created by **Arman Rafiee** - University of Florida student studying Microbiology & Cell Science with a minor in Computer Science. Passionate full-stack developer with experience in modern web technologies.

- **GitHub**: [@armand0e](https://github.com/armand0e)
- **LinkedIn**: [Arman Rafiee](https://linkedin.com/in/arman-rafiee-0601ba235)
- **Email**: arman.rafiee99@gmail.com

---

⭐ If you found this portfolio template helpful, please give it a star!
