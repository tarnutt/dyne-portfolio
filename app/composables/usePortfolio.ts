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
        exp: 'ผลงาน',
        contact: 'ติดต่อฉัน'
      },
      hero: {
        badge: 'ประสบการณ์ 4+ ปี | Team Lead',
        greeting: 'สวัสดีค่ะ ฉันธนัชชา',
        title: 'A Senior Full Stack Developer.',
        desc: 'ฉันไม่ได้เพียงแค่พัฒนาระบบตามโจทย์ที่ได้รับ แต่ยังให้ความสำคัญกับการวิเคราะห์และตั้งคำถามเพื่อส่งมอบประสบการณ์ใช้งานที่ดีที่สุด (UX) จากประสบการณ์ทั้งในบทบาทผู้นำทีมและการรับผิดชอบระบบหลักแบบ End-to-End ฉันมีความเชี่ยวชาญในการพัฒนาระบบที่รองรับการขยายตัว (Scalable) และพร้อมรับมือกับปัญหาซับซ้อนโดยมุ่งเน้นการแก้ไขที่ต้นตอ (Root Cause) อย่างแท้จริง',
        btnExp: 'ดูผลงานของฉัน',
        btnResume: 'ดาวน์โหลดเรซูเม่'
      }
    },
    en: {
      nav: {
        about: 'About',
        tech: 'Tech Stack',
        exp: 'Experience',
        contact: 'Contact'
      },
      hero: {
        badge: '4 Years of Experience | Team Lead',
        greeting: "Hello, I'm Tanutcha.",
        title: 'A Senior Full Stack Developer.',
        desc: 'I don’t just develop systems based on assigned requirements; I prioritize analyzing and questioning them to deliver the best possible User Experience (UX). With a proven track record as a Team Lead and in managing end-to-end core systems, I specialize in building scalable architectures and am committed to tackling complex challenges by addressing their true root causes.',
        btnExp: 'Explore Work',
        btnResume: 'Download Resume'
      }
    }
  }

  const t = computed(() => translations[lang.value])

  return { lang, toggleLang, t }
}
