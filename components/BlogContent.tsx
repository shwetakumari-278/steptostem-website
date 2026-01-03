export default function BlogContent({ html }: { html: string }) {
  return (
    <div
      className="
        prose prose-lg max-w-none
        prose-headings:font-bold
        prose-headings:text-gray-900

        /* TABLE BASE */
        prose-table:w-full
        prose-table:rounded-2xl
        prose-table:overflow-hidden
        prose-table:border
        prose-table:border-purple-200

        /* TABLE HEADER */
        prose-thead:bg-gradient-to-r
        prose-thead:from-purple-600
        prose-thead:via-indigo-600
        prose-thead:to-blue-600

        prose-th:text-white
        prose-th:font-semibold
        prose-th:px-6
        prose-th:py-4
        prose-th:text-left

        /* TABLE BODY */
        prose-td:px-6
        prose-td:py-4
        prose-td:border-t
        prose-td:border-purple-100

        prose-tr:bg-white
        prose-tr:even:bg-purple-50

        /* BLOCKQUOTE */
        prose-blockquote:border-l-4
        prose-blockquote:border-purple-500
        prose-blockquote:bg-purple-50
        prose-blockquote:rounded-xl
        prose-blockquote:px-6
        prose-blockquote:py-4

        /* HR */
        prose-hr:border-purple-200
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
