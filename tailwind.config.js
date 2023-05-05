/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false,
    theme: {
      fontSize: {
        10: [
          '10px',
          {
            lineHeight: '14px',
          },
        ],
        12: [
          '12px',
          {
            lineHeight: '16px',
          },
        ],
        14: [
          '14px',
          {
            lineHeight: '20px',
          },
        ],
        16: [
          '16px',
          {
            lineHeight: '22px',
          },
        ],
        18: [
          '18px',
          {
            lineHeight: '24px',
          },
        ],
        20: [
          '20px',
          {
            lineHeight: '26px',
          },
        ],
        22: [
          '22px',
          {
            lineHeight: '30px',
          },
        ],
        24: [
          '24px',
          {
            lineHeight: '32px',
          },
        ],
        36: [
          '36px',
          {
            lineHeight: '44px',
          },
        ],
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        50: '50%',
      },
      extend: {
        width: {
          19.5: '4.75rem',
          26.25: '6.625rem',
          75: '18.75rem',
          82: '20.5rem',
        },
        spacing: {
          3.25: '13px',
          3.5: '0.875rem',
          4.5: '1.125rem',
          18: '4.5rem',
        },
        strokeWidth: {
          3: '3px',
          4: '4px',
          5: '5px',
        },
        borderWidth: {
          '1/2': '0.5px',
        },
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
    safelist: [
      {
        pattern: /border-(solid|none|primary|black|white|red-700)/,
        variants: ['before', 'after'],
      },
    ],
  };
  