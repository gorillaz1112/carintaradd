"use client";

// TidyCal calendar embed using a direct iframe for maximum reliability in SPA navigation
// This avoids relying on third-party scripts that can fail to re-run on client-side route changes.
export function TidyCalEmbed() {
  return (
    <div className="w-full min-h-[600px] rounded-lg overflow-hidden">
      {/* Responsive iframe that always loads the booking calendar as soon as the component mounts */}
      <iframe
        src="https://tidycal.com/coanecracan/60-minute-meeting"
        title="Programare CarTint Arad"
        className="w-full h-[700px] border-0"
        loading="eager"
      />
    </div>
  );
}
