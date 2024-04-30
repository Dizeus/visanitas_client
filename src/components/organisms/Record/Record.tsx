import { FC } from 'react';
import style from './Record.module.scss';

import {IRecord} from "../../../utils/types/IRecord";

interface RecordProps {
  record: IRecord;
}
export const Record: FC<RecordProps> = ({ record }) => {

    const formatDate = (dt: Date) => {
        const padL = (nr: any, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

        return `${
            padL(dt.getMonth()+1)}/${
            padL(dt.getDate())}/${
            dt.getFullYear()} ${
            padL(dt.getHours())}:${
            padL(dt.getMinutes())}:${
            padL(dt.getSeconds())}`
            ;
    }

  return (
      <div className={style.record}>
          <div className={style.record__date}>
              {formatDate(new Date(record.time))}
          </div>
          <div className={style.record__metrics}>
              <div className={style.record__metric}>
                  Тиск верхній:
                  <span>{record.bl_pressure_top}</span>
              </div>
              <div className={style.record__metric}>
                  Тиск нижній:
                  <span>{record.bl_pressure_bottom}</span>
              </div>
              <div className={style.record__metric}>
                  Активність:
                  <span>{record.activity}</span>
              </div>
              <div className={style.record__metric}>
                  Самопочуття:
                  <span>{record.well_being}</span>
              </div>
              <div className={style.record__metric}>
                  Прийом їжі:
                  <span>{record.meal}</span>
              </div>

              {record.note &&
                  <div className={style.record__metric}>
                      Коментар:
                      <span>{record.note}</span>
                  </div>}
          </div>
      </div>
  );
};
