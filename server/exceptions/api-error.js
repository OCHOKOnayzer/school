module.exports = class ApiError extends Error { 
    status;
    errors; 

    constructor(status, message, errors = []){ 
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован');
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static NotFoundError(message = 'Ресурс не найден') {
        return new ApiError(404, message);
    }

}