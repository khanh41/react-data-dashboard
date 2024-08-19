import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProviders from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export default NextAuth(authOptions);
