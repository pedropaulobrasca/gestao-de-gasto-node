import passport from "passport";
import prisma from "./prisma";

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  // Find user in database, call done() with user object
  done(null, user);
});

const GithubStrategy = require("passport-github").Strategy;

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3333/auth/github/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      cb: any
    ) => {
      // Create or update user using prisma, call cb() with user object
      const user = await prisma.user.findUnique({
        where: { id: profile.id },
      });

      if (!user) {
        await prisma.user.create({
          data: {
            id: profile.id,
            email: profile.emails[0].value,
          },
        });
      }

      return cb(null, profile);
    }
  )
);

export default passport;
