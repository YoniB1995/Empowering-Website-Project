const teamModel = require("../models/teamModel");
const ErrorResponse = require("../utils/errorResponse");

const getAllTeam = async (req, res, next) => {
        
    
    try{
    const team = await teamModel.find({})

        if (!team){
            return next(new ErrorResponse("No Team Details,try again",404))
        }
        res.send(team)
    } catch (error) {
    return next(new ErrorResponse("Server Error", 500));
    }
}

const getTeamMember = async (req, res, next) => {

    try{
                const teamMember = await teamModel.findById(req.params.id)

        if (!teamMember){
            return next(new ErrorResponse("No Team Member Details,try again",404))
        }
        res.send(teamMember)
    } catch (error) {
    return next(new ErrorResponse("Server Error", 500));
    }
}

module.exports = {
    getAllTeam,getTeamMember
}