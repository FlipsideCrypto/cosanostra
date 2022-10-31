import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { cosanostra } from "./PaperCodeTheme";

const PaperCode = (props) => {
    const { className, children } = props;

    return (
        <>
            {className ? 
                <SyntaxHighlighter
                    language={className.replace('lang-', '')}
                    style={cosanostra}>
                    {children}
                </SyntaxHighlighter> :
                <code>{children}</code>
            }
        </>
    )
}

export default PaperCode;