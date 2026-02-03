import { Outlet, Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
                        <Activity className="h-6 w-6" />
                        <span>MediFlow AI</span>
                    </Link>
                    <nav className="flex gap-4">
                        <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
                        <Link to="/admin" className="text-sm font-medium hover:text-primary">Admin</Link>
                        <Link to="/booking" className="text-sm font-medium hover:text-primary">Book Appointment</Link>
                        <Link to="/login" className="text-sm font-medium hover:text-primary">Staff Login</Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
                © 2024 MediFlow AI. Government Hospital Scheduler.
            </footer>
        </div>
    );
}
