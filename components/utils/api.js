
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