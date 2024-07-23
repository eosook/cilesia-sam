import "./HomePage.scss";
import BookingPolicy from "../../components/BookingPolicy/BookingPolicy";
import BusinessHours from "../../components/BusinessHours/BusinessHours";

export default function HomePage() {
  return (
    <main className="home">
      <div className="hero">
        <h1 className="hero__header">Make your lash dreams a reality</h1>
        <h3 className="hero__subheader">Cilesia Beauty Bar</h3>
      </div>
      <BookingPolicy />
      <BusinessHours />
    </main>
  );
}
