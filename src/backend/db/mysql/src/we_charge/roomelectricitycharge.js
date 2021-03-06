/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes, name='roomelectricitycharge') {
  return sequelize.define('roomelectricitycharge', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ZoneName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RoomName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RecordDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP(6)'
    },
    GradeIndex: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    UseNumber: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Electricity_UnitPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Equipment_UnitPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Electricity_Charge: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Equipment_Charge: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: name,
    freezeTableName: true,
    timestamps: false
  });
};
