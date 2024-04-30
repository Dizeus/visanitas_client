import { FC, useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import style from './Alert.module.scss';
interface AlertProps {
  text: string;
  uniqueKey: number;
}

export const Alert: FC<AlertProps> = ({ text, uniqueKey }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(true);
  }, [text, uniqueKey]);

  return (
    <Toast
      className={style.modal}
      onClose={() => setShow(false)}
      show={show}
      delay={2000}
      autohide
    >
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  );
};
