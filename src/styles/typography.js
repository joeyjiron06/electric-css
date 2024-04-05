module.exports = {
  body: {
    "@apply leading-loose text-base text-foreground-700 bg-surface-50": {},
    "@apply dark:text-foreground-300 dark:bg-surface-950": {},
    "> :first-child": {
      marginTop: "0"
    },
    "> :last-child": {
      marginBottom: "0"
    },
    "@apply sm:leading-loose sm:text-sm": {},
    "@apply lg:leading-loose lg:text-lg": {},
    "@apply xl:leading-loose xl:text-xl": {},
    "@apply 2xl:leading-loose 2xl:text-2xl": {}
  },
  p: {
    "@apply mb-5 mt-5": {},
    "@apply sm:mb-4 sm:mt-4": {},
    "@apply lg:mb-5 lg:mt-5": {},
    "@apply xl:mb-4 xl:mt-4": {},
    "@apply 2xl:mb-5 2xl:mt-5": {}
  },
  "[class~=\"lead\"]": {
    "@apply leading-relaxed mb-4 mt-4 text-foreground-600 text-xl": {},
    "@apply dark:text-foreground-400": {},
    "@apply sm:leading-relaxed sm:mb-3.5 sm:mt-3.5 sm:text-xl": {},
    "@apply lg:leading-normal lg:mb-4 lg:mt-4 lg:text-lg": {},
    "@apply xl:leading-normal xl:mb-4 xl:mt-4 xl:text-lg": {},
    "@apply 2xl:leading-normal 2xl:mb-4 2xl:mt-4 2xl:text-xl": {}
  },
  "p a": {
    "@apply font-medium text-foreground-900 underline": {},
    "@apply dark:text-foreground-50": {}
  },
  strong: {
    "@apply font-semibold text-foreground-900": {},
    "@apply dark:text-foreground-50": {}
  },
  "a strong": {
    "@apply text-inherit": {}
  },
  "blockquote strong": {
    "@apply text-inherit": {}
  },
  "thead th strong": {
    "@apply text-inherit": {}
  },
  ol: {
    "@apply list-decimal mb-5 mt-5 pl-6": {},
    "@apply sm:mb-4 sm:mt-4 sm:pl-6": {},
    "@apply lg:mb-5 lg:mt-5 lg:pl-6": {},
    "@apply xl:mb-4 xl:mt-4 xl:pl-6": {},
    "@apply 2xl:mb-5 2xl:mt-5 2xl:pl-6": {}
  },
  "ol[type=\"A\"]": {
    "@apply list-[upper-alpha]": {}
  },
  "ol[type=\"a\"]": {
    "@apply list-[lower-alpha]": {}
  },
  "ol[type=\"A\" s]": {
    "@apply list-[upper-alpha]": {}
  },
  "ol[type=\"a\" s]": {
    "@apply list-[lower-alpha]": {}
  },
  "ol[type=\"I\"]": {
    "@apply list-[upper-roman]": {}
  },
  "ol[type=\"i\"]": {
    "@apply list-[lower-roman]": {}
  },
  "ol[type=\"I\" s]": {
    "@apply list-[upper-roman]": {}
  },
  "ol[type=\"i\" s]": {
    "@apply list-[lower-roman]": {}
  },
  "ol[type=\"1\"]": {
    "@apply list-decimal": {}
  },
  ul: {
    "@apply list-disc mb-5 mt-5 pl-6": {},
    "@apply sm:mb-4 sm:mt-4 sm:pl-6": {},
    "@apply lg:mb-5 lg:mt-5 lg:pl-6": {},
    "@apply xl:mb-4 xl:mt-4 xl:pl-6": {},
    "@apply 2xl:mb-5 2xl:mt-5 2xl:pl-6": {}
  },
  "ol > li::marker": {
    "@apply font-normal text-foreground-500": {},
    "@apply dark:text-foreground-400": {}
  },
  "ul > li::marker": {
    "@apply text-foreground-300": {},
    "@apply dark:text-foreground-600": {}
  },
  dt: {
    "@apply font-semibold mt-5 text-foreground-900": {},
    "@apply dark:text-foreground-50": {},
    "@apply sm:mt-4": {},
    "@apply lg:mt-5": {},
    "@apply xl:mt-4": {},
    "@apply 2xl:mt-5": {}
  },
  hr: {
    "@apply border-foreground-200 border-t mb-12 mt-12": {},
    "@apply dark:border-foreground-700": {},
    "@apply sm:mb-11 sm:mt-11": {},
    "@apply lg:mb-12 lg:mt-12": {},
    "@apply xl:mb-11 xl:mt-11": {},
    "@apply 2xl:mb-12 2xl:mt-12": {}
  },
  blockquote: {
    "@apply border-l-4 border-l-foreground-200 font-medium italic mb-6 mt-6 pl-4 text-foreground-900": {},
    "@apply dark:border-l-foreground-700 dark:text-foreground-100": {},
    quotes: "\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\"",
    "@apply sm:mb-5 sm:mt-5 sm:pl-4": {},
    "@apply lg:mb-6 lg:mt-6 lg:pl-4": {},
    "@apply xl:mb-6 xl:mt-6 xl:pl-4": {},
    "@apply 2xl:mb-7 2xl:mt-7 2xl:pl-4": {}
  },
  "blockquote p:first-of-type::before": {
    content: "open-quote"
  },
  "blockquote p:last-of-type::after": {
    content: "close-quote"
  },
  "h1": {
    "@apply font-extrabold leading-tight mb-3.5 mt-0 text-4xl text-foreground-900": {},
    "@apply dark:text-foreground-50": {},
    "@apply sm:leading-tight sm:mb-3 sm:mt-0 sm:text-3xl": {},
    "@apply lg:leading-none lg:mb-3 lg:mt-0 lg:text-4xl": {},
    "@apply xl:leading-none xl:mb-3 xl:mt-0 xl:text-4xl": {},
    "@apply 2xl:leading-none 2xl:mb-3.5 2xl:mt-0 2xl:text-4xl": {}
  },
  "h1 strong": {
    "@apply font-black text-inherit": {}
  },
  "h2": {
    "@apply font-bold leading-snug mb-4 mt-8 text-2xl text-foreground-900": {},
    "@apply dark:text-foreground-50": {},
    "@apply sm:leading-normal sm:mb-3 sm:mt-6 sm:text-xl": {},
    "@apply lg:leading-snug lg:mb-4 lg:mt-7 lg:text-2xl": {},
    "@apply xl:leading-tight xl:mb-3.5 xl:mt-6 xl:text-2xl": {},
    "@apply 2xl:leading-tight 2xl:mb-3 2xl:mt-6 2xl:text-3xl": {}
  },
  "h2 strong": {
    "@apply font-extrabold text-inherit": {}
  },
  "h3": {
    "@apply font-semibold leading-relaxed mb-2 mt-6 text-foreground-900 text-xl": {},
    "@apply dark:text-foreground-50": {},
    "@apply sm:leading-relaxed sm:mb-1.5 sm:mt-6 sm:text-xl": {},
    "@apply lg:leading-normal lg:mb-2.5 lg:mt-6 lg:text-xl": {},
    "@apply xl:leading-snug xl:mb-2.5 xl:mt-6 xl:text-2xl": {},
    "@apply 2xl:leading-tight 2xl:mb-2.5 2xl:mt-6 2xl:text-2xl": {}
  },
  "h3 strong": {
    "@apply font-bold text-inherit": {}
  },
  "h4": {
    "@apply font-semibold leading-normal mb-2 mt-6 text-foreground-900": {},
    "@apply dark:text-foreground-50": {},
    "@apply sm:leading-normal sm:mb-2 sm:mt-5": {},
    "@apply lg:leading-relaxed lg:mb-1.5 lg:mt-7": {},
    "@apply xl:leading-relaxed xl:mb-2 xl:mt-7": {},
    "@apply 2xl:leading-normal 2xl:mb-2.5 2xl:mt-6": {}
  },
  "h4 strong": {
    "@apply font-bold text-inherit": {}
  },
  img: {
    "@apply mb-8 mt-8": {},
    "@apply sm:mb-6 sm:mt-6": {},
    "@apply lg:mb-7 lg:mt-7": {},
    "@apply xl:mb-8 xl:mt-8": {},
    "@apply 2xl:mb-8 2xl:mt-8": {}
  },
  picture: {
    "@apply block mb-8 mt-8": {},
    "@apply sm:mb-6 sm:mt-6": {},
    "@apply lg:mb-7 lg:mt-7": {},
    "@apply xl:mb-8 xl:mt-8": {},
    "@apply 2xl:mb-8 2xl:mt-8": {}
  },
  video: {
    "@apply mb-8 mt-8": {},
    "@apply sm:mb-6 sm:mt-6": {},
    "@apply lg:mb-7 lg:mt-7": {},
    "@apply xl:mb-8 xl:mt-8": {},
    "@apply 2xl:mb-8 2xl:mt-8": {}
  },
  kbd: {
    "@apply font-medium pb-0.5 pl-1.5 pr-1.5 pt-0.5 rounded-md text-foreground-900 text-sm": {},
    "@apply dark:text-foreground-50": {},
    fontFamily: "inherit",
    "@apply sm:pb-0.5 sm:pl-1 sm:pr-1 sm:pt-0.5 sm:rounded-md sm:text-xs": {},
    "@apply lg:pb-0.5 lg:pl-1.5 lg:pr-1.5 lg:pt-0.5 lg:rounded-md lg:text-sm": {},
    "@apply xl:pb-1 xl:pl-1.5 xl:pr-1.5 xl:pt-1 xl:rounded-md xl:text-sm": {},
    "@apply 2xl:pb-1 2xl:pl-1 2xl:pr-1 2xl:pt-1 2xl:rounded-md 2xl:text-xs": {}
  },
  code: {
    "@apply font-semibold text-foreground-900 text-sm": {},
    "@apply dark:text-foreground-50": {},
    "@apply sm:text-xs": {},
    "@apply lg:text-sm": {},
    "@apply xl:text-sm": {},
    "@apply 2xl:text-xs": {}
  },
  "a code": {
    "@apply text-inherit": {}
  },
  "h1 code": {
    "@apply text-inherit": {}
  },
  "h2 code": {
    "@apply text-inherit text-sm": {},
    "@apply sm:text-sm": {},
    "@apply lg:text-xs": {},
    "@apply xl:text-xs": {},
    "@apply 2xl:text-sm": {}
  },
  "h3 code": {
    "@apply text-inherit text-sm": {},
    "@apply sm:text-sm": {},
    "@apply lg:text-sm": {},
    "@apply xl:text-sm": {},
    "@apply 2xl:text-sm": {}
  },
  "h4 code": {
    "@apply text-inherit": {}
  },
  "blockquote code": {
    "@apply text-inherit": {}
  },
  "thead th code": {
    "@apply text-inherit": {}
  },
  pre: {
    "@apply bg-surface-800 font-normal leading-loose mb-6 mt-6 overflow-x-auto pb-3 pl-4 pr-4 pt-3 rounded-md text-foreground-200 text-sm": {},
    "@apply dark:bg-surface-300 dark:text-foreground-300": {},
    "@apply sm:leading-loose sm:mb-6 sm:mt-6 sm:pb-2.5 sm:pl-4 sm:pr-4 sm:pt-2.5 sm:rounded sm:text-xs": {},
    "@apply lg:leading-loose lg:mb-8 lg:mt-8 lg:pb-4 lg:pl-6 lg:pr-6 lg:pt-4 lg:rounded-md lg:text-sm": {},
    "@apply xl:leading-loose xl:mb-8 xl:mt-8 xl:pb-4 xl:pl-5 xl:pr-5 xl:pt-4 xl:rounded-lg xl:text-sm": {},
    "@apply 2xl:leading-loose 2xl:mb-8 2xl:mt-8 2xl:pb-4 2xl:pl-6 2xl:pr-6 2xl:pt-4 2xl:rounded-lg 2xl:text-xs": {}
  },
  "pre code": {
    "@apply bg-transparent border-0 p-0 rounded-none text-inherit": {},
    fontWeight: "inherit",
    fontSize: "inherit",
    fontFamily: "inherit",
    lineHeight: "inherit"
  },
  "pre code::before": {
    content: "none"
  },
  "pre code::after": {
    content: "none"
  },
  table: {
    "@apply leading-loose mb-8 mt-8 table-auto text-left text-sm w-full": {},
    "@apply sm:leading-normal sm:text-xs": {},
    "@apply lg:leading-normal lg:text-sm": {},
    "@apply xl:leading-relaxed xl:text-sm": {},
    "@apply 2xl:leading-normal 2xl:text-xs": {}
  },
  thead: {
    "@apply border-b border-b-foreground-300": {},
    "@apply dark:border-b-foreground-600": {}
  },
  "thead th": {
    "@apply align-bottom font-semibold pb-2 pl-2 pr-2 text-foreground-900": {},
    "@apply dark:text-foreground-50": {},
    "@apply sm:pb-2.5 sm:pl-4 sm:pr-4": {},
    "@apply lg:pb-3 lg:pl-3 lg:pr-3": {},
    "@apply xl:pb-3.5 xl:pl-2.5 xl:pr-2.5": {},
    "@apply 2xl:pb-3 2xl:pl-2 2xl:pr-2": {}
  },
  "tbody tr": {
    "@apply border-b border-b-foreground-200": {},
    "@apply dark:border-b-foreground-700": {}
  },
  "tbody tr:last-child": {
    "@apply border-b-0": {}
  },
  "tbody td": {
    "@apply align-baseline": {}
  },
  tfoot: {
    "@apply border-t border-t-foreground-300": {},
    "@apply dark:border-t-foreground-600": {}
  },
  "tfoot td": {
    "@apply align-top": {}
  },
  "figure > *": {
    "@apply mb-0 mt-0": {},
    "@apply sm:mb-0 sm:mt-0": {},
    "@apply lg:mb-0 lg:mt-0": {},
    "@apply xl:mb-0 xl:mt-0": {},
    "@apply 2xl:mb-0 2xl:mt-0": {}
  },
  figcaption: {
    "@apply leading-normal mt-3 text-foreground-500 text-sm": {},
    "@apply dark:text-foreground-400": {},
    "@apply sm:leading-snug sm:mt-2.5 sm:text-xs": {},
    "@apply lg:leading-normal lg:mt-4 lg:text-sm": {},
    "@apply xl:leading-relaxed xl:mt-4 xl:text-sm": {},
    "@apply 2xl:leading-relaxed 2xl:mt-4 2xl:text-xs": {}
  },
  "picture > img": {
    "@apply mb-0 mt-0": {},
    "@apply sm:mb-0 sm:mt-0": {},
    "@apply lg:mb-0 lg:mt-0": {},
    "@apply xl:mb-0 xl:mt-0": {},
    "@apply 2xl:mb-0 2xl:mt-0": {}
  },
  li: {
    "@apply mb-2 mt-2": {},
    "@apply sm:mb-1 sm:mt-1": {},
    "@apply lg:mb-2.5 lg:mt-2.5": {},
    "@apply xl:mb-2 xl:mt-2": {},
    "@apply 2xl:mb-2 2xl:mt-2": {}
  },
  "ol > li": {
    "@apply pl-1.5": {},
    "@apply sm:pl-1.5": {},
    "@apply lg:pl-1.5": {},
    "@apply xl:pl-1.5": {},
    "@apply 2xl:pl-1.5": {}
  },
  "ul > li": {
    "@apply pl-1.5": {},
    "@apply sm:pl-1.5": {},
    "@apply lg:pl-1.5": {},
    "@apply xl:pl-1.5": {},
    "@apply 2xl:pl-1.5": {}
  },
  "> ul > li p": {
    "@apply mb-3 mt-3": {},
    "@apply sm:mb-2 sm:mt-2": {},
    "@apply lg:mb-3.5 lg:mt-3.5": {},
    "@apply xl:mb-3 xl:mt-3": {},
    "@apply 2xl:mb-3 2xl:mt-3": {}
  },
  "> ul > li > *:first-child": {
    "@apply mt-5": {},
    "@apply sm:mt-4": {},
    "@apply lg:mt-5": {},
    "@apply xl:mt-4": {},
    "@apply 2xl:mt-5": {}
  },
  "> ul > li > *:last-child": {
    "@apply mb-5": {},
    "@apply sm:mb-4": {},
    "@apply lg:mb-5": {},
    "@apply xl:mb-4": {},
    "@apply 2xl:mb-5": {}
  },
  "> ol > li > *:first-child": {
    "@apply mt-5": {},
    "@apply sm:mt-4": {},
    "@apply lg:mt-5": {},
    "@apply xl:mt-4": {},
    "@apply 2xl:mt-5": {}
  },
  "> ol > li > *:last-child": {
    "@apply mb-5": {},
    "@apply sm:mb-4": {},
    "@apply lg:mb-5": {},
    "@apply xl:mb-4": {},
    "@apply 2xl:mb-5": {}
  },
  "ul ul, ul ol, ol ul, ol ol": {
    "@apply mb-3 mt-3": {},
    "@apply sm:mb-2 sm:mt-2": {},
    "@apply lg:mb-3.5 lg:mt-3.5": {},
    "@apply xl:mb-3 xl:mt-3": {},
    "@apply 2xl:mb-2.5 2xl:mt-2.5": {}
  },
  dl: {
    "@apply mb-5 mt-5": {},
    "@apply sm:mb-4 sm:mt-4": {},
    "@apply lg:mb-5 lg:mt-5": {},
    "@apply xl:mb-4 xl:mt-4": {},
    "@apply 2xl:mb-5 2xl:mt-5": {}
  },
  dd: {
    "@apply mt-2 pl-6": {},
    "@apply sm:mt-1 sm:pl-6": {},
    "@apply lg:mt-2.5 lg:pl-6": {},
    "@apply xl:mt-2 xl:pl-6": {},
    "@apply 2xl:mt-2 2xl:pl-6": {}
  },
  "hr + *": {
    "@apply mt-0": {},
    "@apply sm:mt-0": {},
    "@apply lg:mt-0": {},
    "@apply xl:mt-0": {},
    "@apply 2xl:mt-0": {}
  },
  "h2 + *": {
    "@apply mt-0": {},
    "@apply sm:mt-0": {},
    "@apply lg:mt-0": {},
    "@apply xl:mt-0": {},
    "@apply 2xl:mt-0": {}
  },
  "h3 + *": {
    "@apply mt-0": {},
    "@apply sm:mt-0": {},
    "@apply lg:mt-0": {},
    "@apply xl:mt-0": {},
    "@apply 2xl:mt-0": {}
  },
  "h4 + *": {
    "@apply mt-0": {},
    "@apply sm:mt-0": {},
    "@apply lg:mt-0": {},
    "@apply xl:mt-0": {},
    "@apply 2xl:mt-0": {}
  },
  "thead th:first-child": {
    "@apply pl-0": {},
    "@apply sm:pl-0": {},
    "@apply lg:pl-0": {},
    "@apply xl:pl-0": {},
    "@apply 2xl:pl-0": {}
  },
  "thead th:last-child": {
    "@apply pr-0": {},
    "@apply sm:pr-0": {},
    "@apply lg:pr-0": {},
    "@apply xl:pr-0": {},
    "@apply 2xl:pr-0": {}
  },
  "tbody td, tfoot td": {
    "@apply pb-2 pl-2 pr-2 pt-2": {},
    "@apply sm:pb-2.5 sm:pl-4 sm:pr-4 sm:pt-2.5": {},
    "@apply lg:pb-3 lg:pl-3 lg:pr-3 lg:pt-3": {},
    "@apply xl:pb-3.5 xl:pl-2.5 xl:pr-2.5 xl:pt-3.5": {},
    "@apply 2xl:pb-3 2xl:pl-2 2xl:pr-2 2xl:pt-3": {}
  },
  "tbody td:first-child, tfoot td:first-child": {
    "@apply pl-0": {},
    "@apply sm:pl-0": {},
    "@apply lg:pl-0": {},
    "@apply xl:pl-0": {},
    "@apply 2xl:pl-0": {}
  },
  "tbody td:last-child, tfoot td:last-child": {
    "@apply pr-0": {},
    "@apply sm:pr-0": {},
    "@apply lg:pr-0": {},
    "@apply xl:pr-0": {},
    "@apply 2xl:pr-0": {}
  },
  figure: {
    "@apply mb-8 mt-8": {},
    "@apply sm:mb-6 sm:mt-6": {},
    "@apply lg:mb-7 lg:mt-7": {},
    "@apply xl:mb-8 xl:mt-8": {},
    "@apply 2xl:mb-8 2xl:mt-8": {}
  }
};