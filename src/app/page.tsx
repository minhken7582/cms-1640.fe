import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/home";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function App() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/auth/sign-in");
  }

  return (
    <>
      <Header session={session} />

      <HomePage />

      <Footer session={session} />
    </>
  );
}
