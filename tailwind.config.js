/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0ea5e9", // Sky 500
                secondary: "#6366f1", // Indigo 500
                accent: "#10b981", // Emerald 500
            },
            backgroundImage: {
        'hero': "linear-gradient(to right, rgba(37,99,235,0.85), rgba(67,56,202,0.85)), url('/file.webp')",
      }
        },
    },
    plugins: [],
}
