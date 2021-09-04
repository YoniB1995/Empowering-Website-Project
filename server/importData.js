
require('dotenv').config();

// const db = require('./db')

const team = require('./models/teamModel')

const teamData = require('./data/teamInfo.json')

const importData = async () =>{
try{
        await team.deleteMany({})
        await team.insertMany(teamData)
    

        proccess.exit();
        }catch(error){
        console.error("Error with data import")
        process.exit(1);
    }

}


module.exports = importData();