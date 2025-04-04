class ApiResponse{
    constructor(
        message = "Success",
        statuscode,
        data
    ) {

        this.message = message
        this.data = data
        this.success = 400 > statuscode
        this.statuscode = statuscode
        
    }
}

export {ApiResponse}