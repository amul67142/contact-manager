
const {constants}=require('constants');

const errorHandeler = (err, req, res, next) => {
    const status=res.statusCode ? res.statusCode : 500;
    switch (status) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Not found",message : err.message , stackTrace: err.stack});
            
            break;
        case constants. NOT_FOUND:
            res.json({title: "validation failed",message : err.message , stackTrace: err.stack});
            break;
    
        default:
            console.log("no error");
            break;
    }
   
   

}

module.exports={errorHandeler};


