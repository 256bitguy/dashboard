/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images

import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../../../../src/store/slices/Preparation";

export default function data() {
  const applied = useSelector((state) => state.company.applied);

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
      companies: <Company name={items.companies.name} />,
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
