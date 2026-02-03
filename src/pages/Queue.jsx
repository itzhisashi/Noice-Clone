export default function Queue() {
    const queueData = [
        { id: 'A101', name: 'John Doe', dept: 'General', status: 'In Progress' },
        { id: 'A102', name: 'Jane Smith', dept: 'General', status: 'Waiting' },
        { id: 'B201', name: 'Mike Ross', dept: 'Cardiology', status: 'Waiting' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-8 text-slate-800">Live Queue Management</h1>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-600">Token ID</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Patient Name</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Department</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {queueData.map((patient) => (
                            <tr key={patient.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">{patient.id}</td>
                                <td className="px-6 py-4 text-slate-600">{patient.name}</td>
                                <td className="px-6 py-4 text-slate-600">{patient.dept}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${patient.status === 'In Progress' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Call Patient</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
