class Exception extends Error {
    constructor(code, msg) {
        super(msg);
        this.code = code;
        this.message = msg;
    }

    getStatusCode() {
        return this.code;
    }
}

export class Unauthorization extends Exception {
    constructor(msg) {
        super(401, msg);
    }
}

export class InvalidParams extends Exception {
    constructor(msg) {
        super(400, msg);
    }
}

export class NotFound extends Exception {
    constructor(msg) {
        super(404, msg);
    }
}
