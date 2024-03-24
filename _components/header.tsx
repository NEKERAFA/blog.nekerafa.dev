import { JSX } from "npm:preact/jsx-runtime";

export default function({ title, lang, date, tags, type, url }: {
    title: string
    lang: string
    date: Date
    type: string
    tags?: string[]
    url?: string
}) {
    const isPost = type === 'posts'

    let stringifyDate = date.toLocaleDateString(lang, { weekday: isPost ? 'long' : 'short', year: 'numeric', month: isPost ? 'long' : 'short', day: 'numeric' });
    stringifyDate = `${stringifyDate[0].toUpperCase()}${stringifyDate.slice(1)}`

    const Title = ({ children }: { children?: string | JSX.Element | JSX.Element[] }) => 
        isPost ? <h1>{children}</h1> : <h1><a href={url}>{children}</a></h1>

    return (
        <>
            <Title>{title}</Title>
            <h2><span class='fa-solid fa-calendar-day'></span>{stringifyDate}</h2>
            {tags && tags.length > 0 ? <p>{tags.map((tag) => <span class="badge">{tag}</span>)}</p> : null}
        </>
    )
}