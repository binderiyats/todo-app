let express = require("express");
let app = express();

app.use(express.json());

const tasks = [
  { id: 1, name: "task1" },
  { id: 2, name: "task2" },
  { id: 3, name: "task3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/tasks", (req, res) => {
  res.send(tasks);
});

app.get("/api/tasks/:id", (req, res) => {
  //   res.send(req.params.id);
  const task = tasks.find((c) => c.id === parseInt(req.params.id));
  if (!task) res.status(404).send("The task with given ID was not found");
  res.send(task);
});

app.post("/api/tasks", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    // send 404
    res.status(404).send("Name is required and should be minimum 3 characters");
    return;
  }

  const task = {
    id: tasks.length + 1,
    name: req.body.name,
  };
  tasks.push(task);
  res.send(task);
});

// PORT
const port = process.env.PORT || 5050;
app.listen(5050, () => console.log(`Listening port on ${port}...`));
