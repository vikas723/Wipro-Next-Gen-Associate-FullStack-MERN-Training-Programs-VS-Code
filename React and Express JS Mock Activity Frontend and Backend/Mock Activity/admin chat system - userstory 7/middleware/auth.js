module.exports = function(role){
    return(req, res, next) =>{
        if(req.query.role !== role){
            return res.send("Access Denied");
        }
        next();
    }
}