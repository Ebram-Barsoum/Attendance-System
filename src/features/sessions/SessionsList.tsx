import { Session } from "../../lib/constants"
import Card from "../../ui/Card"

export const sessions: Session[] = [
    {
        id: '1',
        title: 'Session 1',
        userImage: '/public/user.jpeg',
        userName: 'Mai',
        individuals: 30,
        time: '22:32',
        date: new Date('02/23/2024'),
        status: 'done'
    },
    {
        id: '2',
        title: 'Session 2',
        userImage: '/public/user.jpeg',
        userName: 'Ali',
        individuals: 25,
        time: '3:25',
        date: new Date('08/25/2024'),
        status: 'running'
    },
    {
        id: '3',
        title: 'Session 3',
        userImage: '/public/user.jpeg',
        userName: 'Jessy',
        individuals: 25,
        time: '3:25',
        date: new Date('08/25/2024'),
        status: 'scheduled'
    }
]

export default function SessionsList() {
    return (
        <ul className="flex flex-col gap-4 ">
            {sessions.map((session) => <Card key={session.time} cardName="Session" {...session} />)}
            {sessions.map((session) => <Card key={session.time} cardName="Session" {...session} />)}
        </ul>
    )
}
