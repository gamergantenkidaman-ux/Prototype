import Lottie from "lottie-react";
import welkam from "../assets/welkam.json";

interface WelcomePopupProps {
  onClose?: () => void;
}

export default function WelcomePopup({ onClose }: WelcomePopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[588px] rounded-2xl overflow-hidden bg-white">
        {/* Lottie Illustration - Full 588x331 */}
        <Lottie 
          animationData={welkam} 
          loop={true}
          style={{ width: '588px', height: '331px' }}
        />

        {/* Text content */}
        <div className="px-8 py-6">
          <h1 className="font-[Nunito] font-extrabold text-[28px] leading-[36px] text-[#1A1A1A] mb-3">
            Selamat Datang di Kelas 7E!
          </h1>
          <p className="font-[Inter] font-normal text-base leading-6 text-[#666666]">
            Lihat-lihat yuk, ada materi, tugas, atau pengumuman apa dari Ibu/Bapak Guru!
          </p>
        </div>

        {/* Button */}
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="bg-[#2F3031] text-white font-[Inter] font-semibold text-base px-6 py-3 rounded-lg min-w-[139px]"
          >
            Mulai Belajar
          </button>
        </div>
      </div>
    </div>
  );
}
