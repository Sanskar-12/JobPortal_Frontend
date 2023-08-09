import { Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import { useSelector } from "react-redux";
import StatComponent from "./StatComponent";

const UserDashboard = () => {
  const {user}=useSelector(state=>state.profile)
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Dashboard
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >

          <StatComponent
            value={user?.createdAt?.split("T")?.[0]}
            icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Member since"
            money={""}
          />
          <StatComponent
            value={user?.jobHistory?.length}
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Number of jobs submitted"
            money={""}
          />
        </Stack>
      </Box>
    </>
  );
};

export default UserDashboard;
