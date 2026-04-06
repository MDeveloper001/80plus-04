import { Montserrat } from "next/font/google";
import "@/app/_styles/globals.css";
import { ReservationProvider } from "@/app/_components/ReservetionContext";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import "leaflet/dist/leaflet.css";
const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s 80plus+",
    default: "Welcome / 80plus+",
  },
  description:
    "80PLUS International Limited is an African engineering and development firm delivering infrastructure, construction, renewable energy, and industrial solutions across Nigeria and Africa.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative m-0 p-0`}
      >
        <Header />
        <div className="flex-1">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
