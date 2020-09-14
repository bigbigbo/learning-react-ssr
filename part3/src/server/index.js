import path from 'path';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import reactSSR from './middlewares/reactSSR';
import paths from '../../webpack/paths';
const app = express();

app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));

app.use(cors());

app.use(reactSSR());

app.listen(9981, () => {
  console.log(`[${new Date().toISOString()}]`, chalk.blue(`App is running: http://localhost:9981`));
});

export default app;
