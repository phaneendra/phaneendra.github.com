import * as React from "react";
import Link from "@components/Link";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import {
  PaginationWrapper,
  PrevPage,
  NextPage,
  PageNumber
} from "./pagination.style";

type PaginationProps = {
  prevLink?: string | undefined | null | boolean;
  nextLink?: string | undefined | null | boolean;
  currentPage: string;
  totalPage: string;
  className?: string;
};

const Pagination: React.FunctionComponent<PaginationProps> = ({
  prevLink,
  nextLink,
  currentPage,
  totalPage,
  className,
  ...props
}) => {
  return (
    <PaginationWrapper {...props} className={className}>
      <PrevPage>
        {prevLink && (
          <Link href={`${prevLink}`} aria-label="Prev">
            <IoMdArrowRoundBack />
          </Link>
        )}
      </PrevPage>

      <PageNumber>{`Page ${currentPage} Of ${totalPage}`}</PageNumber>

      <NextPage>
        {nextLink && (
          <Link href={`${nextLink}`} aria-label="Next">
            <IoMdArrowRoundForward />
          </Link>
        )}
      </NextPage>
    </PaginationWrapper>
  );
};

export default Pagination;
