import { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

function Toast({ message, duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
      <span className="px-4 py-2 border border-black text-base bg-white">
        {message}
      </span>
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
  };

  const ToastContainer = () => {
    if (!toast) return null;

    return <Toast message={toast} onClose={() => setToast(null)} />;
  };

  return { showToast, ToastContainer };
}
