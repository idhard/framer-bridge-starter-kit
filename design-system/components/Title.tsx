import * as React from "react"
import { IonTitle } from '@ionic/react';
// Types
export type Props = {
  text: string
}

// Component
export const Title: React.FC<Props> = ({
  text
}) => (
  <IonTitle
  >
    {text || 'test'}
  </IonTitle>
)

