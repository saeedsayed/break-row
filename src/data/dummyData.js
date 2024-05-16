// assets
import bannerImageOne from '../assets/images/banner-img-1.webp'
import bannerImageTwo from '../assets/images/banner-img-2.webp'
import bannerImageThree from '../assets/images/banner-img-3.webp'
import blogImageOne from "../assets/images/blog-img-1.jpg"
import blogImageTwo from "../assets/images/blog-img-1.jpg"
import blogImageThree from "../assets/images/blog-img-1.jpg"
import blogImageFour from "../assets/images/blog-img-1.jpg"
import standoutImageOne from "../assets/images/whats-makes-img-1.jpg"
import standoutImageTwo from "../assets/images/whats-makes-img-2.jpg"
import standoutImageThree from "../assets/images/whats-makes-img-3.jpg"
// icons
import { MdOutlineDeveloperMode, MdOutlineDesignServices } from "react-icons/md";
import { FaCode, FaHandHoldingMedical, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

export const PAGES_LINKS = [
    {
        name: 'الصفحة الرئسية',
        path: '/',
    },
    {
        name: 'معلومات عنا',
        path: '/about-us',
    },
    {
        name: 'اعمالنا',
        path: '/our-works',
    },
    {
        name: 'الخدمات',
        path: '/services',
    },
    {
        name: 'اتصل بنا',
        path: '/contact-us',
    }
]

export const SOCIAL_MEDIA_LINKS = [
    {
        id: 1,
        name: 'Facebook',
        path: 'https://www.facebook.com/',
        avatar: FaFacebook
    },
    {
        id: 2,
        name: 'Linkedin',
        path: 'https://www.linkedin.com/',
        avatar: FaLinkedin
    },
    {
        id: 3,
        name: 'Twitter',
        path: 'https://www.twitter.com/',
        avatar: FaSquareXTwitter
    }
]

export const HOME_BANNER = [
    {
        id: 1,
        description: 'نُصمم التجارب الرقمية التي تُعيد تشكيل رحلتك المهنية',
        image: bannerImageOne,
    },
    {
        id: 2,
        description: 'ابق في صدارة المنافسة بفضل التكنولوجيا المتطورة',
        image: bannerImageTwo,
    },
    {
        id: 3,
        description: 'حلول مُخصصة مصممة خصيصًا لتلبية احتياجات عملك',
        image: bannerImageThree,
    }
]

export const SERVICES = [
    {
        id: 1,
        name: 'تطوير تطبيقات الهاتف المحمول',
        description: "تطبيقات هاتفية مُصممة خصيصًا لنظامي التشغيل أندرويد وiOS، خصيصًا لتلبية كافة احتياجاتك",
        icon: MdOutlineDeveloperMode,
    },
    {
        id: 2,
        name: "تطوير مواقع الإنترنت",
        description: "تطبيقات ويب ديناميكية وسريعة الاستجابة تأسر جمهورك وتخدم احتياجات العمل",
        icon: FaCode,
    },
    {
        id: 3,
        name: "تطوير البرمجيات",
        description: "تطوير البرامج التي تعمل على تحسين الأعمال وتضمن تجربة سلسة للمستخدم",
        icon: CiServer,
    },
    {
        id: 4,
        name: "الاستشارات",
        description: "التوجيه الاستراتيجي المطلوب لملائمة التكنولوجيا مع أهداف عملك وتحقيق أقصى كفاءة ممكنة",
        icon: FaHandHoldingMedical,
    },
    {
        id: 5,
        name: "تصميم واجهة المستخدم أو تجربة المستخدم",
        description: "تصميمات بسيطة ومذهلة بصريًا تضمن تجربة سلسة وجذابة للمستخدم",
        icon: MdOutlineDesignServices,
    }
]


export const BLOGS = [
    {
        id: 1,
        title: "Creating Smart Apps: A Journey into Machine Learning and Artificial Intelligence",
        image: blogImageOne,
    },
    {
        id: 2,
        title: "Common mistakes to avoid while developing React native apps",
        image: blogImageTwo,
    },
    {
        id: 3,
        title: "How is AR and VR technology supporting businesses in 2023",
        image: blogImageThree,
    },
    {
        id: 4,
        title: "Power of AI and ML for Transforming Mobile App Development ",
        image: blogImageFour,
    },
]

export const TESTIMONIAL = [
    {
        id: 1,
        name: "محمد",
        description: `طوال المشروع، كان أعضاء الفريق في "break row" متعاونين ومتواصلين للغاية. لقد كانوا دائمًا على استعداد للاستماع إلى أفكاري وتعليقاتي، وكانوا دائمًا منفتحين على الاقتراحات الجديدة. لقد تأثرت كثيرًا بقدرتهم على العمل معًا كفريق واحد، وأنا راضٍ جدًا عن الشركة.`,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        company: "BreakRow",
    },
    {
        id: 2,
        name: "سلمان ناصر",
        description: `لقد عملت مع أكثر من ٢٠ شركة، وأثبتت "break row" أنها واحدة من أفضل الشركات. قدم الفريق حلًا ينفذ جميع متطلباتي بدقة. أقدر كل المساعدة التي قدمها لي الفريق. أود بالتأكيد أن أوصي بـ "كود هايف" لتحويل مسار عملك.`,
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        company: "BreakRow",
    },
    {
        id: 3,
        name: "سلمان ناصر",
        description: `لقد عملت مع أكثر من ٢٠ شركة، وأثبتت "break row" أنها واحدة من أفضل الشركات. قدم الفريق حلًا ينفذ جميع متطلباتي بدقة. أقدر كل المساعدة التي قدمها لي الفريق. أود بالتأكيد أن أوصي بـ "كود هايف" لتحويل مسار عملك.`,
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        company: "BreakRow",
    },
    {
        id: 4,
        name: "سلمان ناصر",
        description: `لقد عملت مع أكثر من ٢٠ شركة، وأثبتت "break row" أنها واحدة من أفضل الشركات. قدم الفريق حلًا ينفذ جميع متطلباتي بدقة. أقدر كل المساعدة التي قدمها لي الفريق. أود بالتأكيد أن أوصي بـ "كود هايف" لتحويل مسار عملك.`,
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        company: "BreakRow",
    },
    {
        id: 5,
        name: "راشد حسين",
        description: `لقد عملت مع أكثر من ٢٠ شركة، وأثبتت "break row" أنها واحدة من أفضل الشركات. قدم الفريق حلًا ينفذ جميع متطلباتي بدقة. أقدر كل المساعدة التي قدمها لي الفريق. أود بالتأكيد أن أوصي بـ "كود هايف" لتحويل مسار عملك.`,
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        company: "BreakRow",
    }
]

export const STANDOUT = [
    {
        title: 'استراتيجيات مثالية',
        description: 'جمع التحليلات الثاقبة للسوق ومزجها لتحقيق النمو والتميز.',
        image: standoutImageOne,
    },
    {
        title: "افكار ابداعية",
        description: 'نحن دائمًا ما نتخطى حدود الابتكار لتحسين منتجاتنا وخدماتنا.',
        image: standoutImageTwo,
    },
    {
        title: "حلول ابداعية",
        description: "ومن خلال تسخير قوة الإبداع، فإننا نتفوق في تقديم الحلول التي يتردد صداها بعمق لدى المستهلكين.",
        image: standoutImageThree,
    }
]