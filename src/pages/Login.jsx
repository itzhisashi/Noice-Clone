export default function Login() {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900">Staff Login</h2>
                    <p className="mt-2 text-slate-600">Secure access for hospital authorities</p>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <input type="email" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Email Address" />
                        <input type="password" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Password" />
                    </div>
                    <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
