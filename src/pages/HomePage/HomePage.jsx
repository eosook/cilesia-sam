import "./HomePage.scss";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import ReadyToBook from "../../components/ReadyToBook/ReadyToBook";

export default function HomePage() {
  return (
    <main className="home">
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__header">Make your lash dreams a reality</h1>
          <h3 className="hero__subheader">Cilesia Beauty Bar</h3>
        </div>
      </div>
      <WhatWeDo />
      <WhoWeAre />
      <ReadyToBook />
    </main>
  );
}
