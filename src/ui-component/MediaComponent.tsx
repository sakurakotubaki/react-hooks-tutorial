import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  imagePosition: 'left' | 'right';
}

const MediaWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: ${props => props.imagePosition === 'left' ? 'row' : 'row-reverse'};

  @media (max-width: 768px) {
    display: block;
  }
`;

const ImageWrapper = styled.figure<WrapperProps>`
  flex: 0 1 27.58333%;
  margin-right: ${props => props.imagePosition === 'left' ? '3.33333%' : '0'};
  margin-left: ${props => props.imagePosition === 'right' ? '3.33333%' : '0'};

  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
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
  imagePosition: 'left' | 'right';
}

const MediaComponent: React.FC<MediaProps> = ({ imageSrc, imageAlt, title, content, imagePosition }) => {
  return (
    <MediaWrapper imagePosition={imagePosition}>
      <ImageWrapper imagePosition={imagePosition}>
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