const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mainRouter = require("./Router/mainRouter");
const dbConnection = require("./Config/dbConnection");
const PORT = process.env.PORT || 8000;
const urlParser = express.json();

// const corsOrigin ={
//   origin:'http://localhost:3000', //or whatever port your frontend is using
//   credentials:true,            
//   optionSuccessStatus:200
// }

dbConnection();

app.use(urlParser);
app.use(mainRouter);
app.use(express.json());


app.get("/", (req, res) => {
  res.send("simple api hit");
});

app.listen(PORT, () => console.log(`Server is running at Local host: ${PORT}`));
