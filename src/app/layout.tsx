import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arman Rafiee - Full-Stack Developer & Student",
  description: "Portfolio of Arman Rafiee - University of Florida student studying Microbiology & Cell Science with a minor in Computer Science. Full-stack developer with experience in Python, JavaScript, TypeScript, and more.",
  keywords: ["Arman Rafiee", "Full-Stack Developer", "University of Florida", "Microbiology", "Computer Science", "Python", "JavaScript", "TypeScript"],
  authors: [{ name: "Arman Rafiee" }],
  creator: "Arman Rafiee",
  icons: {
    icon: "/Portrait.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            <Navigation />
            <main className="relative">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
