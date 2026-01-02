const express = require("express");
const UserRoutes = require("../modules/user/user.routes");
const BannerRoutes = require("../modules/banner/banner.routes");
const AboutUsRoutes = require("../modules/aboutUs/aboutUs.routes");
const FeatureRoutes = require("../modules/feature/feature.routes");
const CountryRoutes = require("../modules/country/country.routes");
const RequirementRoutes = require("../modules/requirement/requirement.routes");
const CustomizeRoutes = require("../modules/customize/customize.routes");
const FeedbackRoutes = require("../modules/feedback/feedback.routes");
const ContactRoutes = require("../modules/contact/contact.routes");
const StudyRoutes = require("../modules/study/study.routes");
const BlogRoutes = require("../modules/blog/blog.routes");
const TeamIntroductionRoutes = require("../modules/teamIntroduction/teamIntroduction.routes");
const ManagementRoutes = require("../modules/management/management.routes");
const EmployeeRoutes = require("../modules/employee/employee.routes");
const GalleryRoutes = require("../modules/gallery/gallery.routes");
const WorkStationRoutes = require("../modules/workstation/workstation.routes");

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
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/introduction",
    route: TeamIntroductionRoutes,
  },
  {
    path: "/workstation",
    route: WorkStationRoutes,
  },
  {
    path: "/management",
    route: ManagementRoutes,
  },
  {
    path: "/employee",
    route: EmployeeRoutes,
  },
  {
    path: "/gallery",
    route: GalleryRoutes,
  },
  {
    path: "/contact",
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
module.exports = router;
