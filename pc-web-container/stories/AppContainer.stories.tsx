import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AppContainer,
  AppContainerProps,
} from "../src/app/components/AppContainer";
import { RootWithStore } from "../src/test-utils";

const meta: Meta = {
  title: "AppContainer",
  component: AppContainer,
};

export default meta;

const Template: ComponentStory<typeof AppContainer> = (
  args: AppContainerProps
) => (
  <RootWithStore>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppContainer {...args} />} />
      </Routes>
    </BrowserRouter>
  </RootWithStore>
);
export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ textAlign: "center", padding: "30px" }}>Routes put here</div>
  ),
};
