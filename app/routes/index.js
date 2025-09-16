const express = require("express");
const UserRoutes = require("../modules/user/user.routes");
const TaskRoutes = require("../modules/banner/banner.routes");
const BannerRoutes = require("../modules/banner/banner.routes");
const AboutUsRoutes = require("../modules/aboutUs/aboutUs.routes");
const FeatureRoutes = require("../modules/feature/feature.routes");
const CountryRoutes = require("../modules/country/country.routes");
const RequirementsRoutes = require("../modules/study/study.routes");
const RequirementRoutes = require("../modules/requirement/requirement.routes");
const CustomizeRoutes = require("../modules/customize/customize.routes");
const FeedbackRoutes = require("../modules/feedback/feedback.routes");
const ContactRoutes = require("../modules/contact/contact.routes");
const StudyRoutes = require("../modules/study/study.routes");

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },

  {
    path: "/banner",
    route: BannerRoutes,
  },
  {
    path: "/aboutUs",
    route: AboutUsRoutes,
  },
  {
    path: "/feature",
    route: FeatureRoutes,
  },
  {
    path: "/country",
    route: CountryRoutes,
  },
  {
    path: "/requirements",
    route: StudyRoutes,
  },
  {
    path: "/requirement",
    route: RequirementRoutes,
  },
  {
    path: "/customize",
    route: CustomizeRoutes,
  },
  {
    path: "/feedback",
    route: FeedbackRoutes,
  },
  {
    path: "/contact",
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
module.exports = router;
