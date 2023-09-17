import React from "react";
import { useAppDispatch, userAppSelector } from "../store";
import { selectUser, setUser } from "../userSlice";
import { Box } from "@wanderingleaf/learning-pc-web-components";
import { selectTexts } from "../../texts/textsSlice";
import { useNavigate } from "react-router";

export interface AppContainerProps {
  children: React.ReactElement;
}

export const AppContainer = ({ children }: AppContainerProps): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = userAppSelector(selectUser);
  const { textsShort } = userAppSelector(selectTexts);
  const logout = () => {
    dispatch(setUser(null));
    navigate("login");
  };
  const siteStyle: React.CSSProperties = {
    flexDirection: "column",
  };
  const headerStyle: React.CSSProperties = {
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#eee",
    padding: "20px",
  };

  return (
    <Box style={siteStyle}>
      <Box style={headerStyle}>
        <Box>Header</Box>
        <Box>
          {userInfo && `Hello, ${userInfo.name} `}
          <a
            style={{ cursor: "pointer", color: "blue", marginLeft: "10px" }}
            onClick={logout}
          >
            {textsShort?.logout}
          </a>
        </Box>
      </Box>
      {children}
    </Box>
  );
};
