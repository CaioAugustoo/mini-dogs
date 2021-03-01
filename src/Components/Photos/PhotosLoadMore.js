import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../../store/photos";

import * as S from "./styles";
import Loading from "../Helper/Loading";

const PhotosLoadMore = () => {
  const { pages, infinite, loading } = useSelector(state => state.photos);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(loadNewPhotos(pages + 1));
  }

  if (loading) return <Loading />;
  if (!infinite) return null;
  return <S.Button onClick={handleClick}>+</S.Button>;
};

export default PhotosLoadMore;
