import React from "react"
import Layout from "../src/components/layout"
import SEO from "../src/components/seo"
import About from "../src/containers/About"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />

      <About />
    </Layout>
  )
}

export default AboutPage
