import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MainLayout from "@/components/MainLayout";
import { OPTIONS } from "./api/auth/[...nextauth]/route";

export default async function App() {
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return redirect("/auth/sign-in");
  }

  return (
    <>
      <MainLayout />
    </>
  );
}
