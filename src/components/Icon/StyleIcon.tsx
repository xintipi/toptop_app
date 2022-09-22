import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Icon = ({
  className,
  path,
  children,
}: {
  className?: string;
  path?: string;
  children: any;
}) => {
  const navigate = useNavigate();
  return path ? (
    <a onClick={() => (path ? navigate(path) : false)}>
      <span className={className}>{children}</span>
    </a>
  ) : (
    <span className={className}>{children}</span>
  );
};

const StyledIcon = styled(Icon)`
  & svg {
    display: block;
    width: 26px;
    height: 26px;
    transform: none;
  }
`;

const StyledInboxIcon = styled(Icon)`
  & svg {
    cursor: pointer;
    display: block;
  }
`;

export { StyledIcon, StyledInboxIcon };
