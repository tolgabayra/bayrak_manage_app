import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { appAxios } from "../../../utils/appAxios";


export const authOptions: NextAuthOptions = {
  secret: "esgrdthfyjgukhıjok",
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await appAxios.post("/auth/login",{
          email : credentials?.email,
          password: credentials?.password
        })
        const user = res.data  
        const cookies = res.headers['set-cookie']
        //console.log("COOKIE",cookies);
        //console.log(user);
        
        if (res.status === 200) {                  
          return user
        }
        return null
      }
    }),
    GoogleProvider({
      clientId: "",
      clientSecret: ""
    })
  ],

  session: {
    strategy: "jwt"
  },

  pages: {
    signIn: "/signin"
  },
  callbacks: {
    async jwt({ token, user }) {
     // console.log("USER IS =>", user);

      console.log("account IS =>", token);
      
      return {...user, ...token}
    },
    async session({ session, token }) {
     // console.log("SESSION=>", session);
      //console.log("TOKEN=>" , token);
      
      
      return { ...session };
    },
  }
}

export default NextAuth(authOptions)