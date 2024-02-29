import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kathir Media",
  description: "Web development tutorials and courses",
  keywords:"html , css , web , web design , full stack , mern , javascript , next js , react js,node js , express js , rest api, axios api , fetch api , redux , redux-toolkit"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
