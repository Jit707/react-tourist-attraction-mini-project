import axios from "axios"

const main = async() => {
    const post = await axios.get("http://localhost:4001/trips?keywords=")
    console.log(post.data.data[0].title);
    
}

main()