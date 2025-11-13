import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "../../shared/ui/ui";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Title>Привет</Title>
      </main>
    </div>
  );
}
