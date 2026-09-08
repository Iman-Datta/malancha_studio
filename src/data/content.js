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
  { label: "About", href: "#about" },
  { label: "Verticals", href: "#verticals" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const verticals = [
  { name: "Music", icon: Music, color: "from-primary-400 to-primary-600" },
  { name: "Dance", icon: Footprints, color: "from-secondary-400 to-secondary-600" },
  { name: "Theatre", icon: Drama, color: "from-primary-300 to-secondary-500" },
  { name: "Art & Craft", icon: Palette, color: "from-secondary-400 to-primary-500" },
  { name: "Photography", icon: Camera, color: "from-primary-400 to-secondary-400" },
  { name: "Podcasts", icon: Mic, color: "from-secondary-500 to-primary-500" },
  { name: "Publications", icon: BookOpen, color: "from-primary-300 to-primary-600" },
  { name: "Fashion", icon: Shirt, color: "from-secondary-400 to-secondary-600" },
  { name: "Travel & Tourism", icon: Plane, color: "from-primary-400 to-secondary-500" },
  { name: "Fitness & Yoga", icon: HeartPulse, color: "from-secondary-500 to-primary-400" },
];

export const whatWeDo = [
  { title: "Workshops", icon: GraduationCap, desc: "Hands-on learning sessions led by industry experts to sharpen your craft." },
  { title: "Competitions", icon: Trophy, desc: "Platform to showcase talent and compete with the best across regions." },
  { title: "Festivals", icon: PartyPopper, desc: "Grand cultural celebrations bringing communities together in vibrant harmony." },
  { title: "Live Performances", icon: Star, desc: "Electrifying stage shows featuring music, dance and theatrical brilliance." },
  { title: "Studio Recording", icon: Mic2, desc: "Professional-grade recording facilities for artists and creators." },
  { title: "Short Films", icon: Film, desc: "Compelling visual storytelling crafted by passionate filmmakers." },
  { title: "Advertisements", icon: Megaphone, desc: "Creative ad productions that captivate audiences and elevate brands." },
  { title: "Talent Promotion", icon: Sparkles, desc: "Mentoring and promoting emerging artists to wider audiences." },
  { title: "Social Media Content", icon: Smartphone, desc: "Scroll-stopping content creation tailored for the digital age." },
];

export const services = [
  { title: "Music Classes", icon: Music2, desc: "Learn vocals and instruments from seasoned musicians." },
  { title: "Dance Classes", icon: Music3, desc: "From classical to contemporary — express through movement." },
  { title: "Photography", icon: Camera, desc: "Master the art of visual storytelling with your lens." },
  { title: "Video Editing", icon: Video, desc: "Transform raw footage into cinematic masterpieces." },
  { title: "Live Band", icon: Users, desc: "Energetic live bands for events, weddings and concerts." },
  { title: "Sound Recording", icon: Radio, desc: "State-of-the-art recording booths for crystal-clear audio." },
  { title: "Recitation", icon: Mic, desc: "The art of spoken word and poetic expression, refined." },
  { title: "Acting", icon: Drama, desc: "Train for stage and screen with professional acting coaches." },
  { title: "Cultural Tourism", icon: MapPin, desc: "Curated cultural journeys across India's heritage landscapes." },
];

export const whyChooseUs = [
  { title: "Experienced Mentors", icon: Award, desc: "Learn from veterans with decades of real-world artistic experience." },
  { title: "Creative Community", icon: Users, desc: "Join a thriving network of artists, creators and culture enthusiasts." },
  { title: "Personalized Guidance", icon: HandHeart, desc: "Tailored mentorship that adapts to your unique creative journey." },
  { title: "Opportunities for Artists", icon: TrendingUp, desc: "Real platforms, real stages and real audiences for your talent." },
  { title: "Events Across India", icon: MapPin, desc: "From metro stages to cultural hubs — we perform everywhere." },
  { title: "Professional Promotion", icon: Headphones, desc: "Get the spotlight you deserve with our dedicated promotion team." },
];

export const stats = [
  { value: "100+", label: "Events Delivered", icon: PartyPopper },
  { value: "10+", label: "Cultural Verticals", icon: Sparkles },
  { value: "500+", label: "Artists Supported", icon: Users },
  { value: "24/7", label: "Online & Offline Presence", icon: Smartphone },
];

export const galleryImages = [
  { src: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Concert stage", span: "row-span-2" },
  { src: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Classical dance", span: "" },
  { src: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Theatre performance", span: "" },
  { src: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Art workshop", span: "row-span-2" },
  { src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Music studio", span: "" },
  { src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Cultural festival", span: "" },
  { src: "https://images.pexels.com/photos/4944970/pexels-photo-4944970.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Photography session", span: "" },
  { src: "https://images.pexels.com/photos/4944976/pexels-photo-4944976.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Dance rehearsal", span: "" },
];

export const socials = [
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
  { label: "Twitter", icon: "twitter", href: "#" },
];

export const contactInfo = {
  phone: "+91 62914 29383",
  email: "malanchaculturalstudioz@gmail.com",
};
