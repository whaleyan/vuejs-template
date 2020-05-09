const isDevelopment = process.env.NODE_ENV === "development" ? true : false;
let URLs = {};
if (isDevelopment) {
    // for develop enviroment
    URLs = {
        staticUrl: ".",
        baseUrl: "http://test.com"
    };
} else {
    const isTest = process.env.NODE_ENV === "test" ? true : false;
    if(isTest) { // for test enviroment
        URLs = {
            baseUrl: "https://production.env.com"
        };
    } else { // for production enviroment
        URLs = {
            baseUrl: "https://production.env.com"
        };
    }
    
}
export { isDevelopment };
export default URLs;
