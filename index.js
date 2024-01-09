import express, { json } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var data = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

app.get("/api", (req, res) => {
  res.json(data);
});

app.get("/api/:id", (req, res) => {
  const id = req.params.id;
  const response = data.filter((item) => item.id == id);
  res.json(response);
});

app.post("/api", json(), (req, res) => {
  const body = {
    userId: req.body.userId,
    id: req.body.id,
    title: req.body.title,
    body: req.body.body,
  };
  console.log(req.body);
  data.push(body);
  res.json(body);
});

app.put("/api/:id", json(), (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  const body = {
    userId: req.body.userId,
    id: req.body.id,
    title: req.body.title,
    body: req.body.body,
  };
  const index = data.findIndex((item) => item.id == id);
  data[index] = body;
  res.json(body);
});

app.delete("/api/:id", (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((item) => item.id == id);
  data.splice(index, 1);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
