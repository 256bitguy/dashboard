import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: 1,
  timelines: [
    [
      {
        key: 1,
        color: "success",
        icon: "notifications",
        title: "Dsa",
        dateTime: "22 DEC 7:20 PM",
      },
      {
        key: 2,
        color: "error",
        icon: "inventory_2",
        title: "System Design",
        dateTime: "21 DEC 11 PM",
        lastItem: true,
      },
    ],
    [
      {
        key: 1,
        color: "info",
        icon: "shopping_cart",
        title: "Aptitude Test",
        dateTime: "21 DEC 9:34 PM",
      },
      {
        key: 2,
        color: "warning",
        icon: "payment",
        title: "Project Submission",
        dateTime: "20 DEC 2:20 AM",
      },
      {
        key: 3,
        color: "primary",
        icon: "vpn_key",
        title: "Interview Scheduled",
        dateTime: "19 DEC 4:54 AM",
        lastItem: true,
      },
    ],
    [
      {
        key: 1,
        color: "success",
        icon: "done",
        title: "Completed Course",
        dateTime: "18 DEC 10:00 AM",
      },
      {
        key: 2,
        color: "error",
        icon: "error",
        title: "Failed Exam",
        dateTime: "17 DEC 1:00 PM",
        lastItem: true,
      },
    ],
    [
      {
        key: 1,
        color: "info",
        icon: "event",
        title: "Hackathon Participation",
        dateTime: "16 DEC 5:30 PM",
      },
      {
        key: 2,
        color: "warning",
        icon: "assignment",
        title: "Group Project Kickoff",
        dateTime: "15 DEC 3:00 PM",
      },
      {
        key: 3,
        color: "primary",
        icon: "check_circle",
        title: "Received Scholarship",
        dateTime: "14 DEC 12:00 PM",
      },
    ],
    [
      {
        key: 1,
        color: "info",
        icon: "shopping_cart",
        title: "Aptitude Test",
        dateTime: "21 DEC 9:34 PM",
      },
      {
        key: 2,
        color: "warning",
        icon: "payment",
        title: "Project Submission",
        dateTime: "20 DEC 2:20 AM",
      },
      {
        key: 3,
        color: "primary",
        icon: "vpn_key",
        title: "Interview Scheduled",
        dateTime: "19 DEC 4:54 AM",
      },
    ],
    [
      {
        key: 1,
        color: "success",
        icon: "notifications",
        title: "Dsa",
        dateTime: "22 DEC 7:20 PM",
      },
      {
        key: 2,
        color: "error",
        icon: "inventory_2",
        title: "System Design",
        dateTime: "21 DEC 11 PM",
      },
    ],
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.current = action.payload;
      console.log(state.current);
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
