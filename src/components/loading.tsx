function Loading() {
  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform  p-4 text-center">
        <svg
          className="h-20 w-20"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <circle cx="4" cy="12" r="3" fill="#450A0A">
            <animate
              id="svgSpinners3DotsScale0"
              attributeName="r"
              begin="0;svgSpinners3DotsScale1.end-0.25s"
              dur="0.75s"
              values="3;.2;3"
            />
          </circle>
          <circle cx="12" cy="12" r="3" fill="#450A0A">
            <animate
              attributeName="r"
              begin="svgSpinners3DotsScale0.end-0.6s"
              dur="0.75s"
              values="3;.2;3"
            />
          </circle>
          <circle cx="20" cy="12" r="3" fill="#450A0A">
            <animate
              id="svgSpinners3DotsScale1"
              attributeName="r"
              begin="svgSpinners3DotsScale0.end-0.45s"
              dur="0.75s"
              values="3;.2;3"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
export default Loading;
