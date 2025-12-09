export function BackgroundBlobs() {
  return (
    <div
      className="w-full h-full inset-0  pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="440"
        height="397"
        viewBox="0 0 440 397"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0"
      >
        <circle cx="199" cy="264" r="264" fill="url(#paint0_radial_6_1039)" />
        <defs>
          <radialGradient
            id="paint0_radial_6_1039"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(199 264) rotate(90) scale(264)"
          >
            <stop offset="0.432692" stopColor="#CEDCFF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <svg
        width="292"
        height="352"
        viewBox="0 0 292 352"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 bottom-[180px]"
      >
        <circle
          cx="176"
          cy="176"
          r="176"
          fill="url(#paint0_radial_6_1040)"
          fillOpacity={0.6}
        />
        <defs>
          <radialGradient
            id="paint0_radial_6_1040"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(176 176) rotate(90) scale(176)"
          >
            <stop offset="0.432692" stopColor="#D9F7FF" />
            <stop offset="1" stopColor="white" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
