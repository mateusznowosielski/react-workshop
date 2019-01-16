// @ts-ignore
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    /**
     * @return {Boolean}
     */
    let filter = function (pathname) {
        // Somewhat of a kludge... Have to not only capture the '/r' but also call that should be local to the server, IE '/static' and '/favicon'
        // Note: Using the regex instead of 'startsWith' for browser cross compatibility. Don't think performance is hindered greatly if at all.
        // console.log('===============> ', pathname, pathname.match('^((?!/r/).)*$') != null && pathname.match('^((?!/static).)*$') != null && pathname.match('^((?!/favicon).)*$') != null && pathname.match('^((?!/main).)*$') != null);
        return (pathname.match('^((?!/r/).)*$') != null && pathname.match('^((?!/static).)*$') != null && pathname.match('^((?!/favicon).)*$') != null && pathname.match('^((?!/main).)*$') != null);
    };

    app.use(proxy(filter, {target: 'http://localhost'}));
};