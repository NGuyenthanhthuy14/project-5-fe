"use client"
import Title from "@/app/components/title/Title";
import { authFirebase } from "@/app/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter()

  const handleLogIn = (event: any) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword (authFirebase, email, password)
      .then ((userCredential) => {
        const user = userCredential.user
        if (user) {
          router.push("/")
        }
      })
      .catch (() => {
        alert("Tài khoản hoặc mật khẩu không chính xác!")
      })
  }
  return (
    <>
      <div className="mt-[60px] mx-auto w-[500px]">
        <Title text="Đăng Nhập Tài Khoản" className="text-center"/>
        <form className="" onSubmit={handleLogIn}>
          {/* Email */}
            <div className="mb-[15px]">
              <label className="text-[14px] font-[600] mb-[5px] block" htmlFor="email">
                <span className="text-[#FFFFFF] ">Email </span>
                <span className="text-[#F21D2F]">*</span>
              </label>

              <input 
                type="email" 
                placeholder="Ví dụ: levana@gmail.com" 
                className="w-full h-[50px] outline-none bg-[#FFFFFF] rounded-[6px] px-[16px] font-[600] text-[14px]"
                name="email"
                id="email"
                required={true}
              />
            </div>

          {/* Password */}
            <div className="mb-[15px]">
              <label className="text-[14px] font-[600] mb-[5px] block" htmlFor="password">
                <span className="text-[#FFFFFF] ">Mật Khẩu </span>
                <span className="text-[#F21D2F]">*</span>
              </label>

              <input 
                type="password" 
                className="w-full h-[50px] outline-none bg-[#FFFFFF] rounded-[6px] px-[16px] font-[600] text-[14px]"
                name="password"
                id="password"
                required={true}
              />
            </div>

          {/* Button */}
          <div className="mt-[15px]">
            <button type="submit" className=" bg-[#00ADEF] rounded-[6px] w-full h-[50px] font-[700] text-[16px] text-white">
              Đăng Nhập
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
