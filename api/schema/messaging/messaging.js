import fs from 'fs';
import path from 'path';

const types = fs.readFileSync(path.resolve(__dirname, 'messaging.graphqls'), 'utf8');
const resolvers = {

};

export default { types, resolvers };