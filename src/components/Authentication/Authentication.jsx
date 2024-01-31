import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../../config/firebase";
import Router from "../../router/Router";
const Authentication = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [accepted,setAccepted] = useState(false);
  console.log(accepted);
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="bg-lime-50">
      <div>
        <Toaster toastOptions={{ duration: 3000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <Router />
        ) : (
          <div className=" flex flex-col rounded-lg p-4">
            {showOTP ? (
              <div className="flex-col justify-center text-center items-center">
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full mt-20">
                  <BsFillShieldLockFill size={50} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-3xl text-green-700 text-center mt-5"
                >
                  Enter your OTP
                </label>
                <div className="flex justify-around">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container mt-10"
                ></OtpInput>
                </div>
                <button
                  onClick={onOTPVerify}
                  className="bg-red-400  flex  items-center justify-center py-3 px-3 mx-auto text-white rounded font-bold text-xl mt-8"
                >
                  <div className="w-7 ">
                    {loading && (
                      <CgSpinner size={23} className="mt-1 animate-spin" />
                    )}
                  </div>
                  <span className="pr-5 text-xl">Verify OTP</span>
                </button>
              </div>
            ) : (
              <>
                <div className=" w-[100%] h-1/2 mt-20  flex-col ">
                  <div className="h-[25%] text-center flex items-center justify-center">
                    <p className="text-4xl font-bold">Login to your account</p>
                  </div>
                  <div className="h-[25%] flex items-center justify-center mt-5 ">
                    <div>
                      <PhoneInput
                        value={ph}
                        country={"in"}
                        onChange={setPh}
                        inputStyle={{
                          color: "black",
                          height: "55px",
                          background: "#f7fee7",
                        }}
                        containerStyle={{ margin: "20px" }}
                        buttonStyle={{ height: "55px", background: "#f7fee7" }}
                        dropdownStyle={{ height: "500px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[25%] flex items-center justify-center">
                    <div className="flex mt-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="size-5 my-auto accent-red-400 hover:accent-red-500"
                          onChange={(e)=>{setAccepted(e.target.checked)}}
                        ></input>
                      </div>
                      <div>
                        <span className="ml-10">I agree with the</span>{" "}
                        <span className="ml-1 text-red-400">
                          Terms & Conditions{" "}
                        </span>
                        <span className="ml-1">&</span>{" "}
                        <span className="ml-1 text-red-400">
                          Privacy Policy
                        </span>
                        <span>of Elda Health</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex justify-center mt-10">
                    <button
                    disabled={!accepted}
                      className="bg-red-400 rounded-md px-5 py-2 text-white hover:bg-red-500 font-semibold flex text-xl text-center disabled:cursor-not-allowed disabled:opacity-25"
                      onClick={onSignup}
                    >
                      <span className="w-6">
                        {loading && (
                          <CgSpinner size={20} className="mt-1 animate-spin" />
                        )}
                      </span>
                      <span className="pr-5">Send OTP</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
