import path from 'path';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import manifestHelpers from 'express-manifest-helpers';
import bodyParser from 'body-parser';
import paths from '../../webpack/paths';
import reactSSR from './middlewares/reactSSR';

const app = express();

app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`,
  })
);

app.use(reactSSR());

app.listen(9981, () => {
  console.log(`[${new Date().toISOString()}]`, chalk.blue(`App is running: http://localhost:9981`));
});

export default app;
