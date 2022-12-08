import SingleNewsContainer from "../../../components/news/SingleNewsContainer";

const index = ({singleData}) => {
  return (
    <div>
        <SingleNewsContainer singleData={singleData} />
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
    const { id } = context.params;
    const getPost = await fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&slug=${id}`)
  
    const singleData = await getPost.json()
  
    return {
        props: {
            singleData
        }
      }
    
  }