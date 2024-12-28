import Method from "@/components/section/method";
import Authority from "./authority";
import Hero from "./hero";
import Mission from "./mission";
import Story from "./story";
import Team from "./team";
import Contact from "@/components/section/contact";

export default function page() {
    return (
        <main className="flex-1">
            <Hero />
            <Mission />
            <Story />
            <Method />
            <Team />
            <Authority />
            <Contact />
        </main>
    )
}
