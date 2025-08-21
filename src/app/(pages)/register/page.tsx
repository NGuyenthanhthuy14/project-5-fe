"use client"
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRegister = (event: any) => {
    event.preventDefault(); 
    
    const fullName = event.target.fullName.value; 
    const email = event.target.email.value; 
    const password = event.target.password.value; 

    createUserWithEmailAndPassword (authFirebase, email, password)
      .then ((userCredential) => {
        const user = userCredential.user;
        set(ref(dbFirebase, 'uses/' + user.uid), {
          fullName: fullName
        }).then (() => {
          router.push("/")
        })
      })
      .catch (() => {
        alert("Email đã được đăng ký!")
      })
  }

  return (
    <>
      <div className="mt-[60px] mx-auto w-[500px]">
        <Title text="Đăng ký Tài Khoản" className="text-center"/>

        <form className="" onSubmit={handleRegister}>
          {/* Họ Tên */}
          <div className="mb-[15px]">
            <label className="text-[14px] font-[600] mb-[5px] block" htmlFor="fullName">
              <span className="text-[#FFFFFF] ">Họ Tên </span>
              <span className="text-[#F21D2F]">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Ví dụ: Le Van A" 
              className="w-full h-[50px] outline-none bg-[#FFFFFF] rounded-[6px] px-[16px] font-[600] text-[14px]"
              name="fullName"
              id="fullName"
              required
            />
          </div>

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
              required
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
              required
            />
          </div>

          {/* Button */}
          <div className="mt-[15px]">
            <button type="submit" className=" bg-[#00ADEF] rounded-[6px] w-full h-[50px] font-[700] text-[16px] text-white">
              Đăng Ký
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
