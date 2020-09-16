import express from 'express';
import chalk from 'chalk';
import reactSSR from './middlewares/reactSSR';
import paths from '../../webpack/paths';
const app = express();

app.use('/static', express.static(paths.clientBuild));

app.use(reactSSR());

app.listen(9981, () => {
  console.log(`[${new Date().toISOString()}]`, chalk.blue(`App is running: http://localhost:9981`));
});

export default app;
