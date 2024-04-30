import { MyNavbar } from '../../organisms/Navbar/Navbar';
import AppRouter from '../../organisms/AppRouter/AppRouter';
import { withLoading } from '../../../utils/hoc/withLoading';
import { FC } from 'react';
import { Alert } from '../../molecules/Alert/Alert';
import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';
import { ToastContainer } from 'react-bootstrap';

const AppLayout: FC = () => {
  const { alert, error, alertKey, errorKey } = useTypedSelector(
    (state) => state.userReducer,
  );

  return (
    <>
      <MyNavbar/>
      <main className='main'>
        <AppRouter />
      </main>
      <ToastContainer className='position-fixed' position='top-center'>
        {alert && <Alert text={alert} uniqueKey={alertKey} />}
        {error && <Alert text={error} uniqueKey={errorKey} />}
      </ToastContainer>
    </>
  );
};

export default withLoading(AppLayout);
