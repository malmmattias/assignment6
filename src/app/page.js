import Image from "next/image";
import styles from "./page.module.css";
import Movieform from "./components/Movieform";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movielist from "./components/Movielist";
import Button from "./components/Button";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Min filmlista</h1>
        <hr></hr>
        <legend>Lägg till en film</legend>
        <Movieform />
        <hr></hr>
        <h2>Filmer</h2>
        <Movielist />
        <Button value="Alfabetisk ordning" />
        <Button value="Betygsordning" />
      </main>
      
    </div>
  );
}
