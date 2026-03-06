import type { Metadata } from "next";
import { Inter, Roboto_Mono, Sacramento } from "next/font/google";
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
  metadataBase: new URL('https://meetmemo.ai'),
  title: {
    default: "MeetMemo.ai - Your Meeting Assistant",
    template: "%s | MeetMemo.ai"
  },
  description:
    "MeetMemo.ai helps you manage and get insights from your meetings with AI-powered tools. Automatically transcribe, summarize, and extract action items from your meetings.",
  keywords: "meeting assistant, AI meeting tools, meeting management, meeting transcription, AI notes, meeting summary",
  authors: [{ name: "MeetMemo" }],
  creator: "MeetMemo",
  publisher: "MeetMemo",
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
      "MeetMemo.ai helps you manage and get insights from your meetings with AI-powered tools. Automatically transcribe, summarize, and extract action items from your meetings.",
    url: "https://meetmemo.ai",
    siteName: "MeetMemo.ai",
    locale: "en_US",
    type: "website",
    countryName: "Belgium",
    images: [
      {
        url: "https://meetmemo.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "MeetMemo.ai - Your Meeting Assistant"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeetMemo.ai - Your Meeting Assistant",
    description:
      "MeetMemo.ai helps you manage and get insights from your meetings with AI-powered tools.",
    creator: "@meetmemo",
    images: ["https://meetmemo.ai/og-image.png"],
  },
  alternates: {
    canonical: "https://meetmemo.ai",
    languages: {
      "en": "https://meetmemo.ai",
      "nl": "https://meetmemo.ai/nl",
    },
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
