/* eslint-disable @typescript-eslint/no-unused-vars */
import { RiTimerLine } from "react-icons/ri";
import Column from "./Column";
import Row from "./Row";
import { useEffect, useState } from "react";
import { isPast } from "date-fns";
import Header from "./Header";
interface Timer {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

export default function Timer({ startDate }: { startDate: Date }): JSX.Element {
    const [timer, setTimer] = useState<Timer>({} as Timer);

    const { days, hours, minutes, seconds } = timer;

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = startDate.getTime() - now.getTime();
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimer({ days, hours, minutes, seconds });
        })


        return () => clearInterval(interval);
    }, [startDate]);

    if (isPast(startDate)) return <></>;

    return (
        <Column className="self-center gap-10 h-fit mt-auto sm:gap-12">
            <Header className="text-center text-2xl sm:text-3xl md:text-4xl">Session will be started in </Header>

            <Row className="gap-3 bg-white w-fit px-4 py-6  rounded-md border mx-auto sm:gap-6 sm:px-6 sm:py-8">
                <RiTimerLine className="text-2xl text-primary-600 sm:text-4xl" />
                <p className="text-lg sm:text-4xl">{days} D : {hours} H : {minutes} M : {seconds} S</p>
            </Row>
        </Column>
    )
}
