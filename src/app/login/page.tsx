export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-[#5B8A72] mb-4">Creator Hub</h1>
        <p className="text-[#6B5B4B] mb-8">
          Dashboard coming soon! This will be the automation hub for managing Pufi content.
        </p>
        
        <div className="space-y-4 text-left text-sm text-[#8B7B6B]">
          <div className="bg-[#F5E6DC] rounded-lg p-4">
            <h3 className="font-semibold text-[#5B8A72]">Planned Features:</h3>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Video generation queue</li>
              <li>Asset library management</li>
              <li>YouTube publishing automation</li>
              <li>Analytics dashboard</li>
            </ul>
          </div>
        </div>

        <a 
          href="/"
          className="inline-block mt-8 text-[#5B8A72] hover:underline"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
