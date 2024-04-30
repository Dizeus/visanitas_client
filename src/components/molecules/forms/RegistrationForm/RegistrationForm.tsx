import React, {useState} from 'react';
import {Button, Form, Row} from "react-bootstrap";
import routes from "../../../../utils/config";
import {NavLink} from "react-router-dom";
import {useTypedDispatch} from "../../../../utils/hooks/useTypedDispatch";
import {DOCTOR_ROLE, PATIENT_ROLE} from "../../../../utils/constants";
import {registrationAction} from "../../../../store/user/userActions";

const RegistrationForm = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullname, setFullname] = useState<string>('');
    const [role, setRole] = useState<typeof PATIENT_ROLE | typeof DOCTOR_ROLE>(PATIENT_ROLE);
    const dispatch = useTypedDispatch();

    const onClickAuth = async () => {
        dispatch(registrationAction(email, password, fullname, role));
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
            <Form.Control
                className="mt-3"
                placeholder="ПІБ"
                required
                value={fullname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)}
            />
            <Form.Select aria-label="role" className="mt-3" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setRole(event.target.value as typeof PATIENT_ROLE | typeof DOCTOR_ROLE)}>
                <option value={PATIENT_ROLE}>Пацієнт</option>
                <option value={DOCTOR_ROLE}>Лікар</option>
            </Form.Select>
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    <div>
                            Маєте аккаунт?{' '}
                            <NavLink to={routes.auth.login}>Вхід!</NavLink>
                    </div>
                <Button
                    className="mt-2"
                    variant={"outline-success"}
                    onClick={onClickAuth}
                >
                   Реєстрація
                </Button>
            </Row>
        </Form>
    );
};

export default RegistrationForm;