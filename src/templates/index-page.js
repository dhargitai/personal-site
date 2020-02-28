import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import github from '../img/social/github.svg'
import linkedin from "../img/social/linkedin.svg";
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

import { rhythm } from '../utils/typography'

export const IndexPageTemplate = ({
         image,
         title,
         heading,
         headshot,
         subheading,
         mainpitch,
         description,
         intro
       }) => (
         <div>
           <section
             className="section has-text-centered"
             style={{
               backgroundColor: "rgb(232, 237, 240)",
               margin: `${rhythm(3)} auto`,
               maxWidth: "700px"
             }}
           >
             <Img className="headshot" fixed={headshot} alt="" />
             <h1>David Hargitai</h1>
             <h2>Front-End Engineer</h2>

             <a
               title="GitHub"
               href="https://github.com/dhargitai"
             >
               <img
                 src={github}
                 alt="GitHub"
                 style={{
                   width: rhythm(2),
                   height: rhythm(2),
                   margin: `${rhythm(1 / 2)} ${rhythm(1 / 4)}`
                 }}
               />
             </a>
             <a title="LinkedIn" href="https://www.linkedin.com/in/hargitai">
               <img
                 src={linkedin}
                 alt="LinkedIn"
                 style={{
                   width: rhythm(2),
                   height: rhythm(2),
                   margin: `${rhythm(1 / 2)} ${rhythm(1 / 4)}`
                 }}
               />
             </a>
           </section>

           {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
         </div>
       );

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        headshot={data.file.childImageSharp.fixed}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
         query IndexPageTemplate {
           markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
             frontmatter {
               title
               image {
                 childImageSharp {
                   fluid(maxWidth: 2048, quality: 100) {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
               heading
               subheading
               mainpitch {
                 title
                 description
               }
               description
               intro {
                 blurbs {
                   image {
                     childImageSharp {
                       fluid(maxWidth: 240, quality: 64) {
                         ...GatsbyImageSharpFluid
                       }
                     }
                   }
                   text
                 }
                 heading
                 description
               }
             }
           }
           file(relativePath: { eq: "david-hargitai-front-end-engineer.png" }) {
             childImageSharp {
               fixed(width: 200, height: 200) {
                 ...GatsbyImageSharpFixed
               }
             }
           }
         }
       `;
