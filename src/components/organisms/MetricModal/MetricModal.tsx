import { FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTypedDispatch } from '../../../utils/hooks/useTypedDispatch';
import { addError } from '../../../store/user/userSlice';
import {createRecordAction} from "../../../store/records/recordsAction";


export const MetricModal: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [prTop, setPrTop] = useState<number>(0);
  const [time, setTime] = useState<Date | null | [Date | null, Date | null]>(new Date());
  const [prBottom, setPrBottom] = useState<number>(0);
  const [being, setBeing] = useState<number>(0);
  const [activity, setActivity] = useState<number>(0);
  const [meal, setMeal] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const dispatch = useTypedDispatch();

  const addMetric = () => {
    if (
        prTop <= 30 ||
        prBottom <= 30 ||
        being <= 0 ||
        being > 10 ||
        activity <= 0 ||
        activity > 10 ||
        meal.length < 1
    ) {
      dispatch(addError("Будь ласка заповніть всі необхідні поля із *"));
    } else {
      setShowModal(false);
      console.log(time)
      dispatch(createRecordAction(time as Date, prTop,  prBottom, being, activity, meal, note));
    }
  };

  return (
      <>
      <Button onClick={() => setShowModal(true)}>
        Додати Запис
      </Button>
  <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add record
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Дата: </Form.Label>
            <Form.Control
                //@ts-ignore
                value={time}
                onChange={(e) => setTime(new Date(e.target.value))}
                type="date-local"
                autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Тиск верхній: </Form.Label>
            <Form.Control
              value={prTop}
              min={20}
              onChange={(e) => setPrTop(+e.target.value)}
              type="number"
              placeholder="100"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Тиск нижній:</Form.Label>
            <Form.Control
              value={prBottom}
              min={20}
              onChange={(e) => setPrBottom(+e.target.value)}
              type="number"
              placeholder="80"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Самопочуття: {being}</Form.Label>
            <Form.Range
              value={being}
              onChange={(e) => setBeing(+e.target.value)}
              min={0}
              max={10}
              step={1}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Активність: {activity}</Form.Label>
            <Form.Range
                value={activity}
                onChange={(e) => setActivity(+e.target.value)}
                min={0}
                step={1}
                max={10}
                autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Прийом їжі: </Form.Label>
            <Form.Control
                value={meal}
                type='text'
                onChange={(e) => setMeal(e.target.value)}
                autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Коментар(записка): </Form.Label>
            <Form.Control
                value={note}
                as="textarea"
                onChange={(e) => setNote(e.target.value)}
                autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addMetric}>
          Додати запис
        </Button>
      </Modal.Footer>
    </Modal>
      </>
  );
};
