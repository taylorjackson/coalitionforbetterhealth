import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface CaseStudy {
    slug: string
    title: string
    author: string
    date: string
    image: string
    excerpt: string
    content: string
    client?: string
    duration?: string
    outcomes?: string[]
}

const caseStudiesDirectory = path.join(process.cwd(), 'src/content/case-studies')

export function getAllCaseStudies(): CaseStudy[] {
    const fileNames = fs.readdirSync(caseStudiesDirectory)
    const allCaseStudiesData = fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(fileName => {
            const slug = fileName.replace(/\.mdx$/, '')
            const fullPath = path.join(caseStudiesDirectory, fileName)
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
                client: data.client,
                duration: data.duration,
                outcomes: data.outcomes,
            }
        })

    // Sort case studies by date (newest first)
    return allCaseStudiesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
    try {
        const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`)
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
            client: data.client,
            duration: data.duration,
            outcomes: data.outcomes,
        }
    } catch (error) {
        return null
    }
}

export function getPaginatedCaseStudies(page: number = 1, caseStudiesPerPage: number = 10) {
    const allCaseStudies = getAllCaseStudies()
    const totalCaseStudies = allCaseStudies.length
    const totalPages = Math.ceil(totalCaseStudies / caseStudiesPerPage)

    const startIndex = (page - 1) * caseStudiesPerPage
    const endIndex = startIndex + caseStudiesPerPage
    const caseStudies = allCaseStudies.slice(startIndex, endIndex)

    return {
        caseStudies,
        pagination: {
            currentPage: page,
            totalPages,
            totalCaseStudies,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
        },
    }
}
