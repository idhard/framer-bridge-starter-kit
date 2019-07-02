import * as React from "react"
import {Button} from 'reactstrap';
//import Button from '@material-ui/core/Button';

// Types
export type Props = {
  /** Optional string that can be used to set the button value */
  text?: string
}

// Component
export const Test: React.FC<Props> = ({
  text,
}) => (
  <div
  >
      <Button variant="contained" color="primary">button</Button>
    {text || 'test'}
  </div>
)

