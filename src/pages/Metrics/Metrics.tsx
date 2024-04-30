import {FC, useEffect, useState} from 'react';
import { useTypedDispatch } from '../../utils/hooks/useTypedDispatch';
import style from './Metrics.module.scss';
import {MetricModal} from "../../components/organisms/MetricModal/MetricModal";
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {Record} from "../../components/organisms/Record/Record";
import {getRecordsAction} from "../../store/records/recordsAction";
import {Container} from "react-bootstrap";

const Metrics: FC = () => {
  const dispatch = useTypedDispatch();
  const [showMetricModal, setShowMetricModal] = useState<boolean>(false)

 const {records} = useTypedSelector(state => state.recordsReducer)

  useEffect(() => {
    dispatch(getRecordsAction(1));
  }, []);

  return (
    <Container className='pt-4 pb-4'>
      <MetricModal/>
      <div className={style.records}>
        {records.map(record=>
          <Record record={record} key={record.id}/>
        )}
      </div>
    </Container>
  );
};

export default Metrics;
