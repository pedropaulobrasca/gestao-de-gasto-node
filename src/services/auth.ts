import passport from "passport";

const GithubStrategy = require("passport-github").Strategy;

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
      return cb(null, profile);
    }
  )
);
