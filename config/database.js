import sequelize from 'sequelize';

const db = new sequelize('futsalyuk','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;