import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.InputProps & {
  width: number
  height: number
}

type State = {
  text?: string
}

export class Test extends React.Component<Props, State> {
  

  render() {
    return (
      <System.Test
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
