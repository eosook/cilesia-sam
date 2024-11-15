import "./Services.scss";
import ServiceBlock from "../../components/ServiceBlock/ServiceBlock";
import classicImage from "../../assets/images/Classic.png"
import hybridImage from "../../assets/images/Hybrid.png"
import volumeImage from "../../assets/images/Volume.png"
import megaImage from "../../assets/images/Mega.png"
import wispyImage from "../../assets/images/Wispy.png"
import wetImage from "../../assets/images/Wet.png"
import specialtyImage from "../../assets/images/Specialty Curl.png"

export default function Services() {

  const toBooking = () => {
    location.href="https://book.squareup.com/appointments/vp26zekhc1y452/location/L91FW9Z6QEKDK/services"
  }
  return (
    <main className="services">
      <div className="services-hero">
        <h1 className="services-hero__title">SERVICES</h1>
        <h3 className="services-hero__subtitle">
          Start your day with effortless beauty and get ready to wake up with no
          makeup!
        </h3>
        <button className="services-hero__button" onClick={toBooking}>BOOK NOW</button>
      </div>
      <div className="style-list">
        <h2 className="style-list__title">MEET THE LASH STYLES</h2>
        <ServiceBlock
          side="left"
          title="Classics"
          body="Classic lash extensions involve attaching a single extension to each 
        natural lash, creating a subtle and natural enhancement. This technique is 
        perfect for those who desire a mascara-like effect without the daily hassle. 
        The result is a polished, understated look that adds length and a touch of 
        volume to your natural lashes. Ideal for individuals with a good amount of 
        natural lashes, classic extensions provide an elegant, everyday appearance."
          image={classicImage}
        />
        <ServiceBlock
          side="right"
          title="Hybrid"
          body="Hybrid lash extensions are a blend of classic and volume techniques,
        combining individual lashes with volume fans. This mix creates a
        textured, fuller look that offers more dimension than classic
        extensions. Perfect for those who want a bit more volume and texture
        without going too dramatic, hybrid extensions give a balanced, stylish
        appearance that suits various occasions."
          image={hybridImage}
        />
        <ServiceBlock
          side="left"
          title="Wet"
          body="Mega volume lash extensions take the volume technique to the next level 
        by using an even greater number of ultra-fine extensions (typically 10-20) for 
        each natural lash. This creates an extremely full, dense, and dramatic effect. 
        Mega volume extensions are perfect for individuals who want a bold, glamorous look 
        for special occasions or who prefer a very thick, eye-catching lash line. This style 
        offers the highest level of volume and thickness, making a powerful statement."
          image={wetImage}
        />
        <ServiceBlock
          side="right"
          title="Volume"
          body="Volume lash extensions use multiple lightweight extensions (usually 6-9)
        fanned together and applied to each natural lash. This method produces a
        full, fluffy, and more dramatic look compared to hybrid extensions.
        Ideal for those with sparse natural lashes or anyone seeking a glamorous
        appearance, volume extensions provide significant volume and a soft,
        feathery effect that enhances the eyes beautifully."
          image={volumeImage}
        />
        <ServiceBlock
          side="left"
          title="Mega Volume"
          body="Mega volume lash extensions take the volume technique to the next level 
        by using an even greater number of ultra-fine extensions (typically 10-20) for 
        each natural lash. This creates an extremely full, dense, and dramatic effect. 
        Mega volume extensions are perfect for individuals who want a bold, glamorous look 
        for special occasions or who prefer a very thick, eye-catching lash line. This style 
        offers the highest level of volume and thickness, making a powerful statement."
          image={megaImage}
        />
        <h2 className="style-list__title">ADD ONS</h2>
        <ServiceBlock
          side="left"
          title="Wispy"
          body="Adds texture and dimension into any set (not applicable for Classic extensions)"
          image={wispyImage}
        />
        <ServiceBlock
          side="left"
          title="Specialty Curl"
          body="Add in L/M curl to create a Foxeye/Eyeliner effect"
          image={specialtyImage}
        />
      </div>
    </main>
  );
}
