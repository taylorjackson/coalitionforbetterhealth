import { getPaginatedCaseStudies } from '@/lib/case-studies'
import { format } from 'date-fns'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogCallToAction } from '@/components/BlogCallToAction'

interface CaseStudiesPageProps {
    searchParams: { page?: string }
}

export default function CaseStudiesPage({ searchParams }: CaseStudiesPageProps) {
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
    const { caseStudies, pagination } = getPaginatedCaseStudies(currentPage, 10)

    if (currentPage > pagination.totalPages && pagination.totalPages > 0) {
        notFound()
    }

    return (
        <>
            <Banner />
            <Header />
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-16 lg:text-center">
                        <h2 className="text-base/7 font-semibold text-[#9C27B0]">Case Studies</h2>
                        <p className="text-pretty lg:text-balance mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Real Results, Real Impact
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-700">
                            Explore detailed case studies showcasing successful healthcare transformations, 
                            innovative care models, and measurable improvements in patient outcomes across 
                            British Columbia and beyond.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none">
                        {caseStudies.map(caseStudy => (
                            <article key={caseStudy.slug} className="flex flex-col items-start">
                                <div className="group relative w-full">
                                    <Link href={`/case-studies/${caseStudy.slug}`}>
                                        <Image
                                            src={caseStudy.image}
                                            alt={caseStudy.title}
                                            width={800}
                                            height={450}
                                            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-10" />
                                    </Link>
                                </div>
                                <div className="max-w-4xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <time dateTime={caseStudy.date} className="text-gray-500">
                                            {format(new Date(caseStudy.date), 'MMMM d, yyyy')}
                                        </time>
                                        <span className="text-gray-500">•</span>
                                        <span className="text-gray-500">{caseStudy.author}</span>
                                        {caseStudy.client && (
                                            <>
                                                <span className="text-gray-500">•</span>
                                                <span className="text-gray-500">{caseStudy.client}</span>
                                            </>
                                        )}
                                        {caseStudy.duration && (
                                            <>
                                                <span className="text-gray-500">•</span>
                                                <span className="text-gray-500">{caseStudy.duration}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <Link href={`/case-studies/${caseStudy.slug}`}>
                                                <span className="absolute inset-0" />
                                                {caseStudy.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-5 text-base leading-7 text-gray-600">
                                            {caseStudy.excerpt}
                                        </p>
                                        {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
                                            <div className="mt-6">
                                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                                                <ul className="list-disc list-inside space-y-1">
                                                    {caseStudy.outcomes.map((outcome, index) => (
                                                        <li key={index} className="text-sm text-gray-600">{outcome}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    {pagination.totalPages > 1 && (
                        <div className="mt-16 flex items-center justify-center">
                            <nav className="flex items-center space-x-2" aria-label="Pagination">
                                {pagination.hasPrevPage && (
                                    <Link
                                        href={`/case-studies?page=${pagination.currentPage - 1}`}
                                        className="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Previous</span>
                                        &lt;
                                    </Link>
                                )}

                                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                                    <Link
                                        key={page}
                                        href={`/case-studies?page=${page}`}
                                        className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ${
                                            page === pagination.currentPage
                                                ? 'bg-[#9C27B0] text-white ring-1 ring-inset ring-[#9C27B0]'
                                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        {page}
                                    </Link>
                                ))}

                                {pagination.hasNextPage && (
                                    <Link
                                        href={`/case-studies?page=${pagination.currentPage + 1}`}
                                        className="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Next</span>
                                        &gt;
                                    </Link>
                                )}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
            <BlogCallToAction />
            <Footer />
        </>
    )
}
