import { Session } from "../../lib/constants"
import Card from "../../ui/Card"

const sequences: Session[] = [
    {
        index: 1,
        userImage: '/public/user.jpeg',
        userName: 'Mai',
        individuals: 30,
        time: '22:32',
        date: new Date('02/23/2024')
    },
    {
        index: 2,
        userImage: '/public/user.jpeg',
        userName: 'Ali',
        individuals: 25,
        time: '3:25',
        date: new Date('08/25/2024')
    }
]

export default function SequenceList() {
    return (
        <ul className="flex flex-col gap-4 ">
            {sequences.map((sequence) => <Card key={sequence.time} cardName="Sequence" {...sequence} />)}
            {sequences.map((sequence) => <Card key={sequence.time} cardName="Sequence" {...sequence} />)}
            {sequences.map((sequence) => <Card key={sequence.time} cardName="Sequence" {...sequence} />)}
            {sequences.map((sequence) => <Card key={sequence.time} cardName="Sequence" {...sequence} />)}
            {sequences.map((sequence) => <Card key={sequence.time} cardName="Sequence" {...sequence} />)}
        </ul>
    )
}
