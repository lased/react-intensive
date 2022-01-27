import { PureComponent } from 'react'

import { Field } from './components'

import './Card.css'

class Card extends PureComponent {
    render() {
        const { header, data } = this.props

        return (
            <div className='Card'>
                <header className='Card-header'>{header}</header>
                <Field label='Фамилия:' value={data.surname} />
                <Field label='Имя:' value={data.name} />
                <Field label='Дата рождения:' value={data.date} />
                <Field label='Телефон:' value={data.phone} />
                <Field label='Сайт:' value={data.site} />
                <Field label='О себе:' value={data.aboutMe} />
                <Field label='Стек технологий:' value={data.stack} />
                <Field label='Описание последнего проекта:' value={data.description} />
            </div>
        )
    }
}

export default Card
