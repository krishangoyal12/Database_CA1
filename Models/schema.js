const {Schema, model} = require('mongoose')

const restaurantSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    items:{
        type: [String]
    }
})


const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
})


module.exports = {
    Restaurant: model('Restaurant', restaurantSchema),
    Item: model('Item', itemSchema)
}