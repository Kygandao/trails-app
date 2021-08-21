const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Wishlist extends Model {}

Wishlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        trail_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //TODO: any other fields required??? 
        //Possible hooks???
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'wishlist'
    },
);

module.exports = Wishlist;