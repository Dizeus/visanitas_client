import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import {doctorRoutes, userRoutes} from '../../../routes';
import {DOCTOR_ROLE } from '../../../utils/constants';
import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';

const AppRouter: FC = () => {
  const role = useTypedSelector((state) => state.userReducer.user?.role);
  return (
    <Routes>
      {role === DOCTOR_ROLE &&
        doctorRoutes.map(({ path, Component }) => (
          <Route
            path={path}
            key={path}
            element={<Component />}
          />
        ))}
      {userRoutes.map(({ path, Component }) => (
        <Route
          path={path}
          key={path}
          element={<Component />}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
