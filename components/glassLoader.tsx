// components/GlassLoader.jsx

export default function GlassLoader() {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-10">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  