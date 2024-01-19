/**
 * @param {string[]} routeList list of all of your application routes
 */
function parseURLToRoute(routeList){
    return (req, res, next)=>{
        const currentUrl = req.originalUrl;
        const explodedUrl = currentUrl.split("/");

        routeList.forEach(route => {
            const explodedRoute = route.split("/");
            if(currentUrl === route){
                req.routeName = route;

                next();
            }else if(explodedUrl.length === explodedRoute.length
                && route.includes(":")
            ){
                req.routeName = route;

                next();
            }
        });

        next();
    }
}

module.exports = { parseURLToRoute };