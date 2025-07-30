const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "applicaation/json",
        "User-Agent": "Writing JavaScript action GitHub Skills course",
    },
    json: true,
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;
