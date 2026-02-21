export default {
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
      },
    },
  },
  // ... การตั้งค่าอื่นๆ (ถ้ามี)
}