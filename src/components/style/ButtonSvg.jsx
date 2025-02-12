const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="176"
      viewBox="0 0 21 176"
    >
      <path
        fill="#1E2735"
        stroke="url(#btn-left)"
        strokeWidth="2"
        d="M21,176 L8.11111,176 C4.18375,176 1,176 1,176 L1,34 C1,16 4.18375,1 8.11111,1 L21,1"
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="176"
      viewBox="0 0 100 176"
      preserveAspectRatio="none"
      fill=""
    >
      <polygon
        fill="url(#btn-top)"
        fillRule="#1E2735"
        points="100 0 100 2 0 2 0 0"
      />
      <polygon
        fill="url(#btn-bottom)"
        fillRule="#1E2735"
        points="100 174 100 176 0 176 0 174"
      />
    </svg>
    <svg
      className="absolute top-0 right-0"
      width="21"
      height="176"
      viewBox="0 0 21 176"
    >
      <path
        fill="#1E2735"
        stroke="url(#btn-right)"
        strokeWidth="2"
        d="M0,176 L5.028,176 L12.24,176 C16.526,176 20,176 20,176 L20,176 C20,176 18.978,24.8885 17.209,21.9867 L7.187,5.54222 C5.792,3.2535 4.034,1 2.217,1 L0,1"
      />
    </svg>
  </>
);

export default ButtonSvg;
