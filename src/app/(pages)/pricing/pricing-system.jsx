import { pricingData } from "@/lib/database"
import { IconComponent } from "@/lib/utils";

export default function PricingSystem() {
    const kitchen = pricingData.kitchen;
    const bathroom = pricingData.bathroom;
    const addition = pricingData.addition;

    return (
        <>
            <section>
                <div className="section-wrapper">
                    <h2>Kitchen Remodeling</h2>

                    <div className="grid lg:grid-cols-4 gap-base">
                        <div className="grid gap-base md:grid-cols-3 lg:col-span-3">
                            {[kitchen.sizes.small, kitchen.sizes.medium, kitchen.sizes.large].map((item) => (
                                <div className="p-sm border rounded-md bg-blue-50" key={item.description + "Kitchen"}>
                                    <h3 className="h6">{"$" + item.range[0] + " - $" + item.range[1]}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-sm border rounded-md bg-yellow-50">
                            <p><b>Include: </b>{kitchen.include}</p>
                            <p><b>Exclude: </b>{kitchen.exclude}</p>
                        </div>
                    </div>

                    <div className="mt-xl grid gap-base sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Object.entries(kitchen.options).map(([category, tiers]) => (
                            <div className="p-4 border rounded-md bg-cyan-50" key={category + "Kitchen"}>
                                <h3 className="text-lg font-bold capitalize flex items-center">
                                    <IconComponent category={category} />
                                    {category}
                                </h3>
                                <div className="">
                                    {Object.entries(tiers).map(([tier, details]) => (
                                        <div key={tier + "Kitchen"} className="py-2 last:pb-0 border-b last:border-b-0">
                                            <span className="flex gap-1 items-center">
                                                <h4 className="text-md font-semibold capitalize">{tier}</h4>-
                                                <p className="mt-px text-sm font-medium underline underline-offset-2"><i>${details.cost}</i></p>
                                            </span>
                                            <p className="mt-px">{details.perk}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-section-secondary">
                <div className="section-wrapper">
                    <h2>Bathroom Remodeling</h2>

                    <div className="grid lg:grid-cols-4 gap-base">
                        <div className="grid gap-base md:grid-cols-3 lg:col-span-3">
                            {[bathroom.sizes.small, bathroom.sizes.medium, bathroom.sizes.large].map((item) => (
                                <div className="p-sm border rounded-md bg-blue-50" key={item.description + "Bathroom"}>
                                    <h3 className="h6">{"$" +item.range[0] + " - $" + item.range[1]}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-sm border rounded-md bg-yellow-50">
                            <p><b>Include: </b>{bathroom.include}</p>
                            <p><b>Exclude: </b>{bathroom.exclude}</p>
                        </div>
                    </div>

                    <div className="mt-xl grid gap-base sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Object.entries(bathroom.options).map(([category, tiers], i) => (
                            <div className="p-4 border rounded-md bg-cyan-50" key={category + "Bathroom"}>
                                <h3 className="text-lg font-bold capitalize flex items-center">
                                    <IconComponent category={category} />
                                    {category}
                                </h3>
                                <div className="">
                                    {Object.entries(tiers).map(([tier, details]) => (
                                        <div key={tier + "Bathroom"} className="py-2 last:pb-0 border-b last:border-b-0">
                                            <span className="flex gap-1 items-center">
                                                <h4 className="text-md font-semibold capitalize">{tier}</h4>-
                                                <p className="mt-px text-sm font-medium underline underline-offset-2"><i>${details.cost}</i></p>
                                            </span>
                                            <p className="mt-px">{details.perk}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="section-wrapper">
                    <h2>Addition Remodeling</h2>

                    <div className="grid lg:grid-cols-4 gap-base">
                        <div className="grid gap-base md:grid-cols-3 lg:col-span-3">
                            {[addition.sizes.small, addition.sizes.medium, addition.sizes.large].map((item) => (
                                <div className="p-sm border rounded-md bg-blue-50" key={item.name + "Addition"}>
                                    <h3 className="h6">{"$" +item.range[0] + " - $" + item.range[1]}</h3>
                                </div>
                            ))}
                        </div>

                        <div className="p-sm border rounded-md bg-yellow-50">
                            <p><b>Include: </b>{addition.include}</p>
                            <p><b>Exclude: </b>{addition.exclude}</p>
                        </div>
                    </div>

                    <div className="mt-xl grid gap-base sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Object.entries(addition.options).map(([category, tiers], i) => (
                            <div className="p-4 border rounded-md bg-cyan-50" key={category + "Addition"}>
                                <h3 className="text-lg font-bold capitalize flex items-center">
                                    <IconComponent category={category} />
                                    {category}
                                </h3>
                                <div className="">
                                    {Object.entries(tiers).map(([tier, details]) => (
                                        <div key={tier + "Addition"} className="py-2 last:pb-0 border-b last:border-b-0">
                                            <span className="flex gap-1 items-center">
                                                <h4 className="text-md font-semibold capitalize">{tier}</h4>-
                                                <p className="mt-px text-sm font-medium underline underline-offset-2"><i>${details.cost}</i></p>
                                            </span>
                                            <p className="mt-px">{details.perk}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
