import React from 'react'

interface MDXContentProps {
    content: string
}

export default function MDXContent({ content }: MDXContentProps) {
    // This is a simplified MDX renderer
    // In a production app, you'd want to use a proper MDX parser
    const renderContent = (content: string) => {
        // Convert markdown-like syntax to HTML with Tailwind classes
        let html = content
            // Headers
            .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-6 mb-3 text-gray-900">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-8 mb-4 text-gray-900">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-10 mb-5 text-gray-900">$1</h1>')

            // Bold and italic
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')

            // Lists
            .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
            .replace(/(<li.*<\/li>)/gim, '<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>')

            // Numbered lists
            .replace(/^\d+\. (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
            .replace(/(<li.*<\/li>)/gim, '<ol class="list-decimal list-inside mb-6 space-y-2">$1</ol>')

            // Blockquotes
            .replace(
                /^> (.*$)/gim,
                '<blockquote class="border-l-4 border-indigo-200 pl-4 italic text-gray-600 my-6">$1</blockquote>'
            )

            // Paragraphs
            .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed text-gray-700">')

            // Line breaks
            .replace(/\n/g, '<br />')

        // Wrap in paragraph tags
        html = `<p class="mb-4 leading-relaxed text-gray-700">${html}</p>`

        return html
    }

    return <div className="max-w-none" dangerouslySetInnerHTML={{ __html: renderContent(content) }} />
}
