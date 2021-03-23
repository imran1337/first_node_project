const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const portNumber = 3007;

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

app.get("/", (req, res) => {
  res.send("Hello Imran Khan");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const findData = users.find((d) => d.id === Number(id));
  res.send(findData);
});

app.post("/addUser", (req, res) => {
  console.log(req.body);
  const { id, name, username, email } = req.body;
  const userDetails = {
    id: id || users.length + 1,
    name,
    username,
    email,
  };
  name && email && username && users.push(userDetails);
  console.log(users);
  const details = `${username} added successfully`;
  if (username && name && email !== undefined) {
    res.send({
      status: 200,
      message: `${username} added successfully`,
      user: userDetails,
    });
  } else {
    res.send({ status: 400, message: "User Create failed" });
    console.log("user not created");
  }
});

app.listen(portNumber, () => console.log("Listening to port " + portNumber));
