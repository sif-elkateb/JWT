const customError = require('./customError');

const { StatusCodes } = require('http-status-codes')


class badRequestError extends customError{
    constructor(message){
        super(message);
        this.statuscode=StatusCodes.BAD_REQUEST
    }
}

module.exports=badRequestError;