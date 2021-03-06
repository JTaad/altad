import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import SE0 from '../components/SEO'

const ArticlePage = ({data}) => {
  const {markdownRemark: post} = data
  return (
    <section className='section'>
      <SE0
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        meta_desc={post.frontmatter.meta_description}
        cover={post.frontmatter.cover}
        slug={post.fields.slug}
      />
      <section className='section' >
        <div className="container">
          <div className="columns">
            <ArticleTemplate
              content={post.html}
              contentComponent={HTMLContent}
              cover={post.frontmatter.cover}
              meta_title={post.frontmatter.meta_title}
              meta_desc={post.frontmatter.meta_description}
              title={post.frontmatter.title}
            />
          </div>
        </div>
      </section>
    </section>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        meta_title
        meta_description
      }
    }
  }
`
