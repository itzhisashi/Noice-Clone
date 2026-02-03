import { Users, Clock, AlertCircle } from 'lucide-react';

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-8 text-slate-800">Hospital Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Patients Today" value="1,284" icon={<Users className="text-blue-500" />} />
                <StatCard title="Avg. Wait Time" value="18 mins" icon={<Clock className="text-orange-500" />} />
                <StatCard title="Emergency Cases" value="23" icon={<AlertCircle className="text-red-500" />} />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold mb-4">Patient Flow Analytics</h2>
                <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                    Chart Placeholder (Recharts Integration)
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded-lg">
                {icon}
            </div>
            <div>
                <p className="text-sm text-slate-500">{title}</p>
                <p className="text-2xl font-bold text-slate-900">{value}</p>
            </div>
        </div>
    );
}
