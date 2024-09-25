/* eslint-disable @typescript-eslint/no-unused-vars */
import { format } from "date-fns";
import { Session } from '../lib/constants';
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { MdAccessAlarm } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbProgressBolt } from "react-icons/tb";
import Menu from "./Menu";
import Row from "./Row";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

interface CardProps extends Session {
    cardName: string
}
interface Status {
    name: string,
    icon: ReactNode
}
const statusMap: Record<string, Status> = {
    'done': {
        name: 'Done',
        icon: <IoIosCheckmarkCircle className="text-green-700 text-lg" />
    },
    'running': {
        name: 'Running',
        icon: <TbProgressBolt className="text-blue-700 text-lg" />
    },
    'scheduled': {
        name: 'Scheduled',
        icon: <MdAccessAlarm className="text-yellow-500 text-lg" />
    }
}

export default function Card({
    id,
    title,
    cardName,
    userName,
    userImage,
    individuals,
    time,
    date,
    status
}: CardProps): JSX.Element {

    // converting to 12 h time stamp
    const [hours, minutes] = time.split(":");
    const time12 = format(
        new Date().setHours(Number(hours), Number(minutes)),
        "hh:mm a"
    );

    // getting the day name of date
    const day = format(date, 'EEEE');

    const label = cardName === 'Session' ? 'individuals' : cardName === 'Sequence' ? 'Sessions' : 'Sequences';

    return (
        <div className="flex flex-col gap-8 text-xs bg-white p-3 rounded-lg border shadow-sm sm:text-base">
            <div className="flex justify-between items-center">
                <Link to={id} className="flex items-center gap-2">
                    <span>
                        {title}
                    </span>
                    <Row className="gap-2">
                        <span className="text-sm">
                            ({statusMap[status].name})
                        </span>
                        <span>
                            {statusMap[status].icon}
                        </span>
                    </Row>
                </Link>

                <div className="flex items-center gap-6 sm:gap-16">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-[1.75rem_!important] w-[1.75rem_!important]" />
                        <span>Created by {userName}</span>
                    </div>

                    <Row className="relative">
                        <Menu.Toggler id={id} />
                        <Menu.List id={id} className="border">
                            <Menu.Option id={id} >
                                <FaRegTrashCan />
                                Delete
                            </Menu.Option>

                            <Menu.Option id={id} >
                                <FiEdit />
                                Update
                            </Menu.Option>
                        </Menu.List>
                    </Row>
                </div>
            </div>

            <div className="flex justify-between items-center sm:text-sm">
                <div className="flex items-center gap-3  text-secondary-200 ">
                    <span>Total {individuals}</span> <span className="hidden sm:block"> {label}</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-6">
                    <span>{day}</span>
                    <span className="text-secondary-200">{date.toLocaleDateString()}</span>
                    <span className="text-secondary-200">{time12}</span>
                </div>
            </div>
        </div>
    );
}
