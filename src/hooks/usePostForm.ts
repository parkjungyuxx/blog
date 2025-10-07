import { useState } from "react";
import { createPost } from "@/lib/posts";

type PostCategory = "LIFE" | "TECH" | "REVIEW";

interface PostFormData {
  date: string;
  category: PostCategory;
  title: string;
  content: string;
}

export function usePostForm() {
  const [formData, setFormData] = useState<PostFormData>({
    date: "",
    category: "TECH",
    title: "",
    content: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date || !formData.title || !formData.content) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await createPost(formData);

      if (result) {
        setSubmitSuccess(true);
        setFormData({
          date: "",
          category: "TECH",
          title: "",
          content: "",
        });
      } else {
        alert("포스트 생성에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("포스트 생성 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    submitSuccess,
  };
}
