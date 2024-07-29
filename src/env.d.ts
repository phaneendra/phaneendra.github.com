/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "virtual:icons/*" {
  import type { SVGProps } from "react";
  import type React from "react";
  const component: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  export default component;
}
declare module "~icons/*" {
  const component: (
    props: astroHTML.JSX.SVGAttributes
  ) => astroHTML.JSX.Element;
  export default component;
}
