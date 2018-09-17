import React from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Container, Item } from "elements/Gridding";
import { RenderWhen } from "./RenderWhen";

export const FormActions = ({
  children,
  dividerTop,
  dividerBottom,
  handleNext,
  handleCancel
}) => (
  <React.Fragment>
    <RenderWhen when={dividerTop}>
      <Divider />
    </RenderWhen>
    <Container justify="flex-end">
      <Item>
        <Button size="small">Cancel</Button>
        <Button size="small" type="submit" color="primary">
          Next
        </Button>
      </Item>
    </Container>
    <RenderWhen when={dividerBottom}>
      <Divider />
    </RenderWhen>
  </React.Fragment>
);
