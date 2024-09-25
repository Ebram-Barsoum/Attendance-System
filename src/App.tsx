import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import CreateSession from "./pages/CreateSession"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import SessionDetails from "./pages/SessionDetails"
import Sessions from "./pages/Sessions"
import SignUp from "./pages/SignUp"
import AppLayout from "./ui/AppLayout"
import Menu from "./ui/Menu"
import Modal from "./ui/Modal"

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
