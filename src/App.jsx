import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Queue from './pages/Queue';
import Chatbot from './components/Chatbot';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                {/* Admin/Dashboard Routes */}
                <Route path="/admin" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="queue" element={<Queue />} />
                </Route>
            </Routes>
            <Chatbot />
        </BrowserRouter>
    );
}

export default App;
