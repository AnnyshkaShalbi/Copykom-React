import '@/app/ui/globals.css';
import Script from 'next/script.js';
import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer/footer";
import { OrderProvider } from '@/app/context/OrderContext';


export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Копиком на Авиамоторной",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Красноказарменная, 15к1",
        "addressLocality": "Москва",
        "postalCode": "111250"
      },
      "telephone": "+ 7 (915) 431-06-66"
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Копиком на Аэропорте",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ленинградский проспект, 66",
        "addressLocality": "Москва",
        "postalCode": "125315"
      },
      "telephone": "+ 7 (915) 431-06-66"
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Копиком на Бауманской",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Ладожская, 10",
        "addressLocality": "Москва",
        "postalCode": "105066"
      },
      "telephone": "+ 7 (915) 431-06-66"
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Копиком на Октябрьской",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ленинский проспект, 4с1А",
        "addressLocality": "Москва",
        "postalCode": "119049"
      },
      "telephone": "+ 7 (915) 431-06-66"
    }
  ]

  return (
     <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      
      <Header />
        <main className="flex-grow pt-20 md:pt-40 mb-8 md:mb-11">
          <OrderProvider>
            {children}
          </OrderProvider>
        </main>
      <Footer />
    </>
  );
}
