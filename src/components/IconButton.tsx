import React from "react";
import { Button } from "react-bootstrap";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const IconButton = (icon: any, { onClick }: Props) => (
  <Button
    variant="outline-secondary"
    className="button-delete"
    onClick={onClick}
  >
    {icon}
  </Button>
);
