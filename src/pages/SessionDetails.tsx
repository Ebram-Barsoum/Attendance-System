/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";

import { FaRegEdit } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { FaRegCirclePause, FaRegCircleStop } from "react-icons/fa6";

import { sessions } from "../features/sessions/SessionsList";
import CreateSessionForm from "../features/sessions/CreateSessionForm";
import AddAttendByNameForm from "../features/sessions/AddAttendByNameForm";
import SessionAttendance from "../features/sessions/SessionAttendance";
import Row from "../ui/Row";
import BackButton from "../ui/BackButton";
import Header from "../ui/Header";
import Modal from "../ui/Modal";
import Column from "../ui/Column";
import Button from "../ui/Button";
import ButtonCircle from "../ui/ButtonCircle";
import Timer from "../ui/Timer";
import { useState } from "react";
import CameraFeed from "../ui/CameraFeed";

export default function SessionDetails(): JSX.Element {
    const { sessionId } = useParams();
    const session = sessions.filter((ele) => ele.id === sessionId)[0];
    const [state, setState] = useState<string>('');

    const running = session.status === "running";
    const done = session.status === "done";
    const paused = session.status === "paused";
    const scheduled = session.status === "scheduled";

    return (
        <Column className="gap-8 font-inter">
            <Row className="justify-between ">
                <Row className="gap-3">
                    <BackButton />
                    <Header>{session.title}</Header>
                </Row>

                {!running && !done && (
                    <span className="p-3 grid place-content-center text-white bg-primary-600 rounded-full ">
                        <Modal.Open name="update-session">
                            <FaRegEdit className="text-lg" />
                        </Modal.Open>

                        <Modal.Window name="update-session">
                            <CreateSessionForm />
                        </Modal.Window>
                    </span>
                )}

                {done && <Button className="text-xs sm:text-base">Print Attendance</Button>}
            </Row>

            {running && (
                <Row className="justify-center gap-3">
                    <Button onClick={() => setState('paused')}>
                        <Row className="gap-2">
                            <span>{running ? 'Pause' : paused ? 'Resume' : ''}</span>
                            <FaRegCirclePause className="text-xl" />
                        </Row>
                    </Button>

                    <button className="p-2 bg-white border rounded-md">
                        <Row className="gap-2 text-red-700">
                            <span>End</span>
                            <FaRegCircleStop className="text-xl" />
                        </Row>
                    </button>
                </Row>
            )}

            {running && <div className="w-full flex flex-col  gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-stretch md:w-[90%] md:mx-auto">
                <Column className="relative">
                    <Column className="p-4 flex-1 items-center justify-center border border-dotted border-secondary-500 rounded-md ">
                        {
                            state === 'running' ?
                                <CameraFeed />
                                :
                                <>
                                    <img
                                        src="/public/face.png"
                                        alt=""
                                        className=" mx-auto object-cover w-[40%]"
                                    />

                                    <p className="text-sm text-center md:text-base ">
                                        Tap start to recognize your face
                                    </p>
                                </>
                        }

                        {/* <Row className="w-full absolute top-0 right-0 p-1 justify-between">

                            <Row className="text-secondary-300">
                                <LuDot className="text-xl" />
                                <span>detecting faces</span>
                            </Row>

                            <Row className="ms-auto p-1">
                                <IoVideocam className="text-xl " />
                                <LuDot className="text-xl text-red-700" />
                            </Row>
                        </Row> */}
                    </Column>

                    <Row className="justify-between">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="file" accept="images/*" multiple hidden />
                            <ButtonCircle className="p-2">
                                <MdOutlineFileUpload className="text-lg" />
                            </ButtonCircle>
                            <span className="text-sm">Attenders's faces</span>
                        </label>
                        <Button className="text-sm" onClick={() => setState('running')}>Start</Button>
                    </Row>
                </Column>

                <Column>
                    <Column className="p-4 flex-1 items-center justify-center border border-dotted border-secondary-500 rounded-md">
                        {/*                        
                            <img
                                src="/public/QRCode.png"
                                className=" object-cover aspect-square w-[60%]"
                            /> */}

                        <p className="text-sm text-center md:text-base">
                            Tap below to start generating QR code
                        </p>

                    </Column>

                    <Button className="w-fit mx-auto text-sm">Generate</Button>
                </Column>
            </div>
            }

            {running && <AddAttendByNameForm />}

            {(running || done) && <>
                <SessionAttendance />

            </>}

            {scheduled && <Timer startDate={new Date('11/25/2024, 12:30 PM')} />}

        </Column>
    );
}
