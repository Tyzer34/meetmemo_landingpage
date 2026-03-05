import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Import and configure fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeetMemo.ai - Your Meeting Assistant",
  description:
    "MeetMemo.ai helps you manage and get insights from your meetings with AI-powered tools",
  keywords: "meeting assistant, AI meeting tools, meeting management",
  icons: {
    icon: "/logo_dark-cropped.svg",
    shortcut: "/logo_dark-cropped.svg",
    apple: "/logo_dark-cropped.svg",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/logo_dark-cropped.svg",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/logo_dark-cropped.svg",
      },
    ],
  },
  openGraph: {
    title: "MeetMemo.ai - Your Meeting Assistant",
    description:
      "MeetMemo.ai helps you manage and get insights from your meetings with AI-powered tools",
    type: "website",
    siteName: "MeetMemo.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeetMemo.ai - Your Meeting Assistant",
    description:
      "MeetMemo.ai helps you manage and get insights from your meetings with AI-powered tools",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <div>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
