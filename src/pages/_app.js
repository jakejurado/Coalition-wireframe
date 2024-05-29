import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { PatientProvider } from "@/providers/PatientProvider";

export default function App({ Component, pageProps }) {
  return (
    <PatientProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PatientProvider>
  )
}