import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.InputProps & {

  text: string
}

export class Title extends React.Component<Props> {
  

  render() {
    return (
      <System.Title
        {...this.props} 
      />
    )
  }

  static defaultProps: Props = {
    text: "Email",
  }

  static propertyControls: PropertyControls<Props> = {
    placeholder: { type: ControlType.String, title: "Placeholder" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    error: { type: ControlType.Boolean, title: "Error" }
  }
}
