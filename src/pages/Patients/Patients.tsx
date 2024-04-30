import {FC, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { withAuthNavigate } from '../../utils/hoc/withAuthNavigate';
import {useTypedDispatch} from "../../utils/hooks/useTypedDispatch";
import {getPatientsAction} from "../../store/patients/patientsAction";
import {UsersGrid} from "../../components/layouts/UsersGrid/UsersGrid";
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {UserSearchForm} from "../../components/molecules/forms/UserSearchForm/UserSearchForm";

const Patients: FC = () => {

    const dispatch = useTypedDispatch();

    useEffect(() => {
        fetchUsers(1, '');
    }, []);

    const { patients, totalPage } = useTypedSelector(
        (state) => state.patientsReducer,
    );

    const fetchUsers = (page: number, query: string) =>{
        dispatch(getPatientsAction(1, query))
    }
  return (
    <Container className="pt-4 pb-4">
        <UserSearchForm fetchUsers={fetchUsers}/>
      <UsersGrid users={patients} fetchUsers={fetchUsers} totalPage={totalPage}/>
    </Container>
  );
};

export default withAuthNavigate(Patients);
