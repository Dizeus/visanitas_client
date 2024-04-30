import { FC } from 'react';
import { Spinner } from 'react-bootstrap';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const withLoading = (Component: FC): FC => {
  const LoadingComponent: FC = (props: any) => {
    const isLoading = useTypedSelector((state) => state.userReducer.isLoading);
    return isLoading ? (
      <div
        className='d-flex justify-content-center align-items-center vh-100'
        data-testid='spinner'
      >
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    ) : (
      <Component {...props} />
    );
  };
  return LoadingComponent;
};
