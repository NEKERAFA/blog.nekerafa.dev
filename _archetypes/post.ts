export default function(title: string, tags?: string[]) {
    const date = new Date()
    const slug = title.replace(/\s+/g, "-").toLowerCase()

    return {
        path: `posts/${date.toISOString().split("T")[0]}_${slug}.md`,
        content: {
            title: title,
            date: date.toISOString(),
            tags: tags || ['post'],
            content: "Nuevo post"
        }
    }
}