/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images

import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../../../../src/store/slices/Preparation";
import { avatars } from "./avatar";

export default function data() {
  const applied = useSelector((state) => state.company.applied);
  console.log(applied, "asdsd");

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

    rows: applied.map((items, index) => ({
      companies: <Company image={avatars[index + 1]} name={items.companies.name} />,
      Role: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {items.role}
        </MDTypography>
      ),
      Package: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {items.package}
        </MDTypography>
      ),
      preparation: (
        <MDBox width="8rem" textAlign="left">
          <MDProgress value={items.preparation} color="info" variant="gradient" label={false} />
        </MDBox>
      ),
      Requirements: (
        <Button variant="text" onClick={() => dispatch(increment(items.key))}>
          {items.requirements}
        </Button>
      ),
    })),
  };
}
