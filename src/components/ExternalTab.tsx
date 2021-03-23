import { IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { triangle } from "ionicons/icons";

export const ExternalTab = () => (
  <IonTabButton tab="tab1" href="/tab1">
    <IonIcon icon={triangle} />
    <IonLabel>External Tab</IonLabel>
  </IonTabButton>
);
