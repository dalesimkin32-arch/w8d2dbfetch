import pg from "pg";
/* import Link from "next/link"     */
import { db } from "@/utils/utilities.js";
import headerStyles from "../header.module.css";

export default async function JokesPage() {
  /* const db = new pg.Pool({connectionString: process.env.DB_CONN,}); */

  const res = await db.query(`SELECT * FROM jokes`);
  const jokes = res.rows;

  console.log(jokes);

  return (
    <div className="">
      <header className={headerStyles.header}>
        <marquee className="text-red-900"> Heading up the Page </marquee>
      </header>
      <h1>Jokes</h1>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            {joke.joke}
            <br />
            {joke.punchline}
          </li>
        ))}
      </ul>
    </div>
  );
}
