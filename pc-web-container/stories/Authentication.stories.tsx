import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Authentication,
  AuthenticationProps,
} from "../src/app/components/Authentication";
import { RootWithStore } from "../src/test-utils";
import { setUserInfo } from "../src/utils";

const meta: Meta = {
  title: "Authentication",
  component: Authentication,
};

export default meta;

const Template: ComponentStory<typeof Authentication> = (
  args: AuthenticationProps
) => {
  if (
    args.children.props.children === "Not authenticated, display login page."
  ) {
    setUserInfo(null);
  } else {
    setUserInfo({
      name: "admin",
      token: "token",
    });
  }
  return (
    <RootWithStore>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Authentication {...args} />} />
        </Routes>
      </BrowserRouter>
    </RootWithStore>
  );
};

export const NotAuthenticated = Template.bind({});
NotAuthenticated.args = {
  children: (
    <div style={{ textAlign: "center", padding: "30px" }}>
      Not authenticated, display login page.
    </div>
  ),
};

export const AuthenticatedClickRefreshIcon = Template.bind({});
AuthenticatedClickRefreshIcon.args = {
  children: (
    <div style={{ textAlign: "center", padding: "30px" }}>
      Authenticated, display children.
    </div>
  ),
};
