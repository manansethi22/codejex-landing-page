import type { Metadata } from "next";
import { Comfortaa, Gabarito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
  preload: true,
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | CodeJex Technologies",
    default: "CodeJex Technologies",
  },
  description:
    "CodeJex Technologies is a software development company that specializes in web development, mobile app development, and custom software development. Accelerate your business with our software development services.",
  metadataBase: new URL("https://codejex-landing-page.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(gabarito.className, comfortaa.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
