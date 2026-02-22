export const usePortfolio = () => {
  const lang = useState<'th' | 'en'>('lang', () => 'en')

  const toggleLang = () => {
    lang.value = lang.value === 'th' ? 'en' : 'th'
  }

  const translations = {
    th: {
      nav: {
        about: 'เกี่ยวกับฉัน',
        tech: 'ทักษะความสามารถ',
        exp: 'ประสบการณ์',
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
        subtitle: 'ผลงานชิ้นเอกทั้งจากงานประจำและงานฟรีแลนซ์',
        challenge: '🎯 ความท้าทาย',
        approach: '💡 สิ่งที่ฉันทำ',
        impact: '📈 ผลลัพธ์',
        viewBtn: 'ดูรายละเอียดเพิ่มเติม',
        projects: [
          {
            id: 1,
            title: 'น่าอยู่ แพลตฟอร์ม',
            company: 'น่าอยู่ คอร์ปอเรชั่น จำกัด (งานประจำ)',
            role: 'Senior Full Stack Developer',
            summary:
              'แพลตฟอร์มค้นหาอสังหาฯ ซื้อขาย-เช่า-รับสร้างบ้าน ที่มีข้อมูลมหาศาล เน้นความเร็วในการแสดงผลและการทำ SEO อย่างเต็มรูปแบบ',
            image: '/images/nayoo-desktop.png',
            mobileImage: '/images/nayoo-mobile.png',
            challenge:
              'แพลตฟอร์มอสังหาริมทรัพย์ที่มีข้อมูลจำนวนมหาศาล ต้องการระบบค้นหาที่รวดเร็ว และต้องรองรับ SEO เพื่อให้ติดหน้าแรกของ Google',
            approach:
              'นำทีมพัฒนาด้วย Nuxt.js เพื่อตอบโจทย์ด้าน SEO อย่างสมบูรณ์แบบ ฝั่ง Backend ใช้ Laravel ร่วมกับ Redis Caching เพื่อจัดการข้อมูลการค้นหาที่ซับซ้อนให้โหลดไวที่สุด',
            impact:
              'ระบบเสถียร รองรับ High Traffic ได้สบายๆ UX/UI ลื่นไหล และ SEO Score พุ่งสูงขึ้นจนเพิ่มยอด Organic Traffic ได้อย่างก้าวกระโดด',
            link: 'https://nayoo.co/',
            techStack: {
              fe: 'Nuxt.js (V2), BootstrapVue, Vuetify',
              be: 'Laravel, RESTful API Design, SQL'
            }
          },
          {
            id: 2,
            title: 'Line LIFF บ้านพร้อม',
            company: 'น่าอยู่ คอร์ปอเรชั่น จำกัด (งานประจำ)',
            role: 'Senior Full Stack & Team Lead',
            summary:
              'เครื่องมือสำหรับนายหน้าอสังหาฯ ในการรายงานความคืบหน้าการขายบ้านให้แก่เจ้าของทรัพย์ พร้อมระบบส่งรีพอร์ตอัตโนมัติผ่านแอปพลิเคชัน LINE',
            image: '/images/baanprompt-desktop.png',
            mobileImage: '/images/baanprompt-mobile.jpg',
            challenge:
              'การลดความยุ่งยากในขั้นตอนการสื่อสารและรายงานผลระหว่างนายหน้ากับเจ้าของทรัพย์ โดยต้องการให้ผู้ใช้งานเข้าถึงข้อมูลได้ง่ายที่สุดโดยไม่ต้องดาวน์โหลดแอปพลิเคชันใหม่',
            approach:
              'นำทีมพัฒนาเว็บแอปพลิเคชันผ่านเทคโนโลยี LINE LIFF เพื่อให้ใช้งานได้ทันที และเชื่อมต่อระบบหลังบ้านเข้ากับ LINE Messaging API เพื่อสร้างและส่งรีพอร์ตอัปเดตสถานะการขายตรงถึงแชทของเจ้าของบ้านแบบอัตโนมัติ',
            impact:
              'ลดเวลาและขั้นตอนการทำงาน (Workflow) ของนายหน้าได้อย่างมาก เพิ่มความโปร่งใสให้เจ้าของทรัพย์ และสร้างประสบการณ์ใช้งานที่ไร้รอยต่อภายใน LINE Ecosystem ที่ทุกคนคุ้นเคย',
            link: '',
            techStack: {
              fe: 'Nuxt.js (V2, V3), Tailwind CSS, Vuetify',
              be: 'NestJS, Laravel, RESTful API Design, SQL'
            }
          },
          {
            id: 3,
            title: 'ระบบ E-Learning และบทความ',
            company: 'ฟรีแลนท์',
            role: 'Full Stack Developer',
            summary:
              'แพลตฟอร์มศูนย์รวมความรู้สำหรับนักลงทุน (The Trader) ผสมผสานระบบ E-Commerce สำหรับซื้อขายคอร์สเรียน ระบบ Video Streaming และคลังบทความคุณภาพ',
            image: '/images/trader-desktop.png',
            mobileImage: '/images/trader-mobile.png',
            challenge:
              'การพัฒนาระบบที่รวม 3 ฟีเจอร์หลัก (ซื้อขายคอร์ส, คลังบทความ, และสตรีมมิ่ง) ไว้ด้วยกัน โจทย์สำคัญคือต้องจัดการสิทธิ์การเข้าถึงวิดีโอ (Access Control) อย่างรัดกุม วิดีโอต้องเล่นได้ลื่นไหลไม่กระตุก และหน้าบทความต้องโหลดข้อมูลได้รวดเร็วเพื่อรองรับทราฟฟิกผู้ใช้งานจำนวนมาก',
            approach:
              'รับผิดชอบการพัฒนาฝั่ง Frontend เป็นแกนหลัก โดยสร้าง Custom Video Player และระบบจัดการ State Management เพื่อบันทึก Progress การเรียนแบบ Real-time พร้อมทำ Performance Optimization ให้หน้าเว็บโหลดคอนเทนต์ไว นอกจากนี้ยังซัพพอร์ตงาน Backend บางส่วนในการเชื่อมต่อ API เพื่อจัดการสิทธิ์การเข้าชมและระบบชำระเงิน',
            impact:
              'ส่งมอบประสบการณ์ใช้งาน (UX) ที่ลื่นไหลและตอบสนองไว (Fast Load Time) ระบบสตรีมมิ่งวิดีโอทำงานบนเบราว์เซอร์ได้อย่างเสถียรไม่กระตุก และการจัดการข้อมูลฝั่ง Client ทำได้อย่างมีประสิทธิภาพ ทำให้ผู้ใช้งานสามารถเรียนคอร์สและอ่านบทความได้อย่างต่อเนื่องไม่มีสะดุด',
            link: 'https://www.thetrader.co.th/',
            techStack: {
              fe: 'Nuxt.js (V3), Tailwind CSS',
              be: 'Laravel'
            }
          },
          {
            id: 4,
            title: 'เว็บไซต์ร้านปิ่นโตสุขุมวิท',
            company: 'ฟรีแลนท์',
            role: 'Full Stack Developer',
            summary:
              'เว็บไซต์นำเสนอข้อมูลร้านอาหารและแคตตาล็อกเมนูออนไลน์ (Digital Menu) เน้นการแสดงผลรูปภาพที่สวยงามเพื่อดึงดูดลูกค้า',
            image: '/images/pinto-desktop.png',
            mobileImage: '/images/pinto-mobile.png',
            challenge:
              'เว็บไซต์มีการใช้รูปภาพความละเอียดสูงจำนวนมากในการแสดงเมนู ซึ่งส่งผลท้าทายโดยตรงต่อความเร็วในการโหลดหน้าเว็บ (Page Speed) และประสบการณ์ใช้งาน โดยเฉพาะบนอุปกรณ์มือถือ',
            approach:
              'พัฒนาระบบครอบคลุมทั้ง Frontend และ Backend ด้วย Laravel โดยให้ความสำคัญสูงสุดกับ Frontend Optimization นำเทคนิค Image Lazy Loading มาใช้อย่างเต็มรูปแบบ จัดการทรัพยากรให้โหลดเมื่อจำเป็น และออกแบบ UI แบบ Mobile-First เพื่อการใช้งานที่ลื่นไหล',
            impact:
              'เว็บไซต์สามารถโหลดรูปภาพจำนวนมากได้อย่างรวดเร็ว (Fast Page Load) ไม่กินทรัพยากรเครือข่ายของผู้ใช้ ส่งมอบประสบการณ์ (UX) ที่ดีเยี่ยมในการเลื่อนดูเมนู ช่วยยกระดับภาพลักษณ์ระดับพรีเมียมให้กับร้านอาหาร',
            link: '',
            techStack: {
              fe: 'Laravel (Blade), Tailwind CSS',
              be: 'Laravel'
            }
          }
        ]
      },
      contact: {
        title: 'ช่องทางการติดต่อ',
        desc: 'หากคุณมองหานักพัฒนาที่ไม่ใช่แค่เขียนโค้ดตามสั่ง แต่เป็นผู้นำที่กล้าเสนอโซลูชันเพื่อโปรดักต์ และแก้ปัญหาเฉพาะหน้าได้อย่างเฉียบขาด...ติดต่อฉันได้เลยค่ะ',
        location: 'นครราชสีมา, ประเทศไทย | 💻 ยินดีรับงาน Remote และ Hybrid',
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
        viewBtn: 'Explore Architecture',
        projects: [
          {
            id: 1,
            title: 'NAYOO Platform',
            company: 'NAYOO Corporation Co., Ltd. (Full-time)',
            role: 'Senior Full Stack Developer',
            summary:
              'A comprehensive real estate platform for buying, selling, renting, and building homes with massive data. Optimized for high-speed rendering and full-scale SEO.',
            image: '/images/nayoo-desktop.png',
            mobileImage: '/images/nayoo-mobile.png',
            challenge:
              'A massive real estate platform requiring a lightning-fast search system and a robust SEO architecture to consistently rank on the first page of Google.',
            approach:
              'Led the development team using Nuxt.js to perfectly address SEO requirements. Built the backend with Laravel and integrated Redis Caching to handle complex search queries instantly.',
            impact:
              'Achieved a highly stable system capable of effortlessly handling high traffic with a seamless UX/UI. Skyrocketed SEO scores, leading to an exponential increase in organic traffic.',
            link: 'https://nayoo.co/',
            techStack: {
              fe: 'Nuxt.js (V2), BootstrapVue, Vuetify',
              be: 'Laravel, RESTful API Design, SQL'
            }
          },
          {
            id: 2,
            title: 'Line LIFF BAANPROMPT',
            company: 'NAYOO Corporation Co., Ltd. (Full-time)',
            role: 'Senior Full Stack & Team Lead',
            summary:
              'A specialized tool for real estate agents to report sales progress to property owners, featuring automated report delivery directly through the LINE application.',
            image: '/images/baanprompt-desktop.png',
            mobileImage: '/images/baanprompt-mobile.jpg',
            challenge:
              'Streamlining communication and the reporting process between agents and property owners, with a core requirement of providing effortless access without the need to download a new application.',
            approach:
              "Led the development team in building a web application utilizing LINE LIFF for instant accessibility. Integrated the backend with the LINE Messaging API to automatically generate and deliver real-time sales progress reports directly to the property owners' LINE chats.",
            impact:
              'Significantly reduced operational time and streamlined agent workflows. Enhanced transparency for property owners and delivered a seamless user experience within the highly familiar LINE ecosystem.',
            link: '',
            techStack: {
              fe: 'Nuxt.js (V2, V3), Tailwind CSS, Vuetify',
              be: 'NestJS, Laravel, RESTful API Design, SQL'
            }
          },
          {
            id: 3,
            title: 'E-Learning & Content Platform',
            company: 'Freelance Project',
            role: 'Full Stack Developer',
            summary:
              'A comprehensive knowledge hub for investors (The Trader), seamlessly integrating an e-commerce system for online courses, video streaming capabilities, and a high-quality article library.',
            image: '/images/trader-desktop.png',
            mobileImage: '/images/trader-mobile.png',
            challenge:
              'Combining three core features (course purchasing, article library, and video streaming) into a single platform. The main challenges included implementing secure video access control, ensuring smooth and buffer-free playback, and optimizing load times to handle high user traffic.',
            approach:
              'Led the frontend development as the core focus, building a custom video player and implementing robust state management for real-time learning progress tracking. Performed frontend performance optimization for fast content delivery. Additionally, supported backend development by integrating APIs for access control and payment gateways.',
            impact:
              'Delivered a seamless and highly responsive User Experience (UX) with fast load times. The browser-based video streaming operates stably without buffering. Efficient client-side data management ensures users can watch courses and read articles without interruption.',
            link: 'https://www.thetrader.co.th/',
            techStack: {
              fe: 'Nuxt.js (V3), Tailwind CSS',
              be: 'Laravel'
            }
          },
          {
            id: 4,
            title: 'Pinto Sukhumvit Restaurant Website',
            company: 'Freelance Project',
            role: 'Full Stack Developer',
            summary:
              'A visually-driven restaurant information website and digital menu catalog, focusing on high-quality image displays to attract customers.',
            image: '/images/pinto-desktop.png',
            mobileImage: '/images/pinto-mobile.png',
            challenge:
              'The website required showcasing a large volume of high-resolution food images, posing a significant challenge to page load speed and overall User Experience (UX), particularly on mobile devices.',
            approach:
              'Developed the entire platform using Laravel for both Backend and Frontend. Placed the highest priority on Frontend Performance Optimization by fully implementing image Lazy Loading. Managed resources to load only when necessary and designed a Mobile-First UI for seamless navigation.',
            impact:
              'Achieved exceptionally fast page load times despite the media-heavy content, without consuming excessive user bandwidth. Delivered a smooth, responsive UX for browsing the menu, effectively elevating the restaurant’s premium brand image.',
            link: '',
            techStack: {
              fe: 'Laravel (Blade), Tailwind CSS',
              be: 'Laravel'
            }
          }
        ]
      },
      contact: {
        title: "Let's connect.",
        desc: "If you need a developer who goes beyond following orders—bringing leadership, proactive solutions, and sharp crisis management... let's talk.",
        location: 'Nakhon Ratchasima, Thailand | 💻 Open to Remote & Hybrid',
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
