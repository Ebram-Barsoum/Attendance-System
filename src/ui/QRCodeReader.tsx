/* eslint-disable @typescript-eslint/no-unused-vars */
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

export default function QRCodeReader({ id }: { id: string }) {


    useEffect(() => {
        const QRCodeScanner = new Html5QrcodeScanner(id, {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            disableFlip: true
        }, false);

        const onSuccess = (decodedText: string) => {
            console.log('Scan result : ', decodedText);
            //   QRCodeScanner.pause();
        };

        QRCodeScanner.render(onSuccess, () => { });

        return () => {
            if (QRCodeScanner.getState() !== 1) {
                QRCodeScanner.pause();
            }

            QRCodeScanner.clear();
        };
    });

    return (
        <div id={id} className="w-[100%] mx-auto lg:w-[50%]" ></div>
    );
}
