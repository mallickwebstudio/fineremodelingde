import Script from "next/script";

export default function Contact({ className, heading, subTitle }) {
    return (
        <section className={className} id="contact">
            <div className="section-wrapper relative grid md:grid-cols-2 gap-block">
                <div className="md:sticky h-fit top-block">
                    <h2 className="mb-2 text-left">{heading ? heading : "Get In Touch"}</h2>
                    <h3 className="">{subTitle || 'We offer a FREE Phone Consultation'}</h3>
                    <p className="mt-sm text-muted-foreground">
                        Before moving forward with designing or building your custom project we want to take the time to talk through some initial details. We will spend some time with you going over your project scope free of charge.
                    </p>
                    <p className="mt-sm text-muted-foreground">
                        Every project, house, and customer is different, so it's best to take a holistic approach. We understand that each customer will have their wants and needs. By having an initial consultation we can discuss the project, understand its features, and discuss any points of interest.  We'll discuss your ideas and offer advice that could help achieve your goals - both in design and construction.
                    </p>
                    <p className="mt-sm text-muted-foreground">
                        To contact us, schedule a phone consultation via our calendar below, which will be sent to one of our representatives.
                    </p>
                </div>

                {/* <!-- Calendly inline widget begin --> */}
                <div className="border rounded-md">
                    <div className="calendly-inline-widget min-w-[320px] h-[1000px]" data-url="https://calendly.com/mallickwebstudio/30min?primary_color=0077b3" />
                    <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
                </div>
            </div>
        </section>
    )
}
