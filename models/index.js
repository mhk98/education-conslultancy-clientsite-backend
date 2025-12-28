// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

// Define models
db.user = require("../app/modules/user/user.model")(db.sequelize, DataTypes);

db.banner = require("../app/modules/banner/banner.model")(
  db.sequelize,
  DataTypes
);
db.aboutUs = require("../app/modules/aboutUs/aboutUs.model")(
  db.sequelize,
  DataTypes
);
db.feature = require("../app/modules/feature/feature.model")(
  db.sequelize,
  DataTypes
);
db.country = require("../app/modules/country/country.model")(
  db.sequelize,
  DataTypes
);
db.study = require("../app/modules/study/study.model")(db.sequelize, DataTypes);
db.requirement = require("../app/modules/requirement/requirement.model")(
  db.sequelize,
  DataTypes
);
db.customize = require("../app/modules/customize/customize.model")(
  db.sequelize,
  DataTypes
);
db.feedback = require("../app/modules/feedback/feedback.model")(
  db.sequelize,
  DataTypes
);
db.blog = require("../app/modules/blog/blog.model")(db.sequelize, DataTypes);
db.contact = require("../app/modules/contact/contact.model")(
  db.sequelize,
  DataTypes
);

// db.user.hasMany(db.commission, { foreignKey: "user_id" });
// db.commission.belongsTo(db.user, { foreignKey: "user_id" });

// ❌ Removed redundant duplicate `studentComment` - `studentReply` mapping
// (already defined above)

// ✅ Sync the database
db.sequelize
  .sync({ force: false }) // don't use `force: true` in production
  .then(() => {
    console.log("Connection re-synced successfully");
  })
  .catch((err) => {
    console.error("Error on re-sync:", err);
  });

module.exports = db;
