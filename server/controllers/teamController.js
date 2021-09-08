const teamModel = require("../models/teamModel");
const ErrorResponse = require("../utils/errorResponse");

const getAllTeam = async (req, res, next) => {
    try{
    const team = await teamModel.find({})

        if (!team){
            return next(new ErrorResponse("No Team Details,try again",404))
        }
        res.send({message:"success",team:team})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const getTeamMember = async (req, res, next) => {
    try{
        const teamMember = await teamModel.findById(req.params.id)

        if (!teamMember){
            return next(new ErrorResponse("No Team Member Details,try again",404))
        }
        res.send({message:"success",member:teamMember})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const getTeamMemberByRole = async (req, res, next) => {
    try{
    const teamByRole = await teamModel.find({role:req.body.role})
        if (!teamByRole){
            return next(new ErrorResponse("No Team Details,try again",404))
        }
        res.send({message:"success",members:teamByRole})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const addNewMember = async (req, res, next) => {
    try{
        const {fullname,role,image,description} = req.body

        const newMember = await teamModel.create({fullname:fullname,role:role,image:image,description:description})

        if (!fullname || !role || !image || !description){
            return next(new ErrorResponse("You must fill all the values.",404))
        }
        res.send({message:"added new member!",new:newMember})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const editTeamMember = async (req, res, next) => {
    try{
        const {fullname,role,image,description} = req.body

        const updatedMember = await teamModel.findByIdAndUpdate(req.params.id,{fullname:fullname,role:role,image:image,description:description})

        if (!fullname || !role || !image || !description){
            return next(new ErrorResponse("You must fill all the values.",404))
        }
        res.send({message:"edited member!",Edited:updatedMember})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const deleteTeamMember = async (req, res, next) => {
    try{

        const deletedMember = await teamModel.findByIdAndDelete(req.params.id)

        if(!deletedMember) {
            next(new ErrorResponse("Type the correct id from the database!",404))
        }
        res.send({message:"deleted member!",Deleted:deletedMember})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

module.exports = {
    getAllTeam,getTeamMember,getTeamMemberByRole,addNewMember,editTeamMember,deleteTeamMember
}