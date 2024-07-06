import Head from "next/head";
import styles from "../styles/Home.module.css";
import AgeCalculator from "../components/AgeCalculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Age Calculator</title>
        <meta
          name="description"
          content="This application calculates the age based on the date of birth entered by the user."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div>
          <AgeCalculator />
        </div>
      </main>
    </>
  );
}
