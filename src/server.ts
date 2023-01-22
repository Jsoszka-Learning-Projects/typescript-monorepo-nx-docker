import { app } from "./app.js";

app.listen({ host: "0.0.0.0", port: 3000 }, () => {
  console.log("Server Listening on port 3000");
});
