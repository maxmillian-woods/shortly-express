const parseCookies = (req, res, next) => {
    let cookieString = req.headers.cookie || '';
    parsedCookie = cookieString.split('; ').reduce((cookies, cookie) => {
        if (cookie.length) {
            let index = cookie.indexOf('=');
            let key = cookie.slice(0, index);
            let token = cookie.slice(index + 1);
            cookies[key] = token;
        }
        return cookies;
    }, {});
    req.cookies = parsedCookie;

    next();
};

module.exports = parseCookies;