// [Letter 'I' Symbol]

export default function LetterLogo(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={288.895}
      width={200}
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
  );
}

// export default function Logo() {
//   // Copied from Wikipedia, combined-logo. Magic numbers, complicated rendering: REFACTOR!
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       height={64}
//       // viewBox="0 0 150 28"
//       width="40"
//       // version="1.1"
//     >
//       <a href="http://illinois.edu/">
//         <g transform="matrix(1.25 0 0 -1.25 -351.31 616.46)">
//           <g transform="matrix(2.2804 0 0 2.2804 -434.91 -615.65)">
//             <path
//               d="m0.046875-0.017578v2.998h1.7129v5.1387h-1.7129v2.998h7.709v-2.998h-1.7129v-5.1387h1.7129v-2.998h-7.709zm49.094"
//               fill="#13294b"
//               transform="matrix(.8 0 0 -.8 314.25 485.85)"
//             />
//             <path
//               d="m319.08 483.81h1.0278v1.7129h-5.4821v-1.7129h1.028c0.18905 0 0.3426-0.15336 0.3426-0.34259v-4.1113c0-0.18923-0.15355-0.34259-0.3426-0.34259h-1.028v-1.7131h5.4821v1.7131h-1.0278c-0.18923 0-0.3426 0.15336-0.3426 0.34259v4.1113c0 0.18923 0.15337 0.34259 0.3426 0.34259"
//               stroke="#e04e39"
//               strokeWidth=".030369"
//               fill="#e84a27"
//             />
//           </g>
//         </g>
//       </a>
//     </svg>
//   );
// }

// Separate logo from Wikipedia, scaling issues

// export default function Logo() {
//   return (
//     <svg
//       height={32}
//       viewBox="0 0 150 28"
//       width="150"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g transform="matrix(1.25 0 0 -1.25 -351.31 616.46)">
//         <g transform="matrix(2.2804 0 0 2.2804 -434.91 -615.65)">
//           <path
//             fill="#13294b"
//             d="m201.06 79.252v-77.781h-200v77.781h44.443v133.33h-44.443v77.781h200v-77.781h-44.443v-133.33h44.443z"
//           />
//           <path
//             fill="#e84a27"
//             d="m156.62 68.148h33.332v-55.552h-177.78v55.552h33.338c6.1309 0 11.11 4.9737 11.11 11.11v133.33c0 6.1368-4.9796 11.11-11.11 11.11h-33.338v55.557h177.78v-55.557h-33.332c-6.1368 0-11.11-4.9737-11.11-11.11v-133.33c0-6.1368 4.9737-11.11 11.11-11.11"
//           />
//         </g>
//       </g>
//     </svg>
//   );
// }
