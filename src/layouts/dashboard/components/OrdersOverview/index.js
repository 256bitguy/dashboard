// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

//Job Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//Job Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
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
        <TimelineItem color="success" icon="notifications" title="Dsa" dateTime="22 DEC 7:20 PM" />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="System Design"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Aptitude"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem color="warning" icon="payment" title="Projects" dateTime="20 DEC 2:20 AM" />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Coding Questions"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
