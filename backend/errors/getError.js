const errors = require('./errors')

function getError(code) {
    let error = errors.find(obj => obj.code == code)
    console.log(error);
    if (typeof error !== 'undefined') {
        return error
    } else {
        return getError(0)
    }

}

module.exports = getError