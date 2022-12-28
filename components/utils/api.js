
export const ALL_STORIES = `query GETALLWEBSTORIES {
    webStories(first: 10) {
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
      }
    }
  }`