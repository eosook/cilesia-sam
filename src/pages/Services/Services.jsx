import "./Services.scss";
import ServiceBlock from "../../components/ServiceBlock/ServiceBlock";
import ServiceAddOns from "../../components/ServiceAddOns/ServiceAddOns";
import classicImage from "../../assets/images/Classic.png";
import hybridImage from "../../assets/images/Hybrid.png";
import volumeImage from "../../assets/images/Volume.png";
import megaImage from "../../assets/images/Mega.png";
import wispyImage from "../../assets/images/Wispy.png";
import wetImage from "../../assets/images/Wet.png";
import animeImage from "../../assets/images/Anime.png";
import foxeyeImage from "../../assets/images/Foxeye-cropped.png";

export default function Services() {
  const toBooking = () => {
    location.href =
      "https://book.squareup.com/appointments/vp26zekhc1y452/location/L91FW9Z6QEKDK/services";
  };
  return (
    <main className="services">
      <div className="services-hero">
        <h1 className="services-hero__title">SERVICES</h1>
        <h3 className="services-hero__subtitle">
          Start your day with effortless beauty and get ready to wake up with no
          makeup!
        </h3>
        <button className="services-hero__button" onClick={toBooking}>
          BOOK NOW
        </button>
      </div>
      <div className="style-list">
        <h2 className="style-list__title">Specialty Styles</h2>
        <ServiceBlock
          side="left"
          title="Anime"
          body="Anime Lashes are inspired by the bold, dramatic eyes often seen in anime 
          characters. This set features longer, voluminous lashes concentrated in various 
          “peaks” along the lash line, creating a doll-eye effect that gives your eyes an 
          exaggerated, playful, and youthful look. Perfect for those who want a unique, 
          eye-catching style with lots of flair and a touch of fantasy."
          image={animeImage}
        />
        <ServiceBlock
          side="right"
          title="Foxeye/Eyeliner"
          body="Foxeye Lashes are designed to enhance the natural almond shape of your 
          eyes with a lifted, elongated appearance. The outer corners are fanned out to 
          create a sleek, seductive fox-like look, while the inner corners stay subtle and 
          natural. This style accentuates your features with a bold yet sophisticated edge, 
          ideal for those looking for a striking, sexy effect."
          image={foxeyeImage}
        />
        <h2 className="style-list__title">Standard Styles</h2>
        <ServiceBlock
          side="left"
          title="Classic Lashes"
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
          title="Hybrid Lashes"
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
          title="Wet Lashes"
          body="Wet lashes are a close relative to classic lashes, offering a soft, 
          dewy look, as if you've just stepped out of a fresh shower. This method creates 
          a fuller effect than classic sets, but softer than a volume or hybrid set. This 
          style is perfect for anyone who wants a textured lashline without the drama of a 
          full volume set."
          image={wetImage}
        />
        <ServiceBlock
          side="right"
          title="Volume Lashes"
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
          title="Mega Volume Lashes"
          body="Mega volume lash extensions take the volume technique to the next level 
        by using an even greater number of ultra-fine extensions (typically 10-20) for 
        each natural lash. This creates an extremely full, dense, and dramatic effect. 
        Mega volume extensions are perfect for individuals who want a bold, glamorous look 
        for special occasions or who prefer a very thick, eye-catching lash line. This style 
        offers the highest level of volume and thickness, making a powerful statement."
          image={megaImage}
        />
        <h2 className="style-list__title">ADD ONS</h2>
        <ServiceAddOns
          side="left"
          title="Wispy"
          body="Add a touch of texture and movement to your lash set. With strategically 
          placed longer and shorter extensions, this add-on creates a light, airy effect 
          to any lash set. (Not applicable for Classic Lashes)"
        />
        <ServiceAddOns
          side="left"
          title="Brown/Colour Lashes"
          body="Add a colour matching service to your appointment by opting for brown lash 
          tones. Please contact us ahead of time for this service to ensure we have your 
          desired colours on hand. "
        />
        <ServiceAddOns
          side="left"
          title="Bottom Lashes"
          body="Add-on for any lash set to open up your eyes and add more drama to your look."
        />
      </div>
    </main>
  );
}
