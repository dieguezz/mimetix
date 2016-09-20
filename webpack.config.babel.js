// default webpack index file
// it will be loaded when we run webpack

import config from './webpack';

const c = config();

export { c as default }
