import { FC, useState } from "react";
import styles from "./Notes.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { Page } from "src/components/Page/Page";
import { NotesCard } from "src/components/NotesCard/NotesCard";
import graphImage from "src/assets/images/exampleGraph.webp";
import { Notes as INotes } from "src/types";
import { NotesModal } from "src/modals/NotesModal/NotesModal";

export const Notes: FC = () => {
  const [openedNotes, setOpenedNotes] = useState<INotes | undefined>(undefined);
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"My Notes"} description="" />
        <section className={styles.section}>
          <SectionHeading heading="Morning prep" />
          <div className={styles.notesCards}>
            <NotesCard
              title="Morning Notes"
              description={
                "If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED! If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED! If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED! If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED! If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED! If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED!"
              }
              image={graphImage}
              alt="abc graph"
              setOpenedNotes={setOpenedNotes}
            />
            <NotesCard
              title="Morning Notes"
              description={
                "If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED!"
              }
              image={graphImage}
              alt="abc graph"
              setOpenedNotes={setOpenedNotes}
            />
            <NotesCard
              title="Morning Notes"
              description={
                "If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED!"
              }
              image={graphImage}
              alt="abc graph"
              setOpenedNotes={setOpenedNotes}
            />
            <NotesCard
              title="Morning Notes"
              description={
                "If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED!"
              }
              image={graphImage}
              alt="abc graph"
              setOpenedNotes={setOpenedNotes}
            />
            <NotesCard
              title="Morning Notes"
              description={
                "If you are committed to this business, discipline is key. Build yourself a routine. Stick to it. Interpreting the morning levels, prep for the day (knowing in advance where my trades could be) and sharing my morning notes is my daily routine. BE DISCIPLINED!"
              }
              image={graphImage}
              alt="abc graph"
              setOpenedNotes={setOpenedNotes}
            />
          </div>
        </section>
      </div>
      {openedNotes && <NotesModal data={openedNotes} handleClose={() => setOpenedNotes(undefined)} />}
    </Page>
  );
};
