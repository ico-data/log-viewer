import * as React from 'react';
import * as S from './style';
import * as I from './interface';
import { useVirtualizer } from '@tanstack/react-virtual';
import RowItem from './components/row-item';
import { useTheme } from '@/log-viewer/theme-provider';

export const defaultViewerConfig = {
  width: '100%',
  logData: [],
  height: 600,
  rowHeight: 60
}


/**
 * 日志展示组件
 * 
 * log display component 
 */
const Viewer: React.FC<I.ViewerProps> = function (props) {

  const { logData, width, height, rowHeight } = props;

  const { mode } = useTheme();

  const parentRef = React.useRef<any>()

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: logData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight || defaultViewerConfig.rowHeight,
  })

  return (
    <S.Viewer>
      <div
        ref={parentRef}
        style={{
          height: height,
          overflow: 'auto',
        }}
      >
        {/* The large inner element to hold all of the items */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: width,
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem: any) => {
            return (
              <div
                key={virtualItem.key}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <RowItem key={virtualItem.key} rowData={logData[virtualItem.index]} />
              </div>
            );
          })}
        </div>
      </div>
    </S.Viewer>
  );
};

Viewer.defaultProps = {
  ...defaultViewerConfig
}

export default Viewer;