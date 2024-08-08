import AfterCare from "../../components/AfterCare/AfterCare";
import PreCare from "../../components/PreCare/PreCare";
import "./Care.scss";

export default function Care() {
  return (
    <main>
      <div className="care-sections">
        <PreCare />
        <AfterCare />
      </div>
    </main>
  );
}
