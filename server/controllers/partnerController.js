const { partnerModel, validPartner} = require("../models/partnerModel");
const ErrorResponse = require("../utils/errorResponse");

const getAllPartners = async (req, res, next) => {
    try{
    const partners = await partnerModel.find({})

        if (!partners){
            return next(new ErrorResponse("No Partner Details found,try again",404))
        }
        res.send({message:"success",partners:partners})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const getOnePlan = async (req, res, next) => {
    try{
        const onePlan = await partnerModel.findById(req.params.id)

        if (!onePlan){
            return next(new ErrorResponse("No Partner Member Details found,try again",404))
        }
        res.send({message:"success",plan:onePlan})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const addNewPartner = async (req, res, next) => {
    try{
        const {error} = validPartner(req.body)
        if(error){
            next(new ErrorResponse(error.details[0].message,301))
        }
    }
    catch(e){
        return next(new ErrorResponse(e,500))
    }
        try{
        const {name,image} = req.body

        const newPartner = await partnerModel.create({name:name,image:image})

        if (!name || !image ){
            return next(new ErrorResponse("You must fill all the values.",404))
        }
        res.send({status:"success",message:"added new partner!",new:newPartner})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const editOnePartner = async (req, res, next) => {
     try{
        const {error} = validPartner(req.body)
        if(error){
            next(new ErrorResponse(error.details[0].message,301))
        }
    }
    catch(e){
        return next(new ErrorResponse(e,500))
    }
    try{
        const {name,image} = req.body

        const updatedPartner = await partnerModel.findByIdAndUpdate(req.params.id,{name:name,image:image})

        if (!name || !image ){
            return next(new ErrorResponse("You must fill all the values.",404))
        }
        res.send({status:"success",message:"edited member!",Edited:updatedPartner})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

const deleteOnePartner = async (req, res, next) => {
    try{

        const deletedMember = await partnerModel.findByIdAndDelete(req.params.id)

        if(!deletedMember) {
            next(new ErrorResponse("Type the correct id from the database!",404))
        }
        res.send({message:"deleted member!",status:"success",deleted:deletedMember})
    } catch (error) {
    return next(new ErrorResponse(error, 500));
    }
}

module.exports = {
    getAllPartners,getOnePlan,addNewPartner,deleteOnePartner,editOnePartner
}