import { Navbar1 } from "@/components/layout_components/Navbar1";
import "./globals.css";
import Mobile_Nav from "@/components/layout_components/Mobile_Nav";
import TopNavbar from "@/components/layout_components/TopNavbar";
import Footer from "@/components/layout_components/Footer";
import { Jost } from "next/font/google";
import { Provider } from "@/Context/useCart";
import Store from "@/Context/Store";

export const metadata = {
  title: "Jurhy",
  description: "this is an ecommerce website for medical related products",
};

export const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.className}>
      <body className="relative">
        <Provider>
          <Store>
            <TopNavbar />
            <Navbar1 />

            {children}

            <Mobile_Nav />

            <Footer />
          </Store>
        </Provider>
      </body>
    </html>
  );
}
