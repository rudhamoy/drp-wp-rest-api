
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

  export const STORY_BY_SLUG = `query GETWEBSTORYBYSLUG($id: ID!) {
    webStory(id: $id, idType: SLUG) {
      content
    }
  }`

export const ALL_POSTS_FOR_DATE = `query GETALLPOSTSFORDATE {
  posts(first: 200) {
    nodes {
      slug
    }
  }
}`

export const POSTS_BY_DATE = `query GetPostByDate($year: Int!, $month: Int!, $day: Int!) {
  posts(where: {dateQuery: {year: $year, month: $month, day: $day}}) {
    nodes {
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
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
}
`
  