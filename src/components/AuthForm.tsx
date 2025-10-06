import Link from 'next/link';

interface AuthFormProps {
  password: string;
  setPassword: (password: string) => void;
  authError: string;
  handleAuth: (e: React.FormEvent) => void;
}

export function AuthForm({ password, setPassword, authError, handleAuth }: AuthFormProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 border-2 border-black w-96">
        <h1 className="text-[32px] font-bold text-black mb-6 font-mono">
          Admin Access
        </h1>

        <div className="mb-4">
          <label className="block text-black font-mono text-sm mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border-2 border-black font-mono"
            required
          />
        </div>

        {authError && (
          <div className="mb-4 text-red-600 font-mono text-sm">
            {authError}
          </div>
        )}

        <button
          onClick={handleAuth}
          className="w-full bg-black text-white p-3 font-mono hover:bg-gray-800 transition-colors"
        >
          Enter
        </button>

        <div className="mt-6 text-center">
          <Link
            href="/posts"
            className="text-black font-mono underline hover:no-underline"
          >
            Back to Posts
          </Link>
        </div>
      </div>
    </div>
  );
}