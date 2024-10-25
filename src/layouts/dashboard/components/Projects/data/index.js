/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../../../../src/store/slices/Preparation";

export default function data() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "companies", accessor: "companies", width: "45%", align: "left" },
      { Header: "Role", accessor: "Role", align: "center" },
      { Header: "Package", accessor: "Package", align: "center" },
      { Header: "preparation", accessor: "preparation", align: "center" },
      { Header: "Requirements", accessor: "Requirements", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={logoXD} name="Material UI XD Version" />,
        Role: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Front-End Developer
          </MDTypography>
        ),
        Package: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            5.6Lpa
          </MDTypography>
        ),
        preparation: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        Requirements: (
          <Button variant="text" onClick={() => dispatch(increment(1))}>
            Check
          </Button>
        ),
      },
      {
        companies: <Company image={logoAtlassian} name="Add Progress Track" />,
        Role: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Front-End Developer
          </MDTypography>
        ),
        Package: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        preparation: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        Requirements: (
          <Button variant="text" onClick={() => dispatch(increment(2))}>
            Check
          </Button>
        ),
      },
      {
        companies: <Company image={logoSlack} name="Fix Platform Errors" />,
        Role: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Front-End Developer
          </MDTypography>
        ),
        Package: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </MDTypography>
        ),
        preparation: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        Requirements: (
          <Button variant="text" onClick={() => dispatch(increment(3))}>
            Check
          </Button>
        ),
      },
      {
        companies: <Company image={logoSpotify} name="Launch our Mobile App" />,
        Role: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Front-End Developer
          </MDTypography>
        ),
        Package: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </MDTypography>
        ),
        preparation: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        Requirements: (
          <Button variant="text" onClick={() => dispatch(increment(4))}>
            Check
          </Button>
        ),
      },
      {
        companies: <Company image={logoJira} name="Add the New Pricing Page" />,
        Role: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Front-End Developer
          </MDTypography>
        ),
        Package: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        preparation: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        Requirements: (
          <Button variant="text" onClick={() => dispatch(increment(5))}>
            Check
          </Button>
        ),
      },
      {
        companies: <Company image={logoInvesion} name="Redesign New Online Shop" />,
        Role: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Front-End Developer
          </MDTypography>
        ),
        Package: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $2,000
          </MDTypography>
        ),
        preparation: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        Requirements: (
          <Button variant="text" onClick={() => dispatch(increment(6))}>
            Check
          </Button>
        ),
      },
    ],
  };
}
