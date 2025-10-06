"use client";

import { useAuth } from "@/hooks/useAuth";
import { usePostForm } from "@/hooks/usePostForm";
import { AuthForm } from "@/components/AuthForm";
import { PostForm } from "@/components/PostForm";

export default function NewPostPage() {
  const { isAuthenticated, password, setPassword, authError, handleAuth } =
    useAuth();
  const {
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    submitSuccess,
  } = usePostForm();

  if (!isAuthenticated) {
    return (
      <AuthForm
        password={password}
        setPassword={setPassword}
        authError={authError}
        handleAuth={handleAuth}
      />
    );
  }

  return (
    <PostForm
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitSuccess={submitSuccess}
    />
  );
}
