import express from "express";
import bodyParser from "body-parser";
import portuguesRoute from "./routes/exames/uem/portugues/portuguesRoute.js"
import matematicaRoute from "./routes/exames/uem/matematica/matematicaRoute.js"

const app = express();
const PORT = 3000;
const users = [
  {
    id: 73576,
    mesagem: "Ola API funcionando",
  },
]

app.use(bodyParser.json());
app.use("/exames/uem/portugues", portuguesRoute)
app.use("/exames/uem/matematica", matematicaRoute)




app.get("/", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))