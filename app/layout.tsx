import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tanushsingla.vercel.app"),
  title: {
    default: "Tanush Singla | CS Student, Systems Engineer & Founder",
    template: "%s | Tanush Singla",
  },
  description: "Portfolio of Tanush Singla - Computer Science Student, Systems Programmer, ML Developer, and Founder & CEO of Aetherin. Specializing in high-performance computing, cloud architecture, and modern web development.",
  keywords: ["Tanush Singla", "Software Engineer", "Systems Programmer", "Machine Learning", "Aetherin", "Next.js", "C++", "Python", "React", "Vector Search", "Quantization", "Founder"],
  authors: [{ name: "Tanush Singla", url: "https://tanushsingla.vercel.app" }],
  creator: "Tanush Singla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanushsingla.vercel.app",
    title: "Tanush Singla | CS Student, Systems Engineer & Founder",
    description: "Computer Science Student, Systems Programmer, ML Developer, and Founder & CEO of Aetherin.",
    siteName: "Tanush Singla Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Tanush Singla Profile Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanush Singla | CS Student, Systems Engineer & Founder",
    description: "Computer Science Student, Systems Programmer, ML Developer, and Founder & CEO of Aetherin.",
    images: ["/profile.png"],
    creator: "@singla_tanush",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tanush Singla",
  url: "https://tanushsingla.vercel.app",
  image: "https://tanushsingla.vercel.app/profile.png",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "Aetherin"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sant Longowal Institute of Engineering & Tech"
  },
  sameAs: [
    "https://github.com/cidtheshadow",
    "https://www.linkedin.com/in/tanush-singla-330a27281/",
    "https://instagram.com/singla_tanush"
  ],
  description: "Computer Science Student, Systems Programmer, ML Developer, and Founder & CEO of Aetherin."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" style={{ colorScheme: "dark" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-deep-space text-slate-100 min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
