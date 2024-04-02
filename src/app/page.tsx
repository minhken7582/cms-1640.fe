import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main
        className="min-h-screen bg-gray-50 dark:bg-gray-900"
        style={{
          minHeight: "calc(100vh - 112px)",
        }}
      ></main>

      <Footer />
    </>
  );
}
