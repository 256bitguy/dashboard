/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

//Job Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Button, Typography } from "@mui/material";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Recruiter", accessor: "Recruiter", width: "45%", align: "left" },
      { Header: "Company", accessor: "Company", align: "left" },
      { Header: "Status", accessor: "Status", align: "center" },
      { Header: "Date", accessor: "Date", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        Recruiter: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        Company: <Job title="Manager" description="Organization" />,
        Status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Scheduled" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        Date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: <Button variant="text">Edit</Button>,
      },
      {
        Recruiter: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        Company: <Job title="Programator" description="Developer" />,
        Status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        Date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: <Button variant="text">Edit</Button>,
      },
      {
        Recruiter: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        Company: <Job title="Executive" description="Projects" />,
        Status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Scheduled" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        Date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: <Button variant="text">Edit</Button>,
      },
      {
        Recruiter: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        Company: <Job title="Programator" description="Developer" />,
        Status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Scheduled" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        Date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: <Button variant="text">Edit</Button>,
      },
      {
        Recruiter: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        Company: <Job title="Manager" description="Executive" />,
        Status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        Date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: <Button variant="text">Edit</Button>,
      },
      {
        Recruiter: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        Company: <Job title="Programator" description="Developer" />,
        Status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        Date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: <Button variant="text">Edit</Button>,
      },
    ],
  };
}
