import { Bars } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <Bars
        height={100}
        width={100}
        color="#333333"
        ariaLabel="Loading indicator"
      />
    </LoaderWrapper>
  );
}
