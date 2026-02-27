import Lottie from "lottie-react";
import trompet from "C:/Diodona M/Govtek Jilid 2/Jadi/Trompet/trompet.json";

interface WelcomePopupProps {
  onClose?: () => void;
}

export default function WelcomePopup({ onClose }: WelcomePopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[588px] rounded-[8px] overflow-hidden bg-white p-[32px] flex flex-col gap-[24px]">
        {/* Lottie Illustration - 100x100 */}
        <div className="w-[100px] h-[100px] shrink-0">
          <Lottie 
            animationData={trompet} 
            loop={true}
            style={{ width: '100px', height: '100px' }}
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-[Nunito] font-extrabold text-[28px] leading-[36px] text-black">
            Topik pertama selesai dipelajari!
          </h1>
          <p className="font-[Inter] font-normal text-[16px] leading-[24px] text-[#727272]">
            Gimana, hal baru apa yang kamu dapatkan kali ini? Kalau sudah siap, yuk, lanjut ke topik berikutnya!
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="bg-[#2F3031] text-white font-[Inter] font-semibold text-base px-[20px] py-[12px] rounded-[4px] w-[139px]"
        >
          Mantab Gan!
        </button>
      </div>
    </div>
  );
}
