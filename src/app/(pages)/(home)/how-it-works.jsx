import { Boxes, BrickWall, Handshake } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
    return (
        <section className="bg-section-svg-primary" id="how-it-works">
            <div className="section-wrapper">
                <h2>
                <span className="text-primary underline">How</span> It Works
                </h2>
                <p className="-mt-base mx-auto md:text-center text-muted-foreground md:w-2/3">
                    Our three steps process for each great success.
                </p>

                <div className="mt-2xl grid gap-base md:grid-cols-3">
                    <div className="relative p-base bg-background rounded-md border h-fit">
                        <div>
                            <Handshake className="text-primary size-block" />
                        </div>
                        <h3>Consulting | Planning</h3>
                        <ul className="my-sm list-disc list-inside text-muted-foreground">
                            <li>Meet and Greet</li>
                            <li>Parameters (Time, Value or Scope, Money)</li>
                            <li>Visualize</li>
                        </ul>
                        <p>
                            The first step in any project is a review of surrounding thoughts. If your project needs professional construction services see the <Link className="text-link" href="/services">Services page</Link>, fill out the <Link className="text-link" href="/contact-us">Contact Us</Link> form, and we'll discuss your project details.
                        </p>
                    </div>

                    <div className="relative p-base bg-background rounded-md border h-fit">
                        <div>
                            <Boxes className="text-primary size-block" />
                        </div>
                        <h3 className="my-sm">PROJECT DEVELOPMENT</h3>
                        <ul className="my-sm list-disc list-inside text-muted-foreground">
                            <li>Scope of Work</li>
                            <li>Materials</li>
                            <li>Contract</li>
                        </ul>
                        <p>
                            Our construction professionals are available to provide a wide range of customizable options, all guaranteed to meet and exceed expectations. <Link className="text-link" href="/contact-us">Contact our office</Link> today to learn more about this and our other available services.
                        </p>
                    </div>

                    <div className="relative p-base bg-background rounded-md border h-fit">
                        <div>
                            <BrickWall className="text-primary size-block" />
                        </div>
                        <h3>REMODELING</h3>
                        <ul className="my-sm list-disc list-inside text-muted-foreground">
                            <li>Construction</li>
                            <li>Project Enhancements</li>
                        </ul>
                        <p>
                            At Fine Remodeling, our clients are our number one priority and we go the extra mile to make sure they’re completely satisfied. We understand that the decision to renovate your kitchen is never an easy one. Whether your kitchen or Bathrooms are dated and need a simple makeover, or you are looking for a complete remodel, Fine Remodeling is your contractor. We work closely with our suppliers to ensure that we can deliver your  kitchen or Bathroom remodel on any budget.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
