'use client'

import styles from "./page.module.css";
import { Title } from "../../shared/ui/ui";
import { Header } from "../../widget/header";
import { SongList } from "../../widget/songList";
import { Search } from "../../widget/search";
import { Playing } from "../../widget/playing";
import tracksList from "@/assets/tracksList";
import { useState } from "react";

const RunQuery = (query) =>{
  if(!query){
    return tracksList;
  }

  const lowerCase = query.toLowerCase();

  return tracksList.filter((track)=>
    track.title.toLowerCase().includes(lowerCase) ||
    track.artists.toLowerCase().includes(lowerCase)
  )
}

export default function Home() {
  const [songs, setSongs] = useState(tracksList);

  const handleChange = (event) =>{
    const foundTracks = RunQuery(event.target.value);
    setSongs(foundTracks);
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Search func={handleChange} />
        <SongList songs={songs} />
        <Playing songs={songs}/>
        <Header />
      </main>
    </div>
  );
}
