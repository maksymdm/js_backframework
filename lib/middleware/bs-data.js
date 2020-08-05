const url = require('url');

module.exports = (ctx, next) => {
    const { req } = ctx;
    const { pathname, query } = url.parse(req.url, true);
    ctx.path = pathname;
    ctx.query = query;
    ctx.method = req.mehtod.toLowerCase();
    return next();
}