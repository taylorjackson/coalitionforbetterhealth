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
            <Banner />
            <Header />
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <article>
                        {/* Header */}
                        <div className="mx-auto max-w-2xl">
                            <div className="mb-4 flex items-center gap-x-4 text-xs text-gray-500">
                                <time dateTime={caseStudy.date}>
                                    {format(new Date(caseStudy.date), 'MMMM d, yyyy')}
                                </time>
                                <span>•</span>
                                <span>{caseStudy.author}</span>
                                {caseStudy.client && (
                                    <>
                                        <span>•</span>
                                        <span>{caseStudy.client}</span>
                                    </>
                                )}
                                {caseStudy.duration && (
                                    <>
                                        <span>•</span>
                                        <span>{caseStudy.duration}</span>
                                    </>
                                )}
                            </div>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                {caseStudy.title}
                            </h1>
                            <p className="mb-8 text-xl leading-8 text-gray-600">{caseStudy.excerpt}</p>
                        </div>

                        {/* Featured Image */}
                        <div className="mb-12 mt-8">
                            <Image
                                src={caseStudy.image}
                                alt={caseStudy.title}
                                width={1200}
                                height={675}
                                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                            />
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

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            <MDXContent content={caseStudy.content} />
                        </div>

                        {/* Back to Case Studies */}
                        <div className="mt-16 border-t border-gray-200 pt-8">
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center font-medium text-[#9C27B0] hover:text-[#7B1FA2]"
                            >
                                ← Back to Case Studies
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
            <BlogCallToAction />
            <Footer />
        </>
    )
}
