import {FC, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { withAuthNavigate } from '../../utils/hoc/withAuthNavigate';
import {useTypedDispatch} from "../../utils/hooks/useTypedDispatch";
import {getDoctorsAction} from "../../store/doctors/doctorsAction";
import {UsersGrid} from "../../components/layouts/UsersGrid/UsersGrid";
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {UserSearchForm} from "../../components/molecules/forms/UserSearchForm/UserSearchForm";

const Doctors: FC = () => {

    const dispatch = useTypedDispatch();

    useEffect(() => {
        fetchUsers(1, '');
    }, []);

    const { doctors, totalPage } = useTypedSelector(
        (state) => state.doctorsReducer,
    );

    const fetchUsers = (page: number, query: string) =>{
       dispatch(getDoctorsAction(1, query))
    }
  return (
    <Container className="pt-4 pb-4">
        <UserSearchForm fetchUsers={fetchUsers}/>
      <UsersGrid users={doctors} totalPage={totalPage} fetchUsers={fetchUsers}/>
    </Container>
  );
};

export default withAuthNavigate(Doctors);
