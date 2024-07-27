import "./Services";
import ToBooking from "../../components/ToBooking/ToBooking";
import { useState } from "react";

export default function Services() {
  const [book, setBook] = useState(false);
  return (
    <main>
      {book ? (
        <ToBooking
          url={
            "https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js"
          }
        />
      ) : null}
      <div>
        <h1>Services</h1>
        <p>
          Start your day with effortless beauty and get ready to wake up with no
          makeup!
        </p>
        <button onClick={() => setBook(true)}>BOOK NOW</button>
      </div>
      <div className="style-list">
        <h2>Meet the lash styles</h2>
      </div>
      Start your day with effortless beauty and get ready to wake up with no
      makeup! CTA: Book now
      <h2>Classics: </h2>
      <p>
        Classic lash extensions involve attaching a single extension to each
        natural lash, creating a subtle and natural enhancement. This technique
        is perfect for those who desire a mascara-like effect without the daily
        hassle. The result is a polished, understated look that adds length and
        a touch of volume to your natural lashes. Ideal for individuals with a
        good amount of natural lashes, classic extensions provide an elegant,
        everyday appearance.
      </p>
      <h2>Hybrid:</h2>
      <p>
        Hybrid lash extensions are a blend of classic and volume techniques,
        combining individual lashes with volume fans. This mix creates a
        textured, fuller look that offers more dimension than classic
        extensions. Perfect for those who want a bit more volume and texture
        without going too dramatic, hybrid extensions give a balanced, stylish
        appearance that suits various occasions.
      </p>
      <h2>Volume:</h2>
      <p>
        Volume lash extensions use multiple lightweight extensions (usually 6-9)
        fanned together and applied to each natural lash. This method produces a
        full, fluffy, and more dramatic look compared to hybrid extensions.
        Ideal for those with sparse natural lashes or anyone seeking a glamorous
        appearance, volume extensions provide significant volume and a soft,
        feathery effect that enhances the eyes beautifully.
      </p>
      <h2>Mega Volume:</h2>
      <p>
        Mega volume lash extensions take the volume technique to the next level
        by using an even greater number of ultra-fine extensions (typically
        10-20) for each natural lash. This creates an extremely full, dense, and
        dramatic effect. Mega volume extensions are perfect for individuals who
        want a bold, glamorous look for special occasions or who prefer a very
        thick, eye-catching lash line. This style offers the highest level of
      </p>
    </main>
  );
}
