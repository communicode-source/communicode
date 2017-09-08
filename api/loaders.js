import fs from 'fs';

require.extensions['.graphqls'] = (module, filename) => {
  // eslint-disable-next-line no-param-reassign
  module.exports = fs.readFileSync(filename, 'utf-8');
};
