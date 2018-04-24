const firmReposotory = require('./firm.repository');
const { Firm, validate } = require('./firm.model');

/**
 * 
 * Create new firm
 * 
 */
async function add(firm) {
    const { error } = validate(firm); // validate input fields
    if (error) return error.details[0].message;

    try {
        firm = await firmReposotory.add(firm);
        return firm;
    }
    catch (e) {
        console.log(e);
        return e;
    } // create and return firm
}

function get() {

}

function update() {

}

function remove() {

}

async function getAll() {
    return firmReposotory.getAll();
}

function findByFilter() {

}

module.exports.add = add;
module.exports.get = get;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getAll = getAll;
module.exports.findByFilter = findByFilter;