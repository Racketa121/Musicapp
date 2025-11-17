import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "../../shared/ui/ui";
import { Card } from "../../widget/card"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Card />
      </main>
    </div>
  );
}
