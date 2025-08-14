import { getAllBlogPosts } from '@/lib/blog'
import { format } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogCallToAction } from '@/components/BlogCallToAction'

interface BlogPageProps {
    searchParams: { page?: string }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
    const posts = getAllBlogPosts()

    return (
        <>
            <Banner />
            <Header />
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-16 lg:text-center">
                        <h2 className="text-base/7 font-semibold text-[#9C27B0]">Our Blog</h2>
                        <p className="text-pretty lg:text-balance mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Insights & Updates
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-700">
                            Stay informed with the latest news, updates, and insights from the Coalition for Better
                            Health as we work to transform healthcare in BC and across Canada.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map(post => (
                            <article key={post.slug} className="flex flex-col items-start">
                                <div className="group relative w-full">
                                    <Link href={`/blog/${post.slug}`}>
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={800}
                                            height={450}
                                            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-105 sm:aspect-[2/1] lg:aspect-[3/2]"
                                        />
                                        <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-10" />
                                    </Link>
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 grid grid-cols-1 gap-2 text-xs text-gray-500 md:grid-cols-2 md:gap-4">
                                        <div className="flex items-center space-x-2">
                                            <time dateTime={post.date}>
                                                {format(new Date(post.date), 'MMMM d, yyyy')}
                                            </time>
                                            <span>•</span>
                                            <span>{post.author}</span>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <Link href={`/blog/${post.slug}`}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <BlogCallToAction />
            <Footer />
        </>
    )
}
