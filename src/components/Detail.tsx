import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonRippleEffect, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Detail.css';
import { Capacitor } from '@capacitor/core';
import { CapacitorVideoPlayer } from 'capacitor-video-player'
import { VideoPlayer } from '@awesome-cordova-plugins/video-player';
import { micOff, volumeMute, scanSharp, camera, arrowBack, arrowForward, arrowUpCircle, arrowRedoOutline, arrowRedoCircle, arrowUndoCircle, arrowDownCircle, arrowBackCircle, arrowForwardCircle, arrowForwardSharp, arrowUpOutline, arrowDownSharp, caretDown, chevronDown, chevronForward, chevronBack, chevronUp } from 'ionicons/icons';

interface ContainerProps { }

const Detail: React.FC<ContainerProps> = () => {

    // useEffect(() => {
    //   playVideo()
    // }, [])

    
    
    
    
    // let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" as any
         

    // const playVideo = async () => {
    //      await CapacitorVideoPlayer.play(url)
    //      console.log(`Video Data`)
    // }





    return (
        <IonPage className='detailcont'>
            <IonHeader className='head-bar'>
                <IonToolbar>
                    <IonRow>
                        <IonIcon icon={chevronBack} size="large"></IonIcon>
                        <IonCol>
                            <IonTitle>Living Room</IonTitle>
                            {/* <IonText>Live</IonText> */}
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className='maincomp'>
                <div className='video'>
                    {/* <IonText>Video Player</IonText> */}
                    <video height='180px' width='100%' controls muted autoPlay loop >
                        <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'></source>
                    </video>
                    {/* <IonButton onClick={() => console.log("Clicked")}>Play</IonButton> */}
                </div>
                <div className='contain'>
                    <div className='btns'>
                    <IonFabButton color="success"  className='btncont'>
                            <IonIcon icon={micOff} size="default"></IonIcon>
                        </IonFabButton>
                        <IonText className='textcont'>Listen</IonText>
                    </div>
                    <div className='btns'>
                    <IonFabButton color="success"  className='btncont'>
                            <IonIcon icon={volumeMute} size="default"></IonIcon>
                        </IonFabButton>
                        <IonText className='textcont'>Speak</IonText>
                    </div>
                    <div className='btns'>
                    <IonFabButton color="success"  className='btncont'>
                            <IonIcon icon={camera} size="default"></IonIcon>
                        </IonFabButton>
                        <IonText className='textcont'>Take photo</IonText>
                    </div>
                    <div className='btns'>
                         <IonFabButton color="success"  className='btncont'>
                            <IonIcon icon={scanSharp} size="default"></IonIcon>
                        </IonFabButton>
                        <IonText className='textcont'>FullScreen</IonText>
                    </div>
                </div>

                <IonFab className='mot'>
                    <div className='up'>
                    
                        <IonFabButton color="dark"  className='btncon'>
                            <IonIcon icon={chevronUp} size="large"></IonIcon>
                            <IonRippleEffect></IonRippleEffect>
                        </IonFabButton>
                     
                    </div>
                    <div className='left-right'>
                    
                        <IonFabButton color="dark" className='btncon'>
                            <IonIcon icon={chevronBack} size="large"></IonIcon>
                        </IonFabButton>
                     
                     
                        <IonFabButton color="dark" className='btncon'>
                            <IonIcon icon={chevronForward} size="large"></IonIcon>
                        </IonFabButton>
                     
                    </div>
                    <div className='up'>
                    
                        <IonFabButton color="dark" className='btncon'>
                            <IonIcon icon={chevronDown} size="large"></IonIcon>
                        </IonFabButton>
                     
                    </div>

                   
                </IonFab>

                </div>
            </IonContent>

        </IonPage>
    )
}

export default Detail;

// function useEffect(arg0: () => void, arg1: never[]) {
//     throw new Error('Function not implemented.');
// }
