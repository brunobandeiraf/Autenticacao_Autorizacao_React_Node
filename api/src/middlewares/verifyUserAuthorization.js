function verifyUserAuthorization(roleToVerify){
    return(request, response, next) => {
        const { role } = request.user
        
        if(role !== roleToVerify){
            throw new AppError("Unauthorized", 401)
        }

        return next()
    }
}

module.exports = verifyUserAuthorization