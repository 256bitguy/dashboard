import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: 0,
  applied: [
    {
      key: 1,
      companies: {
        name: "Material UI XD Version",
      },
      role: "Front-End Developer",
      package: "5.6 Lpa",
      preparation: 60,
      requirements: "Check",
    },
    {
      key: 2,
      companies: {
        name: "ABC Tech Solutions",
      },
      role: "Full-Stack Developer",
      package: "7.0 Lpa",
      preparation: 75,
      requirements: "Check",
    },
    {
      key: 3,
      companies: {
        name: "XYZ Innovations",
      },
      role: "UI/UX Designer",
      package: "6.5 Lpa",
      preparation: 65,
      requirements: "Check",
    },
    {
      key: 4,
      companies: {
        name: "123 Digital Agency",
      },
      role: "Backend Developer",
      package: "8.0 Lpa",
      preparation: 70,
      requirements: "Check",
    },
    {
      key: 5,
      companies: {
        name: "QRS Technologies",
      },
      role: "Data Scientist",
      package: "9.0 Lpa",
      preparation: 80,
      requirements: "Check",
    },
  ],
};
export const appliedSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    list: (state, action) => {
      const { companies, role, packages, preparation, requirements } = action.payload;
      console.log(action.payload);
      const key = state.applied.length;
      const added = {
        key: key,
        companies: { name: companies },
        role: role,
        package: packages,
        preparation: preparation,
        requirements: requirements,
      };
      state.applied.push(added);
    },
  },
});

export const { list } = appliedSlice.actions;

export default appliedSlice.reducer;
