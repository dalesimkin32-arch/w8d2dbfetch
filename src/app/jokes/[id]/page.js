import pg from "pg";
import { db } from "@/utils/utilities.js";

export default async function Joke({ params }) {
  const slug = await params;
  /* const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
  });  */

  const res = await db.query(`SELECT * FROM jokes WHERE id = ${slug.id};`);
  const joke = res.rows;

  return (
    <div>
      {joke.map((joke) => (
        <div key={joke.id}>
          <h3>
            Joke ID: {joke.id}
            <br />
          </h3>
          <p>
            {joke.joke}
            <br />
          </p>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </div>
  );
}
