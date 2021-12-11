
import Dashboard from "views/Dashboard.js";
import AdminProfile from "views/AdminProfile.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import AddStudent from "./views/AddStudent.js";
import StudentList from "./views/StudentList.js";
import StudentProfileUpdate from './views/StudentProfileUpdate'
import AddBus from "./views/AddBus";
import BusList from "./views/BusList"
import TrackBuses from "./views/TrackBuses";
import BusProfileUpdate from "./views/BusProfileUpdate";
import AddDriver from "./views/AddDriver";
import DriverList from "./views/DriverList";
import DriverProfileUpdate from "./views/DriverProfileUpdate";
import AssetManageList from "./views/AssetManageList";
import BusDetails from "./views/BusDetails";
import AddRoute from "./views/AddRoute";
import UpdateRoute from "./views/UpdateRoute";
import RouteList from "./views/RouteList";
import Profile from "./views/Profile";
import FuelManagement from "./views/FuelManagement";
import ForgotPassword from "./views/ForgotPassword";
import DriverHistory from "./views/DriverHistory";
import BusStudentList from "./views/BusStudentList";

const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/route/:id",
    component: UpdateRoute,
    layout: "/admin",
  },
  {
    path: "/profile",
    component: AdminProfile,
    layout: "/admin",
  },
  {
    path: "/drivers",
    component: DriverList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/trackbuses",
    component: TrackBuses,
    layout: "/admin",
  },
  {
    path: "/routes",
    component: RouteList,
    layout: "/admin",
  },

  {
    path: "/notifications",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/data/addstudent",
    component: AddStudent,
    layout: "/admin",
  },
  {
    path: "/addroute",
    component: AddRoute,
    layout: "/admin",
  },

  {
    path: "/data/studentlist",
    component: StudentList,
    layout: "/admin",
  },
  {
    path: "/data/studentprofile/:id",
    component: StudentProfileUpdate,
    layout: "/admin",
  },
  {
    path: "/data/addbus",
    component: AddBus,
    layout: "/admin",
  },
  {
    path: "/data/buslist",
    component: BusList,
    layout: "/admin",
  },
  {
    path:"/data/busprofile/:id",
    component:BusProfileUpdate,
    layout: "/admin",

  },
  {
    path:"/data/adddriver",
    component:AddDriver,
    layout: "/admin",

  },
  {
    path:"/data/driverlist",
    component:DriverList,
    layout: "/admin",

  },
  {
    path:"/data/driverprofile/:id",
    component:DriverProfileUpdate,
    layout: "/admin",

  },
  {
    path:"/assets",
    component:BusList,
    layout: "/admin",

  },
  {
    path:"/busdetails",
    component:BusDetails,
    layout: "/admin",

  },
  {
    path:"/busprofile/:id",
    component:Profile,
    layout: "/admin",

  },
  {
    path:"/fuel",
    component:FuelManagement,
    layout: "/admin",

  },
  {
    path:"/driverhistory",
    component:DriverHistory,
    layout: "/admin",
  },
  {
    path:"/studentlist",
    component:BusStudentList,
    layout: "/admin",
  },




];

export default dashboardRoutes;
