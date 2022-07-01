const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middleware = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 8000;

server.use(middleware);
server.use(router);

server.listen(port, () =>
  console.log(`Successfullyyyyy started server on port: ${port}`)
);
