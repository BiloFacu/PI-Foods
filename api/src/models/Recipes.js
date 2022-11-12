const { DataTypes } = require('sequelize')

module.exports = sequelize => {
    sequelize.define("recipes", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        reviews: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        healthScore:{
            type: DataTypes.FLOAT,
        },
        steps:{
            type: DataTypes.TEXT
        }
    },{
        timestamps:false
    })
}