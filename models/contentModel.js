const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const EditContent = sequelize.define('content', {
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
    }
}, { 
    timestamps: true,  // Automatically creates createdAt and updatedAt
    tableName: 'content' // Ensure table name matches
});

sequelize.sync();

module.exports = EditContent;
