import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { generateObjectId } from "@/utils";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/sign-in",
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
        const email = credentials?.email || "";

        return {
          id: generateObjectId(),
          roleId: email.split("@gmail.com")[0],
          email: email,
          name: email.split("@gmail.com")[0].toUpperCase(),
          picture: "",
        };
      },
    }),
  ],

  callbacks: {
    session({ session, token, user }) {
      session.user.roleId = user.roleId;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
