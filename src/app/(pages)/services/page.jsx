import Contact from "@/components/section/contact";
import Method from "@/components/section/method";
import Services from "./services";

export default function page() {
    return (
        <main className="flex-1">
            <h1 className="px-base md:text-center mt-block">Remodeling <span className="text-primary underline">Services</span> We Offer</h1>
            <Services />
            <Method />
            <Contact />
        </main>
    )
}
