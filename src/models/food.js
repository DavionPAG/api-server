'use strict';

const model = require('./schema.js');

class Crud {
    constructor() {
        this.model = model.clothesModel;
    }

    create(record) {
        let newRecord = new this.model(record);
        return newRecord.save();
    }
    
    get(_id) {
        if (_id) {
            return this.model.findOne({ _id })
        } else {
            return this.model.find({});
        }
    }

    update(_id, record) {
        return this.model.findByIdAndUpdate(_id, record, { new: true }) // New true => log updated record
    }

    delete(_id) {
        return this.model.findByIdAndDelete(_id);
    }
}

module.exports = Crud;

