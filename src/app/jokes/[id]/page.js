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
        <div key={joke.id} className="grid-cols-1 justify-items-center">
          <h3>
            {`Joke ID: ${joke.id}`.split("").map((letter, i) => (
              <span
                key={i}
                className="text-7x1 font-bold
              	text-blue-600 inline-block animate-bounce 
              	hover:text-sky-500 transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}{" "}
            {/*  Joke ID: {joke.id} */}
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
