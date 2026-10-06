import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="container-main flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Create account</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">Build your workspace</h1>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
              <input className="input-field" type="text" placeholder="John Smith" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input className="input-field" type="email" placeholder="you@example.com" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
              <input className="input-field" type="password" placeholder="Create a password" />
            </div>

            <button type="submit" className="btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
            <div className="h-px flex-1 bg-slate-200" />
            Or continue with
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <button className="btn-secondary mt-6 w-full">🐙 GitHub</button>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
