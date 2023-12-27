import { useEffect, useRef, useState } from "react";

interface CameraComponentTypes {
    getImageUrl: (image: string) => void
}

const CameraComponent: React.FC<CameraComponentTypes> = ({ getImageUrl }) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const snapshotRef = useRef<HTMLDivElement>(null);
    const [snapshot, setSnapshot] = useState<string | null>(null);

    useEffect(() => {

        const startVideoStream = async () => {
            try {
                const constraints: MediaStreamConstraints = { video: true };

                const stream: MediaStream = await navigator.mediaDevices.getUserMedia(constraints);

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing camera", error)
            }
        };

        startVideoStream();

        return () => {
            const tracks: MediaStreamTrack[] = (videoRef.current?.srcObject as MediaStream)?.getTracks();
            if (tracks) {
                tracks.forEach(track => track.stop());
            }
        }

    }, [])

    const takeSnapshot = () => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        const canvas = document.createElement("canvas");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext("2d");

        context?.drawImage(video, 0, 0, canvas.width, canvas.height);

        const dataURL = canvas.toDataURL("image/png");

        setSnapshot(dataURL);
        getImageUrl(dataURL);

        const tracks = (video.srcObject as MediaStream)?.getTracks();
        if (tracks) {
            tracks.forEach(track => track.stop());
        }
    }

    return (
        <div className="d-flex flex-column">
            <video ref={videoRef} autoPlay playsInline muted className="mb-3" />
            <button onClick={takeSnapshot} className="button-reset btn-green btn-small mb-3">Take Snapshot</button>
            {snapshot && (
                <div ref={snapshotRef}>
                    <img src={snapshot} alt="Snapshot" style={{ width: '100%', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default CameraComponent