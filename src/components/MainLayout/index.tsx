import Image from "next/image";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main
        className="min-h-screen bg-gray-50 dark:bg-gray-900"
        style={{
          minHeight: "calc(100vh - 116px)",
        }}
      >
        <div className="max-w-screen-xl p-4 mx-auto">{children}</div>
      </main>
    </>
  );
}
