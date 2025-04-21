import type { Metadata } from "next";
import '@/app/ui/globals.css';
import { noto_sans } from '@/app/ui/fonts';
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import { OrderProvider } from '@/app/context/OrderContext';

export const metadata: Metadata = {
  title: "ДЕШЁВАЯ ПЕЧАТЬ СТУДЕНТАМ",
  description: "❗️твёрдый переплёт диплома с эмблемой твоего вуза",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20 md:pt-40 mb-8 md:mb-11">
          <OrderProvider>
            {children}
          </OrderProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
