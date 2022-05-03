/* eslint-disable @next/next/no-img-element */
import Plyr from "plyr-react";
import { Card, CardContent, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
                "Lorem ipsum dolor sit amet, consect",
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
                "Lorem ipsum dolor sit amet, consect",
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
            <Card className="post__card">
                <CardContent>
                    {/* {posts.map(post => ( */}
                    <Post key={post.id} post={post} />
                    {/* // ))} */}
                </CardContent>
            </Card>
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

function Post({ post }) {
    return (
        <div className="post">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {post.imageURLs.map(imageURL => (
                    <SwiperSlide key={imageURL.original}><img src={imageURL.original} alt='image'></img></SwiperSlide>
                ))};
            </Swiper>
            <div className="post__content">
                <img
                    src={post.user.avatar}
                    alt="avatar"
                    width={48}
                    height={48}
                    className="user__avatar"
                />
                <p className="user__name">{post.user.name}</p>
                <p className="post__description">{post.description}</p>
            </div>
        </div>
    );
}