module.exports = function(express) {
    var router = express.Router();
    router.get('/', function(req, res, next) {
        console.log("At get request");
        res.end("Respond end at get request");
    })
    router.post('/home', function(req, res, next) {
        console.log("At post request");
        //res.end("Respond end at post request");
        next();
    })

    router.put('/', function(req, res, next) {})
    router.delete('/', function(req, res, next) {})
    return router;
}