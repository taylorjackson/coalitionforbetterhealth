import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import MDXContent from '@/components/MDXContent'
import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

interface BlogPostPageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    const posts = getAllBlogPosts()
    return posts.map(post => ({
        slug: post.slug,
    }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
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
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={400}
                        className="h-96 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-20 text-center text-white">
                            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">{post.title}</h1>
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
                                    <span>By {post.author}</span>
                                    <span>•</span>
                                    <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                                </div>
                            </div>
                            <Link
                                href="/blog"
                                className="text-[#9C27B0] transition-colors duration-200 hover:text-[#7B1FA2]"
                            >
                                ← Back to Blog
                            </Link>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div className="max-w-none">
                        <MDXContent content={post.content} />
                    </div>

                    {/* Back to Blog Button */}
                    <div className="mt-16 text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center rounded-md bg-[#9C27B0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7B1FA2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C27B0]"
                        >
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
