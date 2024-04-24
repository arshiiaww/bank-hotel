
import Nav from "@/components/Nav";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Bank Hotel",
  description: "Luxurious hotels in the most European cities",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/styles/app.css" />
        <link rel="stylesheet" href="/assets/styles/responsive.css" />
      </head>
      <body className={playfair.className}>
        <header className="header">
          <div className="container">
            <Nav />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
