const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const EditContent = sequelize.define('admin_user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.now
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.now
    },
}, { timestamps: true });

sequelize.sync();

module.exports = EditContent;
