import './HomePage.scss';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';

export default function HomePage() {
  return (
    <main className="home">
      <div className="hero">
        <h1 className="hero__header">Make your lash dreams a reality</h1>
        <h3 className="hero__subheader">Cilesia Beauty Bar</h3>
      </div>
      <WhatWeDo />
      <WhoWeAre />
    </main>
  );
}
