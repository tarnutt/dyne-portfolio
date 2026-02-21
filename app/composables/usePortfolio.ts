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
      },
      tech: {
        title: 'ทักษะความสามารถ',
        subtitle:
          'เครื่องมือ เทคโนโลยี และความเชี่ยวชาญเฉพาะทางที่สั่งสมมาตลอด 4 ปี',
        specTitle: 'ความเชี่ยวชาญพิเศษ',
        specDesc:
          'เชี่ยวชาญการพัฒนาระบบที่เชื่อมต่อกับแพลตฟอร์มแชทและ API ชั้นนำ',
        redisDesc:
          'ออกแบบ MariaDB เพื่อรองรับทราฟฟิกสูง และใช้ Redis เพื่อประสิทธิภาพที่รวดเร็ว',
        devopsDesc: 'Docker, Git, AWS, Agile/Scrum'
      },
      experience: {
        title: 'ประสบการณ์และผลงาน',
        subtitle: 'ผลงานชิ้นเอก (Masterpiece) ทั้งจากงานประจำและงานฟรีแลนซ์',
        challenge: '🎯 ความท้าทาย (Challenge)',
        approach: '💡 สิ่งที่ฉันทำ (Approach)',
        impact: '📈 ผลลัพธ์ (Impact)',
        viewBtn: 'ดูรายละเอียดเพิ่มเติม'
      },
      contact: {
        title: 'ช่องทางการติดต่อ',
        desc: 'ฉันเป็นนักพัฒนาที่เชื่อในการทำงานเป็นทีม การทำ Code Review และการใช้ Agile เพื่อผลักดันโปรดักส์ หากสนใจร่วมงานกัน ติดต่อฉันได้เลยค่ะ',
        location: 'นครราชสีมา, ประเทศไทย (รับงาน Remote)',
        edu: 'วท.บ. สารสนเทศสถิติ, มหาวิทยาลัยขอนแก่น (GPA 3.30)',
        callMe: 'เบอร์โทรศัพท์',
        emailMe: 'อีเมล'
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
      },
      tech: {
        title: 'Technical Expertise',
        subtitle:
          'Tools, technologies, and specialized skills acquired over 4 years.',
        specTitle: 'Specialty',
        specDesc:
          'Expertise in developing systems integrated with chat platforms and APIs.',
        redisDesc:
          'Designing MariaDB for high traffic and leveraging Redis for high-speed performance.',
        devopsDesc: 'Docker, Git, AWS, Agile/Scrum'
      },
      experience: {
        title: 'Professional Experience',
        subtitle:
          'Masterpiece projects from full-time roles (NAYOO) and freelance work.',
        challenge: '🎯 The Challenge',
        approach: '💡 My Approach',
        impact: '📈 The Impact',
        viewBtn: 'Explore Architecture'
      },
      contact: {
        title: "Let's connect.",
        desc: 'I am a developer who strongly believes in teamwork, code reviews, and Agile methodologies to drive product success. If you are interested in working together, feel free to reach out.',
        location: 'Nakhon Ratchasima, Thailand (Remote Available)',
        edu: 'B.S. Statistical Information, KKU (GPA 3.30)',
        callMe: 'Call Me',
        emailMe: 'Email Me'
      }
    }
  }

  const t = computed(() => translations[lang.value])

  const selectedProjectId = useState<number | null>(
    'selectedProjectId',
    () => null
  )

  return { lang, toggleLang, t, selectedProjectId }
}
