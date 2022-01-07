import React, { useEffect, useState } from 'react';

function LikesDislikes({ movie }) {

    const [toggleLike, setToggleLike] = useState(false);
    const [toggleDisLike, setToggleDisLike] = useState(false);
    const [likes, setLikes] = useState(movie.likes);
    const [dislikes, setDislikes] = useState(movie.dislikes);
    const [counter, setCounter] = useState(0);

    //cette methode c'est pour incrementer likes et dislikes
    const toggleLikeHandler = () => {
        if (counter === 1) {
            setLikes((like) => like + 1);
            setDislikes((dislike) => dislike - 1);
        } else {
            setLikes((like) => like + 1);
        }
        setCounter(1);
        setToggleLike(!toggleLike);
        setToggleDisLike(false);
    };

    //cette  methode c'est pour incrementer dislike si counter egale 1 c-a-d le bouton est déjà cliquer else
    const toggleDislikeHandler = () => {
        if (counter === 1) {
            setDislikes((dislike) => dislike + 1);
            console.log(setLikes((like) => like - 1));

        } else {
            setDislikes((dislike) => dislike + 1);
        }
        setCounter(1);
        setToggleDisLike(!toggleDisLike);
        setToggleLike(false);
    };

    useEffect(() => { }, [toggleLike, toggleDisLike, counter]);
    return (
        <div className="movie_like_dislike">
            <span> <button onClick={toggleLikeHandler}  disabled={toggleLike} > <i class="fas fa-thumbs-up" /> </button> {likes} </span>
            <span> <button onClick={toggleDislikeHandler}  disabled={toggleDisLike}><i class="fas fa-thumbs-down"  /> </button>{dislikes}  </span>
        </div>
    );
}

export default LikesDislikes;