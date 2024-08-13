import React from 'react';
import styled from 'styled-components';

const MediaWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ImageWrapper = styled.figure`
  flex: 0 1 27.58333%;
  margin-right: 3.33333%;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Body = styled.div`
  flex: 1;

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 1.125rem;
  font-weight: bold;
`;

interface MediaProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string;
}

const MediaComponent: React.FC<MediaProps> = ({ imageSrc, imageAlt, title, content }) => {
  return (
    <MediaWrapper>
      <ImageWrapper>
        <Image src={imageSrc} alt={imageAlt} />
      </ImageWrapper>
      <Body>
        <Title>{title}</Title>
        <p>{content}</p>
      </Body>
    </MediaWrapper>
  );
};

export default MediaComponent;