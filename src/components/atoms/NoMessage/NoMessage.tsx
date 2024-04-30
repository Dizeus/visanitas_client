import { FC } from 'react';
import style from './NoMessage.module.scss';

interface NoMessageProps {
  text: string;
}

export const NoMessage: FC<NoMessageProps> = ({ text }) => {
  return (
    <div className={style.container} data-testid="no-message">
      Не знайдено {text}
    </div>
  );
};
