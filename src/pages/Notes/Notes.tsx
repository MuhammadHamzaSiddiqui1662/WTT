import { FC, useState } from "react";
import styles from "./Notes.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { Page } from "src/components/Page/Page";
import { NotesCard } from "src/components/NotesCard/NotesCard";
import { Notes as INotes } from "src/types";
import { NotesModal } from "src/modals/NotesModal/NotesModal";
import { notesConfig } from "src/config/notesConfig";

export const Notes: FC = () => {
  const [openedNotes, setOpenedNotes] = useState<INotes | undefined>(undefined);
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"My Notes"} description="" />
        {notesConfig.map((section, index) => (
          <section key={index} className={styles.section}>
            <SectionHeading heading={section.sectionHeading} />
            <div className={styles.notesCards}>
              {section.content.map((notes, index) => (
                <NotesCard
                  key={index}
                  title={notes.title}
                  description={notes.description}
                  image={notes.image}
                  alt={notes.alt}
                  setOpenedNotes={setOpenedNotes}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      {openedNotes && <NotesModal data={openedNotes} handleClose={() => setOpenedNotes(undefined)} />}
    </Page>
  );
};
