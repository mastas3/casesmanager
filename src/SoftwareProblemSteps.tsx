import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import TextField from 'material-ui/TextField';

export default class SoftwareProblemSteps extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      stepIndex: 0,
      stepFinished: false,
    }
  }

  handleNextStep = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrevStep = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  };

  renderStepActions(step: number) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={stepIndex === 2 ? "Finish" : "Next"}
          primary={true}
          onTouchTap={this.handleNextStep}
        />
        {step > 0 &&
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrevStep}
          />}
      </div>
    );
  }

  render() {
    const { stepIndex } = this.state;
    if(!this.props.stepsVisible) return <div></div>;
    return (
      <div style={{maxWidth: 380, maxHeight:400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Choose software</StepLabel>
            <StepContent>
              <ul>
                <li>Outlook</li>
                <li>Chrome</li>
                <li>Windows</li>
              </ul>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Choose Operating System</StepLabel>
            <StepContent>
              <ul>
                <li>Window 7</li>
                <li>Windows 10</li>
                <li>Mac OS</li>
              </ul>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Add more information</StepLabel>
            <StepContent>
              <TextField
                multiLine={true}
                rows={2}
              />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
    )
  }
}
