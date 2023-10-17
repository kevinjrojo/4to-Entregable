import path from "path";

const publicPath = path.join(__dirname, "public");

const configurePaths = (app) => {
  app.use(express.static(publicPath));
};

export { configurePaths };
