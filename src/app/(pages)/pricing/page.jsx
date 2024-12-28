import PricingSystem from "./pricing-system";
import RenovationCalculator from "./renovation-calculator";

export default function page() {
    return (
        <main className="flex-1">
            <h1 className="px-base md:text-center mt-block">Custom Prices  <br /> for <span className="text-primary underline"> Best Customers</span></h1>
            <PricingSystem />
            <RenovationCalculator />
        </main>
    )
}
