import * as React from "react"
import { IonBadge } from '@ionic/react';

  // Types
export type Props = {
    /** Optional string that can be used to set the button value */
    text?: string
}

  // Component
export const Badge: React.FC<Props> = ({
    text
  }) => (
    <IonBadge>{text || '99'}</IonBadge>
  )