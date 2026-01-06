import basePath from "lume/plugins/base_path.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import extractDate from "lume/plugins/extract_date.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import highlight_gdscript from "./languages/gdscript.ts";
import jsx from "lume/plugins/jsx.ts";
import katex from "lume/plugins/katex.ts";
import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts"
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
    location: new URL("https://blog.nekerafa.dev")
});

site.ignore("README.md")
    .add("images")
    .add("CNAME")
    .add("/posts/")

    .use(extractDate())
    .use(katex())
    .add([".sass"])
    .use(sass())
    .use(basePath())
    .use(metas())
    .use(jsx())
    .use(minifyHTML())
    .use(resolveUrls())
    .use(sitemap())
    
    .use(codeHighlight({
        languages: {
            gdscript: highlight_gdscript
        }
    }))

    .use(favicon({
        input: "images/logo.webp"
    }))
    
    .use(feed({
        output: [ '/feed.xml' ],
        query: "type=posts",
        info: {
            title: "=site.title",
            description: "=site.description",
            published: new Date(),
            lang: "=site.lang",
            generator: true
        },
        items: {
            title: "=title",
            description: "=description",
            published: "=date",
            updated: (data) => "modified_date" in data ? new Date(data.modified_date) : undefined,
            lang: "=lang"
        }
    }))

export default site;
