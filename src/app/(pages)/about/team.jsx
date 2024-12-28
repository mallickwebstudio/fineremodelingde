import Image from "next/image";

export default function Team() {
    return (
        <section>
            <div className="section-wrapper">
                <h2>
                    Builders who make the <span className="text-primary underline">Team</span>
                </h2>

                <div className="mt-block grid gap-base sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="relative w-full bg-background rounded-md overflow-hidden">
                        <div className="aspect-[3/4] overflow-hidden">
                            <Image
                                className='w-full aspect-[3/4] object-cover rounded-md'
                                src="/images/person/1.png"
                                width={200}
                                height={200}
                                alt='Group Image'
                            />
                        </div>
                        <h3 className="mt-1">Randy Jones</h3>
                        <ul className="text-muted-foreground italic list-inside list-disc">
                            <li>Owner</li>
                            <li>Operator</li>
                        </ul>
                    </div>
                    
                    <div className="relative w-full bg-background rounded-md overflow-hidden">
                        <div className="aspect-[3/4] overflow-hidden">
                            <Image
                                className='w-full aspect-[3/4] object-cover rounded-md'
                                src="/images/common/error.png"
                                width={200}
                                height={200}
                                alt='Group Image'
                            />
                        </div>
                        <h3 className="mt-1">Gary</h3>
                        <ul className="text-muted-foreground italic list-inside list-disc">
                            <li>Builder</li>
                            <li>Remodeler</li>
                        </ul>
                    </div>
                    
                    <div className="relative w-full bg-background rounded-md overflow-hidden">
                        <div className="aspect-[3/4] overflow-hidden">
                            <Image
                                className='w-full aspect-[3/4] object-cover rounded-md'
                                src="/images/common/error.png"
                                width={200}
                                height={200}
                                alt='Group Image'
                            />
                        </div>
                        <h3 className="mt-1">Raymond</h3>
                        <ul className="text-muted-foreground italic list-inside list-disc">
                            <li>Builder</li>
                            <li>Remodeler</li>
                        </ul>
                    </div>
                    
                    <div className="relative w-full bg-background rounded-md overflow-hidden">
                        <div className="aspect-[3/4] overflow-hidden">
                            <Image
                                className='w-full aspect-[3/4] object-cover rounded-md'
                                src="/images/common/error.png"
                                width={200}
                                height={200}
                                alt='Group Image'
                            />
                        </div>
                        <h3 className="mt-1">Al</h3>
                        <ul className="text-muted-foreground italic list-inside list-disc">
                            <li>Builder</li>
                            <li>Remodeler</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}
