import Contact from "@/components/section/contact";

export default function page() {
    return (
        <main className="flex-1">
            <section>
                <div className="container mx-auto py-base text-center">
                    <h1><span className="text-primary underline">Contact</span> Us</h1>
                </div>
            </section>
            <Contact />
        </main>
    )
}
