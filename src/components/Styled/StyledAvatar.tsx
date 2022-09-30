import styled from 'styled-components';

interface AvatarRecord {
  className?: string;
  width?: string;
  height?: string;
  src: string;
  alt: string;
}

const AvatarComp = ({ className, width, height, src, alt }: AvatarRecord) => {
  return (
    <span className={className} style={{ width, height }}>
      <img src={src} alt={alt} loading="lazy" />
    </span>
  );
};

const Avatar = styled(AvatarComp)`
  display: inline-block;
  margin: 0 12px 0 0;
  padding: 0;
  font-feature-settings: 'tnum';
  position: relative;
  overflow: hidden;
  color: rgb(var(--primaryBackground));
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  line-height: 32px;
  border-radius: 50%;
  background-color: rgba(var(--greyBackground), 0.5);

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { Avatar };
