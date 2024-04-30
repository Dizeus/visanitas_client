import { FC, useRef, useState } from 'react';
import styles from './UploadImage.module.scss';

interface UploadImageProps {
  image: File | null;
  setImage: (i: File) => void;
}

export const UploadImage: FC<UploadImageProps> = ({ image, setImage }) => {
  const filePicker = useRef<any>(null);
  const [isDragEnter, setDragEnter] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>();

  function dragEnterHandler(event: any) {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(true);
  }

  function dragLeaveHandler(event: any) {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(false);
  }

  function dropHandler(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer?.files[0] || event.target.files[0];
    if (file !== undefined) {
      setPreviewUrl(URL.createObjectURL(file));
      setImage(file);
      URL.revokeObjectURL(file);
    }
    setDragEnter(false);
  }

  return (
    <div>
      <div className={styles.modal}>
        <div className={styles.modal__title}>
         Завантажити зображення
        </div>
        <input
          type="file"
          className={styles.hidden}
          ref={filePicker}
          onChange={dropHandler}
          accept="image/*, .png, .jpg"
          data-testid="input-image"
        />
        <div
          onDrop={dropHandler}
          onClick={() => filePicker.current && filePicker.current.click()}
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragEnterHandler}
          className={styles.modal__dropbox}
          data-testid="dropbox"
        >
          {previewUrl ? (
            <div className={styles.modal__previewContainer}>
              <img
                className={styles.modal__preview}
                src={previewUrl}
                alt="oops"
              />
            </div>
          ) : !isDragEnter ? (
            <p className={styles.modal__instruction} data-testid="drag">
              Перетягніть зображення
            </p>
          ) : (
            <p className={styles.modal__instruction} data-testid="drop">
              Відпустіть зображення
            </p>
          )}
        </div>

        <div className={styles.modal__files}>
          {image
            ? "Вибраний файл: " + image.name
            : "Файл не вибрано"}
        </div>
      </div>
    </div>
  );
};
