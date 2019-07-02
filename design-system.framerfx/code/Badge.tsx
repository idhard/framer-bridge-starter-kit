import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ButtonProps & {
    text: string
}

export class Badge extends React.Component<Props> {
    render() {
        return <System.Badge {...this.props} />
    }

    static defaultProps: Props = {
      text: "badge"
    }
  

    static propertyControls: PropertyControls<Props> = {
      text: { type: ControlType.String, title: "Text" },
    }
}
