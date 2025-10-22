import "./globals.css";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import { CartProvider } from "@/app/context/cartContext";

export const metadata = {
  title: "Little Feet - Baby Products Store",
  description: "Shop adorable baby essentials from LittleFeet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="appContainer">
        <CartProvider>
          <Header />
          <main className="mainContent">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
