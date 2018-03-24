import Promise from 'bluebird';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import Entry from '../../entry/server';

const readFileAsync = Promise.promisify(fs.readFile, { context: fs });
const templatePath = './dist/index.html';

export default () => (req, res) => {
  const props = {};
  return Promise.all([Entry(req.url, props), readFileAsync(templatePath)])
    .spread((reactComponent, template) => {
      const result = ReactDOMServer.renderToString(reactComponent);
      const helmet = Helmet.renderStatic();
      const helmetAttributes = Object.keys(helmet)
        .map(h => helmet[h].toString())
        .join('');

      let html = template
        .toString()
        .replace('{{result}}', result || '')
        .replace('{{props}}', JSON.stringify(props))
        .replace('{{helmetAttributes}}', helmetAttributes || '');

      if (process.env.NODE_ENV !== 'production') {
        html = html.replace('<%=htmlWebpackPlugin.files.webpackManifest%>', '');
      }
      return res.send(html);
    })
    .catch(err => res.json({ err }));
};
