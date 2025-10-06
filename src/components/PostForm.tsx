import Link from "next/link";

interface PostFormData {
  date: string;
  category: "LIFE" | "DEV" | "REVIEW";
  title: string;
  content: string;
}

interface PostFormProps {
  formData: PostFormData;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  submitSuccess: boolean;
}

export function PostForm({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
  submitSuccess,
}: PostFormProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="flex justify-between items-start mb-12">
        <h1 className="text-[80px] font-bold text-black">New Post</h1>
        <Link href="/posts" className="text-[20px] text-black hover:underline">
          / POSTS
        </Link>
      </div>

      {submitSuccess && (
        <div className="mb-8 p-4 bg-green-100 border-2 border-green-500 text-green-800 font-mono">
          포스트가 성공적으로 생성되었습니다!
        </div>
      )}

      <div className="max-w-4xl">
        <div className="mb-8">
          <label className="block text-black font-mono text-sm mb-2">
            DATE /
          </label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="2024.12.20"
            className="w-full p-4 border-2 border-black font-mono text-lg"
            required
          />
          <div className="text-gray-600 font-mono text-xs mt-1">
            Format: YYYY.MM.DD
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-black font-mono text-sm mb-2">
            CATEGORY /
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-4 border-2 border-black font-mono text-lg"
            required
          >
            <option value="LIFE">LIFE</option>
            <option value="DEV">DEV</option>
            <option value="REVIEW">REVIEW</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="block text-black font-mono text-sm mb-2">
            TITLE /
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="제목을 입력하세용"
            className="w-full p-4 border-2 border-black font-mono text-lg"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block text-black font-mono text-sm mb-2">
            CONTENT /
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="내용을 입력하세용"
            className="w-full p-4 border-2 border-black font-mono text-lg h-96 resize-y"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-black text-white px-8 py-4 font-mono text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-500"
          >
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </button>

          <Link
            href="/posts"
            className="bg-gray-300 text-black px-8 py-4 font-mono text-lg hover:bg-gray-400 transition-colors inline-block"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
