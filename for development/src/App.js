import React from "react";
import NetworkList from "./NetworkList";
import SelectNetwork from "./SelectNetwork";
import TypePass from "./TypePass";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: "main",
      networkList: [],
      selectNetwork: null,
      activeNetwork: false,
    };

    this.selectNetwork = this.selectNetwork.bind(this);
    this.connectBtn = this.connectBtn.bind(this);
    this.cancelBtn = this.cancelBtn.bind(this);
    this.backBtn = this.backBtn.bind(this);
    this.doneBtn = this.doneBtn.bind(this);
  }

  componentDidMount() {
    const networkList = [
      "My Wifi",
      "Wifi 1",
      "network one24234",
      "another port",
      "Toocool",
      "Beltelekom 23424",
      "CoolNet",
      "CoolNet 2",
    ];
    this.setState({ networkList });
  }

  componentDidUpdate() {
    function getNodeWidth(node) {
      const nodeStyles = window.getComputedStyle(node);
      const width = node.offsetWidth;
      const borderLeftWidth = parseFloat(nodeStyles.borderLeftWidth);
      const borderRightWidth = parseFloat(nodeStyles.borderRightWidth);
      const paddingLeft = parseFloat(nodeStyles.paddingLeft);
      const paddingRight = parseFloat(nodeStyles.paddingRight);
      return (
        width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight
      );
    }

    document.querySelectorAll("li.network-item").forEach((item) => {
      const withElem = getNodeWidth(item.querySelector(".text"));
      if (withElem > 190) {
        item.querySelector(".text").setAttribute("class", "text runline");
      }
    });
  }

  selectNetwork(selectNetwork) {
    this.setState({ window: "select", selectNetwork });
  }

  connectBtn() {
    this.setState({ window: "connect" });
  }

  cancelBtn() {
    this.setState({ window: "main" });
  }

  backBtn() {
    this.setState({ window: "select" });
  }

  doneBtn() {
    const countNetworkList = this.state.networkList;
    const removedNetwork = countNetworkList.splice(
      this.state.selectNetwork.key,
      1
    );
    this.setState({
      window: "main",
      networkList: [removedNetwork, ...countNetworkList],
      activeNetwork: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.window === "main" ? (
          <NetworkList
            networkList={this.state.networkList}
            activeNetwork={this.state.activeNetwork}
            selectNetwork={this.selectNetwork}
          />
        ) : (
          ""
        )}
        {this.state.window === "select" ? (
          <SelectNetwork
            selectNetwork={this.state.selectNetwork}
            connect={this.connectBtn}
            goBack={this.cancelBtn}
          />
        ) : (
          ""
        )}
        {this.state.window === "connect" ? (
          <TypePass goBack={this.backBtn} done={this.doneBtn} />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}
