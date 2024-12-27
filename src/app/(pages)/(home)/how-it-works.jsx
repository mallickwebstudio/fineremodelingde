import { Boxes, BrickWall, Handshake } from "lucide-react";

export default function HowItWorks() {
    return (
        <section id="how-it-works">
            <div className="section-wrapper">
                <h2>
                    How It Works
                </h2>
                <p className="-mt-base mx-auto md:text-center text-muted-foreground md:w-2/3">
                    Our three steps process for each great success.
                </p>

                <div className="mt-2xl grid gap-base md:grid-cols-3">
                    <div className="relative p-base rounded-md border">
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
                            Looking for a reliable contractor with extensive experience for your next project? At Fine Remodeling, we stand by the excellence of our work and provide clients with personalized attention based on their specific needs. The first step in any project is a review of surrounding thoughts. If your project needs professional construction services see the Services page, fill out the Contact Us form, and we'll discuss your project details.
                        </p>
                    </div>

                    <div className="relative p-base rounded-md border">
                        <div>
                            <Boxes className="text-primary size-block" />
                        </div>
                        <h3>PROJECT DEVELOPMENT</h3>
                        <ul className="my-sm list-disc list-inside text-muted-foreground">
                            <li>Scope of Work</li>
                            <li>Materials</li>
                            <li>Contract</li>
                        </ul>
                        <p>
                            When you’re looking for top quality work, Fine Remodeling is here to help. Our construction professionals are available to provide a wide range of customizable options, all guaranteed to meet and exceed expectations. Contact our office today to learn more about this and our other available services.
                        </p>
                    </div>

                    <div className="relative p-base rounded-md border">
                        <div>
                            <BrickWall className="text-primary size-block" />
                        </div>
                        <h3>REMODELING</h3>
                        <ul className="my-sm list-disc list-inside text-muted-foreground">
                            <li>Construction</li>
                            <li>Project Enhancements</li>
                        </ul>
                        <p>
                            At Fine Remodeling, our clients are our number one priority and we go the extra mile to make sure they’re completely satisfied. We understand that the decision to renovate your kitchen is never an easy one. Whether your kitchen or Bathrooms are dated and need a simple makeover, or you are looking for a complete remodel, Fine Remodeling is your contractor. We work closely with our suppliers to ensure that we can deliver your  kitchen or Bathroom remodel on any budget
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
