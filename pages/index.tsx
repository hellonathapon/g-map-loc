import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface IGeoData {
  title: string;
  lat: string;
  long: string;
}

const Home: NextPage = (): JSX.Element => {
  const [geoData, setGeoData] = useState<IGeoData[]>([
    {
      title: "พะเยา",
      lat: "19.166100900568576",
      long: "100.19965397959555",
    },
    {
      title: "นครศรีธรรมราช",
      lat: "8.411938383465143",
      long: "99.96753424633364",
    },
    {
      title: "หนองคาย",
      lat: "17.935828273904736",
      long: "102.59450437464636",
    },
    {
      title: "อัมสเตอร์ดัม",
      lat: "52.357369569490935",
      long: "4.897377104052558",
    },
    {
      title: "แมนฮัตตัน",
      lat: "40.78271194782572",
      long: "-73.97225928532387",
    },
  ]);
  //const [input, setInput] = useState<string | null>(null);

  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   if(!input) {
  //     return;
  //   }

  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Google Map Geolocation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Google</h1>
        <h1 className={styles.title1}>Map</h1>

        <div className={styles.grid}>
          {geoData.map((item: IGeoData, i: number) => (
            <a
              key={i}
              href={`https://maps.google.com/?q=${item.lat},${item.long}`}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.card}
            >
              <h2>{item.title} &rarr;</h2>
              <p>Lat: {item.lat}</p>
              <p>Long: {item.long}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
