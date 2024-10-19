import { FC } from "react";

import { Box, Button, Badge } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import "./Notifications.scss";

const Notifications: FC = () => {
  return (
    <Box className="notifications">
      <Button className="notifications__toggler" aria-label="notifications">
        <Badge color="secondary" badgeContent=" " variant="dot">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </Button>
    </Box>
  );
};

export default Notifications;
