import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Toaster } from "react-hot-toast";

import { api } from "~/lib/api";

import "~/styles/globals.css";
import Head from "next/head";

import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import Nav from "~/components/base/Nav";
import Footer from "~/components/base/Footer";
import Feedback from "~/components/base/Feedback";
import { TooltipProvider } from "~/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-header",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>Nick Craux Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={`TODO`} />

        <meta property="og:type" content={`website`} />
        <meta property="og:url" content={`TODO/`} />
        <meta property="og:title" content={`TODO`} />
        <meta property="og:description" content={`TODO`} />
        <meta property="og:image" content={`TODO/og-image.png`} />

        <meta property="twitter:card" content={`summary_large_image`} />
        <meta property="twitter:url" content={`TODO/`} />
        <meta property="twitter:title" content={`TODO`} />
        <meta property="twitter:description" content={`TODO`} />
        <meta property="twitter:image" content={`TODO/og-image.png`} />
      </Head>
      <Script
        defer
        src="https://analytics.intellisay.xyz/script.js"
        data-website-id={process.env.UMAMI_WEBSITE_ID}
      />
      <SessionProvider session={session}>
        <TooltipProvider>
          <div className={`${inter.variable} ${poppins.variable} font-body`}>
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </div>
          <Feedback />
          <Toaster
            position="top-right"
            containerStyle={{
              top: "2rem",
              right: "2rem",
            }}
          />
        </TooltipProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
