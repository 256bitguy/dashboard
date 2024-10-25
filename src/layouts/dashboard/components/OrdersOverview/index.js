// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

//Job Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//Job Dashboard 2 examples/Timeline/TimelineItem
import TimelineItem from "../../../../examples/Timeline/TimelineItem";
import { useSelector } from "react-redux";

function OrdersOverview() {
  const Timelines = useSelector((state) => state.counter.timelines);
  console.log(Timelines);
  const count = useSelector((state) => state.counter.current);
  console.log(count);
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Preparation Strategy
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography variant="button" color="text" fontWeight="medium">
              2
            </MDTypography>{" "}
            Weeks Left
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        {Timelines.map((timeline, index) => (
          <div key={index}>
            {index == count - 1 &&
              timeline.map((item) => (
                <TimelineItem
                  key={item.key}
                  color={item.color}
                  icon={item.icon}
                  title={item.title}
                  dateTime={item.dateTime}
                  lastItem={item.lastItem}
                />
              ))}
          </div>
        ))}
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
