const RULES = {
    name: ['required', 'firstCharInUpperСase', { pattern: /^[^\d\W]+$/ }],
    surname: ['required', 'firstCharInUpperСase', { pattern: /^[^\d\W]+$/ }],
    date: ['required', { pattern: /^\d{4}-\d{2}-\d{2}$/ }],
    phone: ['required', { pattern: /^\d-\d{4}-\d{2}-\d{2}$/ }],
    site: [
        'required',
        { startWith: 'https://' },
        { pattern: /^https:\/\/(\w+\.)+\w+$/ }
    ],
    aboutMe: ['required', { maxLength: 600 }],
    stack: ['required', { maxLength: 600 }],
    description: ['required', { maxLength: 600 }]
}

export default RULES