import Auth from './pages/Auth/Auth';
import routes from './utils/config';
import Settings from './pages/Settings/Settings';
import Doctors from "./pages/Doctors/Doctors";
import Patients from "./pages/Patients/Patients";
import Metrics from "./pages/Metrics/Metrics";
import Patient from "./pages/Patient/Patient";

export const doctorRoutes = [
  {
    path: routes.patients,
    Component: Patients,
  },
];


export const userRoutes = [
  {
    path: routes.auth.login,
    Component: Auth,
  },
  {
    path: routes.doctors,
    Component: Doctors,
  },
  {
    path: routes.metrics,
    Component: Metrics,
  },
  {
    path: routes.auth.registration,
    Component: Auth,
  },
  {
    path: routes.home,
    Component: Settings,
  },
  {
    path: routes.settings,
    Component: Settings,
  },
  {
    path: `patient/:userId`,
    Component: Patient,
  },
];
