import express from "express";
import routes from "./routes";
import cors from "cors";
import session from "express-session";

const app = express();
const port = process.env.PORT || 3333;

app.use(session({ secret: "cats" }));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
