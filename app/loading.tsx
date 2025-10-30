export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-8 border-white/30 rounded-full"></div>
          <div className="absolute inset-0 border-8 border-transparent border-t-white rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-bold text-white mb-2">Jelajah Tulang</h2>
        <p className="text-white/90 text-lg">Memuat halaman...</p>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-white/30 rounded-full overflow-hidden mx-auto mt-6">
          <div className="h-full bg-white rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
}
