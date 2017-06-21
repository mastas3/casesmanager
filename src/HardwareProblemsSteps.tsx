import * as React from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";

export default class HardwareProblemsSteps extends React.Component<any, any> {

  render() {
    if(!this.props.hardwareVisible) return <div></div>;
    return (
      <div style={{maxWidth: 380, maxHeight:400, margin: 'auto'}}>
        <TextField
          hintText="Problem Description"
          multiLine={true}
          rows={2}
        />
        <hr />
        <RaisedButton primary={true}>Submit</RaisedButton>
      </div>
    )
  }
}
