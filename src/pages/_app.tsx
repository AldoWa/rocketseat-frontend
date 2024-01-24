import { type AppType } from "next/app";

import { Header } from "@/components/Header";
import { api } from "@/utils/api";

import { Saira } from 'next/font/google'

import "@/styles/globals.css";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ['latin'],
}) ;

const MyApp: AppType = ({ Component, pageProps }) => {
  return <main className={`${saira.className}`}>
    <Header />
    <Component {...pageProps} />
  </main>;
};

export default api.withTRPC(MyApp);
