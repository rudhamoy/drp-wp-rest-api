
export const ALL_STORIES = `query GETALLWEBSTORIES {
    webStories(first: 12) {
      nodes {
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
            altText
            description
          }
        }
        date
      }
    }
  }`

export const POSTS_BY_DATE = `query GetPostByDate($year: Int!, $month: Int!, $day: Int!) {
  posts(where: {dateQuery: {year: $year, month: $month, day: $day}}) {
    edges {
      node {
        date
        excerpt
        featuredImage {
          node {
            mediaDetails {
              sizes {
                sourceUrl
              }
            }
          }
        }
        slug
        title
      }
    }
  }
}
`
  