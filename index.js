const express = require("express");
const app = express();
app.use(express.json());

var users = [
  {
    title: "Mr.",
    name: "Ady",
    metadata: {
      profilePicture: "",
      pronouns: "He/ Him",
    },
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const kidneys = users[0].kidneys.length;
  const healthyKidneys = users[0].kidneys.filter(
    (kidney) => kidney.healthy
  ).length;
  const unhealthyKidneys = kidneys - healthyKidneys;
  res.json({
    kidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "A kidney added",
  });
});

app.put("/", (req, res) => {
  if (
    users[0].kidneys.length !=
    users[0].kidneys.filter((element) => element.healthy).length
  ) {
    users[0].kidneys.forEach((element) => {
      element.healthy = true;
    });
    res.json({
      msg: "All kidney are healthy now",
    });
  } else {
    res.status(411).json({
      msg: "All kidneys are healthy",
    });
  }
});

app.delete("/", (req, res) => {
  if (users[0].kidneys.length != 0) {
    users[0].kidneys = users[0].kidneys.filter((element) => element.healthy);
    res.json({
      msg: "All the unhealthy kidneys removed",
    });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

app.listen(3000);
