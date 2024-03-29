import TimelineItem from "./timeline-item/TimelineItem";
import "./Timeline.css";
import { SGBody, SGInternBody, StudentBody } from "./util";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="experience">
        <TimelineItem
          company={"Société Générale - SCAD team"}
          location={"Paris"}
          profession={["Lead - front", "Fullstack Developer"]}
          periodFrom={"2021"}
          periodTo={"today"}
          body={SGBody}
        />
        <TimelineItem
          company={"Société Générale - BPM team - Intership"}
          location={"Paris"}
          profession={["Fullstack Developer"]}
          periodFrom={"2020"}
          periodTo={"2020"}
          body={SGInternBody}
        />
        <TimelineItem
          company={"EFREI Paris"}
          location={"Paris"}
          profession={["Student"]}
          periodFrom={"2016"}
          periodTo={"2021"}
          body={StudentBody}
        />
      </div>
    </div>
  );
};

export default Timeline;
