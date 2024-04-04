import NextAuth, { User, type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name: string;
      roleId: string;
      picture: string;
    };
  }
  interface User {
    id: string;
    email: string;
    name: string;
    roleId: string;
    picture: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      email: string;
      name: string;
      roleId: string;
      picture: string;
    };
  }
}
