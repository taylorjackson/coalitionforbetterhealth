import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies'
import { format } from 'date-fns'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import MDXContent from '@/components/MDXContent'
import { BlogCallToAction } from '@/components/BlogCallToAction'
import { ScrollToTop } from '@/components/ScrollToTop'

interface CaseStudyPageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    const caseStudies = getAllCaseStudies()
    return caseStudies.map(caseStudy => ({
        slug: caseStudy.slug,
    }))
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
    const caseStudy = getCaseStudyBySlug(params.slug)

    if (!caseStudy) {
        notFound()
    }

    return (
        <>
            <ScrollToTop />
            <Banner />
            <Header />
            <div className="bg-white pt-36 sm:pt-32">
                {/* Hero Section */}
                <div className="relative">
                    <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        width={1200}
                        height={400}
                        className="h-96 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-20 text-center text-white">
                            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">{caseStudy.title}</h1>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
                    {/* Metadata */}
                    <div className="mb-12 border-b border-gray-200 pb-8">
                        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                            <div className="grid grid-cols-1 gap-2 text-sm text-gray-500 md:grid-cols-2 md:gap-4">
                                <div className="flex items-center space-x-2">
                                    <span>By {caseStudy.author}</span>
                                    <span>•</span>
                                    <time dateTime={caseStudy.date}>
                                        {format(new Date(caseStudy.date), 'MMMM d, yyyy')}
                                    </time>
                                </div>
                                {caseStudy.client && caseStudy.duration && (
                                    <div className="flex items-center space-x-2">
                                        <span>{caseStudy.client}</span>
                                        <span>•</span>
                                        <span>{caseStudy.duration}</span>
                                    </div>
                                )}
                                {caseStudy.client && !caseStudy.duration && (
                                    <div className="flex items-center space-x-2">
                                        <span>{caseStudy.client}</span>
                                    </div>
                                )}
                                {!caseStudy.client && caseStudy.duration && (
                                    <div className="flex items-center space-x-2">
                                        <span>{caseStudy.duration}</span>
                                    </div>
                                )}
                            </div>
                            <Link
                                href="/case-studies"
                                className="text-[#9C27B0] transition-colors duration-200 hover:text-[#7B1FA2]"
                            >
                                ← Back to Case Studies
                            </Link>
                        </div>
                    </div>

                    {/* Key Outcomes */}
                    {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
                        <div className="mb-12 rounded-2xl bg-gray-50 p-6">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Key Outcomes</h2>
                            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                {caseStudy.outcomes.map((outcome, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-2 text-[#9C27B0]">✓</span>
                                        <span className="text-gray-700">{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Article Body */}
                    <div className="max-w-none">
                        <MDXContent content={caseStudy.content} />
                    </div>

                    {/* Back to Case Studies Button */}
                    <div className="mt-16 text-center">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center rounded-md bg-[#9C27B0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7B1FA2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1FA2]"
                        >
                            ← Back to Case Studies
                        </Link>
                    </div>
                </div>
            </div>
            <BlogCallToAction />
            <Footer />
        </>
    )
}
