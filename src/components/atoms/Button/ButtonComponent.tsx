import React from "react";
import { Button, Label } from "./Button";

const ButtonComponent = ({ label = "Discover more" }) => {
  return (
    <Button>
      <Label>{label}</Label>
    </Button>
  );
};

export default ButtonComponent;