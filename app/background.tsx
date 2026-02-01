export default function VideoBackground() {
  return (
    <div>
      <video className="fixed top-0 left-0 w-full h-full object-cover z-[-1] transform-gpu" preload="metadata" autoPlay loop muted playsInline>
        <source src="/assets/videos/hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </div>
  );
}