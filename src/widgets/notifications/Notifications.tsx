import { FC } from "react";

import { Box, Button, Badge } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { useAppSelector } from "src/app/store/store";
import { getUser } from "src/app/store/slices/user/userSlice";

import "./Notifications.scss";

const Notifications: FC = () => {
  const user = useAppSelector(getUser);

  return (
    <Box className="notifications">
      <Button className="notifications__toggler" aria-label="notifications">
        <Badge
          color="secondary"
          variant="dot"
          invisible={user !== null && user.notificationLength === 0}
        >
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </Button>
    </Box>
  );
};

export default Notifications;
