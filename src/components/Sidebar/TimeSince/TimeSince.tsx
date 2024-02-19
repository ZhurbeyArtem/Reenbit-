import { useEffect, useState } from 'react';
import type { Moment } from 'moment';
import moment from 'moment';

interface TimeReportProps {
  fromDate: string;
}
const TimeSince: React.FC<TimeReportProps> = ({ fromDate }) => {
  const [currentTime, setCurrentTime] = useState<Moment>(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startDate: Moment = moment(fromDate);
  const diff = moment.duration(startDate.diff(currentTime));
  const formattedDiff: string = `${diff.days()} days, ${diff.hours()} hours, ${diff.minutes()} minutes, ${diff.seconds()} seconds`;

  return (
    <p>{formattedDiff}</p>
  );
}

export default TimeSince;
