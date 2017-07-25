const Koa = require('koa');
const logger = require('koa-logger');

const app = new Koa();

// const home = function* (ctx, next) {
//   console.log(ctx);
//   ctx.body = 'Hello Cong';
//   console.dir(ctx);
// };


// rest API
app.use(logger());
app.use(async (ctx) => {
  ctx.body = 'Hello Cong';

});


// listen
app.listen(3000);

console.log('listening on port 3000');