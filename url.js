const url=require('url');
const urlString='http://example.com/path?foo=bar&baz=qux';
const parsedUrl=url.parse(urlString,true);//true because we want in object form
console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);