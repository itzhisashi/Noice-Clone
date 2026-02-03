import { useState } from 'react';

export default function Booking() {
    const [selectedDept, setSelectedDept] = useState('');

    const departments = [
        { id: 1, name: 'General Medicine', slots: 12 },
        { id: 2, name: 'Cardiology', slots: 5 },
        { id: 3, name: 'Pediatrics', slots: 8 },
        { id: 4, name: 'Orthopedics', slots: 3 },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Book an Appointment</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Select Department</label>
                    <div className="grid gap-4">
                        {departments.map((dept) => (
                            <button
                                key={dept.id}
                                onClick={() => setSelectedDept(dept.name)}
                                className={`p-4 rounded-xl text-left transition border ${selectedDept === dept.name ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-slate-900">{dept.name}</span>
                                    <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">{dept.slots} Slots</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit">
                    <h3 className="text-lg font-bold mb-4">Summary</h3>
                    {selectedDept ? (
                        <div className="space-y-4">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-slate-500">Department</span>
                                <span className="font-medium">{selectedDept}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-slate-500">Date</span>
                                <span className="font-medium">{new Date().toLocaleDateString()}</span>
                            </div>
                            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                                Confirm Booking
                            </button>
                        </div>
                    ) : (
                        <div className="text-center text-slate-400 py-8">
                            Select a department to proceed
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
