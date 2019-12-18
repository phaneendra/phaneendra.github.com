import * as React from "react";
import Link from "@components/Link";
import _ from "lodash";
import Img from "gatsby-image";
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
  PostTags,
  PostDateAndPreview,
  ReadMore
} from "./postCardMinimal.style";

interface PostCardMinimalProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  date?: string;
  tags?: [];
  className?: string;
  imageType?: "fixed" | "fluid";
}

const PostCardMinimal: React.FunctionComponent<PostCardMinimalProps> = ({
  image,
  title,
  description,
  url,
  date,
  tags,
  className,
  imageType,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["post_card"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper className={addAllClasses.join(" ")} {...props}>
      <PostDetails className="post_details">
        <PostDateAndPreview>
          {date && (
            <PostDate
              dangerouslySetInnerHTML={{
                __html: date
              }}
              className="post_date"
            />
          )}
          {image == null ? null : (
            <PostPreview className="post_preview">
              <Link href={url}>
                {imageType === "fluid" ? (
                  <Img fluid={image} alt="post preview" />
                ) : (
                  <Img fixed={image} alt="post preview" />
                )}
              </Link>
            </PostPreview>
          )}
        </PostDateAndPreview>

        <PostContent className="post_content">
          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <Link key={index} href={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
          <PostTitle className="post_title">
            <Link href={url}>{title}</Link>
          </PostTitle>
          {description && (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: description
              }}
              className="excerpt"
            />
          )}
          <ReadMore>
            <Link href={url}>Read More</Link>
          </ReadMore>
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  );
};

PostCardMinimal.defaultProps = {
  imageType: "fluid"
};

export default PostCardMinimal;
