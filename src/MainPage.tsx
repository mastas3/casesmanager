import * as React from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { Grid, Col, Row } from "react-bootstrap";
import SoftwareProblemSteps from "./SoftwareProblemSteps";
import HardwareProblemsSteps from "./HardwareProblemsSteps";
import Paper from "material-ui/Paper";

export default class MainPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedValue: null,
      stepsVisible: false
    };
  }

  handleSelectChange(event: any, index: number, value: number) {
    this.setState({
      selectedValue: value,
      softStepsVisible: value === 1,
      hardwareVisible: value === 2
    });
  }

  render() {
    const style = {
      raisedbutton: {
        background: "rgb(82, 77, 84)"
      },

      paper: {
        width: "800px",
        height: "600px",
        display: "inline-block",
        padding: "10px"
      }
    };

    return (
      <Paper zDepth={1} style={style.paper}>
        <Grid>
          <Row className="show-grid">
            <Col md={4}>
              <h1>Open new case:</h1>
              <SelectField
                floatingLabelText="Type of problem"
                value={this.state.selectedValue}
                onChange={this.handleSelectChange.bind(this)}
              >
                <MenuItem value={1} primaryText="Software" />
                <MenuItem value={2} primaryText="Hardware" />
                <MenuItem value={3} primaryText="Network" />
                <MenuItem value={4} primaryText="Printer" />
              </SelectField>
              <SoftwareProblemSteps stepsVisible={this.state.softStepsVisible} />
              <HardwareProblemsSteps hardwareVisible={this.state.hardwareVisible} />
            </Col>
          </Row>
        </Grid>
      </Paper>
    );
  }
}
