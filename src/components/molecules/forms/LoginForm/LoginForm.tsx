import React, {useState} from 'react';
import {Button, Form, Row} from "react-bootstrap";
import routes from "../../../../utils/config";
import {NavLink} from "react-router-dom";
import {useTypedDispatch} from "../../../../utils/hooks/useTypedDispatch";
import {loginAction, registrationAction} from "../../../../store/user/userActions";

const LoginForm = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useTypedDispatch();

    const onClickAuth = async () => {
        dispatch(loginAction(email, password));
    };

    return (
        <Form className="d-flex flex-column">
            <Form.Control
                className="mt-3"
                placeholder="Імейл"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Form.Control
                className="mt-3"
                required
                placeholder="Пароль"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                type="password"
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    <div>
                            Немає акаунту?{' '}
                            <NavLink to={routes.auth.registration}>Зареєструйтеся!</NavLink>
                    </div>
                <Button
                    className="mt-2"
                    variant={"outline-success"}
                    onClick={onClickAuth}
                >
                   Вхід
                </Button>
            </Row>
        </Form>
    );
};

export default LoginForm;