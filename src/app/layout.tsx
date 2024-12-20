import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./(Home)/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Namrata Chandarana",
	authors: {
		name: "NamrataChandarana",
	},
	description:
		  "A developer from India who enjoys building website frontends and is also a full-stack developer. Passionate about creating various tech projects and learning along the way.",
	openGraph: {
		title: "namrataChandarana",
		description:
			"A developer from India who enjoys building website frontends and is also a full-stack developer. Passionate about creating various tech projects and learning along the way.",
		siteName: "namrataChandarana-portfolio",
		// images: "/og.png",
		type: "website",
	},
	keywords: ["web developer", "freelancer", "Full stack developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
		</ThemeProvider>
      </body>
    </html>
  );
}
