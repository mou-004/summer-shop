import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description: "A modern summer eCommerce platform for seasonal products."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="suncart">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
