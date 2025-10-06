import { useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (password === adminPassword) {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("비밀번호가 틀렸습니다.");
    }
  };

  return {
    isAuthenticated,
    password,
    setPassword,
    authError,
    handleAuth,
  };
}
