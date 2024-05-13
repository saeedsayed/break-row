import bannerImageOne from '../assets/images/banner-img-1.webp'
import bannerImageTwo from '../assets/images/banner-img-2.webp'
import bannerImageThree from '../assets/images/banner-img-3.webp'
import blogImageOne from "../assets/images/blog-img-1.jpg"
import blogImageTwo from "../assets/images/blog-img-1.jpg"
import blogImageThree from "../assets/images/blog-img-1.jpg"
import blogImageFour from "../assets/images/blog-img-1.jpg"
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

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
        title: "التوجيه الاستراتيجي المطلوب لملا��مة التكنولوجيا مع أهداف عملك وتحقيق أقصى كفاءة ممكنة",
        image: blogImageOne,
    },
    {
        id: 2,
        title: "التوجيه الاستراتيجي المطلوب لملا��مة التكنولوجيا مع أهداف عملك وتحقيق أقصى كفاءة ممكنة",
        image: blogImageTwo,
    },
    {
        id: 3,
        title: "التوجيه الاستراتيجي المطلوب لملا��مة التكنولوجيا مع أهداف عملك وتحقيق أقصى كفاءة ممكنة",
        image: blogImageThree,
    },
    {
        id: 4,
        title: "التوجيه الاستراتيجي المطلوب لملا��مة التكنولوجيا مع أهداف عملك وتحقيق أقصى كفاءة ممكنة",
        image: blogImageFour,
    },
]