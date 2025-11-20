import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "../../shared/ui/ui";
import { Header } from "../../widget/header";
import { SongList } from "../../widget/songList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <SongList />
        <Header />
      </main>
    </div>
  );
}
