import { useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hook/use-actions';
import { useTypedSelector } from '../hook/use-typed-selector';

/**
 * Debouncing: update state -> 1second passes without any updates to 'input' state then run the bundling logic
 */

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      createBundle(cell.id, cell.content);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [createBundle, cell.content, cell.id]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: 'calc(100% - 10px)', display: 'flex' }}>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {bundle && <Preview code={bundle.code} error={bundle.error} />}
      </div>
    </Resizable>
  );
};

export default CodeCell;
