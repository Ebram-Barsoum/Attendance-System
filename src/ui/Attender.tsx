import { BiEdit } from "react-icons/bi";
import Avatar from "./Avatar";
import Row from "./Row";
import { BsTrash3 } from "react-icons/bs";

export default function Attender({ name, image }: { name: string, image: string }): JSX.Element {
    return (
        <Row className="p-2 justify-between bg-stone-50 border rounded-md">
            <Row className="gap-3">
                <Avatar src={image} alt={name} className="h-11 w-11" />
                <span className="text-sm sm:text-base">{name}</span>
            </Row>

            <Row className="gap-4">
                <button>
                    <BiEdit className="text-base sm:text-xl" />
                </button>

                <button>
                    <BsTrash3 className="text-base sm:text-xl" />
                </button>
            </Row>
        </Row>
    )
}
