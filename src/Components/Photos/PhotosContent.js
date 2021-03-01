import React from "react";

import { useSelector } from "react-redux";

import * as S from "./styles";

const PhotosContent = () => {
  const { list } = useSelector(state => state.photos);

  return (
    <S.List>
      {list.map(photo => (
        <S.Item key={photo.id} className="anime">
          <S.Img src={photo.src} alt={photo.title} />
          <S.Title>{photo.title}</S.Title>
          <S.Views>{photo.acessos}</S.Views>
        </S.Item>
      ))}
    </S.List>
  );
};

export default PhotosContent;
