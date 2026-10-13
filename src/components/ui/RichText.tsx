import { formatDescription } from '../../lib/textFormatter';

interface RichTextProps {
  content: string;
  className?: string;
}

const RichText = ({ content, className = '' }: RichTextProps) => {
  return (
    <div 
      className={`prose dark:prose-invert ${className}`}
      dangerouslySetInnerHTML={{ __html: formatDescription(content) }}
    />
  );
};

export default RichText;