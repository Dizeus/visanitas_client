import { useEffect } from 'react';
import { refreshAction } from './store/user/userActions';
import AppLayout from './components/layouts/AppLayout/AppLayout';
import { useTypedDispatch } from './utils/hooks/useTypedDispatch';

function App() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(refreshAction());
  }, []);

  return (
    <div className='app'>
      <AppLayout />
    </div>
  );
}

export default App;
