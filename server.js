const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

app.locals.mantras = { 
  mantras : [
`I forgive myself and set myself free.`,
`I believe I can be all that I want to be.`,
`I am in the process of becoming the best version of myself.`,
`I have the freedom & power to create the life I desire.`,
`I choose to be kind to myself and love myself unconditionally.`,
`My possibilities are endless.`,
`I am worthy of my dreams.`,
`I am enough.`,
`I deserve to be healthy and feel good.`,
`I am full of energy and vitality and my mind is calm and peaceful.`,
`Every day I am getting healthier and stronger.`,
`I honor my body by trusting the signals that it sends me.`,
`I manifest perfect health by making smart choices.`,
`Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.`,
`Don’t let yesterday take up too much of today.`,
`Every day is a second chance.`,
`Tell the truth and love everyone.`,
`I am free from sadness.`,
`I am enough.`,
`In the beginning it is you, in the middle it is you and in the end it is you.`,
`I love myself.`,
`I am present now.`,
`Inhale the future, exhale the past.`,
`This too shall pass.`,
`Yesterday is not today.`,
`The only constant is change.`,
`Onward and upward.`,
`I am the sky, the rest is weather.`,
]
  }
  
app.get("/:mantra", (request, response) => {
  const data = app.locals.mantras;
  const mantra = data[Math.floor(Math.random() * 27)]  


  if (!mantra) {
    response.status(404).send({
      error: `Sorry this mantra doesn't exist yet!`,
    });
  }
  response.send({ mantra });
});

app.set("port", process.env.PORT || 3001);
app.locals.title = "mantras-api";

app.get("/", (request, response) => {
  const mantras = app.locals.mantras;
  if (!mantras) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  response.send({ mantras });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});