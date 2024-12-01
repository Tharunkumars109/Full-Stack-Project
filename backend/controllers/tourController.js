import Tour from '../models/Tour.js'

// create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res.
            status(200)
            .json({success:true, message:"Tour created successfully", data: savedTour})

    } catch (err) {

        res
            .status(500)
            .json({success:false, message:"Failed to create tour", error:err.message})
    }
}


// update tour
export const updateTour = async (req, res) => {
    const id= req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        res
            .status(200)
            .json({success:true, message:"Tour updated successfully", data: updatedTour,})

    } catch (err) {
        res
            .status(500)
            .json({success:false,  message:"Failed to update tour", error:err.message})
    }
}
// delete tour
export const deleteTour = async (req, res) => {
    const id= req.params.id
    try {
        await Tour.findByIdAndDelete(id);

        res
            .status(200)
            .json({success:true, message:"Tour deleted successfully"})

    } catch (err) {
        res
            .status(500)
            .json({success:false,  message:"Failed to delete tour", error:err.message})
    }
}
// getSingle tour
export const getSingleTour = async (req, res) => {
    const id= req.params.id
    try {
        const tour = await Tour.findById(id).populate('reviews');

        res
            .status(200)
            .json({success:true, message:"Tour found successfully", data: tour})

    } catch (err) {
        res
            .status(404)
            .json({success:false,  message:"can't find tour", error:err.message})
    }
}
//  tour
export const getAllTour = async (req, res) => {

    //for pagination
    const page = parseInt(req.query.page)
    //console.log(page)

    try {

        const tours = await Tour.find({}).populate('reviews').skip((page)*8).limit(8)

        res
            .status(200)
            .json({success:true, count: tours.length, message:"Tours found successfully", data: tours})

    } catch (err) {
        res
            .status(404)
            .json({success:false,  message:"can't find tour", error:err.message})
    }
}

// get tour by search
export const getTourBySearch = async (req, res) => {

    const city = new RegExp(req.query.city, 'i') // here 'i' is for case insensitive
    // const name = new RegExp(req.query.name, 'i') // here 'i' is for case insensitive
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {

        const tours = await Tour.find({city, distance: {$gte: distance}, maxGroupSize: {$gte: maxGroupSize}}).populate('reviews')

        res
            .status(200)
            .json({success:true, count: tours.length, message:"Tours found successfully", data: tours})

    }
    catch (err) {

        res
            .status(404)
            .json({success:false,  message:"can't find tour", error:err.message})
    }
}

// get featured tour
export const getFeaturedTours = async (req, res) => {
    try {
        const tours = await Tour.find({featured: true}).limit(8).populate('reviews')

        res
            .status(200)
            .json({success:true, count: tours.length, message:"Tours found successfully", data: tours})

    } catch (err) {

        res
            .status(404)
            .json({success:false,  message:"can't find tour", error:err.message})
    }
}

// get tour counts
export const getTourCount = async (req, res) => {

    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res
            .status(200)
            .json({success:true,  data: tourCount})

    } catch (err) {
        res
            .status(500)
            .json({success:false,  message:"can't fetch tour count", error:err.message})
    }
}