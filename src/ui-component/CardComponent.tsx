import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  max-width: 400px;
  margin: 0 auto;
`;

const ImageWrapper = styled.figure`
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
`;

const CardBody = styled.div`
  padding: 15px;

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 5px;
`;

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string;
}

const CardComponent: React.FC<CardProps> = ({ imageSrc, imageAlt, title, content }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={imageSrc} alt={imageAlt} />
      </ImageWrapper>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <p className="card__txt">{content}</p>
      </CardBody>
    </CardWrapper>
  );
};

export default CardComponent;