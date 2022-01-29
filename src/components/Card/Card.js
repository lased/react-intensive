import { memo } from 'react'

import { Field } from './components'

import './Card.css'

const getNormalDate = (date) => date.split('-').reverse().join('.')

const Card = ({ header, data }) => {
    return (
        <div className='Card'>
            <header className='Card-header'>{header}</header>
            <Field label='Фамилия:' value={data.surname} />
            <Field label='Имя:' value={data.name} />
            <Field label='Дата рождения:' value={getNormalDate(data.date)} />
            <Field label='Телефон:' value={data.phone} />
            <Field label='Сайт:'>
                <a href={data.site} target='_blank'>{data.site}</a>
            </Field>
            <Field label='О себе:' value={data.aboutMe} />
            <Field label='Стек технологий:' value={data.stack} />
            <Field label='Описание последнего проекта:' value={data.description} />
        </div>
    )
}

export default memo(Card)
