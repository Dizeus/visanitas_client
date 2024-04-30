import {FC, useEffect} from 'react';
import { useTypedDispatch } from '../../utils/hooks/useTypedDispatch';
import style from './Metrics.module.scss';
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {Record} from "../../components/organisms/Record/Record";
import {getPatientRecordsAction} from "../../store/records/recordsAction";
import {Container} from "react-bootstrap";
import {useLocation, useParams} from "react-router-dom";
import {NoMessage} from "../../components/atoms/NoMessage/NoMessage";

const Patient: FC = () => {
    const dispatch = useTypedDispatch();
    const {records} = useTypedSelector(state => state.recordsReducer)
    const { userId } = useParams();

    useEffect(() => {
        dispatch(getPatientRecordsAction(`${userId}`,1));
    }, []);

    if (records.length < 1) {
        return <NoMessage text="Записів" />;
    }

    return (
        <Container className='pt-4 pb-4'>
            <div className={style.records}>
                {records.map(record=>
                    <Record record={record} key={record.id}/>
                )}
            </div>
        </Container>
    );
};

export default Patient;
