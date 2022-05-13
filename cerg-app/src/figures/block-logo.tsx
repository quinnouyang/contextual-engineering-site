// [Letter 'I' Symbol]

import Link from "next/link";

export default function LetterLogo(props: any) {
  return (
    <Link href="http://illinois.edu/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height={288.895}
        // width={200}
        style={{ width: "inherit", height: "inherit" }}
        viewBox="0 0 200 288.895"
        aria-label="Block UIUC Logo"
        href="http://illinois.edu/"
        {...props}
      >
        <path
          fill="#13294b"
          d="M201.06 79.252V1.471h-200v77.781h44.443v133.33H1.06v77.781h200v-77.781h-44.443V79.252h44.443z"
        />
        <path
          fill="#e84a27"
          d="M156.62 68.148h33.332V12.596H12.172v55.552H45.51c6.13 0 11.11 4.974 11.11 11.11v133.33c0 6.137-4.98 11.11-11.11 11.11H12.172v55.557h177.78v-55.557H156.62c-6.137 0-11.11-4.974-11.11-11.11V79.258c0-6.137 4.974-11.11 11.11-11.11"
        />
      </svg>
    </Link>
  );
}
