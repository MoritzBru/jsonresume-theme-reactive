import { formatDate } from '../../utils/formatters.js';
import { i18n } from '../Theme';

const TimeRange = ({ startDate, endDate }: { startDate: string; endDate?: string }) => (
  <div class="time">
    <time datetime={startDate}>
      {formatDate(startDate)}
    </time>
    &nbsp;–&nbsp;
    <time datetime={endDate ?? new Date().toISOString()}>
      {endDate ? formatDate(endDate) : i18n['timeRange.openEnd']}
    </time>
  </div>
);

export default TimeRange;
