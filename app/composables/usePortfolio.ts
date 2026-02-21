export const usePortfolio = () => {
  const lang = useState<'th' | 'en'>('lang', () => 'th')

  const toggleLang = () => {
    lang.value = lang.value === 'th' ? 'en' : 'th'
  }

  const translations = {
    th: {
      nav: {
        about: 'เกี่ยวกับฉัน',
        tech: 'ทักษะความสามารถ',
        exp: 'ผลงานและประสบการณ์',
        contact: 'ติดต่อฉัน'
      }
    },
    en: {
      nav: {
        about: 'About',
        tech: 'Tech Stack',
        exp: 'Experience',
        contact: 'Contact'
      }
    }
  }

  const t = computed(() => translations[lang.value])

  return { lang, toggleLang, t }
}
