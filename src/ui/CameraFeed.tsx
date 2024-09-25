import { useEffect, useRef } from "react"

export default function CameraFeed(): JSX.Element {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            }).catch((error) => {
                console.log(error);
            });
        }

    }, [videoRef]);

    return (
        <video ref={videoRef} autoPlay className="" />
    )
}
