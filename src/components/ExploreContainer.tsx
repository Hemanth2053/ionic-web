import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
   <div >
    <IonButton href='./detail'>Cam-1</IonButton>
   </div>
  );
};

export default ExploreContainer;
