import React from 'react';
import "./calender.css";
import moment from 'moment'
import { ChevronLeft, ChevronRight } from '../icons/Icons';

export default function Calender() {

    const [date, setDate] = React.useState(moment());
    const [allMonth, setAllMonth] = React.useState(moment.months());

    const firstDayOfMonth = () => {
        const dateObject = moment(date);
        const firstDay = moment(dateObject).startOf('month').format('d');
        return firstDay;
    }

    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<td className="calender-day-blank">{''}</td>);
    }

    const dayInMonth = [];
    for (let i = 1; i <= date.daysInMonth(); i++) {
        let currentDay = i == date.format('D') ? "today" : "";
        dayInMonth.push(<td key={i} className={`calender-day ${currentDay}`}>{i}</td>);
    }

    var totalSlots = [...blanks, ...dayInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });

    const DaysInMonth = () => {
        return rows.map((d, i) => {
            return <tr>{d}</tr>;
        })
    };

    const WeekdayShortName = () => {
        return moment.weekdaysShort().map((day, index) => {
            return <th key={index} className='week-day'>
                {day}
            </th>
        })
    }

    const month = () => {
        return date.format('MMMM');
    }

    const MonthList = props => {
        let months = [];
        props.data.map(data => {
            months.push(
                <td>
                    <span>{data}</span>
                </td>
            );
        });
    }

    const prevBtn = () => {
        let curr = "month"
        setDate(moment(date).subtract(1, curr));
    }

    const nextBtn = () => {
        let curr = "month"
        setDate(moment(date).add(1, curr));
    }


    return <section className='calender-sec'>
        <table>
            <thead>
                <tr>
                    <WeekdayShortName />
                </tr>
            </thead>
            <tbody>
                <DaysInMonth />
            </tbody>
        </table>
        <div className='calender-nav'>
            <span onClick={prevBtn} >
                <ChevronRight />
            </span>
            <p>{month()}</p>
            <span onClick={nextBtn}>
                <ChevronLeft />
            </span>
        </div>
    </section>
}

// TODO:
// 1. Add animation
// 2. Give proper spacing between the days
// 3. Give width and height to the calender