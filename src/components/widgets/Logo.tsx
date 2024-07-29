import { siteMetadata } from "@/config/siteMetadata";

export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {}
export const Logo = ({ ...props }: LogoProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <svg
        version="1.1"
        id="Logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 187.496 187.496"
        {...props}
      >
        <g>
          <path d="M93.748,0C42.056,0,0,42.055,0,93.748s42.056,93.748,93.748,93.748s93.748-42.055,93.748-93.748S145.44,0,93.748,0z M93.748,173.496C49.774,173.496,14,137.721,14,93.748S49.774,14,93.748,14s79.748,35.775,79.748,79.748 S137.722,173.496,93.748,173.496z" />
          <path d="M102.028,54.809h-26.53c-3.866,0-7,3.134-7,7v31.939v31.939c0,3.866,3.134,7,7,7s7-3.134,7-7v-24.939h19.53 c12.666,0,22.97-10.304,22.97-22.97C124.998,65.113,114.694,54.809,102.028,54.809z M102.028,86.748h-19.53V68.809h19.53 c4.946,0,8.97,4.024,8.97,8.97S106.975,86.748,102.028,86.748z" />
        </g>
      </svg>
      <span className="text-xl font-bold">{siteMetadata.name}</span>
    </div>
  );
};
