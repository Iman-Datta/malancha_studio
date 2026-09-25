import {
  Music,
  Footprints,
  Drama,
  Palette,
  Camera,
  Mic,
  BookOpen,
  Shirt,
  Plane,
  HeartPulse,
  GraduationCap,
  Trophy,
  PartyPopper,
  Star,
  Mic2,
  Film,
  Megaphone,
  Sparkles,
  Smartphone,
  Music2,
  Music3,
  Video,
  Users,
  Radio,
  Award,
  Headphones,
  HandHeart,
  MapPin,
  TrendingUp,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Our journey", href: "#journey" },
  { label: "Verticals", href: "#verticals" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
];

export const verticals = [
  { name: "Music", icon: Music, color: "from-primary-400 to-primary-600" },
  {
    name: "Dance",
    icon: Footprints,
    color: "from-secondary-400 to-secondary-600",
  },
  { name: "Theatre", icon: Drama, color: "from-primary-300 to-secondary-500" },
  {
    name: "Art & Craft",
    icon: Palette,
    color: "from-secondary-400 to-primary-500",
  },
  {
    name: "Photography",
    icon: Camera,
    color: "from-primary-400 to-secondary-400",
  },
  { name: "Podcasts", icon: Mic, color: "from-secondary-500 to-primary-500" },
  {
    name: "Publications",
    icon: BookOpen,
    color: "from-primary-300 to-primary-600",
  },
  {
    name: "Fashion",
    icon: Shirt,
    color: "from-secondary-400 to-secondary-600",
  },
  {
    name: "Travel & Tourism",
    icon: Plane,
    color: "from-primary-400 to-secondary-500",
  },
  {
    name: "Fitness & Yoga",
    icon: HeartPulse,
    color: "from-secondary-500 to-primary-400",
  },
];

export const whatWeDo = [
  {
    title: "Workshops",
    icon: GraduationCap,
    desc: "Hands-on learning sessions led by industry experts to sharpen your craft.",
  },
  {
    title: "Competitions",
    icon: Trophy,
    desc: "Platform to showcase talent and compete with the best across regions.",
  },
  {
    title: "Festivals",
    icon: PartyPopper,
    desc: "Grand cultural celebrations bringing communities together in vibrant harmony.",
  },
  {
    title: "Live Performances",
    icon: Star,
    desc: "Electrifying stage shows featuring music, dance and theatrical brilliance.",
  },
  {
    title: "Studio Recording",
    icon: Mic2,
    desc: "Professional-grade recording facilities for artists and creators.",
  },
  {
    title: "Short Films",
    icon: Film,
    desc: "Compelling visual storytelling crafted by passionate filmmakers.",
  },
  {
    title: "Advertisements",
    icon: Megaphone,
    desc: "Creative ad productions that captivate audiences and elevate brands.",
  },
  {
    title: "Talent Promotion",
    icon: Sparkles,
    desc: "Mentoring and promoting emerging artists to wider audiences.",
  },
  {
    title: "Social Media Content",
    icon: Smartphone,
    desc: "Scroll-stopping content creation tailored for the digital age.",
  },
];

export const services = [
  {
    title: "Music Classes",
    icon: Music2,
    desc: "Learn vocals and instruments from seasoned musicians.",
  },
  {
    title: "Dance Classes",
    icon: Music3,
    desc: "From classical to contemporary express through movement.",
  },
  {
    title: "Photography",
    icon: Camera,
    desc: "Master the art of visual storytelling with your lens.",
  },
  {
    title: "Video Editing",
    icon: Video,
    desc: "Transform raw footage into cinematic masterpieces.",
  },
  {
    title: "Live Band",
    icon: Users,
    desc: "Energetic live bands for events, weddings and concerts.",
  },
  {
    title: "Sound Recording",
    icon: Radio,
    desc: "State-of-the-art recording booths for crystal-clear audio.",
  },
  {
    title: "Recitation",
    icon: Mic,
    desc: "The art of spoken word and poetic expression, refined.",
  },
  {
    title: "Acting",
    icon: Drama,
    desc: "Train for stage and screen with professional acting coaches.",
  },
  {
    title: "Cultural Tourism",
    icon: MapPin,
    desc: "Curated cultural journeys across India's heritage landscapes.",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced Mentors",
    icon: Award,
    desc: "Learn from veterans with decades of real-world artistic experience.",
  },
  {
    title: "Creative Community",
    icon: Users,
    desc: "Join a thriving network of artists, creators and culture enthusiasts.",
  },
  {
    title: "Personalized Guidance",
    icon: HandHeart,
    desc: "Tailored mentorship that adapts to your unique creative journey.",
  },
  {
    title: "Opportunities for Artists",
    icon: TrendingUp,
    desc: "Real platforms, real stages and real audiences for your talent.",
  },
  {
    title: "Events Across India",
    icon: MapPin,
    desc: "From metro stages to cultural hubs we perform everywhere.",
  },
  {
    title: "Professional Promotion",
    icon: Headphones,
    desc: "Get the spotlight you deserve with our dedicated promotion team.",
  },
];

// data/content.js or wherever your content data resides

export const galleryImages = [
  { src: "/gallery/1.jpeg", alt: "Concert stage", span: "row-span-2" },
  { src: "/gallery/2.jpeg", alt: "Classical dance", span: "" },
  { src: "/gallery/3.jpeg", alt: "Theatre performance", span: "" },
  { src: "/gallery/4.jpeg", alt: "Art workshop", span: "row-span-2" },
  { src: "/gallery/5.jpeg", alt: "Music studio", span: "" },
  { src: "/gallery/6.jpeg", alt: "Cultural festival", span: "" },
  { src: "/gallery/7.jpeg", alt: "Photography session", span: "" },
  { src: "/gallery/8.jpeg", alt: "Dance rehearsal", span: "" },
  { src: "/gallery/9.jpeg", alt: "Stage lights", span: "row-span-2" },
  { src: "/gallery/10.jpeg", alt: "Live performance", span: "" },
  { src: "/gallery/11.jpeg", alt: "Acoustic session", span: "" },
  { src: "/gallery/12.jpeg", alt: "Band rehearsal", span: "row-span-2" },
  { src: "/gallery/13.jpeg", alt: "Backstage moment", span: "" },
  { src: "/gallery/14.jpeg", alt: "Instrument tuning", span: "" },
  { src: "/gallery/15.jpeg", alt: "Vocal recording", span: "" },
  { src: "/gallery/16.jpeg", alt: "Choreography workshop", span: "" },
  { src: "/gallery/18.jpeg", alt: "Lighting setup", span: "row-span-2" },
  { src: "/gallery/19.jpeg", alt: "Sound check", span: "" },
  { src: "/gallery/20.jpeg", alt: "Festival celebration", span: "" },
  { src: "/gallery/21.jpeg", alt: "Creative studio", span: "row-span-2" },
  { src: "/gallery/22.jpeg", alt: "Live audience", span: "" },
  { src: "/gallery/23.jpeg", alt: "Stage rehearsal", span: "" },
  { src: "/gallery/24.jpeg", alt: "Art gallery display", span: "" },
  { src: "/gallery/25.jpeg", alt: "Cultural showcase", span: "" },
  { src: "/gallery/26.jpeg", alt: "Musical ensemble", span: "row-span-2" },
  { src: "/gallery/28.jpeg", alt: "Performing arts", span: "" },
  { src: "/gallery/29.jpeg", alt: "Studio shoot", span: "" },
  { src: "/gallery/30.jpeg", alt: "Workshop moment", span: "row-span-2" },
  { src: "/gallery/31.jpeg", alt: "Cultural dance", span: "" },
  { src: "/gallery/32.jpeg", alt: "Live concert", span: "" },
  { src: "/gallery/33.jpeg", alt: "Music creation", span: "" },
  { src: "/gallery/34.jpeg", alt: "Stage production", span: "" },
  { src: "/gallery/35.jpeg", alt: "Final act", span: "" },
];

export const socials = [
  { label: "Facebook", icon: "facebook", href: "#" },
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/malancha_viibes798?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  },
];

export const contactInfo = {
  address:
    "Nischinda Paschim Para, Bally, Howrah (Between Bally Halt & Rajchandrapur)",
  phone: "+91 6291 429 383",
  secondaryPhone: "+91 79804 47349",
  email: "malanchaculturalstudioz@gmail.com",
};
