import AfterCare from "../../components/AfterCare/AfterCare";
import PreCare from "../../components/PreCare/PreCare";
import "./Care.scss";

export default function Care() {
  return (
    <main>
      <div className="care-sections">
        <h1 className="care__title--main">Care for your Lashes</h1>
        <PreCare />
        <AfterCare />
      </div>
    </main>
  );
}
