import { LuScan } from "react-icons/lu";
import Column from "../ui/Column";
import Header from "../ui/Header";
import QRCodeReader from "../ui/QRCodeReader";

export default function JoinByQRCode() {
    return (
        <Column className="space-y-5">
            <Header className="flex items-start gap-2"> <LuScan className="text-4xl" /> <span className="text-xl sm:text-2xl"> Scan A QR Code to join a session</span></Header>
            <QRCodeReader id="QRCodeScanner" />
        </Column>
    )
}
