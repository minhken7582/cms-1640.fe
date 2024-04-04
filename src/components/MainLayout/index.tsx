import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main
        className="min-h-screen bg-gray-50 dark:bg-gray-900"
        style={{
          minHeight: "calc(100vh - 116px)",
        }}
      >
        <div className="max-w-screen-xl p-4 mx-auto">{children}</div>
      </main>

      <Footer />
    </>
  );
}
