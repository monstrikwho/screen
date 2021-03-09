import "./app.sass";

function NetworkList({ networkList, activeNetwork, selectNetwork }) {
  return (
    <ul className="connections">
      {networkList.map((item, key) => (
        <li
          className="network-item"
          key={key}
          onClick={() => {
            selectNetwork({ name: item, key });
          }}
        >
          <div className="network-name">
            <div className="text">{item}</div>
          </div>
          <div className="network-status">
            <div
              className={
                activeNetwork && key === 0 ? "status connected" : "status"
              }
            >
              <i className="fab fa-get-pocket"></i>
            </div>
            <div className="status-connection">
              <i className="fas fa-wifi"></i>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NetworkList;
