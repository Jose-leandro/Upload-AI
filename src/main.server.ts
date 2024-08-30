import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideServerRendering } from '@nguniversal/express-engine/tokens';
import { AppServerModule } from './app/app.config.server';
import { ngExpressEngine as expressEngine } from '@nguniversal/express-engine';

if (environment.production) {
  enableProdMode();
}

export const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist/browser');

const engine = ngExpressEngine({
  bootstrap: AppServerModule,
});

app.engine('html', engine);
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  res.render('index', { req });
});

