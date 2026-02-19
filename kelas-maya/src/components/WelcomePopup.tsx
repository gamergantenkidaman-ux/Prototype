import Lottie from "lottie-react";
import subtract from "../assets/subtract.svg";
import frame1 from "../assets/frame-1.svg";
import frame2 from "../assets/frame-2.svg";
import frame3 from "../assets/frame-3.svg";
import vector1 from "../assets/vector-1.svg";
import vector2 from "../assets/vector-2.svg";
import vector3 from "../assets/vector-3.svg";
import vector4 from "../assets/vector-4.svg";
import welcomeAnimation from "../assets/welcome-animation.json";

interface WelcomePopupProps {
  onClose?: () => void;
}

export default function WelcomePopup({ onClose }: WelcomePopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[588px] h-[710px] rounded-2xl overflow-hidden bg-[#ffcf9d]">
        {/* Background decorative shapes */}
        <div className="absolute w-[800px] h-[800px] -left-[349px] -top-[165px]">
          <img
            src={subtract}
            alt=""
            className="absolute block inset-0 max-w-none"
          />
        </div>

        {/* Text content */}
        <div className="absolute left-8 top-[505px] text-center z-10">
          <h1 className="font-[Nunito] font-extrabold text-[32px] leading-9 text-black mb-3">
            Selamat Datang di Kelas 7E!
          </h1>
          <p className="font-[Inter] font-normal text-xl leading-7 text-[#323232]">
            Lihat-lihat yuk, ada materi, tugas, atau pengumuman apa dari Ibu/Bapak Guru!
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="absolute left-[224px] top-[625px] z-10 bg-[#2f3031] text-white font-[Inter] font-semibold text-base px-5 py-3 rounded-[4px]"
        >
          Mulai Belajar
        </button>

        {/* Decorative frames */}
        <div className="absolute left-8 top-[328px] z-10">
          <img src={frame1} alt="" className="w-20 h-[127px]" />
        </div>
        <div className="absolute left-[-30px] top-[614px] z-10">
          <img src={frame2} alt="" className="w-[180px] h-[215px]" />
        </div>
        <div className="absolute right-7 top-7 z-10">
          <img src={frame3} alt="" className="w-[87px] h-[93px]" />
        </div>

        {/* Small vectors */}
        <img src={vector1} alt="" className="absolute right-[52px] top-[360px] w-4 h-4 z-10" />
        <img src={vector2} alt="" className="absolute right-[60px] top-[375px] w-3 h-3 z-10" />
        <img src={vector3} alt="" className="absolute left-[90px] bottom-[90px] w-[45px] h-[33px] rotate-[52deg] z-10" />
        <img src={vector4} alt="" className="absolute left-[120px] bottom-[50px] w-[17px] h-[36px] rotate-[52deg] z-10" />

        {/* Lottie Animation - replaces object Lottie frame */}
        <div className="absolute left-[45.51px] top-[-5.94px] w-[506.234px] h-[506.605px]">
          <Lottie 
            animationData={welcomeAnimation} 
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
