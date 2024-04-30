import { FC, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface DeleteConfirmationProps {
  onDelete: () => void;
  name: string;
}

export const DeleteConfirmation: FC<DeleteConfirmationProps> = ({
  onDelete,
  name,
}) => {
  const [confirmation, setConfirmation] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setConfirmation(true)}
        variant="danger"
      >
        {`Видалити ${name}?`}
      </Button>
      <Modal
        show={confirmation}
        onHide={() => setConfirmation(false)}
      >
        <Modal.Body>{`Дійсно видалити ${name}?`}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setConfirmation(false)}
          >
            Закрити
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setConfirmation(false);
              onDelete();
            }}
          >
           Підтвердити
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
