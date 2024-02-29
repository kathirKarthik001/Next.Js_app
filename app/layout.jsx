import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({ 
  weight:['400','700'],
  subsets: ["latin"] });

export const metadata = {
  title: "Kathir Media",
  description: "Web development tutorials and courses",
  keywords:"html , css , web , web design , full stack , mern , javascript , next js , react js,node js , express js , rest api, axios api , fetch api , redux , redux-toolkit"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
