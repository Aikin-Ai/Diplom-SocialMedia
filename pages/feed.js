/* eslint-disable @next/next/no-img-element */
import Plyr from "plyr-react";
import { Card, CardContent, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export async function getServerSideProps(context) {
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
        }];

    return {
        props: {
            posts
        }
    }
}

export default function Feed({ posts }) {
    return (
        <div className="feed">
            <IconButton className="left__button" size="large">
                <ChevronLeftIcon fontSize="inherit"/>
            </IconButton>
            <IconButton className="right__button" size="large">
                <ChevronRightIcon fontSize="inherit"/>
            </IconButton>
            <Card className="post__card">
                <CardContent>
                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
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