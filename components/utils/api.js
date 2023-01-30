
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

export const ALL_POSTS_SLUG = `query GetPostSlug {
  posts(first: 200) {
    nodes {
      slug
    }
  }
}`

export const POST_CONTENT = `query getSinglePostContent($id:ID!) {
  post(id: $id, idType: SLUG) {
    content
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
      postFormats {
        nodes {
          name
        }
      }
    }
  }
}
`
export const ALL_HEADER_MENU = `query GetMenuList {
  menuItems(first: 14, where: {location: NAVIGATION}) {
    nodes {
      label
      path
      childItems {
        nodes {
          label
          path
        }
      }
    }
  }
}`


// <?php
// add_action( 'init', 'handle_preflight' );

// function handle_preflight() {
	
// 	$origin = get_http_origin();
//  	if ( $origin == 'http://localhost:8000' ||	$origin == 'http://localhost:3000' ||	$origin == 'https://drp-wp-rest-api.vercel.app/') {
// 		// You can set more specific domains if you need
//     	header("Access-Control-Allow-Origin: " . $origin);
// 		header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
// 		header("Access-Control-Allow-Credentials: true");
// 		header( 'Access-Control-Allow-Headers: Authorization' );

// 		if ( 'OPTIONS' == $_SERVER['REQUEST_METHOD'] ) {
// 			status_header(200);
// 			exit();
// 		}
// 	}
// }

// ?>