import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
    slug: string
    title: string
    author: string
    date: string
    image: string
    excerpt: string
    content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllBlogPosts(): BlogPost[] {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(fileName => {
            const slug = fileName.replace(/\.mdx$/, '')
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const { data, content } = matter(fileContents)

            return {
                slug,
                title: data.title,
                author: data.author,
                date: data.date,
                image: data.image,
                excerpt: data.excerpt,
                content,
            }
        })

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            slug,
            title: data.title,
            author: data.author,
            date: data.date,
            image: data.image,
            excerpt: data.excerpt,
            content,
        }
    } catch (error) {
        return null
    }
}

export function getPaginatedBlogPosts(page: number = 1, postsPerPage: number = 10) {
    const allPosts = getAllBlogPosts()
    const totalPosts = allPosts.length
    const totalPages = Math.ceil(totalPosts / postsPerPage)

    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const posts = allPosts.slice(startIndex, endIndex)

    return {
        posts,
        pagination: {
            currentPage: page,
            totalPages,
            totalPosts,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
        },
    }
}
