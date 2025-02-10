const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

        const Image = sequelize.define('Image', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
              },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: false
            },
            category: {
                type: DataTypes.STRING,
                allowNull:false
            }
        }, { timestamps: true });

        sequelize.sync(); // Ensure table is created

module.exports = Image;