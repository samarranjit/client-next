import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "ChoLab | Texas State University",
  description:
    "Innovative research in water sustainability and hydrology at Texas State University",
  keywords: "",
  openGraph: {
    title: "ChoLab | Texas State University",
    description:
      "Innovative research in water sustainability and hydrology at Texas State University",
    type: "website",
    url: "https://cholab.science",
  },
  alternates: {
    canonical: "https://cholab.science",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChoLab | Texas State University",
    description:
      "Innovative research in water sustainability and hydrology at Texas State University",
    images: ["https://cholab.science/ChoLabLogo.png"],
  },
  icons: {
    icon: "/cholabbgincluded.png",
    apple: "/cholabbgincluded.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Altmetric embed script */}
        <script
          type="text/javascript"
          src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"
          async
        ></script>
      </head>
      <body className={`${lora.variable} antialiased`}>{children}</body>
    </html>
  );
}
