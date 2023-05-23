import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import styles from "./NotesModal.module.scss";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { Notes } from "src/types";

export const NotesModal = ({ handleClose, data }: { handleClose: () => void; data: Notes }) => {
  return (
    <ModalWrapper handleClose={handleClose} className={styles.container}>
      <SectionHeading className={styles.heading} heading={data.title} />
      <p className={styles.description}>{data.description}</p>
    </ModalWrapper>
  );
};
