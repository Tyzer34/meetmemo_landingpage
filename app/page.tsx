import { BentoDemo } from "@/components/Bento/Bento";
import Cta from "@/components/CTA/Cta";
import Footer from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import Scroll from "@/components/Scroll/Scroll";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import ScheduleDemo from "@/components/ScheduleDemoForm/ScheduleDemoForm";
import Demo from "@/components/Demo/Demo";


// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Scroll />
//       <div className="relative">
//               <Iphone15Pro className="md:hidden px-6 size-full" videoSrc="/clips/app.mp4" />,
//       </div>
//       <BentoDemo />
//       {/* <ResponsiveContainer /> */}
//       <Pricing />
//       <Cta />
//     </>
//   );
// }

export default function Home() {
  // To handle the responsiveness in Text and Images, we are using vanilla css for now.
  return (
   <>
   <Demo/>
   </>
  );
};
