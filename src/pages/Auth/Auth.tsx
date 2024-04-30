import {FC, useEffect } from 'react';
import {Card, Container} from 'react-bootstrap';
import {useLocation, useNavigate} from 'react-router-dom';
import routes from '../../utils/config';
import {useTypedSelector} from '../../utils/hooks/useTypedSelector';
import LoginForm from "../../components/molecules/forms/LoginForm/LoginForm";
import RegistrationForm from "../../components/molecules/forms/RegistrationForm/RegistrationForm";

const Auth: FC = () => {
    const location = useLocation();
    const isLogin: boolean = location.pathname === routes.auth.login;
    const isAuth: boolean = useTypedSelector((state) => state.userReducer.isAuth);
    const navigate = useNavigate();


    useEffect(() => {
        if (isAuth) {
            navigate(routes.home);
        }
    }, [isAuth]);

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Вхід" : "Реєстрація"}</h2>
                {
                    isLogin ?
                        <LoginForm/> :
                        <RegistrationForm/>
                }

            </Card>
        </Container>
    );
};

export default Auth;
