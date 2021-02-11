const db = require("../models");
const config = require("../config/config");
const Task = db.task;

exports.create = (req, res) => {
  const data = {
    assetCategoryId: req.body.assetCategoryId,
    assetTypeId: req.body.assetTypeId,
    assetNumber: req.body.assetNumber,
    manufacturerName: req.body.manufacturerName,
    manufacturerSerialNo: req.body.manufacturerSerialNo,
    buildYear: req.body.buildYear,
    grossWeight: req.body.grossWeight,
    tareWeight: req.body.tareWeight,
    netWeight: req.body.netWeight,
    ownershipType: req.body.ownershipType,
    leaseId: req.body.leaseId,
    ownershipDate: req.body.ownershipDate,
    assetImages: req.body.assetImages,
    assetCertificates: req.body.assetCertificates,
    locationId: req.body.locationId,
    depotId: req.body.depotId,
    assetStatusId: req.body.assetStatusId,
    firstHydroTestDate: req.body.firstHydroTestDate,
    lastHydroTestDate: req.body.lastHydroTestDate,
    nextTestDate: req.body.nextTestDate,
    createdBy: req.body.createdBy,
    updatedBy: req.body.updatedBy,
    isActive: req.body.isActive
  };
  Task.create(data).then(data => {
    res.send(data);
  }).catch(err=> {
    res.status(500).send({error: err.message || 'Something went wrong'});
  });
}