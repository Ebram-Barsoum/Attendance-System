import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import AppHeader from "./AppHeader";
import Modal from "./Modal";

export default function AppLayout(): JSX.Element {
    return (
        <div className="grid grid-cols-[auto_1fr] md:grid-cols-[16rem_1fr] h-[100dvh] font-poppins">
            <SideBar />

            <main className="max-h-[100dvh] bg-primary-100 grid grid-rows-[auto_1fr] ">
                <AppHeader />

                <section className="p-4 overflow-auto sm:p-12">
                    <Modal>
                        <Outlet />
                    </Modal>
                </section>
            </main>
        </div>
    )
}
