module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#3B82F6',
            dark: '#2563EB',
          },
          secondary: {
            DEFAULT: '#10B981',
            dark: '#059669',
          },
          dark: {
            DEFAULT: '#1F2937',
            800: '#1E293B',
            900: '#111827',
          },
          light: {
            DEFAULT: '#F3F4F6',
            200: '#E5E7EB',
          },
        },
        animation: {
          'float': 'float 3s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
    plugins: [],
  }