import React from "react";

const SplashScreen: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] grid place-items-center bg-background/95 backdrop-blur-sm animate-fade-in"
      role="status"
      aria-busy="true"
      aria-label="A carregar"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-primary/30" />
          <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin" />
          <div className="absolute inset-0 grid place-items-center text-lg font-bold text-primary select-none">
            MS
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-extrabold tracking-tight text-gradient">MultiServ</div>
          <p className="text-sm text-muted-foreground mt-1">A preparar a sua experiência…</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
