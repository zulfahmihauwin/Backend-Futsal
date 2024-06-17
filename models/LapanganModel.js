import db from "../config/database.js";
import { Sequelize } from "sequelize";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    idUser:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    nama:{
        type: DataTypes.CHAR,
        allowNull:false    
    },
    username:{
        type: DataTypes.CHAR,
        allowNull:false    
    },
    password:{
        type:DataTypes.CHAR,
        allowNull:false    
    },
    level:{
        type:DataTypes.BOOLEAN,
        allowNull:false    
    }
});

export default Users;