import Title from "../additional/title";
import { TJournal } from "@/@types/types";
import StandaloneItem from "./standalone-item";
import JournalItem from "./journal-item";
interface Props {
  journal: TJournal;
}
const Journal: React.FC<Props> = ({ journal }) => {
  return (
    <section className="mb-16 gap-6">
      <Title link={journal.link} title={journal.title} className="mb-4" />
      <StandaloneItem standaloneItem={journal.standaloneItem} />
      <div className="flex gap-6">
        {journal.items.map((item) => (
          <JournalItem journalItem={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Journal;
