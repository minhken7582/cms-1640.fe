import { DefaultSession } from "next-auth";

export interface User {
  [key: string]: any;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      refreshToken: string;
      tokenType: string;
      info: any;
      accessToken: string & DefaultSession["user"];
      error?: string;
    };
  }
  interface User {
    refreshToken: string;
    tokenType: string;
    info: any;
    accessToken: string & DefaultSession["user"];
  }
}
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    info: any;
    error?: string;
  }
}
