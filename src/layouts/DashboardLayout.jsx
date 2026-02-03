import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Users, Activity, LogOut } from 'lucide-react';

export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen bg-slate-100">
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <h1 className="text-xl font-bold">Admin Portal</h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 text-white">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link to="/admin/queue" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition">
                        <Users className="w-5 h-5" />
                        Queue Management
                    </Link>
                    <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition">
                        <Activity className="w-5 h-5" />
                        Doctor Availability
                    </Link>
                </nav>
                <div className="p-4 border-t border-slate-800">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 transition">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </Link>
                </div>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}
