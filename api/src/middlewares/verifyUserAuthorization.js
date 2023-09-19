const AppError = require("../utils/AppError")

//['admin', 'customer', 'sale'].includes('sale')

function verifyUserAuthorization(roleToVerify){
    return(request, response, next) => {
        const { role } = request.user
        
        // Dentro de um array de opções, verificar se existe o perfil passado
        if(roleToVerify.includes(role)){
            throw new AppError("Unauthorized", 401)
        }

    }
}

module.exports = verifyUserAuthorization