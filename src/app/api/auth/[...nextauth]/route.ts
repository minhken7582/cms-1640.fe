import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { generateObjectId } from "@/utils";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/sign-n",
  },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        return {
          id: generateObjectId(),
          roleId: credentials?.email.split("@gmail.com")[0],
          email: credentials?.email,
          name: credentials?.email.split("@gmail.com")[0].toUpperCase(),
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
