import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import signInUser from "./signInUser";
import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  secret : process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        userName: {
          label: "text",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const { userName, password } = credentials as {
          userName: string;
          password: string;
        };
        try {
          const res = await signInUser({ userName, password });
          return {
            id: res?.id,
            accessToken: res.access_token,
            refreshToken: res.refresh_token,
          };
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/SignIn",
    signOut: "/",
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        (token.id = user.id),
          (token.accessToken = user.accessToken),
          (token.refreshToken = user.refreshToken);
      }

      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (session?.user) {
        (session.user.id = token.id),
          (session.user.accessToken = token.accessToken),
          (session.user.refreshToken = token.refreshToken);
      }

      return session;
    },
  },
};
