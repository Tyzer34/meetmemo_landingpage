import ScheduleDemoContact from "../ScheduleDemoContact/ScheduleDemoContact";
import { PRICING } from "@/lib/constants";

export default function PricingPlans() {
    const plans = [
      {
        title: "Starter",
        priceDetail: "Free",
        features: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
      },
      {
        title: "Pro",
        price: `${PRICING.currency}${PRICING.pro.monthly}`,
        priceDetail: " per month",
        features: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
      },
      {
        title: "Enterprise",
        price: `${PRICING.currency}${PRICING.enterprise.monthly}`,
        priceDetail: " per month",
        features: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
      },
    ];
  
    return (
      <div>
        <div>
        <section id="pricing" className="bg-purple-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1F1654] mb-8 mt-2">Our Plans</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 w-80 text-start"
              >
                <h3 className="text-2xl font-bold text-[#2B1C50]">{plan.title}</h3>
                <p className="text-[#2B1C50] mt-2">Lorem ipsum dolor sit amet</p>
                <p className="text-2xl font-semibold text-[#2B1C50] mt-4">
                  <span className="font-bold">{plan.price}</span>
                  <span className="font-normal">{plan.priceDetail}</span>
                </p>
                <button className="mt-4 bg-[#7054F0] text-[#FFFFFF] px-6 py-2 rounded-full font-medium ">
                  Signup
                </button>
                <hr className="my-4 border-[#D1D1F7]" />
                <h4 className="text-lg text-[#2B1C50] py-2">Key Features</h4>
                <ul className="text-left text-[#2B1C50]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#2B1C50] py-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
        <ScheduleDemoContact/>
      </div>
    );
  }
