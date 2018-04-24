const { Firm } = require('./firm.model');

async function add(body) {
    let firm = convertToFirm(body);
    firm = await firm.save();
    return firm;
}

async function get() {

}

function update() {

}

function remove() {

}

async function getAll() {
    return await Firm.find().sort({ regDate: -1 });
}

function findByFilter() {

}

/**
 * 
 * Private method to create firm object from request body
 * 
 */
function convertToFirm(body) {
    let firm = new Firm({
        name: body.name
    })
    return firm;
}

module.exports.get = get;
module.exports.add = add;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getAll = getAll;
module.exports.findByFilter = findByFilter;