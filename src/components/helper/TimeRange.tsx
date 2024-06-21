import { formatDate } from '../../utils/formatters.js';

const TimeRange = ({ startDate, endDate }: { startDate: string; endDate?: string }) => (
  <div class="font-bold font-mono opacity-75">
    <time datetime={startDate}>
      {formatDate(startDate)}
    </time>
    &nbsp;–&nbsp;
    <time datetime={endDate ?? new Date().toISOString()}>
      {endDate ? formatDate(endDate) : 'Present'}
    </time>
  </div>
);

export default TimeRange;
