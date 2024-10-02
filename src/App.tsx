import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Sessions from "./pages/Sessions";
import CreateSession from "./pages/CreateSession";
import CreateFolder from "./pages/CreateFolder";
import SessionDetails from "./pages/SessionDetails";
import NotFound from "./pages/NotFound";
import AppLayout from "./ui/AppLayout";
import Menu from "./ui/Menu";
import Modal from "./ui/Modal";
import JoinByQRCode from "./pages/JoinByQRCode";

function App() {
  return (
    <Modal>
      <Menu>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate to={'home/'} />} />
              <Route path="home/" element={<Home />}></Route>

              <Route path="sessions/" element={<Sessions />} />
              <Route path="sessions/new-session/" element={<CreateSession />} />
              <Route path="sessions/:sessionId" element={<SessionDetails />} />
              <Route path="sessions/new-folder/" element={<CreateFolder />} />
              <Route path="join-session/" element={<JoinByQRCode />} />

              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Menu>
    </Modal>
  )
}

export default App
