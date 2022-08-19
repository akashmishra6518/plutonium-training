const PublisherModel= require("../models/publisher")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublisherData= async function (req, res) {
    let publisher = await PublisherModel.find()
    res.send({data: publisher})
}

module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData