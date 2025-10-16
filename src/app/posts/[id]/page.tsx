import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getPostById } from "@/lib/posts";
import Hashtag from "@/components/Hashtag";

interface PostDetailPageProps {
  params: { id: string };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="hidden md:flex justify-between items-start mb-12">
        <Link href="/posts" className="text-[20px] text-black hover:underline">
          ← Back to Posts
        </Link>
        <Link href="/" className="text-[20px] text-black">
          / HOME
        </Link>
      </div>

      <div className="md:hidden flex flex-col items-start mb-8 gap-2">
        <Link href="/posts" className="text-base text-black hover:underline">
          ← Back to Posts
        </Link>
        <Link href="/" className="text-base text-black">
          / HOME
        </Link>
      </div>

      <article className="max-w-4xl mx-auto">
        <div className="hidden md:block mb-8 pb-4 border-b-2 border-black">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-[48px] font-bold text-black leading-tight">
              {post.title}
            </h1>
          </div>
          <div className="flex gap-4 text-gray-600 font-mono text-sm items-center">
            <span>{post.date}</span>
            <Hashtag text={post.category} />
          </div>
        </div>

        <div className="md:hidden mb-6 pb-4 border-b-2 border-black">
          <h1 className="text-3xl font-bold text-black leading-tight mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 text-gray-600 font-mono text-xs items-center">
            <span>{post.date}</span>
            <Hashtag text={post.category} />
          </div>
        </div>

        <div className="hidden md:block prose prose-lg max-w-none text-black">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mb-6 mt-8">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mb-4 mt-6">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold mb-3 mt-4">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 ml-6 list-disc">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 ml-6 list-decimal">{children}</ol>
              ),
              li: ({ children }) => <li className="mb-1">{children}</li>,
              code: (props) => {
                const { children, className } = props;
                const match = /language-(\w+)/.exec(className || "");
                const isInline = !match;

                if (isInline) {
                  return (
                    <code className="bg-gray-200 px-2 py-1 rounded font-mono text-sm">
                      {children}
                    </code>
                  );
                }

                return (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg mb-4"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              },
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-bold">{children}</strong>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="md:hidden text-black">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mb-4 mt-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-bold mb-3 mt-5">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-bold mb-2 mt-4">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-3 leading-relaxed text-sm">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-3 ml-4 list-disc text-sm">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-3 ml-4 list-decimal text-sm">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="mb-1 text-sm">{children}</li>
              ),
              code: (props) => {
                const { children, className } = props;
                const match = /language-(\w+)/.exec(className || "");
                const isInline = !match;

                if (isInline) {
                  return (
                    <code className="bg-gray-200 px-1.5 py-0.5 rounded font-mono text-xs">
                      {children}
                    </code>
                  );
                }

                return (
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg mb-3 text-xs"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                );
              },
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 pl-3 italic mb-3 text-sm">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 underline hover:text-blue-800 break-words text-sm"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-bold">{children}</strong>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
              img: ({ src, alt }) => (
                <div className="relative w-full h-auto my-4">
                  <Image
                    src={(src as string) || ""}
                    alt={alt || ""}
                    width={800}
                    height={600}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="hidden md:block mt-16 pt-8 border-t border-gray-300">
          <div className="flex justify-between items-center">
            <Link
              href="/posts"
              className="text-black font-mono underline hover:no-underline"
            >
              ← All Posts
            </Link>
            <div className="text-gray-500 font-mono text-sm">
              Published on {post.date}
            </div>
          </div>
        </div>

        <div className="md:hidden mt-12 pt-6 border-t border-gray-300">
          <div className="flex flex-col items-start gap-3">
            <Link
              href="/posts"
              className="text-black font-mono underline hover:no-underline text-sm"
            >
              ← All Posts
            </Link>
            <div className="text-gray-500 font-mono text-xs">
              Published on {post.date}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
