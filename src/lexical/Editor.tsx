import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { HeadingNode, $createHeadingNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { $getSelection, $isRangeSelection } from 'lexical';

// スタイル定義
const EditorContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  font-family: 'Comic Sans MS', cursive;
  background-color: #ffd700;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const EditorInner = styled.div`
  background: #fff;
  border: 3px dashed #ff69b4;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const blinkingEffect = keyframes`
  0% {
    box-shadow: 0 0 10px #ff69b4;
  }
  50% {
    box-shadow: 0 0 20px #ff69b4;
  }
  100% {
    box-shadow: 0 0 10px #ff69b4;
  }
`;

const StyledContentEditable = styled(ContentEditable)`
  height: 300px;
  padding: 10px;
  overflow-y: auto;
  font-size: 16px;
  color: #333;
  &:focus {
    outline: none;
    animation: ${blinkingEffect} 1s infinite;
  }
`;

const StyledPlaceholder = styled.div`
  color: #999;
  overflow: hidden;
  position: absolute;
  top: 15px;
  left: 10px;
  user-select: none;
  pointer-events: none;
  font-style: italic;
`;

const ToolbarContainer = styled.div`
  display: flex;
  padding: 10px;
  background: linear-gradient(45deg, #1e90ff, #00bfff);
  border-radius: 10px 10px 0 0;
`;

const ToolbarButton = styled.button`
  margin-right: 5px;
  padding: 8px 12px;
  background: #ffd700;
  border: 2px solid #ff69b4;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  color: #ff1493;
  transition: all 0.3s ease;

  &:hover {
    background: #ff69b4;
    color: #ffd700;
    transform: scale(1.1) rotate(5deg);
  }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #ff1493;
  color: white;
  border: none;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;

  &:hover {
    background: #ff69b4;
    transform: scale(1.05);
  }
`;

// テーマの定義（変更なし）
const exampleTheme = {
  // ... (前回と同じ定義)
};

// ツールバーコンポーネント
const Toolbar = () => {
  const [editor] = useLexicalComposerContext();

  type TextFormatType = 'bold' | 'italic' | 'underline' | 'strikethrough';
  
  const formatText = (style: TextFormatType) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        selection.formatText(style);
      }
    });
  };

  const formatHeading = (level: 1 | 2 | 3 | 4 | 5) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(`h${level}`));
      }
    });
  };

  return (
    <ToolbarContainer>
      <ToolbarButton onClick={() => formatText('bold')}>B</ToolbarButton>
      <ToolbarButton onClick={() => formatText('italic')}>I</ToolbarButton>
      <ToolbarButton onClick={() => formatText('underline')}>U</ToolbarButton>
      <ToolbarButton onClick={() => formatHeading(1)}>H1</ToolbarButton>
      <ToolbarButton onClick={() => formatHeading(2)}>H2</ToolbarButton>
      <ToolbarButton onClick={() => formatHeading(3)}>H3</ToolbarButton>
    </ToolbarContainer>
  );
};

// 保存ボタンコンポーネント
const SaveButtonComponent = ({ onSave }: { onSave: (content: string) => void }) => {
  const [editor] = useLexicalComposerContext();

  const handleSave = () => {
    const editorState = editor.getEditorState();
    const json = editorState.toJSON();
    onSave(JSON.stringify(json));
  };

  return <SaveButton onClick={handleSave}>Save Content</SaveButton>;
};

// エディターコンポーネント
function Editor() {
  const [savedContent, setSavedContent] = useState<string[]>([]);

  const initialConfig = {
    namespace: 'MyEditor',
    theme: exampleTheme,
    onError: (error: Error) => console.error(error),
    nodes: [HeadingNode],
  };

  const saveContent = (content: string) => {
    const updatedContent = [...savedContent, content];
    setSavedContent(updatedContent);
    localStorage.setItem('savedContent', JSON.stringify(updatedContent));
  };

  const deleteContent = (index: number) => {
    const updatedContent = savedContent.filter((_, i) => i !== index);
    setSavedContent(updatedContent);
    localStorage.setItem('savedContent', JSON.stringify(updatedContent));
  };

  useEffect(() => {
    const storedContent = localStorage.getItem('savedContent');
    if (storedContent) {
      setSavedContent(JSON.parse(storedContent));
    }
  }, []);

  return (
    <EditorContainer>
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <EditorInner>
          <RichTextPlugin
            contentEditable={<StyledContentEditable className="content-editable" />}
            placeholder={<StyledPlaceholder>Enter some funky text...</StyledPlaceholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </EditorInner>
        <SaveButtonComponent onSave={saveContent} />
      </LexicalComposer>
      <div className="saved-content">
        <h3>Saved Content:</h3>
        {savedContent.map((content, index) => (
          <div key={index} className="saved-item">
            <div>{JSON.parse(content).root.children[0].children[0].text}</div>
            <button onClick={() => deleteContent(index)}>Delete</button>
          </div>
        ))}
      </div>
    </EditorContainer>
  );
}

export default Editor;