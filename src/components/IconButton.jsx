import { Button } from "react-bootstrap";

export const IconButton = ({ icon, onClick }) => (
  <Button
    variant="outline-secondary"
    className="button-delete"
    onClick={onClick}
  >
    {icon}
  </Button>
);
