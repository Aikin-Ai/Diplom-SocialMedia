import { IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Post from "./components/post";


export async function getServerSideProps(context) {

    const id = context.query.id;
    // array of posts
    const posts = [
        {
            id: 1,
            user: {
                name: "Bill Gates",
                avatar:
                    "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            },
            imageURLs: [
                {
                    original:
                        "https://picsum.photos/id/1018/1000/600/",
                },
                {
                    original:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
                },
                {
                    original:
                        "https://picsum.photos/id/1019/1000/600/",
                },
            ],
            description:
                "Тестовый текст",
            likes: 10,
            reposts: 5,
            comments: [
                {
                    id: 1,
                    user: {
                        name: "Bill Gates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                    },
                    text: "Тестовый комментарий",
                },
                {
                    id: 2,
                    user: {
                        name: "Gill Bates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
                    },
                    text: "Тестовый комментарий",
                },
                {
                    id: 3,
                    user: {
                        name: "Gill Bates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
                    },
                    text: "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.",
                },
                {
                    id: 4,
                    user: {
                        name: "Gill Bates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
                    },
                    text: "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.",
                }
            ],
        },
        {
            id: 2,
            user: {
                name: "Gill Bates",
                avatar:
                    "https://cdn-icons-png.flaticon.com/512/147/147142.png",
            },
            imageURLs: [
                {
                    original:
                        "https://cdn.pixabay.com/photo/2018/01/06/19/02/drop-3065629_960_720.jpg",
                },
                {
                    original:
                        "https://cdn.pixabay.com/photo/2021/10/07/14/15/ghost-6688754_960_720.jpg",
                },
            ],
            description:
                "Тестовый текст",
            likes: 15,
            reposts: 2,
        }];

    var post = posts.find(post => post.id == id);
    if (post === undefined) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post
        }
    }
}

export default function Feed({ post }) {
    return (
        <div className="feed">
            <IconButton className="left__button" size="large" onClick={changeId(-1, post.id)}>
                <ChevronLeftIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="right__button" size="large" onClick={changeId(1, post.id)}>
                <ChevronRightIcon fontSize="inherit" />
            </IconButton>
            {/* {posts.map(post => ( */}
            <Post key={post.id} post={post} />
            {/* // ))} */}
        </div>
    );
}

function changeId(inc, id) {
    id += inc;
    //push id to url
    return () => {
        window.location.href = `/feed?id=${id}`;
    }
}