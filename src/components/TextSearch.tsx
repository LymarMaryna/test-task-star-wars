import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

interface TextSearchProps extends PropsWithChildren<HTMLAttributes<HTMLInputElement>> {
  value: string;
}

const TextSearch: FunctionComponent<TextSearchProps> = ({ value, ...restOfProps }) => {
  return <input value={value} {...restOfProps} />;
};

export default TextSearch;
