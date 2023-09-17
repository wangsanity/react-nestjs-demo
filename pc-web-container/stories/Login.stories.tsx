import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login/Login";
import { RootWithStore } from "../src/test-utils";

const meta: Meta = {
  title: "Login",
  component: Login,
};

export default meta;

const Template: ComponentStory<typeof Login> = () => (
  <RootWithStore>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </RootWithStore>
);
export const Default = Template.bind({});
