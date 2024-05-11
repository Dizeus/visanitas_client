import {FC, useState} from 'react';
import style from './User.module.scss';
import {IUser} from '../../../utils/types/IUser';
import {Button} from 'react-bootstrap';
import routes from '../../../utils/config';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {useTypedDispatch} from '../../../utils/hooks/useTypedDispatch';
import {useTypedSelector} from '../../../utils/hooks/useTypedSelector';
import {UserProfile} from "../../molecules/UserProfile/UserProfile";
import {DOCTOR_ROLE} from "../../../utils/constants";
import {addDoctorsAction} from "../../../store/doctors/doctorsAction";

interface DoctorProps {
    user: IUser;
}

export const User: FC<DoctorProps> = ({user}) => {
    const dispatch = useTypedDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [isAdded, setIsAdded] = useState<boolean>(false)

    const addDoctor = () => {
        setIsAdded(!isAdded)
       dispatch(addDoctorsAction(user.id))
    }

    const viewRecords = () => {
        navigate(`/patient/${user.id}`)
    }

    return (
        <div className={style.friend}>
            <UserProfile user={user}/>
            <div className={style.buttons}>
                {location.pathname === '/doctors'?
                    <Button onClick={addDoctor} className={style.button} variant={"outline-light"}>
                        {isAdded ? "Відписати лікаря" : "Додати лікаря"}
                    </Button>
                    :
                    <Button onClick={viewRecords} className={style.button} variant={"outline-light"}>
                        Переглянути записи
                    </Button>
                }

            </div>
        </div>
    );
};
