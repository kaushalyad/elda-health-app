import React from "react";
import PlanPicker from "../components/PlanPicker";
const ProductPage = () => {
  return (
    <div className="flex p-6 bg-lime-50">
      <div className="w-1/2 p-10">
        <div>
          <p className="text-lime-700 text-xl font-semibold" l>
            Yoga for Mind
          </p>
          <img
            src="/fullmindyogapic.jpg"
            alt="yoga pic"
            className="rounded-xl mt-2"
          />
        </div>
        <div>
          <p className="text-lime-700 text-xl mt-2 font-semibold">
            {" "}
            What is Yoga for Mind{" "}
          </p>
          <p className="mt-2 text-gray-600 text-semibold">
            The Yoga for Mind sessions involve minimal physical movement and
            relies on techniques such as pranayama and meditation. Suited for
            women who cannot perform more physical forms of yoga and are looking
            for relief from concerns such as stress, anxiety, low mood etc.{" "}
          </p>
        </div>
      </div>
      <div className="w-1/2 p-10">
        <div>
          <p className="text-lime-700 text-xl font-semibold">
            Choose your package
          </p>
          <PlanPicker
            actualPrice={12999}
            discountedPrice={5499}
            monthPrice={916}
            timePeriod={6}
          />
          <PlanPicker
            actualPrice={5999}
            discountedPrice={2999}
            monthPrice={999}
            timePeriod={3}
          />
          <PlanPicker
            actualPrice={1999}
            discountedPrice={1199}
            monthPrice={1199}
            timePeriod={1}
          />
        </div>
        <div></div>
        <div>
          <p className="text-lime-700 text-xl mt-4 font-semibold">
            What you'll get
          </p>
          <div className="mt-2 flex items-center">
            <img src="/elda-health-app/chat.png" alt="chat logo" className="w-4 h-4" />
            <p className="ml-4">
              A chat group on the Elda app where ou can connect with your
              trainer and the rest of the Elda Yoga Community
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <img src="/elda-health-app/clock.png" className="w-4 h-4" alt="clock logo" />
            <p className="ml-4">
              Ability to reschedule your class if you miss your session
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
