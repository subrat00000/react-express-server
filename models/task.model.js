module.exports = (sequelize, Sequelize) => {
  const Control = sequelize.define("tbl_asset", {
    assetCategoryId: {
      type: Sequelize.INTEGER
    },
    assetTypeId: {
      type: Sequelize.INTEGER
    },
    assetNumber: {
      type: Sequelize.STRING(20)
    },
    manufacturerName: {
      type: Sequelize.STRING(50)
    },
    manufacturerSerialNo: {
      type: Sequelize.STRING(50)
    },
    buildYear: {
      type: Sequelize.INTEGER
    },
    grossWeight: {
      type: Sequelize.FLOAT(10,2)
    },
    tareWeight: {
      type:Sequelize.FLOAT(10,2)
    },
    netWeight: {
      type: Sequelize.FLOAT(10,3)
    },
    ownershipType: {
      type: Sequelize.STRING(20)
    },
    leaseId: {
      type:Sequelize.INTEGER
    },
    ownershipDate: {
      type:Sequelize.DATE
    },
    assetImages: {
      type: Sequelize.STRING(200)
    },
    assetCertificates: {
      type: Sequelize.STRING(200)
    },
    locationId: {
      type: Sequelize.INTEGER
    },
    depotId: {
      type: Sequelize.INTEGER
    },
    assetStatusId: {
      type: Sequelize.INTEGER
    },
    firstHydroTestDate: {
      type: Sequelize.DATE
    },
    lastHydroTestDate: {
      type: Sequelize.DATE
    },
    nextTestDate: {
      type: Sequelize.DATE
    },
    createdAt: {
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW 
    },
    createdBy: {
      type: Sequelize.INTEGER
    },
    updatedAt: {
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW 
    },
    updatedBy: {
      type: Sequelize.INTEGER
    },
    isActive: {
      type: Sequelize.BOOLEAN
    }
  }, {
    freezeTableName: true
  });
  return Control;
};