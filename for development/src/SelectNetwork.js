import { Button } from "react-bootstrap";
import "./selectNetwork.sass";

function SelectNetwork({ selectNetwork, connect, goBack }) {
  return (
    <div className="selectNetwork">
      <div className="network-name">{selectNetwork.name}</div>
      <div className="encription">Encription: WPA2</div>
      <div className="signal">Signal Strength: 28db</div>
      <div className="actions">
        <Button
          size="lg"
          variant="outline-secondary"
          onClick={() => {
            goBack();
          }}
        >
          Cancel
        </Button>
        <Button
          size="lg"
          variant="outline-primary"
          onClick={() => {
            connect();
          }}
        >
          Connect
        </Button>{" "}
      </div>
    </div>
  );
}

export default SelectNetwork;
